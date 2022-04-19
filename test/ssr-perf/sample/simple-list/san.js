const san = require('san')
const {getSanRenders} = require('../../common/index');

const App = san.defineComponent({
    template: '<div id=\'app\'><ul><li s-for=\'item in items\'>{{item}}</li></ul></div>'
});

const Item = san.defineComponent({
    template: '<li>{{item}}</li>'
});
const App2 = san.defineComponent({
    components: {
        'x-item': Item
    },
    template: '<div id=\'app\'><ul><x-item s-for=\'item in items\' item="{{item}}"/></ul></div>'
});

const entries = [
    {name: 'san', component: App},
    {name: 'san(item as component)', component: App2}
];

module.exports = {
    getRenders: () => getSanRenders(entries)
};