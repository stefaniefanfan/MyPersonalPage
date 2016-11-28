/*
*	@author yourname
*	@email 
*	@qq 
* @lastdate 
* 插件功能 描述，代码结构要求
*/

;(function ($) {
  var pluginName = 'mytab',  //定义插件名
  	  //插件的参数默认值
      defaults = {
        etype:'mouseover',
        etarget:'.ulcontent'

      };

  //... 插件主体功能代码 ...
  //jquery的原型对象的方法
  $.fn[ pluginName ] = function (options) {
	  //将一个或者多个对象扩展到多个对象
	  var settings = $.extend({}, defaults, options);//将默认值,参数值合并到setting
	  
	  //主体代码开始
    //事件代理
    $(this).on(settings.etype,'li',tabhandler);
          function tabhandler(e){
          var _this=this;
          myTab($(_this).index());
          function myTab(now){

          $(settings.etarget).children().css({'display':'none'});
          $(_this).siblings().removeClass('act');
          $(settings.etarget).children().eq(now).css({'display':'block'});
          $(_this).addClass('act');

        }
          
      }
     
  }

})(jQuery);//自执行函数


