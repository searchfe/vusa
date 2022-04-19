const {getAtomRenders} = require('../../common/index');
const path = require('path');

const entries = [
    // {name: 'atom2san current', path: './atom/app.atom'},
    {name: 'atom2san (item as component) current', path: './atom/app2.atom'},
];
const components = ['./atom/item.atom'];

module.exports = {
    getRenders: () => getAtomRenders(
        entries,
        components,
        __dirname,
        path.resolve(__dirname, '../../../../packages/runtime'),
        path.resolve(__dirname, './atom-older-version/dist')
    ),
};