var images = Array.from(document.querySelectorAll("img"));
var img = document.getElementById("cardSliderImage");
var containerLight = document.getElementById("light");
var iconX = document.getElementById("iconX");
var iconR = document.getElementById("iconR");
var iconL = document.getElementById("iconL");

var index;
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function (e) {
        img.setAttribute('src', e.target.src);
        containerLight.classList.remove("d-none");
        index = images.indexOf(e.target);
    }, true);
}
document.addEventListener('keydown', function(e){
    if(e.key == "ArrowRight")
    {
       nextSlide()
    }else if(e.key == "ArrowLeft"){
       prevSlide();
    }else if(e.key == "Escape")
    {
      closeSlider();
    }
});

iconR.addEventListener('click', nextSlide);

iconL.addEventListener('click', prevSlide);

iconX.addEventListener('click', closeSlider);

function closeSlider(){
        containerLight.classList.add("d-none");
}

function nextSlide() {
    if (index == (images.length - 1)) {
        index = 0;
        img.setAttribute('src', images[index].src);
    } else {
        index++;
        img.setAttribute('src', images[index].src);
    }
}
function prevSlide() {
    if (index == 0) {
        index = images.length - 1;
        img.setAttribute('src', images[index].src);
    } else {
        index--
        img.setAttribute('src', images[index].src);
    }
}