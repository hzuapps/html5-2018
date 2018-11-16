$(function(){
	$(".weui-textarea").keyup(function(){
		var i = $(this).val().length;
		$(".weui-textarea-counter span").text(i);
	});
	$("#showTooltips").click(function(){
		var data = $(".weui-textarea").val();
		if(data == ""){
			$(".weui-tab").hide();
			$(".weui-msg_warn").show();
		}else{
			$(".weui-tab").hide();
			$(".weui-msg_success").show();
		}
	});
	$(".weui-btn.weui-btn_default").click(function(){
		$(".weui-msg").hide();
		$(".weui-tab").css("display","block");
	});
});