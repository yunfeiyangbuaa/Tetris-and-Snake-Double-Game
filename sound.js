(function(window){
    "use strict";
   function sound(){
      this.music;
   //   this._initMusic();
   }
   sound.prototype={
       constructor:sound,
        _initMusic:function(){
             if(window.musicType==1){
                 this. music=new Howl({        
                src:['俄罗斯方块 - TECHNOTRIS.mp3'],
                loop:true,
                volume:0.05
            });
             }else if(window.musicType==2){
                 this. music=new Howl({        
                src:['磯村由紀子 (矶村由纪子) - 風の住む街 (风居住的街道).mp3'],
                loop:true,
                volume:0.05
            });
             }
             else{
                 this. music=new Howl({        
                src:['张杰 (Jason Zhang) - 着魔.mp3'],
                loop:true,
                volume:0.05
            });
             }
           
       if(window.soundset==1){
          
         this.music.play();
         console.log("开始运行音乐")
     }
        }
   }
   window.sound=sound;
})(window)