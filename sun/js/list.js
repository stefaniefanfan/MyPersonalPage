
$(function(){
	//---------判断是登录状态---------
	pd();
	//------------返回顶部---------
	$('.ding').click(function(){
		$(document).scrollTop(0);
	});
//	//-----------header_top部分  隐现 js--------
	$("#header .dd,#header .gz,#header .kf,#header .zc").on({
		'mouseenter':function(){
			funn($(this));
		},
		
		'mouseleave':function(){
			funn($(this));
		}
	});
	function funn(obj){
		obj.find(".hea_tp_js").stop().slideToggle();
	}
	//------------------------------header_down le部分   
	//div  隐现
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
		obj.find(".hea_down_js").toggle()
		obj.find('.mc:last').css({'border':'none'})
	}
	function showi(obj){
		obj.find('.xian i').stop().animate({width:80},500);
	}
	function hidei(obj){
		obj.find('.xian i').stop().animate({width:0},500);
	}
	//搜索框  ----------------------- js
	$('#header .down .ri').on({
		focusin:function(){
			$('#header .down .ri').animate({width:250,marginRight:20})
		},
		focusout:function(){
			$('#header .down .ri').animate({width:205,marginRight:65})
		}
	});
		//----------------菜单吸顶
	$(document).scroll(function(){
		var tp=$(document).scrollTop();
		if(tp>=$('#content').offset().top){
			$('#header .down').css({'position':'fixed','top':0,'z-index':5})		
		}else{
			$('#header .down').css({'position':'relative'})
		}
	});
		
		//动态 获取  创建 
	$.ajax({
		type:"get",
		url:"../json/json.txt",
		async:false,
		success:function(msg){
			var obj=eval('('+msg+')')
			var chosenum=obj.cosmetic.choose.length;
			var facenum=obj.cosmetic.face.length;
			var bdynum=obj.cosmetic.bdy.length;
			var hairnum=obj.cosmetic.haire.length;
			var mounum=obj.cosmetic.mouth.length;
			
			var li4=chulai(mounum,obj.cosmetic.mouth);
			var li3=chulai(hairnum,obj.cosmetic.haire);
			var li2=chulai(bdynum,obj.cosmetic.bdy);
			var li1=chulai(facenum,obj.cosmetic.face);
			var li=chulai(chosenum,obj.cosmetic.choose);
				
			$('#content .mou ul').append(li4);
			$('#content .hair ul').append(li3);
			$('#content .shenti ul').append(li2);
			$('#content .face ul').append(li1);
			$('#content .tuijian ul').append(li);
		}
	});
		//循环创建函数
	function chulai(num,v){
		var s=[];
		for(var i=0;i<num;i++){
		var li=$('<li><img src="'+v[i].ima+'"><div class="xia"><p>'+v[i].title+'</p><span class="xy">'+v[i].talk+'</span><span class="l red">￥'+v[i].pic+'</span><s class="l">市场价'+v[i].cost+'</s><span class="r"><a href="###" onclick="cookies('+v[i].id+')">立即购买</a></span></div></li>');
		s.push(li);
		}
		return s;
	}
	
	//侧边栏 购物车  查看更多的跳转			
	$('#fix_r .top .shop_cart .clk .up a.r').click(function(){
		location.href="shop_cart.html";
	});
	//侧边栏 登录页面的跳转
	$('#fir_r .top .user .fix_r_js .bt .btt a.a1').click(function(){
		location.href="denglu.html";
	});
	
	
	
	
	
	
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
							$(this).css({'display':'none'});
						});
					}else{	
						$(this).find('.clk').css({'display':'block'}).animate({left:-320})
					}
				 }
				 else{
				 }
			}
		});
	});

});

	//-----------------------cookie写入-------------
		function cookies(s){
			$.ajax({
				type:"get",
				url:"../json/json.txt",
				async:true,
				success:function(msg){	
					var obj=eval('('+msg+')').cosmetic;
					var num;
					for(var i in obj){
						for(var j=0;j<obj[i].length;j++){
							if(obj[i][j].id==s){
								if($.cookie('shop'+s)){
									var n=eval('('+$.cookie("shop"+s)+')').num	
									n++;
									$.cookie('shop'+s,'{"id":'+obj[i][j].id+',"talk":"'+obj[i][j].talk+'","ima":"'+obj[i][j].ima+'","title":"'+obj[i][j].title+'","pic":"'+obj[i][j].pic+'","cost":"'+obj[i][j].cost+'","num":'+n+'}',{path:'/',expires: 365});
								}else{
									num=1;	
									$.cookie('shop'+s,'{"id":'+obj[i][j].id+',"talk":"'+obj[i][j].talk+'","ima":"'+obj[i][j].ima+'","title":"'+obj[i][j].title+'","pic":"'+obj[i][j].pic+'","cost":"'+obj[i][j].cost+'","num":'+num+'}',{path:'/',expires: 365});
								}
							}
						}
					}
					shop();
					alert('加入购物车成功')
				}
			});		
		}
	//delCookie
		function delCookie(s){
			$.cookie('UserName',s,{path: "/", expires:-2});
			$('#header .top .ri .dl').html('<span class="l">你好欢迎来到阳光海淘</span><a class="l" href="登录地址">请登录</a><a class="l" href="注册地址">免费注册</a>');
		}
function shop(){
	//清空购物车内容
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
			//侧边栏购物车写入
			var li=$('<li>'
					+'<img class="l" src="'+b.ima+'"/>'
					+'<span class="p1">'+b.title+'</span>'
					+'<div><span class="red">￥'+b.pic+'</span></div>'
					+'<a class="del" onclick="del('+b.id+')"></a><a class="jia r" href="###" onclick="jia('+b.id+')" >+</a><input class="r" type="text" value="'+b.num+'"><a class="jian r" onclick="jian('+b.id+')" href="###">-</a>'
					+'</li>');
			$('#fix_r .top .shop_cart .clk .bo ul').append(li);
			
		}
	}	
	//判断如果是否有购物信息
 			if(l==0){
				$('#list table').hide();
				$('#content h3').show();
			}
			$('#fix_r .top .shop_cart span.biaozhi').html(l);
			$('#fix_r .top .shop_cart .clk .bo div.dj span.l').html('共'+shu+'件');
			$('#fix_r .top .shop_cart .clk .bo div.dj span.r').html('￥'+zj)
			
}

//----------------------登录状态栏  函数------------
	function pd(){
		if($.cookie('UserName')){
			$('#header .top .w .ri div.er').show().find('span').html("欢迎"+$.cookie('UserName')+"");
			$('#header .top .w .ri div.yi').hide();
			shop();
		}
		//---------退出动作---------
		$('#header .top .w .ri div.er a').click(function(){
			$.cookie('UserName',$.cookie('UserName'),{path:'/',expires:-1})
			location.href='denglu.html';
		});
		shop();
	}
	//------add---
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