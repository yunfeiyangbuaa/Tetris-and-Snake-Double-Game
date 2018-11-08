(function(window){
    "use strict";
    function Speed1 (){
        this.canvas=new Canvas("snack_speed",100,50);
        this._init();
    }
    Speed1.prototype={
        constructor:Speed1,
        _init:function(){
            this.changeSpeed();
            this.render(window.time);
        },
        changeSpeed:function(){    
         if(window.time>150){
           window.time= window.time-3;
           console.log("已经提高蛇的运行速度")
         }
        },
        render:function(text){
          this.canvas.textCanvas(text);
        }
    }
    window.Speed1=Speed1;
})(window)

