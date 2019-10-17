var x = document.getElementById("img");
document.addEventListener("mousemove",function(e){
    console.log(e);
    x.style.left = e.pageX;
    x.style.top = e.pageY;
})