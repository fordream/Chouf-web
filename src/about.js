//AppScene
var AboutScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        this.addChild(new backgroundLayer());
        this.addChild(new menuLayer());
    }
});
