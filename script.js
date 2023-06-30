document.querySelectorAll('.drum').forEach((drumBeat)=>{
    let key=drumBeat.innerHTML;
   drumBeat.addEventListener('click',()=>{
    makeSound(key);
   })
   
})


document.addEventListener('keypress',(event)=>{
    makeSound(event.key);
})
function makeSound(key){
    let audio;
    switch (key) {
        case "w":
            audio = new Audio("beats/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("beats/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("beats/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("beats/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("beats/crash.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("beats/kick.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("beats/snare.mp3");
            audio.play();
            break;
        default: console.log("not clicked on any drum");
            break;
        }
}