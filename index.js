function makeSound(key){
    switch (key){
        case "w" :
            var sound = new Audio('sounds/tom-1.mp3');
            sound.play();
            console.log(key);
            break;

        case "a" :
            var sound = new Audio('sounds/tom-2.mp3');
            sound.play();
            console.log(key);
            break;

        case "s" :
            var sound = new Audio('sounds/tom-3.mp3');
            sound.play();
            console.log(key);
            break;

        case "d" :
            var sound = new Audio('sounds/tom-4.mp3');
            sound.play();
            console.log(key);
            break;

        case "j" :
            var sound = new Audio('sounds/snare.mp3');
            sound.play();
            console.log(key);
            break;

        case "k" :
            var sound = new Audio('sounds/crash.mp3');
            sound.play();
            console.log(key);
            break;

        case "l" :
            var sound = new Audio('sounds/kick-bass.mp3');
            sound.play();
            console.log(key);
            break;

    }
}

function animate(key) {
    var pressedKey = document.querySelector("." + key);

    pressedKey.classList.add("pressed");

    setTimeout(function(){
        pressedKey.classList.remove("pressed");
    } , 200)
}

document.addEventListener("keydown" , function(event){
        makeSound(event.key);
        animate(event.key);
});


var noOfDrum = document.getElementsByClassName("drum").length;

for(var i = 0 ; i<noOfDrum ; i++){
    document.getElementsByClassName("drum")[i].addEventListener("click" , function(){
        makeSound(this.innerHTML);
        animate(this.innerHTML);
    });
}
