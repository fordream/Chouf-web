var menuLayer = cc.Layer.extend({
    menuSheet:null,
    menuRevSheet:null,
    menuAction:null,
    menuRevAction:null,
    menuSprite:null,
    menuRevSprite:null,

    menu:null,
    menuMoveUp:null,

    homeBtn:null,
    homeMove:null,
    trailerBtn:null,
    trailerMove:null,
    charactersBtn:null,
    charactersMove:null,
    aboutBtn:null,
    aboutMove:null,

    ctor:function () {
        this._super();
        this.init();
    },

    init:function () {
        this._super();

        var winSize = cc.winSize;

        /* #####  INITIALZING MENU ANIMATIONS  #####
         * variables ans sprite sheets are initiated */

        // create sprite sheet
        cc.spriteFrameCache.addSpriteFrames(res.menu_plist);
        this.menuSheet = new cc.SpriteBatchNode(res.menu_png);
        this.addChild(this.menuSheet);

        // init menu Action
        var menuFrames = [];
        for (var i = 0; i < 14; i++) {
            var str = "menu_01_" + (i < 10 ? ("0" + i) : i) + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            menuFrames.push(frame);
        }

        var menuAnimation = new cc.Animation(menuFrames, 0.1);
        this.menuAction = new cc.repeat(new cc.Animate(menuAnimation), 1);
        this.menuSprite = new cc.Sprite("#menu_01_00.png");
        this.menuSprite.attr({
            x: winSize.width/2,
            y: winSize.height/2,
            anchorX: 0.5,
            anchorY: 0.5,
            scale: 1
        });


        // init Rev menu Action
        var menuRevFrames = [];
        for (var i = 1; i < 14; i++) {
            var str = "menu_10_" + (i < 10 ? ("0" + i) : i) + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            menuRevFrames.push(frame);
        }

        var menuRevAnimation = new cc.Animation(menuRevFrames, 0.1);
        this.menuRevAction = new cc.repeat(new cc.Animate(menuRevAnimation), 1);
        this.menuRevSprite = new cc.Sprite("#menu_10_01.png");
        this.menuRevSprite.attr({
            x: winSize.width/2,
            y: winSize.height/2,
            anchorX: 0.5,
            anchorY: 0.5,
            scale: 1
        });

        /* #####  SETTING BUTTONS AND INTERACTIONS  #####
         * all the buttons will be set-up here
         */

        var homeItemPlay= new cc.MenuItemSprite(
            new cc.Sprite(res.homeHB_png), // normal state image
            new cc.Sprite(res.home_png), //select state image
            this.onHome, this);
        this.homeBtn = new cc.Menu(homeItemPlay);  //7. create the menu
        this.homeBtn.setPosition(cc.p(165, -50));
        this.addChild(this.homeBtn);
        this.homeMove = new cc.MoveTo(0.1, cc.p(165, 105));


        var trailerItemPlay= new cc.MenuItemSprite(
            new cc.Sprite(res.trailerHB_png), // normal state image
            new cc.Sprite(res.trailer_png), //select state image
            this.onTrailer, this);
        this.trailerBtn = new cc.Menu(trailerItemPlay);  //7. create the menu
        this.trailerBtn.setPosition(cc.p(345, -50));
        this.addChild(this.trailerBtn);
        this.trailerMove = new cc.MoveTo(0.1, cc.p(345, 82));


        var charactersItemPlay= new cc.MenuItemSprite(
            new cc.Sprite(res.charactersHB_png), // normal state image
            new cc.Sprite(res.characters_png), //select state image
            this.onCharacters, this);
        this.charactersBtn = new cc.Menu(charactersItemPlay);  //7. create the menu
        this.charactersBtn.setPosition(cc.p(588, -50));
        this.addChild(this.charactersBtn);
        this.charactersMove = new cc.MoveTo(0.1, cc.p(588, 73));


        var aboutItemPlay= new cc.MenuItemSprite(
            new cc.Sprite(res.aboutHB_png), // normal state image
            new cc.Sprite(res.about_png), //select state image
            this.onAbout, this);
        this.aboutBtn = new cc.Menu(aboutItemPlay);  //7. create the menu
        this.aboutBtn.setPosition(cc.p(802, -50));
        this.addChild(this.aboutBtn);
        this.aboutMove = new cc.MoveTo(0.1, cc.p(802, 60));


        // menu slider
        var menuItemPlay= new cc.MenuItemSprite(
            new cc.Sprite(res.slideMenu_png), // normal state image
            new cc.Sprite(res.slideMenuDown_png), //select state image
            this.onPullDown, this);
        this.menu = new cc.Menu(menuItemPlay);  //7. create the menu
        this.menu.setPosition(winSize.width / 2, -23);
        this.addChild(this.menu);

        this.menuMoveDown = new cc.MoveBy( 0.5, cc.p( 0, -45 ) );
        var menuMoveUp = new cc.MoveBy( 0.5, cc.p( 0, 45 ) );
        this.menu.runAction(menuMoveUp);
    },

    onHome : function(){
        cc.log("==onHome clicked");
        cc.director.runScene(new HomeScene());
    },

    onTrailer : function(){
        cc.log("==onTrailer clicked");

        /*cc.LoaderScene.preload(g_vidres, function () {
            cc.director.runScene(new TrailerScene());
        }, this);*/

        cc.director.runScene(new TrailerScene());
    },

    onCharacters : function(){
        cc.log("==onCharacters clicked");
        cc.director.runScene(new CharactersScene());
    },

    onAbout : function(){
        cc.log("==onAbout clicked");
        cc.director.runScene(new AboutScene());
    },

    onPullDown : function(){
        cc.log("==onPullDown clicked");
        //if(this.menuSheet.exists(this.menuRevSprite))
        //    this.menuSheet.removeChild(this.menuRevSprite);
        this.menuSheet.addChild(this.menuSprite);
        this.menuSprite.runAction(this.menuAction);
        this.menu.runAction(this.menuMoveDown);
        this.homeBtn.runAction(this.homeMove);
        this.trailerBtn.runAction(this.trailerMove);
        this.charactersBtn.runAction(this.charactersMove);
        this.aboutBtn.runAction(this.aboutMove);
    }
});
