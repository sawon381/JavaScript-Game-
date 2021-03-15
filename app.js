

var charecter = document.querySelector('#charecter'); 
var block = document.querySelector('#block'); 


function jump(){
    if(charecter.classList != "animate"){
        charecter.classList.add('animate');
    }

    setTimeout (function(){
        charecter.classList.remove('animate');
    },500)
}



var checkeDed = setInterval(() => {
    var charecterTop = parseInt(window.getComputedStyle(charecter).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft > 0 && charecterTop >= 130){ 
        block.style.animation = "none";
        block.style.display = "none";
        alert('You Lose');
    }
}, 10);











