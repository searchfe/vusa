const {getAtomRenders} = require('../../common/index');

const entries = [
    {name: 'atom', path: './atom/plain.atom'},
    {name: 'atom(item as component)', path: './atom/use-component.atom'},
    {name: 'atom(item as component, slot)', path: './atom/slot.atom'},
    {name: 'atom(item as component, scoped slot)', path: './atom/scoped-slot.atom'}
];
const components = [
    './atom/use-component-child.atom',
    './atom/slot-child.atom',
    './atom/scoped-slot-child.atom'
];

module.exports = {
    getRenders: () => getAtomRenders(entries, components, __dirname)
};