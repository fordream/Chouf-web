//AppScene
var HomeScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        this.addChild(new backgroundLayer());
        this.addChild(new assetsLayer());
        this.addChild(new menuLayer());
    }
});
