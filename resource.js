(function(window){
    var map=new Map();
    var resourceTotal=1;
    var resourceCount=0;
    var isAddLoaded=function () {
        resourceCount+=1;
        if(resourceCount===resourceTotal&&typeof window.ResourceManager.onResourceLoaded==="function"){
            window.ResourceManager.onResourceLoaded();
        }
    }
    var init=function(){
        var image=new Image();
        image.onload=function(){
            map.set("block",image);
             isAddLoaded();
        };
       if(window.picture==1){
        image.src="gezi.jpg";
       }else if (window.picture==2){
        image.src="strict.png";
       }
        else {
        image.src="soso.png";
       }
    };
    var getResource=function(key){
        return map.get(key);
    };
    window.ResourceManager={
        getResource:getResource,
        init:init,
        onResourceLoaded:null
    };
})(window)