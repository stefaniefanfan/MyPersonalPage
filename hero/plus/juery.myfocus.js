/*
*	@author yourname
*	@email 
*	@qq 
* @lastdate 
* 插件功能 描述，代码结构要求
* 功能：实现焦点图的轮播效果
*/

;(function ($) {
  var pluginName = 'myfocus',  //定义插件名
  	  //插件的参数默认值
      defaults = {
        etarget:'.wimg',
        eclassname:'act',
        etimer:2000,
        etext:'.text'

      };

  //... 插件主体功能代码 ...
  //jquery的原型对象的方法
  $.fn[ pluginName ] = function (options) {
	  //将一个或者多个对象扩展到多个对象
	  var settings = $.extend({}, defaults, options);//将默认值,参数值合并到setting
	  
	  //主体代码开始
    if($(settings.etext)){
        textp=$(settings.etext);
      }

    var focusimg=$(settings.etarget);
    var focusbtn=$(this);
    //var textp=$(settings.etext);
    var oldindex=0;//旧图片的索引值，默认为第一张图
    var timer=null;
    textp.html(focusimg.children().eq(0).children().eq(0).attr('alt'));
    timer=setInterval(autoplay,settings.etimer)//时间一般是3-6s
    function autoplay(){
      var nowindex;
      if(oldindex<focusimg.children().length-1){
        nowindex=oldindex+1;
      }
      else{
        nowindex=0;
      }
      fcsChange(oldindex,nowindex);
    }
    focusbtn.on('mouseover','li',fcsHandler);
    function fcsHandler(e){
      var _this=this;
        clearInterval(timer);
        outtimer=setTimeout(function(){
          fcsChange(oldindex,$(_this).index());
        },200)     
    }
    focusbtn.on('mouseout','li',clearHandler);
    function clearHandler(e){
        timer=setInterval(autoplay,settings.etimer);
        clearTimeout(outtimer); 
    }
    function fcsChange(old,now){
      if(now==old) return false;
        focusimg.children().eq(old).css({'display':'none'});
        focusimg.children().eq(now).css({'display':'block'});
        focusbtn.children().eq(old).removeClass(settings.eclassname);
        focusbtn.children().eq(now).addClass(settings.eclassname);
        oldindex=now;
        if(textp){
            textp.html(focusimg.children().eq(now).children().eq(0).attr('alt'));
          }
        }
        
     
  
  }

})(jQuery);//自执行函数


