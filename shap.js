var appear=7;
 var layoutType;
 var nextLayoutType;
 var nextBlockType;
 var blockType;
 var Random=function (){
    console.log("产生随机数")
    if( blockType==undefined) {
        blockType=1;
        nextBlockType=random(1,7)
        console.log("1")
    }else{
     blockType=nextBlockType;
     nextBlockType=random(1,7)
      // console.log("2")
    }
     if( layoutType==undefined) {
       layoutType=1;
        nextLayoutType=random(1,9)
   //      console.log("3")
    }else{
     layoutType=nextLayoutType;
      nextLayoutType=random(1,9)
  //     console.log("4")
    }
      console.log("这是第"+this.blockType+"个表情")
    //  console.log("下一个是是第"+this.nextBlockType+"个表情")
     console.log("这是第"+this.layoutType+"个形状")
    //  console.log("下一个是第"+this.nextLayoutType+"个形状")

    this.block = new Block(this.blockType);

    this.layout=shapeLayouts[this.layoutType];
  }
 
var random = function (minValue, maxValue) {
    return (minValue+Math.floor(Math.random() * maxValue));//参数随机数，从0到1的值（包含0，不包含1）
  };
    var shapeLayouts = [
    [[0, 1, 0], [1, 1, 1]],
    [[1, 1, 1, 1]],
    [[1, 1], [1, 1]],
    [[0, 1], [1, 1], [1, 0]],
    [[1, 0], [1, 1], [0, 1]],
    [[1, 0, 1], [1, 1, 1]],
    [[0, 1], [1, 1]],
    [[1, 1]],
    [[1, 1], [1, 0], [1, 0]],
    [[1, 1], [0, 1], [0, 1]]
  ];
(function (window) {
  'use strict';
  function Shape() {
    this.x = window.appear;
    this.y = 0;  
    Random();
    this.blockType=window.blockType;
    this.block = new Block(this.blockType);
  //   console.log("这是第"+this.blockType+"表情")
  //  this.layout=shapeLayouts[window.layoutType];
   this.layout=shapeLayouts[1];
  }
  Shape.prototype = {
    constructor: Shape,
    draw: function (context) {
      for (var i = 0; i < this.layout.length; i++) {
        for (var j = 0; j < this.layout[i].length; j++) {
          if (this.layout[i][j]) {
            this.block.draw(context, j + this.x, i + this.y);
          }
        }
      }
    },
   rotate: function () {
      var newLayout = [];
      for (var y = 0; y < this.layout[0].length; y++) {
        newLayout[y] = [];
        for (var x = 0; x < this.layout.length; x++) {
          newLayout[y][x] = this.layout[this.layout.length - 1 - x][y];
        }
      }
    
      this.layout = newLayout;
      this._setLayout();
    },
    _setLayout: function () {
      if (this.x < 0) {
        this.x = 0;
      }
      if (this.y < 0) {
        this.y = 0;
      }
      if (this.x + this.layout[0].length >window.cols) {
        this.x = window.cols - this.layout[0].length;
}
      if (this.y + this.layout.length > window.rows) {
        this.y = window.rows - this.layout.length;
      }
      
    }

  }
  window.Shape = Shape;
})(window);
