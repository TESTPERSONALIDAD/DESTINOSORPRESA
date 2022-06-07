window.onload = init;
function init(){

//Magia
let question_text = document.getElementById("question");
let slider = document.getElementById("slider");
let contbutt = document.getElementById("cont_butt");
let body = document.getElementById("body");


let gold_punt = [0,3];
let premium_punt = [0,4];
let silver_punt = [0,1];
let platinum_punt = [0,2];

question_text.innerHTML = question_array[0];
i = 0;
loadback(i);


contbutt.addEventListener("click", function(){
        
        //Answer code
        value_selected = slider.value - 3;
        

        if (silver[2][i] == "a"){
            silver_punt[0] +=  value_selected;
        }else{
            silver_punt[0] +=  -1*value_selected;
        }

        if (platinum[2][i] == "a"){
            platinum_punt[0] +=  value_selected;
        }else{
            platinum_punt[0] +=  -1*value_selected;
        }

        if (gold[2][i] == "a"){
            gold_punt[0] +=  value_selected;
        }else{
            gold_punt[0] +=  -1*value_selected;
        }

        if (premium[2][i] == "a"){
            premium_punt[0] +=  value_selected;
        }else{
            premium_punt[0] +=  -1*value_selected;
        }


        i += 1;
        if (i == question_array.length){
            present_results()
        }
        //Question construction code
        loadback(i);
        question_text.innerHTML = question_array[i];        

});


function present_results(){
    i = 0;
    
    final_array = [silver_punt,gold_punt,premium_punt,platinum_punt];
    result = final_array[0];
    for (var y = 0; y < final_array.length ; y++) {
        if (result[0] <= final_array[y][0]){
            result = final_array[y];
        }
    }
    window.location.href = "results.html?val=" + result[1];


}

function loadback(i){
    body.style.backgroundImage = "url('background_photos/"+i+".jpg')";

}


}
