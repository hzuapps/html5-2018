/*链接和参数*/
function createURL( url, obj ) {
  let props = "";
  let resultURL="";  
  for(let p in obj){  
    if(obj[p])
    props+= "&"+p + "=" + obj[p];  
  }
  resultURL=url+"?"+props.substr(1);
  console.log(resultURL);
  return resultURL;  
}

//提取关键数据
function createURL2(url,obj){
  let params = obj.forecast[0];
  params.aqi = obj.aqi;
  params.city = obj.city;
  params.wendu = obj.wendu;
  params.ganmao = obj.ganmao;
  
  let props = "";
  let resultURL = "";  
  for (let p in params) {
    if (params[p])
      props += "&" + p + "=" + params[p];
  }
  resultURL = url + "?" + props.substr(1);
  console.log(resultURL);//控制台输出重构后的URL
  return resultURL; 
}

function getDate(){
  //获取当前时间
  var date = new Date();
  var year = date.getFullYear();//2015
  var mon = date.getMonth()+1;//月    月份的范围是从0~11,所以获得的月份要加1才是当前月
  var day = date.getDate();//21
  var hours = date.getHours();//10
  var min = date.getMinutes();//36
  var sec = date.getSeconds();//25
  var week = date.getDay(); //星期几
  return year+"/"+mon+"/"+day+" "+hours+":"+min+":"+sec;
}

//暴露接口
module.exports = {
  createURL: createURL,
  createURL2: createURL2,
  getDate: getDate
}