// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3'); 
const kick = new Audio('sounds/kick-drum.mp3');
const hihat = new Audio('sounds/hi-hat.mp3');
const snare = new Audio('sounds/snare-drum.mp3');

// Variable to keep track of current metronome count
let count = 0; 

// This function is called every 600ms
function update() {

    //Add one to the count 
    count++;

    // Condition that plays 'tock' on the 4th beat 
    const metronomeCount = (count % 4) + 1;
    
    if(metronomeCount === 4) {
        tock.play();
    }
    
    

    // Play the 'tick' sound
    tick.play();
    
    // Get current metronome count
    const metronome = document.querySelector('.MetronomeBox');
    metronome.innerHTML = 'Metronome count:' + metronomeCount ; 
    console.log('count', metronomeCount); 
    
    // Event Listener for metronome to play tock on click 
    metronome.addEventListener('click', function(event) {
        console.log('Metronome Box Clicked');
        const metronome = event.target; 

        if(metronome.checked) {
            tock.play(); 
        }


})

    // EVENT LISTENERS FOR THE REST OF THE DRUMS

    //KICK
    const kick = document.querySelector('.Kick');
    
    kick.addEventListener('click', function() {
        console.log('Kick Drum Clicked');
        const kick = new Audio('sounds/kick-drum.mp3');
        kick.play();
        
        if(kick.checked) {
            kick.play();  
        }
    })  

    //HI HAT
    const hihat = document.querySelector('.Hihat');
    
    hihat.addEventListener('click', function() {
        console.log('Hihat Drum Clicked');
        const hihat = new Audio('sounds/hi-hat.mp3');
        hihat.play();
        
        if(hihat.checked) {
            hihat.play();  
        }
    })

    //SNARE
    const snare = document.querySelector('.Snare');
    
    snare.addEventListener('click', function() {
        console.log('Snare Drum Clicked');
        const snare = new Audio('sounds/snare-drum.mp3');
        snare.play();
        
        if(snare.checked) {
            snare.play();  
        }
    })




}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);