/**
 * @file 与旧版本 vusa 的对比
 */

const {getAtomRenders} = require('../../common/index');
const Atom2SanVersion = 'v1.0.1-alpha.42';
const path = require('path');


const entries = [
    // {name: `atom2san ${Atom2SanVersion}`, path: './atom-older-version/app.atom'},
    {name: `atom2san(item as component) ${Atom2SanVersion}`, path: './atom-older-version/app2.atom'},
];
const components = ['./atom-older-version/item.atom'];

module.exports = {
    getRenders: () => getAtomRenders(
        entries,
        components,
        __dirname,
        require.resolve(`@vusa/runtime~${Atom2SanVersion}`),
        path.resolve(__dirname, './atom-older-version/dist')
    ),
};