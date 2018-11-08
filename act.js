var sound=new sound();
var state=1;
var cols=20;
var rows=20;
var picture=3;
var time=201;
var speed=203;
var score;
var musicType=3;
var soundset=1;
(function(window){
    "use strict";
    var speed=window.speed;
    var interVallId;
    function Act(){
     
        this.board=new Board();
        this.time=new　Time();
        window.board=this.board;
        (new keyBoard()).init(this.board);
    }
    Act.prototype={
        constructor:Act,
        _startGame:function(){
            self=this;
            this.time._init();
            window.sound._initMusic();
            window.Actcon.intervalId=window.setInterval(function(){   
                if(window.state==1||window.state==3||window.state==6)
                    window.board.tick();
       //             //console.log("当前状态aaa"+window.state)
            },window.speed)
         
        },
        stop:function(){
           window.sound.music.pause();
           if(window.state==1||window.state==6){
               window.state=0;
           }
             if(window.state==3){
               window.state=4;
           }
           
        },
        goon:function(){
           window.sound.music.play();
           if(window.state==0){
               window.state=1;
            }
             if(window.state==4){
               window.state=3;
            }
        },
    }
    window.Act=Act;
    window.Actcon = {
    intervalId: 0,
  };
})(window)