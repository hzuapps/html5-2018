window.onload = function () {
    var text = document.getElementById("text");
    var btn = document.getElementById("subBtn");
    btn.onclick = function () {
        var content = text.value;
        if(content=="") {
            alert("内容为空，请继续输入");
            return false;
        }
        else
            this.submit();
    }
}