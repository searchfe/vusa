const {getSanRenders} = require('../../common');
const {MyComponent: Plain} = require('./san/plain');
const {MyComponent: UseComponent} = require('./san/use-component');
const {MyComponent: Slot} = require('./san/slot');
const {MyComponent: ScopedSlot} = require('./san/scoped-slot');

const entries = [
    {name: 'san', component: Plain},
    {name: 'san(item as component)', component: UseComponent},
    {name: 'san(item as component, slot)', component: Slot},
    {name: 'san(item as component, scoped slot)', component: ScopedSlot}
];

module.exports = {
    getRenders: () => getSanRenders(entries)
};