
(function(window){
    "use strict";
    function Speed2 (){
        this.canvas=new Canvas("block_speed",100,50);
        this._init();
    }
    Speed2.prototype={
        constructor:Speed2,
        _init:function(){
            this.changeSpeed();
            this.render(window.speed);
        },
        changeSpeed:function(){    
          if(window.speed>150){
           window.speed= window.speed-3;
           console.log("已经提高方块的速度");
　　　　　　}
        },
        render:function(text){
          this.canvas.textCanvas(text);
        }
    }
    window.Speed2=Speed2;
})(window)