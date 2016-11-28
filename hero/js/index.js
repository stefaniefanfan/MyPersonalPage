// var otab=document.getElementById('tab');
// 		var oul=document.getElementById('tabul');
// 		var oli=oul.getElementsByTagName('li');
// 		var odiv=otab.getElementsByTagName('div');
// 		for(var i=0;i<oli.length;i++){
// 			oli[i].index=i;
// 			oli[i].onmouseover=function (){
// 				for(var i=0;i<oli.length;i++){
// 					oli[i].className='';
// 					odiv[i].style.display="none";
// 				}	
// 				this.className="active";
// 				// alert(this);
// 				odiv[this.index].style.display="block";
// 	 		}
// 		}		


	var tabtn=$('#tabul');
		tabtn.mytab({
		etarget:'#tab',
		eclassname:'active',
		
		})

		$('.videobtn').mytab({
		etarget:'.videocon'
		})
		$('.skbtn').mytab({
		etarget:'.skcont'
		})
	
	$('.bbtn').myfocus({
		etarget:'.bcon'
	})
	$('.xiabtn').mytab({
		etarget:'.xiacon'
		})
	 
	
	

	
	
	

	

	
	




















	// var $focuswrap=getClass('focus-wrap')[0];
	// $focuswrap.myFocus({
	// 		focusimg:'focus-content',
	// 		focusbtn:'focus-button',
	// 	 	playtime:2000
	// 	 })

	// var $tabwrap=getClass('tab-button');
	// var $tabcontent=getClass('tab-content');
	// for(var i=0;i<$tabwrap.length;i++){

	// 	$tabwrap[i].myTab('mouseover',$tabcontent[i],'LI','act');
	// }
	
	// var $weixinpic=getClass('weixinpic')[0];
	// var $weixinbutton=getClass('weixinbutton')[0];
	
	// $weixinbutton.onmouseover=function(){
	// 	$weixinpic.style.display='block';
	// }
	// $weixinbutton.onmouseout=function(){
	// 	$weixinpic.style.display='none';
	// }
	// 