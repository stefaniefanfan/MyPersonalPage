/*
*	@author yourname
*	@email 
*	@qq 
* @lastdate 
* 插件功能 描述，代码结构要求
* 功能：实现焦点图的轮播效果
*/

;(function ($) {
  var pluginName = 'mytips',  //定义插件名
  	  //插件的参数默认值
      defaults = {
        tipclass:'tip',
        tiptext:'输入后再提交',
        tiptime:2000

      };

  //... 插件主体功能代码 ...
  //jquery的原型对象的方法
  $.fn[ pluginName ] = function (options) {
	  //将一个或者多个对象扩展到多个对象
	  var settings = $.extend({}, defaults, options);//将默认值,参数值合并到setting
	  
	  //主体代码开始
    $('.'+settings.tipclass).remove();
    var k=$("<div>").appendTo('body');
    
    k.attr('class',settings.tipclass);
    k.html(settings.tiptext);
      k.css({
        left:'50%',
        top:'50%',
        'margin-left':-k.outerWidth()/2+'px',
        'margin-top':-k.outerHeight()/2+'px'
      })

      setTimeout(function(){
        k.remove();
      },settings.tiptime)
  }

})(jQuery);//自执行函数


