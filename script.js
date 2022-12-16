let div = document.querySelector(".center");
let frame = document.querySelector("iframe");

// Time

let time = new Date();
let hours = time.getHours();
let min = time.getMinutes();
if(min < 10){
    min = "0"+min;
}
if(hours < 10){
    hours = "0"+hours;
}
document.querySelector('.time').innerText= hours +" : "+min +" | ";

// search

function search(){
    let key = document.querySelector(".search").value;
    let url  = "https://bing.com/search?q="+key;
    frameOn(url);
}
   //iframe
function frameOn(url){  
  frame.src=url;
   div.style.display="block";
}
