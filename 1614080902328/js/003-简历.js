window.onload = function () {


    // $(function(){
    //     var $toast = $('#toast');
    //     $('#showToast').on('click', function(){
    //         if ($toast.css('display') != 'none') return;
    //
    //         $toast.fadeIn(100);
    //         setTimeout(function () {
    //             $toast.fadeOut(100);
    //         }, 2000);
    //     });
    // });


    $(function(){
        var $iosDialog2 = $('#iosDialog2');
        $('#iosDialog2').on('click', '.weui-dialog__btn', function(){
            $(this).parents('.js_dialog').fadeOut(200);
        });

        $('#showToast').on('click', function(){
            var num = $('#text').val();
            if(num=="")
            {$iosDialog2.fadeIn(100);
            }
            else
            {
                var $toast = $('#toast');
                if ($toast.css('display') != 'none') return;
                    $toast.fadeIn(100);
                    setTimeout(function () {
                        $toast.fadeOut(100);
                    }, 2000);
            }
        });

    });



}