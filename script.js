"use strict"

var anchors = document.getElementsByClassName("m-link");
var burger = document.getElementById("burger");


for(var x of anchors){
    x.addEventListener("click", function(){
        for(var x of anchors){
            x.classList.remove("selected");
        }
        this.classList.add("selected");
    })
}

burger.addEventListener("click", function(){
    for(var x of anchors){
        x.classList.toggle("block");
        x.classList.remove("selected");
    }
    this.classList.toggle("rotate");
});

//change or resize
window.addEventListener("resize", function(){
    for(var x of anchors){
        x.classList.remove("block");
        x.classList.remove("selected");
    }
    burger.classList.remove("rotate");
})


//Swiper tabs

var buttons = document.getElementsByTagName("button");

for (var x of buttons){
    x.addEventListener("click", function(){
        for (var y of buttons){
            y.classList.remove("active");;
        }
        for(var x of buttons){
            x.classList.remove("selected");
        }
        this.classList.add("selected");
        this.classList.add("active");
        var index = this.getAttribute("index");
        swiper1.slideTo(index, 1000);
    })
}
