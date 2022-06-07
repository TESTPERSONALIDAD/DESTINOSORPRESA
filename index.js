window.onload = init;
function init(){

    
let cookie_butt = document.getElementById("cookie_acept");
let cookies_div = document.getElementById("cookies_div");

let cookie_value = localStorage.getItem('cookies');
if (cookie_value == 1){
    cookies_div.remove();
}

cookie_butt.addEventListener("click", function(){
    cookies_div.remove();
    localStorage.setItem('cookies', '1');
})


}

