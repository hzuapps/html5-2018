$(function () {
    var flag = true
    var hides
    /*
     * 绑定背景换色按钮，用回调函数执行换色功能
     * @flag 标志颜色状态
     */
    $('#bg-change').on('click', function(){
        var $page = $('#page')
        if(flag){
            $page.css('background-color', '#fff2e7')
            flag = !flag
        }else {
            $page.css('background-color', '')
            flag = !flag
        }
    })

    //文本域字数统计
    $('#cont').on('keyup', function () {
        var $val = $('#cont').val()
        var $sum = $val.length
        if($sum >= 200){
            $('#cont').val($val.substring(0,200))
        }
        $('#sum').text($('#cont').val().length)
    })

    /*
     * 绑定提交按钮，判断内容是否为空，给出提示
     * @hides 隐藏所有提示的setTimeout
     */
    $('#submit').on('click', function(){
        var $val = $('#cont').val()
        //当内容为空时不发送请求
        if($val.length){
            $.ajax({
                type: 'GET',
                url: '/projects',
                data: { comment: $val  },
                dataType: 'json',
                timeout: 300,
                context: $('body'),
                success: function(data){
                    this.append(data.project.html)
                },
                error: function(xhr, type){
                    alert('Ajax error!')
                }
            })
        }
        clearTimeout(hides)
        var $isOk = $('#is-ok')
        var $isNotOk = $('#is-not-ok')
        if($('#cont').val()){
            $isOk.css('display', 'block')
        }else {
            $isNotOk.css('display', 'block')
        }
        hides = setTimeout(function () {
            $isOk.css('display', 'none')
            $isNotOk.css('display', 'none')
        },2000)
    })
})