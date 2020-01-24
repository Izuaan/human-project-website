var spinningloader = document.getElementById("spinningloader");
var featureSubmitBtn = document.getElementById("featureSubmitBtn");

featureSubmitBtn.addEventListener("click", function(){
    spinningloader.classList.remove("human-hidden");
})

var mustremoveform = document.getElementById("mustremoveform");

featureSubmitBtn.addEventListener("click", function(){
    mustremoveform.classList.add("human-hidden");
})