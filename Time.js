(function(window){
    "use strict";
    function Time (){
        this.timeId;
        this.canvas=new Canvas("time",100,70)
        this.time=0;
    }
    Time.prototype={
        constructor:Time,
        _init:function(){
             this.changeTime();
            this.render(this.time);
            console.log("时间初始化")
        },
        changeTime:function(){
             var self=this;
             setInterval(function(){
             if(window.state==1||window.state==6||window.state==3){
                self.time++;
             }
            var hour=parseInt(self.time/3600);
            if(hour<10){
                hour="0"+hour;
            }
            var minute=parseInt((self.time-hour*3600)/60)
            if(minute<10){
                 minute="0"+minute;
            }
            var second=self.time-hour*3600-minute*60;
            if(second<10){
                second="0"+second;
            }
            self.render(hour+":"+minute+":"+second)
         },1000)
           
        },
     
        render:function(text){
          this.canvas.textCanvas(text);
        }
    }
    window.Time=Time;
})(window)