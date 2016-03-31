/*汽车运动*/
function sec(){
	setTimeout(function(){
		$(".carmove").addClass("carmove2");
		$(".zh").addClass("carmove2");
		$(".xzline").addClass("carmove2");
		setTimeout(function(){
			$(".xz").addClass("carmove2");
		},1000)
		
	},2000)
}