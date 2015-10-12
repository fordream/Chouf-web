
var backgroundLayer = cc.Layer.extend({
    bgSheet:null,
    fallingSheet:null,

    bg01Action:null,
    fallingAction:null,

    bgSprite:null,
    fallingSprite:null,

    ctor:function () {
        this._super();
        this.init();
    },

    init:function () {
        this._super();
        var winSize = cc.winSize;

        // create sprite sheet
        cc.spriteFrameCache.addSpriteFrames(res.background_plist);
        this.bgSheet = new cc.SpriteBatchNode(res.background_jpg);
        this.addChild(this.bgSheet);

        // init runningAction
        var bg01AnimFrames = [];
        for (var i = 0; i < 12; i++) {
            var str = "BG-01-" + (i < 10 ? ("0" + i) : i) + ".jpg";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            bg01AnimFrames.push(frame);
        }

        var bg01Animation = new cc.Animation(bg01AnimFrames, 0.1);
        this.bg01Action = new cc.repeat(new cc.Animate(bg01Animation), 1);
        //this.bg01ActionReverse = this.bg01Action.reverse();
        this.bgSprite = new cc.Sprite("#BG-01-00.jpg");
        this.bgSprite.attr({
            x: winSize.width/2,
            y: winSize.height/2,
            anchorX: 0.5,
            anchorY: 0.5,
            scale: 1.02
        });


        // create sprite sheet
        cc.spriteFrameCache.addSpriteFrames(res.fallingLamp_plist);
        this.fallingSheet = new cc.SpriteBatchNode(res.fallingLamp_jpg);
        this.addChild(this.fallingSheet);

        // init runningAction
        var fallingAnimFrames = [];
        for (var i = 0; i < 25; i++) {
            var str = "fallingLamp_" + (i < 10 ? ("0" + i) : i) + ".jpg";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            fallingAnimFrames.push(frame);
        }

        var fallingAnimation = new cc.Animation(fallingAnimFrames, 0.1);
        this.fallingAction = new cc.repeat(new cc.Animate(fallingAnimation), 1);
        this.fallingSprite = new cc.Sprite("#fallingLamp_01.jpg");
        this.fallingSprite.attr({
            x: winSize.width/2,
            y: winSize.height/2,
            anchorX: 0.5,
            anchorY: 0.5,
            scale: 1.02
        });


        this.bgSheet.addChild(this.bgSprite);
        this.bgSprite.runAction(this.bg01Action);
        //var sequenceAction = new cc.Sequence(this.bg01Action, this.bg01ActionReverse);
        //this.bgSprite.runAction(sequenceAction);
    }
});
