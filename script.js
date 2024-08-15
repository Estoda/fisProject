
let cImg = document.getElementById("cImg");
let setImg = document.getElementById("setImg");
let title= document.getElementById("title");
let det = document.getElementById("det");
let send = document.getElementById("send");
let content = document.getElementById("content");
let type = document.getElementById("type");





let photos = ["photos/dollar.jpg","photos/syasa.jpg", "photos/egypt.jpg", "photos/ahly.jpg"];
let links = ["#d", "#c", "#b", "#a"];

cImg.setAttribute("href", links[0]);
let b = 0;
let count = setInterval(changeImg,1000);
function changeImg(){
    let a = photos.length;
    b += 1;
    
    if(b == a){
        b = 0;
    }
    // img.setAttribute("src", photos[b]);
    cImg.innerHTML = "<img src=" + photos[b] + " id='img'>";
    cImg.setAttribute("href", links[b]);
}

function addItem(){
    content.innerHTML += "<div class='" + type.value + "'> <div class='one'> <p> " + title.value + "</p> </div> <div class='two'></div> <div class='three'> <p>"+det.value+"</p> </div> </div>";
    // alert(type.innerHTML);
}


