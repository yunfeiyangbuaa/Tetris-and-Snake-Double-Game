(function(){
    "use strict";
     function Score(){
    this.canvas=new Canvas("score",100,70)
    this.score=0;
    this._init();
    
     }
     Score.prototype={
         constructor:Score,
         _init:function(){
          this.render();
         },
         render:function(){
          this.canvas.textCanvas(this.score);
           window.score=this.score;
         },
         addScore:function(value){
           this.score+=value;
           this.render();
           window.score=this.score;
           console.log("已经加分")
           console.log("*********************************************")
         }
     }
     window.Score=Score;
})(window)