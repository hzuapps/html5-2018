window.onload = function(){
    document.getElementById('send1').addEventListener("submit",function(e){
        console.log(e); 
        var messObj = document.getElementById("send2");

        alert(messObj.value);
        if (messObj.value == "") {
            alert("You did not type");
            if (e && e.preventDefault) { 
                e.preventDefault(); 
            }else{
                window.event.returnValue= false;
            }
        }else{
            alert(messObj.value);

            if (confirm("You entered:"+messObj.value)) {
                this.submit();
            }
        }
    },false);
}
function submit () {
    return false;
}