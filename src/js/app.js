/*汽车运动 */
function sec(){
	setTimeout(function(){
		$(".carmove").addClass("carmove2");
		$(".zh").addClass("carmove2");
		$(".xzline").addClass("carmove2");
		setTimeout(function(){
			$(".xz").addClass("carmove2");
			$(".carmove").addClass("carmove3");
			setTimeout(function(){
				$(".xz").addClass("carmove3")
				$(".carmove").removeClass("carmove3");
				$(".carmove").addClass("carmove4");
				setTimeout(function(){
					$(".carmove").removeClass("carmove4");
					$(".carmove").addClass("carmove5");
					$(".fylline").addClass("carmove4")
					setTimeout(function(){
						$(".fyl").addClass("carmove5")
						setTimeout(function(){
							$(".fyl").removeClass("carmove5")
							$(".carmove").removeClass("carmove5");
							$(".carmove").addClass("carmove6");
							$(".ashline").addClass("carmove5");
							setTimeout(function(){
								$(".ahh").addClass("carmove6")
								setTimeout(function(){
									$(".ahh").removeClass("carmove6")
									$(".carmove").removeClass("carmove6");
									$(".carmove").addClass("carmove7");
									$(".mzdline").addClass("carmove6");
									setTimeout(function(){
										$(".msh").addClass("carmove7")
										setTimeout(function(){
											$(".msh").removeClass("carmove7")
											$(".carmove").removeClass("carmove7");
											$(".carmove").addClass("carmove8");
											$(".qxlhline").addClass("carmove8");
											setTimeout(function(){
												$(".qxlh").addClass("carmove8")
												setTimeout(function(){
													$(".qxlh").removeClass("carmove8")
													$(".carmove").removeClass("carmove8");
													$(".carmove").addClass("carmove9");
													$(".toahhline").addClass("carmove9");
													setTimeout(function(){
														$(".carmove").removeClass("carmove9");
														$(".carmove").addClass("carmove10");
													},1000)
												},2000)
											},1000)
										},2000)
									},1000)
								},2000)
							},1000)
						},2000)
					},1000)
				},1000)
			},2000)
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
    /*提交数据*/
    $.ajax({
	  url: url,
	  dataType: 'json',
	  data: {
	  	name:$("#theName").val(),
	  	phone:$("#thePhone").val()
	  },
	  success: function(res){
	  	switch (res.code){
	  		case 0:
		  		/*不在名单内*/
		  		alert("对不起，您不是斯巴鲁华南地区3月份的购车用户，无法参加该活动")
		  		break;
		  	case 1:
		  		/*已经抽过奖*/
		  		$("#noreward").show();  //没中奖显示
		  		$("#reward").show();  //中奖显示
		  		break;
		  	case 2:
		  		// 符合条件第一次抽奖用户
		  		$("#info").hide();
				$("#carSelect").show();
				break;
	  	}
	  	
	  }
	});
	
})
// 抽奖
$(".selectcar").click(function(){
	$.ajax({
	  url: url,
	  dataType: 'json',
	  data: {
	  	name:$("#theName").val(),
	  	phone:$("#thePhone").val()
	  },
	  success: function(res){
	  	switch (res.code){
	  		case 1:
		  		/*已经中过奖*/
		  		$("#reward").show();
		  		break;
		  	case 1:
		  		/*没中奖*/
		  		$("#noreward").show();  //没中奖显示
		  		break;
		  	case 2:
		  		// 中奖
		  		$("#reward").show();
				break;
	  	}
	  	
	  }
	});
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