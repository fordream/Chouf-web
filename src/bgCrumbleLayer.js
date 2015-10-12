var bgCrumbleLayer = cc.Layer.extend({
    sprite: null,

    ctor:function () {
        this._super();
        this.init();
    },

    init:function () {
        this._super();

        var winSize = cc.winSize;

        this.sprite = new cc.Sprite(res.cocos_jpg);
        this.sprite.attr({
            x: winSize.width / 2,
            y: winSize.height / 2,
            scale: 1
        });
        this.addChild(this.sprite);
      }
});
