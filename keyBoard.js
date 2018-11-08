(function(window){
    "use strict";
    var keys={
        38:"top",
        39:"right",
        40:"down",
        37:"left"
    };
    function keyBoard(board){
        this.board;

    }
    keyBoard.prototype={
       constructor:keyBoard,
       init:function(board){
           var self=this;
           this.board=board;
           document.addEventListener("keydown",function(evt){
               self._processKeyDown(evt);
           })
       },
       _processKeyDown:function(evt){
           if (keys[evt.keyCode]){
               this.press(keys[evt.keyCode]);
           }
           
       },
       press:function(key){
           var refresh=false;
        if(window.state==1||window.state==6){
           switch(key){
    case"top":
    var newLayout=[];
     for (var y = 0; y < this.board.shape.layout[0].length; y++) {
        newLayout[y] = [];
        for (var x = 0; x < this.board.shape.layout.length; x++) {
          newLayout[y][x] = this.board.shape.layout[this.board.shape.layout.length - 1 - x][y];
        }
      }
      var nextX =this.board.shape.x ;
      var nextY = this.board.shape.y ;
      var markAll=0;
      var markYes=0;
       for (var y = 0; y <newLayout.length; y++) {
        for (var x = 0; x < newLayout[y].length; x++) {
          if (newLayout[y][x]) {
              markAll++;
            if (this.board.boardList[nextY + y][nextX+ x]) {
            break;
            }else{
                 markYes++;
                  }      
                 
            }
          }
        }
      
      if(markAll==markYes){
                this.board.shape.rotate();
          if (this.board.validMove(0, 0)) {
            refresh = true;
          }
      
      }else{
      }
      break;
              
                 case"down":
                 if(this.board.validMove(0,1)){
                       this.board.shape.y+=1; 
                       refresh=true;               
                  }
                  
               break;
                 case"left":
                  if(this.board.validMove(-1,0)){
                       this.board.shape.x-=1;  
                       refresh=true;              
                  }
               break;
                 case"right":
                  if(this.board.validMove(1,0)){
                       this.board.shape.x+=1;
                       refresh=true;                
                  }
               break;

           }
           }
    if (refresh) {
      if(window.state==1){
        this.board.refresh();}
        this.board.shape.draw(this.board.context);
        if (key === 'down') {
          var self = this;
          window.clearInterval(window.Actcon.intervalId);
          window.Actcon.intervalId = window.setInterval(function () {
            self.board.tick();
          }, 200);
        }
      }
    }
  };

           
    window.keyBoard=keyBoard;

})(window)