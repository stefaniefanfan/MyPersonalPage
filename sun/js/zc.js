$(function(){
//------------返回顶部---------
	$('.ding').click(function(){
		console.log('ok')
		$(document).scrollTop(0)
	})
	//-----------获取焦点动作----------
	$('input').on({
		'focus':function(){
			$(this).parent('.user').next().find('.bg').show().siblings().hide();
		},
		'keyup':function(){
			$(this).parent('.user').next().find('.bg').hide()
		},
		'focusout':function(){
			$(this).parent('.user').next().find('.bg').hide();
		}
	});
	//----------表单验证动作-----------
	$('#userName').on({
		'focusout .a':function(){
			if($(this).val()!==''){
				zh();	
			}
		}
	});
	$('#pass').on({
		'focusout .a':function(){
			if($(this).val()!==''){
				mm();	
			}
		}
	});
	$('#pass1').on({
		'focusout .a':function(){
			if($(this).val()!==''){
					qr();		
			}
		}
	});
	//-----------提交动作------------
	$('#btn').on({
		'click .a':function(){
			if($('#yd').prop('checked')){
				var use=$('#userName').val()
				$.ajax({
					type:"get",
					url:"../json/user.txt",
					async:false,
					'success':function(msg){
						var obj=eval('('+msg+')').list;
						for(var i=0;i<obj.length;i++){
							if(use==obj[i].user){
								$('#userName').parent('.user').next().find('.chongfu').show();
								break;
							}else{
								var useflag=zh();
								var passflag=mm();
								var qrflag=qr();
								if(useflag&&passflag&&qrflag){
									alert('注册成功');
									location.href='denglu.html';
									break;
								}
							}
						}	
					}
				});

			}else{
				var w=$(document).width();
				var h=$(document).height();
				$('#bk').css({'display:':'block','top':0,'left':0,'width':w,'height':h,'zIndex':9})
				$('#bk').find('.win').css({'top':$(window).height()/2-100,'left':$(window).width()/2-100});
				$('#bk').click(function(){
					$('#bk').hide();
				})
			}
	 	}
	});
		//------------------fix_r 侧边栏部分---------------------------
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
	});
})
function zh(){
	var usz=/^[1][2458]{1}[0-9]{9}$/;
	var use=$('#userName').val();
	var flag=false;
	if(!usz.test(use)){
			$('#userName').parent().next().find('.red').show();
			flag=false;
		}else{
			$('#userName').parent().next().find('.red').hide();
			flag=true;
		}
		return flag;
}
function mm(){
	var psz=/^\w{6,20}$/;
	var psz1=/^[0-9]{6,20}$/
	var psz2=/^[a-z]{6,20}$/
	var psz2=/^(([0-9]{1,19}[a-zA-z]{1,19})||([a-zA-z]{1,19}[0-9]{1,19})){6,20}$/
	var pas=$('#pass').val();
	if(!psz.test(pas)){
		$('#pass').parent().next().find('.red').show();
		flag=false;
	}else{
		$('#pass').parent().next().find('.red').hide();
		flag=true;
	}
	return flag
}
function qr(){
	var flag;
	var pas1=$('#pass1').val();
	var pas=$('#pass').val();
	if(pas1==pas){
		$('#pass1').parent().next().find('.red').hide();
		flag=true;
	}else{
		$('#pass1').parent().next().find('.red').show();
		flag=false;
	}
	return flag
}
