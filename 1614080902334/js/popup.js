$(function(){
    $('#errorMsg').on('click', '.weui-dialog__btn', function(){
            $(this).parents('.js_dialog').fadeOut(100);
        });
     $('#submit').on('click', function(){
    	var textVal = $('#bbs').val();
    	var $weDialog = $('#weDialog');
    	if (textVal == "") {
    		$weDialog.fadeIn(100);
    	}
    	else{
            var $successMsg = $('#successMsg');
            if ($successMsg.css('display') != 'none') return;
            $successMsg.fadeIn(100);
            setTimeout(function () {
                $successMsg.fadeOut(100);
            }, 2000);
    	}
    });
}); 