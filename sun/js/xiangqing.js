
$(function(){
	//判断是否登录
	if($.cookie('UserName')){
		$('#header .top .w .ri div.er').css({'display':'block'}).show().find('span').html("欢迎"+$.cookie('UserName')+"");
		$('#header .top .w .ri div.yi').hide()
		shop();
	}
	$('#header .top .w .ri div.er a').click(function(){
		$.cookie('UserName',$.cookie('UserName'),{path:'/',expires:-1})
		location.href='denglu.html';
	})
//	//--------header_top部分  隐现 js
		$("#header .dd,#header .gz,#header .kf,#header .zc").on({
		mouseenter:function(){
			funn($(this));
		},
		mouseleave:function(){
			funn($(this));
		}
	});
	function funn(obj){
		obj.find(".hea_tp_js").stop().slideToggle();
	}
	//------------------------------header_down le部分   
	//------------div  隐现
		$("#header .down ul li").on({
			'mouseenter':function(){
				fun($(this));
				showi($(this));
			},
		'	mouseleave':function(){
				fun($(this));
				hidei($(this));
			}
		});
		function fun(obj){
			obj.find(".hea_down_js").toggle()
			obj.find('.mc:last').css({'border':'none'})
		}
		function showi(obj){
			obj.find('.xian i').stop().animate({width:80},500);
		}
		function hidei(obj){
			obj.find('.xian i').stop().animate({width:0},500);
		}
		//----------搜索框 js
		$('#header .down .ri').on({
			focusin:function(){
				$('#header .down .ri').animate({width:250,marginRight:20})
			},
			focusout:function(){
				$('#header .down .ri').animate({width:205,marginRight:65})
			}
		});
		//---------	菜单吸顶
		$(document).scroll(function(){
			var tp=$(document).scrollTop();
			if(tp>=$('#content').offset().top){
				$('#header .down').css({'position':'fixed','top':0,'z-index':5})		
			}else{
				$('#header .down').css({'position':'relative'})
			}
		});
		//-----------放大镜
		$('#content .top .le .jing').on({
			'mouseenter':function(ev){
				var eve=event||ev
				var lf=$('#content .top .le .jing').offset().left+100;
				var tp=$('#content .top .le .jing').offset().top+100;
				$('#content .top .le .jing .tou').show();
				$('#content .top .le .fd').show();
				$(document).on({
					'mousemove':function(ev){
						var eve=ev||event;
						var le=eve.clientX-lf;
						if(le<=0){
							le=0;
						}
						if(le>=202){
							le=202;
						}
						var to=$(document).scrollTop()+eve.clientY-tp;
						if(to<=0){
							to=0;
						}
						if(to>=202){
							to=202;
						}
						$('#content .top .le .jing .tou').css({'left':le,'top':to});
						$('#content .top .le .fd').css({'backgroundPositionX':-le*2,'backgroundPositionY':-to*2})
					}
				})
			},
			'mouseleave':function(){
				$('#content .top .le .jing .tou').hide();
				$('#content .top .le .fd').hide();
			}
		})
		//-----------跳转
		$('#content .down .ri .up li').click(function(){
			var s=$(this).index();
			$('#content .down .ri .up').nextAll().eq(s).show().siblings('div').hide()
		})
		//------------选项卡
		$('.fwq li').on({
			'mouseenter':function(){
				$(this).css({'background':'#fff'}).siblings('li').css({'background':'#f7f7f7'});
				$('#content .down .ri .bg div').eq($(this).index()).show().css({'display':'block'}).siblings('div').hide()
			}
		})
		
		
		
				//------------------fix_r---------------------------
$(window).resize(function(){
		$('#fix_r').css({'height':$(window).height()}).animate({right:0},1000);
});
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
	//此处原理  首先组织默认事件  
	//通过判断事件对象（event.target）是否为我们添加事件的对象  
	//如果不是  则不执行点击事件
	//如果是 执行   变相的组织冒泡事件
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
				 	console.log('ok')
				 }
				
			}
		})
	});

});
	//cookie
		function cookies(s){
			$.cookie("shop_cart",s,{path: "/", expires: 365});
			alert('加入购物车成功');
		}
	//delCookie
		function delCookie(s){
			$.cookie('UserName',s,{path: "/", expires:-2});
			$('#header .top .ri .dl').html('<span class="l">你好欢迎来到阳光海淘</span><a class="l" href="登录地址">请登录</a><a class="l" href="注册地址">免费注册</a>');
		}
function shop(){
	$('#list table tbody tr.last').siblings('tr').remove();
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
			var xj=b.pic*b.num;
			var sp=b.num;
			shu+=sp;
			zj+=xj;
			var tr=$('<tr>'
					+'<td><img class="l" src="'+b.ima+'">'+b.title+'</td>'
					+'<td>￥0.00</td>'
					+'<td><s>￥'+b.cost+'</s><br/><span>￥'+b.pic+'</span></td>'
					+'<td><a class="jian" href="###" onclick="jian('+b.id+')" >-</a><input type="text" value="'+b.num+'"><a class="jia" onclick="jia('+b.id+')" href="###">+</a></td>'
					+'<td>800g</td>'
					+'<td><span class="red">￥'+xj+'</span></td>'
					+'<td><a class="del" onclick="del('+b.id+')"></a><a class="xing"></a></td>'
					+'</tr>');
			$('#list table tbody tr.last').before(tr);
			
			$('#list table tbody .bk').html('合计（不含运费，不含税）：<span class="red">￥'+zj+'元</span>')
			
			var li=$('<li>'
					+'<img class="l" src="'+b.ima+'"/>'
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
			$('#fix_r .top .shop_cart .clk .bo div.dj span.r').html('￥'+zj)
			
}
function jian(s){
	console.log('ok')
	var str=$.cookie('shop'+s);
	var b=eval('('+str+')');
	var n=b.num;
	n--;
		
	
	$.cookie('shop'+s,'{"id":'+b.id+',"talk":"'+b.talk+'","ima":"'+b.ima+'","title":"'+b.title+'","pic":"'+b.pic+'","cost":"'+b.cost+'","num":'+n+'}',{path:'/',expires: 365});
	shop()
return false;
}
function jia(s,event){
	var str=$.cookie('shop'+s);
	var b=eval('('+str+')');
	var n=b.num;
	n++;
	$.cookie('shop'+s,'{"id":'+b.id+',"talk":"'+b.talk+'","ima":"'+b.ima+'","title":"'+b.title+'","pic":"'+b.pic+'","cost":"'+b.cost+'","num":'+n+'}',{path:'/',expires: 365});
	shop()
}
function del(s,event){
	event.stopPropagation();
	$.cookie('shop'+s,'',{path:'/',expries:-1});
	shop()
}



