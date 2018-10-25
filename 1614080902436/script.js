function $(id){
	return typeof id=='string'?document.getElementById(id):id;
}
function startChange(obj,attr,target,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		if(attr=='opacity'){
			//parsenFloat取出小数后 立即round则为0
			//故需要*100后再round取整
			var icur = Math.round(parseFloat(getStyle(obj,attr))*100);
		}	
		else
			var icur=parseInt(getStyle(obj,attr));
		var speed = (target-icur)/8;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);
		if(icur==target){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
		else{
			if(attr=='opacity')
				obj.style[attr]=(icur+speed)/100;
			else 
				obj.style[attr]=icur+speed+'px';
		}
		
	},30);
}
function getStyle(o,attr){
	if(o.currentStyle)
		return o.currentStyle[attr];
	else
		return getComputedStyle(o,false)[attr];
}