var assetsLayer = cc.Layer.extend({
    barrel:null,
    carpet:null,
    metalbar:null,
    plank:null,
    radio:null,
    rock_low:null,
    rock_up:null,
    squareplank:null,
    trans:null,
    windows:null,
    wood_belt:null,
    wood_frame:null,

    ctor:function () {
        this._super();
        this.init();
    },

    init:function () {
        this._super();
        var winSize = cc.winSize;

        //Assets layout
        var layoutSprite = new cc.Sprite( res.layout_png );
        layoutSprite.attr({
            x: winSize.width / 2,
            y: winSize.height / 2,
            opacity: 51
        });
        this.addChild(layoutSprite);

        // windows section
        var windowTrigger= new cc.MenuItemSprite(
            new cc.Sprite(res.windows_idl),
            new cc.Sprite(res.windows_idl),
            this.windowsClick, this);
        this.windows = new cc.Menu(windowTrigger);
        this.windows.setPosition(
            winSize.width / 2,
            winSize.height / 2
        );
        this.addChild(this.windows);

        // plank section
        var plankTrigger= new cc.MenuItemSprite(
            new cc.Sprite(res.plank_idl),
            new cc.Sprite(res.plank_idl),
            this.plankClick, this);
        this.plank = new cc.Menu(plankTrigger);
        this.plank.setPosition(
            winSize.width / 2,
            winSize.height / 2
        );
        this.addChild(this.plank);

        // metalbar section
        var metalbarTrigger= new cc.MenuItemSprite(
            new cc.Sprite(res.metalbar_idl),
            new cc.Sprite(res.metalbar_idl),
            this.metalbarClick, this);
        this.metalbar = new cc.Menu(metalbarTrigger);
        this.metalbar.setPosition(
            winSize.width / 2,
            winSize.height / 2
        );
        this.addChild(this.metalbar);

        // planks section
        var planksTrigger= new cc.MenuItemSprite(
            new cc.Sprite(res.planks_png),
            new cc.Sprite(res.planks_png),
            this.planksClick, this);
        this.planks = new cc.Menu(planksTrigger);
        this.planks.setPosition(
            winSize.width / 2,
            winSize.height / 2
        );
        this.addChild(this.planks);

        // wood_frame section
        var wood_frameTrigger= new cc.MenuItemSprite(
            new cc.Sprite(res.wood_frame_idl),
            new cc.Sprite(res.wood_frame_idl),
            this.planksClick, this);
        this.wood_frame = new cc.Menu(wood_frameTrigger);
        this.wood_frame.setPosition(
            winSize.width / 2,
            winSize.height / 2
        );
        this.addChild(this.wood_frame);


        // wood_belt section
        var wood_beltTrigger= new cc.MenuItemSprite(
            new cc.Sprite(res.wood_belt_idl),
            new cc.Sprite(res.wood_belt_idl),
            this.wood_beltClick, this);
        this.wood_belt = new cc.Menu(wood_beltTrigger);
        this.wood_belt.setPosition(
            winSize.width / 2,
            winSize.height / 2
        );
        this.addChild(this.wood_belt);


        // squareplank section MULTIANIMATION
        var squareplankTrigger= new cc.MenuItemSprite(
            new cc.Sprite(res.squareplank_idl),
            new cc.Sprite(res.squareplank_idl),
            this.squareplankClick, this);
        this.squareplank = new cc.Menu(squareplankTrigger);
        this.squareplank.setPosition(
            winSize.width / 2,
            winSize.height / 2
        );
        this.addChild(this.squareplank);

        // rock_up section
        var rock_upTrigger= new cc.MenuItemSprite(
            new cc.Sprite(res.rock_up_idl),
            new cc.Sprite(res.rock_up_idl),
            this.rock_upClick, this);
        this.rock_up = new cc.Menu(rock_upTrigger);
        this.rock_up.setPosition(
            winSize.width / 2,
            winSize.height / 2
        );
        this.addChild(this.rock_up);


        // rock_low section
        var rock_lowTrigger= new cc.MenuItemSprite(
            new cc.Sprite(res.rock_low_idl),
            new cc.Sprite(res.rock_low_idl),
            this.rock_lowClick, this);
        this.rock_low = new cc.Menu(rock_lowTrigger);
        this.rock_low.setPosition(
            winSize.width / 2,
            winSize.height / 2
        );
        this.addChild(this.rock_low);

        // carpet section
        var carpetTrigger= new cc.MenuItemSprite(
            new cc.Sprite(res.carpet_idl),
            new cc.Sprite(res.carpet_idl),
            this.carpetClick, this);
        this.carpet = new cc.Menu(carpetTrigger);
        this.carpet.setPosition(
            winSize.width / 2,
            winSize.height / 2
        );
        this.addChild(this.carpet);

        // barrel section MULTIANIMATION
        var barrelTrigger= new cc.MenuItemSprite(
            new cc.Sprite(res.barrel_idl),
            new cc.Sprite(res.barrel_idl),
            this.barrelClick, this);
        this.barrel = new cc.Menu(barrelTrigger);
        this.barrel.setPosition(
            winSize.width / 2,
            winSize.height / 2
        );
        this.addChild(this.barrel);
    },

    windowsClick : function(){
        cc.log("==WINDOWS clicked==");
    },

    barrelClick : function(){
        cc.log("==barrel clicked==");
    },

    carpetClick : function(){
        cc.log("==carpet clicked==");
    },

    metalbarClick : function(){
        cc.log("==metalbar clicked==");
    },

    plankClick : function(){
        cc.log("==plank clicked==");
    },

    planksClick : function(){
        cc.log("==planks clicked==");
    },

    radioClick : function(){
        cc.log("==radio clicked==");
    },

    rock_lowClick : function(){
        cc.log("==rock_low clicked==");
    },

    rock_upClick : function(){
        cc.log("==rock_up clicked==");
    },

    squareplankClick : function(){
        cc.log("==squareplank clicked==");
    },

    transClick : function(){
        cc.log("==trans clicked==");
    },

    wood_beltClick : function(){
        cc.log("==wood_belt clicked==");
    },

    wood_frameClick : function(){
        cc.log("==wood_frame clicked==");
    }

});