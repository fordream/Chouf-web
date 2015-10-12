var videoLayer = cc.Layer.extend({

    ctor:function(){
        this._super();
        this.init();
    },

    init:function(){

        this._super();

        var video = new ccui.VideoPlayer("res/video/trailer.mp4");
        video.setContentSize(1920/4, 1080/4);
        video.setPosition(800/2, 450/2);
        video.setScale(1);
        window.video = video;
        this.addChild(video);

        var list = [
            { name: "Play", func: function(){
                video.play();
            }},
            { name: "Pause", func: function(){
                video.pause();
            }},
            { name: "Resume", func: function(){
                video.resume();
            }},
            { name: "Stop", func: function(){
                video.stop();
            }},
            { name: "Full Screen", func: function(){
                video.setFullScreenEnabled(true);
            }}
        ];

        var layer = this;
        list.forEach(function(item, i){
            var button = new ccui.Button();
            i+1 !== list.length ? button.setScale(1.3) : button.setScale(1);
            button.setPosition( 140 + (i / 5 | 0) * 530, 320 - (i % 5) * 50);
            button.setTitleText(item.name);
            button.setTitleColor(cc.color.YELLOW);
            button.setZoomScale(0.3);
            button.setPressedActionEnabled(true);
            button.addClickEventListener(item.func);
            layer.addChild(button);
        });
    }
});
