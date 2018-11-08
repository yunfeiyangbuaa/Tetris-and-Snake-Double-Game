var position=[];
(function (window) {
  'use strict';
  function Board() {
    this.blockSize = 30;
    this.rows = window.rows;
    this.cols = window.cols;
    this.canvas = new Canvas('c_canvas_main', this.cols * this.blockSize, this.rows * this.blockSize);
    this.context = this.canvas.context;
    this.boardList = [];
    this.score=new Score();
    this.shape = new window.Shape();
    this._init();
    this.number=0;
    this.snack_speed=new Speed1();
    this.block_speed=new Speed2();
    this.blockPosition=[];
    this._initPosition();
    this.initBlockList();
     this._buildGridData();
    var b = ResourceManager.getResource('block');
    //console.log(b);
  }
  Board.prototype = {
    constructor: Board,
    _init: function () {
      this._buildGridData();
      this._initGrid();
      if(window.state==1||window.state==6){
         this.shape.draw(this.context);
          //console.log("当前状态"+window.state);
      }
    },
    snakeMoving:function(){
    },
    _buildGridData() {
      var i, j;
      for (i = 0; i < this.rows; i++) {
        this.boardList[i] = [];
        for (j = 0; j < this.cols; j++) {
          this.boardList[i][j] = 0;
        }
      }
    },
    _count:function(){
       for (var y = 0; y < window.rows; y++) {
        for (var x = 0; x < window.cols; x++) {
        }
       }
    },
    _buildNextShape:function(){
       this.nextShape = new window.Shape();
      this.nextShape.setPosition(this.presentGame.nextshape.cols, this.presentGame.nextshape.rows);
      this.presentGame.nextshape.render(this.nextShape);
    },
    _initGrid() {
      var i;
      this.context.strokeStyle = 'green';
      this.context.lineWidth = 0.5;
      //绘制线条的笔迹
      for (i = 0; i <= this.rows; i++) {
        this.context.moveTo(0, i * this.blockSize);
        this.context.lineTo(this.canvas.width, i * this.blockSize);
      }
      for (i = 0; i <= this.cols; i++) {
        this.context.moveTo(i * this.blockSize, 0);
        this.context.lineTo(i * this.blockSize, this.canvas.height);
      }
      //绘制线条
      this.context.stroke();

      //缓存数据
      this.gridImageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      
     },
        tick: function () {   
        this.initBlockList();
        if(window.state==1||window.state==6||window.state==3){
         this.score._init();
        if(window.state==1||window.state==6){
        if (this.validMove(0, 1)) {
        this.shape.y += 1;
        this.addBlockList();
      } else {
        if (window.state==1||window.state==6){
        this.addShapeToBoardList();
        this.clearFullRows();
        this.shape = new window.Shape();
        }
      }
      ////console.log("当前得分"+window.score)
      this.refresh();
      this.drawsnack();
     this.shape.draw(this.context);
           }
          } 
          if(window.state==6||window.state==3){
           this._initPosition();
           //this.drawsnack();
          if(window.state==3){
            this._initGrid();
          } 
           if(this.number==0){
           this.double();
           this.number++;

            }
          }
    },
    drawsnack:function(){
      
  var c=document.getElementById("c_canvas_main");
var cxt=c.getContext("2d");
  for (var i=0;i<window.position.length;i++)
   for(var j=0;j<window.position[i].length;j++){
      if(window.position[i][j]){
cxt.fillStyle = "#006699";//内部填充颜色
cxt.strokeStyle = "#006699";//边框颜色
cxt.fillRect(i*30, j*30, 30, 30);//绘制矩形
cxt.fillStyle = "#ccc";//内部填充颜色
cxt.strokeStyle = "#ccc";//边框颜色
   }
  }
    },
    _initPosition:function(){
       var i, j;
      for (i = 0; i < window.cols; i++) {
       window.position[i]=[];
        for (j = 0; j < window.rows; j++) {
          window.position[i][j]=0;
        }
      }
    },
  
     double:function(){
       if(window.state==3&&this.number==1){
       this.time=new Time();
       //console.log("重置时间")
       }
      var _self=this; var c=document.getElementById("c_canvas_main");
      var _time = window.time ; //蛇的速度
      var cxt=c.getContext("2d");
          var x ;
      var y ;
      var score=0;
      x=y= 0;
      var a = 5; //食物坐标
      var t = 3; //舍身长
      var map = []; //记录蛇运行路径
      var size = 30; //蛇身单元大小
      //this._initPosition();
      // 1 向上 2 向右 0 左 3下
      self=this;
      var interval;
      window. direction = 2;
      interval = window.setInterval(set_game_speed, _time); // 移动蛇
      function set_game_speed(){ 

      if(window.state!=2&&window.state!=4&&window.state!=0){
      // 移动蛇
            switch(window.direction){
            case 1:y = y-size;break;
            case 2:x = x+size;break;
            case 0:x = x-size;break;
            case 3:y = y+size;break;
      }
      if(x>(window.cols*30-30)|| (y>window.rows*30-30 )|| x<0 || y<0){
            window.sound.music.stop();
            $(".end-container").css("display","block");
            $(".final_score").innerHTML=window.score;
            window.state=2;
            window.state=2;
            window.sound.music.stop();
      }
      for(var i=0;i<map.length;i++){
         if( parseInt(map[i].x)==x && parseInt(map[i].y)==y){
              window.sound.music.stop();
              $(".end-container").css("display","block");
              window.state=2;
              //alert("你挂了，继续努力吧！失败原因：撞到自己了.....");
              //window.location.reload();
              window.state=2;
              window.sound.music.stop();
              }
      }
      if ((map.length>t&&window.state==3)||(window.state==6&&map.length>t)) { 
              var cl = map.shift(); 
              cxt.clearRect(cl['x'], cl['y'], size, size);
      };
      if(window.state!=2&&window.state!=4){
              map.push({'x':x,'y':y})
              for(var i=0;i<map.length;i++){
                    window.position[map[i].x/30][map[i].y/30]=1;
      }
      isDie();
      cxt.fillStyle = "#ccc";//内部填充颜色
      cxt.strokeStyle = "#ccc";//边框颜色
      cxt.fillRect(a*30, a*30, 30, 30);//绘制矩形
      }; //将数据添加到原数组尾部}
      cxt.fillStyle = "#006699";//内部填充颜色
      cxt.strokeStyle = "#006699";//边框颜色
      cxt.fillRect(x, y, size, size);//绘制矩形
      if((a*30)==x && (a*30)==y){ //吃食物

      console.log("吃了食物")
      rand_frog();
      t++;

      _self.score.addScore(100)
      _self.snack_speed._init();

      }
      }

      function  repaint(){
      for (var i=0;i<window.position.length;i++)
          for(var j=0;j<window.position[i].length;j++){
               if(window.position[i][j]){
                    cxt.fillStyle = "#006699";//内部填充颜色
                    cxt.strokeStyle = "#006699";//边框颜色
                    cxt.fillRect(i*30, j*30, size, size);//绘制矩形
                    cxt.fillStyle = "#ccc";//内部填充颜色
                    cxt.strokeStyle = "#ccc";//边框颜色
                    cxt.fillRect(a*30, a*30, 30, 30);//绘制矩形
         }
      }
   }
}
function  isDie(){
 for (var y = 0; y < window.rows; y++) {
        for (var x = 0; x < window.cols; x++) {
           if((_self.blockPosition[y][x]&&window.position[x][y])){
              window.sound.music.stop();
              $(".end-container").css("display","block");
           window.state=2;
           }
           if((window.position[x][y]&&_self.boardList[y][x])){
            window.sound.music.stop();
            $(".end-container").css("display","block");
            window.state=2;
           }
        }
       }
}
document.onkeydown = function(e) { //改变蛇方向
      var code = e.keyCode;
      switch(code){
      case 87 : 
      if( window.direction!=3)
            window.direction = 1;
            break;//上
      case 68 : 
      if( window.direction!=0) 
            window.direction = 2;
            break;//右
      case 83 :  
      if( window.direction!=1)
        window.direction = 3;
         break;//下
      case 65: 
      if( window.direction!=2)
              window.direction = 0;
      break;//左
      }

}
// 随机放置食物
function rand_frog(){
        // _self._count();
        a = Math.ceil(Math.random()*30);
        cxt.fillStyle = "#ccc";//内部填充颜色
        cxt.strokeStyle = "#ccc";//边框颜色
         console.log("a:"+a);
      console.log("_self.boardList[a][a]"+_self.boardList[a][a])
      var i, j;
       console.log("***********************");
      for (i = 0; i < this.rows; i++) {
        for (j = 0; j < this.cols; j++) {
          console.log("_self.boardList[a][a]"+_self.boardList[i][j])
        }
      }
       console.log("**************************");
        if(a<window.cols||a<window.rows){
          //console.log("("+a+","+a+")"+"处的静态放格情况"+_self.boardList[a][a]);
          //console.log("("+a+","+a+")"+"处的动态放格情况"+_self.blockPosition[a][a]);}
        if(a*30>=window.cols*30){
            console.log("因为超出边界重新放置食物");
          rand_frog();

        }
        if(_self.boardList[a][a]){
          console.log("因为占用静态格子重新放置食物");
           rand_frog();
        
        }
        if(_self.blockPosition[a][a]){
          console.log("因为占用动态格子重新放置食物");
           rand_frog();
          
        }
        if(window.position[a][a]){
          console.log("因为占用蛇神重新放置食物");
          rand_frog();
        }
        console.log("放置食物");
        cxt.fillRect(a*30, a*30, 30, 30);//绘制矩形
}else{
   rand_frog();
   console.log("产生的随机数不合格重新产生")


}
}
//rand_frog();
     },
     refresh:function(){
       this.canvas.clear();
       this.context.putImageData(this.gridImageData,0,0);
       this.drawBlocks();
     },
      validMove: function (moveX, moveY) {
      //下一步位置
      var nextX = this.shape.x + moveX;
      var nextY = this.shape.y + moveY;
      for (var y = 0; y < this.shape.layout.length; y++) {
        for (var x = 0; x < this.shape.layout[y].length; x++) {
          if (this.shape.layout[y][x]) {
            if (typeof this.boardList[nextY + y] === 'undefined' //找不到行
              || typeof this.boardList[nextY + y][nextX + x] === 'undefined' //找不到列
              || this.boardList[nextY + y][nextX + x] //当前位置已有方块
              || nextX + x < 0 //超出左边界
              || nextX + x >= this.cols // 超出右边界
              || nextY + y >= this.rows // 超出下边界
            ) {
              return false;
            }
          }
        }
      }
      return true;
    },
addBlockList:function(){
      for (var y = 0; y < this.shape.layout.length; y++) {
        for (var x = 0; x < this.shape.layout[y].length; x++) {
          if (this.shape.layout[y][x]) {
            var boardX = this.shape.x + x;
            var boardY = this.shape.y + y;
          this.blockPosition[boardY][boardX]=1;
            }
          
          }
        }
},
initBlockList:function(){
    var i, j;
      for (i = 0; i < this.rows; i++) {   
        this.blockPosition[i]=[];
        for (j = 0; j < this.cols; j++) {
          this.blockPosition[i][j]=0;
        }
      }
},
   addShapeToBoardList: function () {
      for (var y = 0; y < this.shape.layout.length; y++) {
        for (var x = 0; x < this.shape.layout[y].length; x++) {
          if (this.shape.layout[y][x]) {
            var boardX = this.shape.x + x;
            var boardY = this.shape.y + y;
            if (this.boardList[boardY][boardX]) {
             window.sound.music.stop();
             $(".end-container").css("display","block");
             window.state=2;
                return;
            }
            else {
              this.boardList[boardY][boardX] =this.shape.blockType;
         
            }
          }
        }
      }
    },
   drawBlocks: function () {
      for (var y = 0; y < this.rows; y++) {
        for (var x = 0; x < this.cols; x++) {
          if (this.boardList[y][x]) {
            this.shape.block.draw(this.context, x, y, this.boardList[y][x]);
          }
        }
      }
    },
    clearFullRows:function(){
      
        var self=this;
        var lines=0;
      
        var scores;
        for(var y=this.rows-1;y>=0;y--){
        var  filled=this.boardList[y].filter(function(item){ return item>0;}).length===this.cols;
        if(filled&&y){
        this.boardList.splice(y,1);
        this.boardList.unshift([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
             lines++;
             y++;   
               scores=lines*lines*100;
             this.score.addScore(scores)
              //console.log("清空了吗")
             this.block_speed._init();    
      }  
    }
           
            
    },

  };
  window.Board = Board;

})(window);


