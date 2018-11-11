$(function(){
	//关闭提示框
    $('#dialogs').on('click', '.weui-dialog__btn', function(){
            $(this).parents('.js_dialog').fadeOut(100);
        });

    $('#showTooltips').on('click', function(){
    	//对文字域进行取值
    	var num = $('#textNumber').val();
    	var $weDialog = $('#weDialog');

    	//为空状况
    	if (num == "") {
    		$weDialog.fadeIn(100);
    	}
    	//不为空状况
    	else{
    		var $successTip = $('#successTip');
            if ($successTip.css('display') != 'none') return;
            $successTip.fadeIn(100);
            setTimeout(function () {
                $successTip.fadeOut(100);
            }, 2000);
    	}
    });
});