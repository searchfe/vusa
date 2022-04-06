const {createSuite, runSuite} = require('./common/benchmarkify');
const {getRenders: getAtom2SanRenders} = require('./sample/simple-list/atom');
const {getRenders: getAtom2SanOlderRenders} = require('./sample/simple-list/atom-older-version');
const {getRenders: getSanRenders} = require('./sample/simple-list/san');

const bench = createSuite('Simple List SSR Perf (10000 items x 100 times)');

(async () => {
    const data = {items: []};
    for (let i = 0; i < 10000; i++) {
        data.items.push(i);
    }
    const sanRenders = await getSanRenders();
    // const sanRenders = [];
    const atomRenders = await getAtom2SanRenders();
    // const atomRenders = [];
    const atomOlderRenders = await getAtom2SanOlderRenders();
    // const atomOlderRenders = [];

    for (const render of [...sanRenders, ...atomRenders, ...atomOlderRenders]) {
        bench.add(render.name, () => {
            render.render(Object.assign({}, data));
        });
    }

    await runSuite(bench);
})();

