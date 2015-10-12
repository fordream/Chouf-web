var charsBG = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },

    init:function () {
        this._super();

        cc.spriteFrameCache.addSpriteFrames( "background.plist" );
        this.addChild(new cc.Sprite("BG-10-00.png"));
    }
});

//AppScene
var CharactersScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        this.addChild(new charsBG());
        this.addChild(new menuLayer());
    }
});
