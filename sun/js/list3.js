	
	/*
	
	*/
	window.onload=function(){
	  //1. 计算放大倍数
	  var scale= $("#bigPic").width()/ $("#smallPic").width();
	  // console.log($("#bigPic").width());
	  //2.设置并存储小可视区的宽、高
	  $("#smallCursor").css({width:$("#bigCursor").width()/scale,
	        height:$("#bigCursor").height()/scale});
      var smallCWidth= $("#smallCursor").width();
	  var smallCHeight= $("#smallCursor").height();
	  
	  // console.log(smallCWidth+" "+ smallCHeight +" "+scale);
	  //3. 设置小图的划入、划出事件
	  $("#smallPic").hover(f1,f2);
	  
	  //写事件函数
	  function f1(){
	    //显示小可视区，显示大可视区，调用小图mousemove事件
		$("#smallCursor").show();
		$("#bigCursor").show();
		$("#smallPic").mousemove(f3);
	  }
	  function f2(){
	    $("#smallCursor").hide();
		$("#bigCursor").hide();
	  }
	  function f3(e){
	    var left= e.pageX- $("#smallPic").offset().left- smallCWidth/2;
		var top = e.pageY-$("#smallPic").offset().top- smallCHeight/2;
		
		if(left<0){
		  left = 0;
		}else if(left>$("#smallPic").width()-$("#smallCursor").width()){
		  left=$("#smallPic").width()-$("#smallCursor").width();
		}
		if(top<0){
		  top = 0;
		}else if(top>$("#smallPic").height()-$("#smallCursor").height()){
		  top=$("#smallPic").height()-$("#smallCursor").height();
		}
		
		//设置小可视区的位置 和 大图的 位置
		$("#smallCursor").css({left:left,top:top});
		$("#bigPic").css({left:-left*scale,top:-top*scale});
	  }
	}
