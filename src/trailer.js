//AppScene
var TrailerScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        this.addChild(new bgCrumbleLayer());
        this.addChild(new videoLayer());
        this.addChild(new menuLayer());
    }
});
