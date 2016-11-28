//---------------------------header_top部分  隐现 js
$(function(){
	//---------------返回顶部------------
	$('.ding').click(function(){
		$(document).scrollTop(0);
	});
	//----------判断是否登陆---------------
	if($.cookie('UserName')){
		$('#header .top .w .ri div.er').show().find('span').html("欢迎"+$.cookie('UserName')+"");
		$('#header .top .w .ri div.yi').hide();
		shop();
	}
	$('#header .top .w .ri div.er a').click(function(){
		$.cookie('UserName',$.cookie('UserName'),{path:'/',expires:-1});
		location.href='index.html';
	})
	//-----------头部  块状  隐藏出现动画-------
	$("#header .dd,#header .gz,#header .kf,#header .zc").on({
	mouseenter:function(){
		funn($(this));
	},
	mouseleave:function(){
		funn($(this));
	}
	});
	//--------头部  块状  隐藏出现动画  函数-------
	function funn(obj){
		obj.find(".hea_tp_js").stop().slideToggle();
	}
	//------------------------------header_down le部分   --------------------
	//-------------div  隐现------------
	$("#header .down ul li").on({
		'mouseenter':function(){
			fun($(this));
			showi($(this));
		},
		'mouseleave':function(){
			fun($(this));
			hidei($(this));
		}
	});
	function fun(obj){
		obj.find(".hea_down_js").toggle();
		obj.find('.mc:last').css({'border':'none'});
	}
	function showi(obj){
		obj.find('.xian i').stop().animate({width:80},500);
	}
	function hidei(obj){
		obj.find('.xian i').stop().animate({width:0},500);
	}
		//--------------------搜索框  ------------
	$('#header .down .ri').on({
		focusin:function(){
			$('#header .down .ri').animate({width:250,marginRight:20});
		},
		focusout:function(){
			$('#header .down .ri').animate({width:205,marginRight:65});
		}
	});
	//----------------菜单吸顶---------------
	$(document).scroll(function(){
		var tp=$(document).scrollTop();
		if(tp>=$('#content').offset().top){
			$('#header .down').css({'position':'fixed','top':0,'z-index':5});		
		}else{
			$('#header .down').css({'position':'relative'});
		}
	});
		//-----------------banner部分---------
		//-------轮播-----------------
		//------遍历    加背景图片----
	$('#banner .big li a').each(function(j){
		j+=1;
		$(this).css({'background':'url(images/banner_'+j+'.jpg) -300px 0px'});
	})
	//----两个a标签的隐藏和显示----
	$('#banner').on({
			'mouseenter':function(){
				$('#banner .pag').stop().animate({opacity:1},500);
			},
			'mouseleave':function(){
				$('#banner .pag').stop().animate({opacity:0},500);
			}
	});
		//-----计数变量    通过i计数 控制   下方进度条---
	var i=0;
		//-------下方    进度条 图片的 显示隐藏-------
	$('#banner .banner_nav_js li').each(function(j){
		$(this).on({
			'mouseenter':function(){
				$(this).children().eq(1).css({'display':'block'});
			},
			'mouseleave':function(){
				$(this).children().eq(1).css({'display':'none'});
			},
			'click':function(){
				i=$(this).index();
				$('#banner .banner_nav_js li').find('i').stop();
				movebg();
			}
		});
	});
		// ----------a标签  点击 图片切换-------
	$('#banner .le').click(function(){
		i--;
		if(i<0){
			i=4;
		};
		$('#banner .banner_nav_js li').find('i').stop();
		movebg();
	})
	$('#banner .re').click(function(){
		i++;
		if(i>4){
			i=0;
		}
		$('#banner .banner_nav_js li').find('i').stop();
		movebg();
	});
		//---------自动轮播--------------
		//----原理：利用juquery动画回调函数    回调自身   从而达到定时器的效果-----
	movebg()
	//------动画回调函数-----
	function movebg(){
		$('#banner .big li').eq(i).css({'display':'block'}).stop().animate({opacity:1},1000).siblings().stop().animate({opacity:0},1000);
		$('#banner .banner_nav_js li').find('i').css({'display':'none','width':'0'});
		$('#banner .banner_nav_js li').find('i').eq(i).css({'display':'block'}).stop().animate({width:249},4000,function(){
		i++;
		if(i<0){
			i=4
		};
		if(i>4){
			i=0;
		}
		movebg();
		});
	}
	//-----------------main部分------------------------
	$('#main .four').each(function(j){
		j+=1;
		$(this).find('.bg').css('background','url(images/main_'+j+'.jpg)');
	});
	//----------------倒计时  ------------
	$('.tim_js').eq(0).daojishi({endTime:'2016/6/29'});
	$('.tim_js').eq(1).daojishi({endTime:'2016/6/20'});
	$('.tim_js').eq(2).daojishi({endTime:'2016/6/23'});
	$('.tim_js').eq(3).daojishi({endTime:'2016/6/28'});
	//---------------content-----------
	$('#content .my .up .w600 ul li').eq(1).css({'borderTop':0});
	$('#content .my .up .w600 ul li').eq(0).css({'borderTop':0});
	$("#content .my .up i").parent().on({
		'mouseenter':function(){
			$(this).find('i').css({'position':'absolute','zIndex':3,'bottom':0}).show();
		},
		'mouseleave':function(){
			$(this).find('i').hide();
		}
	})
	
	
	//------------------content部分---------------------
	//----------右侧选项卡-----------------
	$('#content .up .w200 .tp a').mouseenter(function(){
		$(this).attr('class','active l').siblings().attr('class','l');
		$(this).parent().next().children().css({'display':'none'});
		$(this).parent().next().children().eq($(this).index()).css({'display':'block'});
	});
	//-----------分组下的  品牌图片展示---------
	$('#content .my .down li').on({
		'mouseenter':function(){
			console.log('ok');
			$(this).find('h3').show();
			$(this).find('img').hide();
		},
		'mouseleave':function(){
			$(this).find('h3').hide();
			$(this).find('img').show();
		}
	})

	//------------精选 区  部分------------------
	$('#jingxuan li').on({
		'mouseenter':function(){
			$(this).find('a').show();
		},
		'mouseleave':function(){
			$(this).find('a').hide();
		}
	});
	//------------查看更多跳转--------------------
	$('#fix_r .top .shop_cart .clk .up a.r').click(function(){
		location.href="html/shop_cart.html";
	});
	//------------------fix_r 侧边栏  部分--------------
	$(window).resize(function(){
		$('#fix_r').css({'height':$(window).height()}).animate({right:0},1000);
	})
	$('#fix_r').css({'height':$(window).height()}).animate({right:0},1000);
	$('#fix_r .top').children().css({'width':36,'height':36,'cursor':'pointer'})
	$('#fix_r .top').children().eq(1).css({'width':14,'height':100})
	$('#fix_r .fix_r_js').parent().each(function(j){
		$(this).on({
			'mouseenter':function(){
				$(this).css({'backgroundColor':'#616'}).children().eq(0).css({'display':'block'}).stop().animate({right:36});
			},
			'mouseleave':function(){
				$(this).css({'backgroundColor':'#333'}).children().eq(0).css({'display':'none'}).stop().animate({right:72});
			},
			'click':function(event){
	//此处原理：
	//---首先组织默认事件
	//-----通过判断事件对象（event.target）是否为我们添加事件的对象  
	//-------如果不是  则不执行点击事件
	//---------如果是 执行   变相的组织冒泡事件
				event.preventDefault();
				 if(event.target==this){
				 	if($(this).find('.clk').css('display')=='block'){	
						$(this).find('.clk').animate({left:36},function(){
							$(this).css({'display':'none'})
						});
					}else{	
						$(this).find('.clk').css({'display':'block'}).animate({left:-320})
					}
  				}
				else if(event.target==$(this).find('span.biaozhi').get(0)){
				 	if($(this).find('.clk').css('display')=='block'){	
						$(this).find('.clk').animate({left:36},function(){
							$(this).css({'display':'none'})
						});
					}else{	
						$(this).find('.clk').css({'display':'block'}).animate({left:-320})
					}
				}
				 else if(event.target==$(this).find('p').get(0)){
				 	if($(this).find('.clk').css('display')=='block'){	
						$(this).find('.clk').animate({left:36},function(){
							$(this).css({'display':'none'})
						});
					}else{	
						$(this).find('.clk').css({'display':'block'}).animate({left:-320})
					}
				 }
				 else{
				 }
			}
		})
	});
})

