$('#banner .big li').eq(i).css({'display':'block'}).stop().animate({opacity:1},1000).siblings().stop().animate({opacity:0},1000);

$('#banner .banner_nav_js li').find('i').css({'display':'none','width':'0'})
			
$('#banner .banner_nav_js li').find('i').eq(i).css({'display':'block'}).stop().animate({width:249},4000);