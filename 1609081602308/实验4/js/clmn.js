function changeColor() {
  for (i= 0; i<4;i++){
    if (form1.color[i].checked){
      document.body.style.background=form1.color[i].value;
    }
  }
}

