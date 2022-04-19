const {compileToRenderer} = require('san-ssr');
const fs = require('fs').promises;
const path = require('path');
const {compile} = require('./compileAtomToSan');
const {SanProject} = require('san-ssr');
const project = new SanProject(null);

async function compileAtomComponentToSanComponent(componentPath, baseName, runtimePath, isEntry) {
    const p = path.resolve(baseName, componentPath);
    const file = await fs.readFile(p, 'utf-8');
    const res = compile(file, {});

    const sanComponentPath = path.resolve(
        baseName,
        componentPath
            .replace('atom/', 'atom/dist/')
            .replace('atom-older-version/', 'atom-older-version/dist/')
            .replace('.atom', '.san.js')
    );
    await fs.writeFile(sanComponentPath, res.code);

    if (!isEntry) {
        return;
    }

    const component = require(sanComponentPath);
    const Component = require(runtimePath).defineComponent(component);
    let result = project.compileToSource(Component, 'js', {
        bareFunction: true,
        useProvidedComponentClass: true,
    });
    result = `${result}
        const {defineComponent} = require('${runtimePath}');
        const componentProps = require('${sanComponentPath}');
        const Component = defineComponent(componentProps);
        delete Component.prototype._cmptReady;

        function makeRender (data, info = {}) {
            info.ComponentClass = Component;
            return render(data, info);
        }
        const props = componentProps.props || [];
        module.exports = makeRender;
        module.exports.props = Array.isArray(props) ? props : Object.keys(props);`;
    const renderPath = path.resolve(
        baseName,
        componentPath
            .replace('atom/', 'atom/dist/')
            .replace('atom-older-version/', 'atom-older-version/dist/')
            .replace('.atom', '.js'));
    await fs.writeFile(renderPath, result);
    return require(renderPath);
}

/**
 * 编译产物会放在 baseName/dist 下
 */
async function getAtomRenders(entries, components = [], baseName, runtimePath, distPath) {
    await fs.rm(distPath, {force: true, recursive: true});
    await fs.mkdir(distPath, {recursive: true});

    const renders = [];
    for (const component of components) {
        await compileAtomComponentToSanComponent(component, baseName, runtimePath, false);
    }

    for (const entry of entries) {
        const render = await compileAtomComponentToSanComponent(entry.path, baseName, runtimePath, true);

        renders.push({
            render,
            name: entry.name,
        });
    }

    return renders;
}

async function getSanRenders(entries) {
    const renders = [];
    for (const entry of entries) {
        const render = compileToRenderer(entry.component);

        renders.push({
            render,
            name: entry.name,
        });
    }

    return renders;
}


module.exports = {
    getSanRenders,
    getAtomRenders,
};
