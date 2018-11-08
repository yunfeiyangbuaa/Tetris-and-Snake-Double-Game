$(document).ready(function(){
    var presentGame;
    function startGame(){
        ResourceManager.onResourceLoaded=function(){
            
        presentGame=new Act();
        presentGame._startGame();
       }
       ResourceManager.init()
       $("body").css("background","black")
    }
  $("#btn-start").click(function(){
     $(".start-container").css("display","none");
     $(".game-container").css("display","block");
    
      startGame();
  
  })
  $("#other").click(function(){
     $(".start-container").css("display","none");
     $(".game-container").css("display","block");
     window.state=3;
      startGame();
  })
    $("#double").click(function(){
     $(".start-container").css("display","none");
     $(".game-container").css("display","block");
     window.state=6;
     startGame();
  })
  $("#btn_pause").click(function(){
    if(document.getElementById("btn_pause").value=="暂停"){
        document.getElementById("btn_pause").value="继续";
        presentGame.stop();
    }else{
        document.getElementById("btn_pause").value="暂停"
         presentGame.goon();
    }
  })
  $("#change").click(function(){
    if(document.getElementById("change").value=="贪吃蛇"){
        document.getElementById("change").value="俄罗斯";
       
       window.location.reload();
        window.state=3;
        startGame();
    }else{
        document.getElementById("#change").value="俄罗斯"
         presentGame.goon();
    }
  })
  $('#restart').click(function(){
      $(".end-container").css("display","none");
        startGame();
      window.location.reload();
    });

    $('#btn-setting').click(function(){
      $('.modal-dialog').css('display', 'block');
    });
     $('#btn_set').click(function(){
      $('.modal-dialog').css('display', 'block');
      window.sound.music.pause();
      console.log("相应")
      window.state=0;
    });
    $('#btn-dialog-close').click(function(){
      $('.modal-dialog').css('display', 'none');
     window.state=1;
     window.sound.music.play();
    });
    $('#small').click(function(){
      window.cols=13;
      window.appear=3;
     $(".game-main-container").css("width",390);
     $(".game-container").css("width",590);
     $(".game-main-panel").css("width",390);
    });
    $('#big').click(function(){
      window.cols=25;
      window.appear=12;
     $(".game-mai n-container").css("width",750);
     $(".game-container").css("width",950);
      $(".game-main-panel").css("width",750);
    });
     $('#happy').click(function(){
           window.picture=1;
    });
     $('#strict').click(function(){
           window.picture=2;
    });
     $('#soso').click(function(){
            window.picture=3;
    });
       $('#level1').click(function(){
           window.speed=501;
           window.time=503;
    });
     $('#level2').click(function(){
           window.speed=201;
           window.time=203;
    });
     $('#level3').click(function(){
             window.speed=101;
           window.time=103;
    });
     $('#sound-on').click(function(){
        window.soundset=1;
    });
     $('#sound-off').click(function(){
        window.soundset=0;
    });
      $('#music1').click(function(){
        window.musicType=1;
    });
     $('#music2').click(function(){
        window.musicType=2;
    });
     $('#music3').click(function(){
        window.musicType=3;
    });
     $('#btn_restart').click(function(){
         window.location.reload();
    });
  
});



