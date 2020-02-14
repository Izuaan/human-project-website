var spinningloader = document.getElementById("spinningloader");
var featureSubmitBtn = document.getElementById("featureSubmitBtn");

featureSubmitBtn.addEventListener("click", function () {
    spinningloader.classList.remove("human-hidden");
})

var mustremoveform = document.getElementById("mustremoveform");

featureSubmitBtn.addEventListener("click", function () {
    mustremoveform.classList.add("human-hidden");
});

async function onfeatureLoad(){
    var response = await fetch("http://localhost:4967/api/features");
    var result = await response.json();
    var feature1 = result[0];
    var feature2 = result[1];
    var feature3 = result [2];

    console.log(feature1);
    console.log(feature2);
    
    var featureList = document.getElementById("featurelist");
    for ( var i =0 ; i < result.length; i++){
        var lieliment = document.createElement("li");
        lieliment.innerHTML = result[i].body + " " + '<span class = "badge badge-success">' + result[i].author + ", " + result[i].time + "</span";  
        
        featureList.appendChild(lieliment);
        lieliment.className= "list-group-item";

    }
}

onfeatureLoad();
