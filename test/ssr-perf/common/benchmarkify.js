const Benchmarkify = require('benchmarkify');

let benchmark;
function createBenchmarkify() {
    if (benchmark) {
        return benchmark;
    }

    benchmark = new Benchmarkify('Atom-SSR benchmark').printHeader();
    return benchmark;
}

let suiteNumber = 0;
function createSuite(name) {
    const benchmark = createBenchmarkify();
    const bench = benchmark.createSuite(name, {time: 100, minSamples: 100});
    suiteNumber++;
    return bench;
}

const suiteStack = [];
let running = false;
async function runSuite(suite) {
    if (running || suiteStack.length >= suiteNumber) {
        throw Error('too many suites');
    }

    const p = new Promise((resolve, reject) => {
        suiteStack.push({
            suite,
            resolve,
        });
    });

    if (suiteStack.length === suiteNumber) {
        running = true;
        for (const s of suiteStack) {
            await s.suite.run();
            s.resolve();
        }
    }

    return p;
}

module.exports = {
    createSuite,
    runSuite,
};
