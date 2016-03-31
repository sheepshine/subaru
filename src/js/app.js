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

/*参加活动*/
$(".join").click(function(){
	if(!$("#theName").val()){
		alert("请输入您的名字");
		return false;
	}
	if(!$("#thePhone").val()){
		alert("请输入您的电话")
		return false;
	}
	var tel=$("#thePhone").val()
	var telReg = !!tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/);
    //如果手机号码不能通过验证
    if(telReg == false){
        alert("请输入正确的手机号码");
        return false
    }
	$("#info").hide()
	$("#carSelect").show()
})
$(".selectcar").eq(1).click(function(){
	$("#reward").show()
})
$(".selectcar").eq(2).click(function(){
	$("#noreward").show()
})
$(".knowBtn").click(function(){
	$("#QRcode").show()
})
$(".rankbtn").click(function(){
	$(".rankwarp").show()
})
$(".rankwarp").click(function(){
	
	$(".rankwarp").hide()
})
$(".ranklist").click(function(event){
	event.stopPropagation();
})