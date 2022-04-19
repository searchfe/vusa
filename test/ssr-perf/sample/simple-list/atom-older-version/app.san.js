var obj = {
  props: ['items']
};obj.__santemplate = "<div id=\"app\"><ul><li s-for=\"item in _l(items)\">{{item}}</li></ul></div>";
var injectMethods = {};
obj.methods = obj.methods || {};
Object.assign(obj.methods, injectMethods);
var originCreated = obj.created;
obj.created = function () {var self = this;
this.$isServer = true;
this.$ssrContext = global.__SAN_SSR_CONTEXT__;
if (this.$ssrContext && this.$ssrContext.locals) {
    Object.keys(this.$ssrContext.locals).forEach(function (localKey) {
        self.data.set(localKey, self.$ssrContext.locals[localKey]);
    });
}

originCreated && originCreated.call(this);};
obj.__sanOptimizeSSR = true;
module.exports = obj;