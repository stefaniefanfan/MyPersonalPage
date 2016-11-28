$(function(){
//------------返回顶部---------
	$('.ding').click(function(){
		console.log('ok')
		$(document).scrollTop(0)
	})
	//---------登陆按钮----------验证账号密码---------
	$('#btn2').click(function(){
		var use=$('#userName').val();
		var pas=$('#password').val();
		var flag;
		$.ajax({
			type:"get",
			url:"../json/user.txt",
			async:false,
			success:function(msg){
				var s=eval('('+msg+')');
				var n=s.list.length;
				for(var i =0;i<n;i++){
					if(s.list[i].user==use&&s.list[i].pass==pas){
						flag=true;
						console.log('ok')
						ddll();
						break;
					}else{
						flag=false;
						$('#content .con i.first').show();
					}
				}
			}
		});
		//--------对自动登陆的判断及动作--------------
		function ddll(){
			var s=$('#zd').prop('checked');
			if(s&&flag){
				$.cookie('UserName',use,{path: "/", expires: 7});
				$.cookie('pass',pas,{path: "/", expires: 7});
				location.href='../index.html';
			}else{
				$.cookie('UserName',use,{path: "/", expires: ''});
				$.cookie('pass',pas,{path: "/", expires: ''});
				location.href='../index.html';
			}
		};
	});
	
	
//------------------fix_r-----侧边栏--详细注释见--index.js------------------
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
			'click':function(){
				if($(this).find('.clk').css('display')=='block'){
					
					$(this).find('.clk').animate({left:36},function(){
						$(this).css({'display':'none'})
					})
				}else{	
					$(this).find('.clk').css({'display':'block'}).animate({left:-320})
				}
			}
		})
	})
})
