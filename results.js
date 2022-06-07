window.onload = init;
function init(){

var url = window.location.href;
console.log(url);

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

let value = params.val; // "some_value"


let tittle_text = document.getElementById("title");
let subtittle_text = document.getElementById('subtitle');
let desc_text = document.getElementById('desc');
let imagen = document.getElementById('imagen');
tittle_text.innerHTML = "Resultados:"

let body = document.getElementById("body");

switch (value) {

    case "1":
        subtittle_text.innerHTML = silver[0];
        desc_text.innerHTML = silver[1];
        body.style.backgroundImage = "url('result_images/s_b.jpg')";
        imagen.src = "result_images/s_p.jpeg"
        break;
    case "2":
        subtittle_text.innerHTML = platinum[0];
        desc_text.innerHTML = platinum[1];
        body.style.backgroundImage = "url('result_images/pl_b.jpeg')";
        imagen.src = "result_images/pl_p.jpeg"
        break;
    case "3":
        subtittle_text.innerHTML = gold[0];
        desc_text.innerHTML = gold[1];
        body.style.backgroundImage = "url('result_images/g_b.jpeg')";
        imagen.src = "result_images/g_p.jpeg"
        break;

    case "4":
        subtittle_text.innerHTML = premium[0];
        desc_text.innerHTML = premium[1];
        body.style.backgroundImage = "url('result_images/pr_b.jpeg')";
        imagen.src = "result_images/pr_p.jpeg"
        break;
}

}




//edwre