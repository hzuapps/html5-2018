function changeColor(){
		for (i = 0;i < 4; i++) 
        if (forml.color[i].checked) {
		document.body.style.background=forml.color[i].value;
		}
	}