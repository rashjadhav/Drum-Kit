for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var drumbutton = this.innerHTML;
        all(drumbutton);
        buttonanimation(drumbutton);
    });

    document.addEventListener('keydown', function(event)  {
       
         all(event.key);
         buttonanimation(event.key);
    });

    function all(key){
        switch (key) {

            case "w":
                var myAudio = new Audio('dhum.mp3');
                myAudio.play();
                break;
            case "a":
                var myAudio = new Audio('dhum6a.mp3');
                myAudio.play();
                break;
            case "s":
                var myAudio = new Audio('dhadal.mp3');
                myAudio.play();
                break;
            case "d":
                var myAudio = new Audio('waterdrop.mpeg');
                myAudio.play();
                break;
            case "j":
                var myAudio = new Audio('cymbal.mp3');
                myAudio.play();
                break;
            case "k":
                var myAudio = new Audio('hi-hat.mp3');
                myAudio.play();
                break;
            case "l":
                var myAudio = new Audio('cymbal-slide.mp3');
                myAudio.play();
                break;
    
            default: console.log("hi");
    
    
        }
    }
    

    function buttonanimation(key){
        var activebutton= document.querySelector("." + key);
        activebutton.classList.add("pressed");

        setTimeout (function(){
            activebutton.classList.remove("pressed");
        },100);
    }
}