//-----------------------cookie读取加载  赋值部分 函数----------------
function shop(){
	$('#fix_r .top .shop_cart .clk .bo ul').html('');
	var l=0;
	var shu=0;
	var zj=0;
		for(var i=31;i<100;i++){
		var s=$.cookie('shop'+i);
		if(s){
			l++;
			$('#content h3').hide();
			var b=eval('('+s+')');
			var x=b.ima.split('/')[1];
			var d=b.ima.split('/')[2];
			var f=b.ima.split('/')[3];
			var xj=b.pic*b.num
			var sp=b.num;
			shu+=sp;
			zj+=xj;
			var li=$('<li>'
					+'<img class="l" src="'+x+'/'+d+'/'+f+'"/>'
					+'<span class="p1">'+b.title+'</span>'
					+'<div><span class="red">￥'+b.pic+'</span></div>'
					+'<a class="del" onclick="del('+b.id+')"></a><a class="jia r" href="###" onclick="jia('+b.id+')" >+</a><input class="r" type="text" value="'+b.num+'"><a class="jian r" onclick="jian('+b.id+')" href="###">-</a>'
					+'</li>');
			$('#fix_r .top .shop_cart .clk .bo ul').append(li);
		}
	}	
			if(l==0){
				$('#list table').hide();
				$('#content h3').show();
			}
			$('#fix_r .top .shop_cart span.biaozhi').html(l);
			$('#fix_r .top .shop_cart .clk .bo div.dj span.l').html('共'+shu+'件');
			$('#fix_r .top .shop_cart .clk .bo div.dj span.r').html('￥'+zj);
			console.log('ok')
			
}
//-----------------cookie的  加   减  删除-------------
function jian(s){
	var str=$.cookie('shop'+s);
	var b=eval('('+str+')');
	var n=b.num;
	n--;
	$.cookie('shop'+s,'{"id":'+b.id+',"talk":"'+b.talk+'","ima":"'+b.ima+'","title":"'+b.title+'","pic":"'+b.pic+'","cost":"'+b.cost+'","num":'+n+'}',{path:'/',expires: 365});
	shop();
}
function jia(s){
	var str=$.cookie('shop'+s);
	var b=eval('('+str+')');
	var n=b.num;
	n++;
	$.cookie('shop'+s,'{"id":'+b.id+',"talk":"'+b.talk+'","ima":"'+b.ima+'","title":"'+b.title+'","pic":"'+b.pic+'","cost":"'+b.cost+'","num":'+n+'}',{path:'/',expires: 365});
	shop();
}
function del(s){
	$.cookie('shop'+s,'',{path:'/',expries:-1});
	shop();
}