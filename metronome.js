// First get all the elements from DOM
const input = document.querySelector('.js-number-input');
const tempoDisplay = document.querySelector('.js-tempo');
const tempoText = document.querySelector('.js-tempo-text');
const decreaseTempoBtn = document.querySelector('.js-decrease-bpm');
const increaseTempoBtn = document.querySelector('.js-increase-bpm');
const selectBtn = document.querySelector('.js-select-bpm');
const subBeats = document.querySelector('.js-sub-beats');
const addBeats = document.querySelector('.js-add-beats');
displayBeat = document.querySelector('.js-display-beats');
const tickSound = new Audio('tick.mp3'); // Load the tick sound

let bpm = 120; // Default BPM
let tempoTextString = 'Medium'; // Default tempo text string
let beatsPerMeasure = 4; // Default beats per measure

function togglePlayPause() {
    const icon = document.querySelector('.fa-play'); // Target the play icon initially
    if (icon) {
      icon.classList.remove('fa-play');
      icon.classList.add('fa-pause');
      startMetronome(bpm); // Start the metronome with the current BPM
    } else {
      const iconPause = document.querySelector('.fa-pause');
      iconPause.classList.remove('fa-pause');
      iconPause.classList.add('fa-play');
      stopMetronome(); // Stop the metronome
    }
  }

  decreaseTempoBtn.addEventListener('click', () => {
    if (bpm <= 20) {
        return; // Prevent the BPM from going below 20
    }
    bpm--; // Decrease the tempo by 1 bpm with every click
    validateTempo(); // Validate the tempo
    updateMetronome(); // Update the metronome display
  });

  increaseTempoBtn.addEventListener('click', () => {
    if(bpm >=280){
        return; // Prevent the BPM from going above 280
    }
    bpm++; // Increase the tempo by 1 bpm with every click
    validateTempo(); // Validate the tempo
    updateMetronome(); // Update the metronome display
});

selectBtn.addEventListener('click', () => {
    const inputValue = Number(input.value); // Convert input to number
    if(isNaN(inputValue) || inputValue < 20 || inputValue > 280){
        alert('Please enter a valid value between 20 and 280 BPM'); // Alert if the input is invalid
        return;
    }
    bpm = inputValue; // Update the BPM value
    updateMetronome(); // Update the metronome display
    togglePlayPause(); // Toggle play/pause icon
});

subBeats.addEventListener('click', () => {
    beatsPerMeasure--; // Decrease the beats per measure by 1
    if(beatsPerMeasure < 2){
        beatsPerMeasure = 2; // Prevent the beats per measure from going below 2
    }
    displayBeat.textContent = beatsPerMeasure; // Update the display for beats per measure
    
});

addBeats.addEventListener('click', () => {
    beatsPerMeasure++; // Increase the beats per measure by 1
    if(beatsPerMeasure > 12){
        beatsPerMeasure = 12; // Prevent the beats per measure from going above 12
    }
    displayBeat.textContent = beatsPerMeasure; // Update the display for beats per measure
});

  function validateTempo(){
    if(bpm <= 20 || bpm >=280){
       return; // Prevent the BPM from going below 20 or above 280
    }
}

function updateMetronome(){
    tempoDisplay.textContent = bpm; // Updates the tempo display
    input.value = bpm; // Updates the input field
    if(bpm <=40){ tempoTextString = 'Super slow'}; // Set the tempo text string to super slow
    if(bpm >40 && bpm <= 80){ tempoTextString = 'Slow'}; // Set the tempo text string to slow
    if(bpm >80 && bpm <= 120){ tempoTextString = 'Medium'}; // Set the tempo text string to medium  
    if(bpm >120 && bpm <= 160){ tempoTextString = 'Fast'} // Set the tempo text string to fast
    if(bpm >160 && bpm <= 200){ tempoTextString = 'Super fast'}; // Set the tempo text string to super fast
    if(bpm >200 && bpm <= 280){ tempoTextString = 'Buckethead'} // Set the tempo text string to insane
   
    tempoText.textContent = tempoTextString; // Updates the tempo text string

}

let metronomeTimer; // Variable to hold the metronome timer

//The function to start the metronome
function startMetronome(bpm){
    const interval = 60000/ bpm; // Calculate the interval in milliseconds

    // Create a Metronome class to handle the timing
    function Metronome(callback, interval){
        this.interval = interval;
        
        // The start function initializes the metronome
        this.start = () => {
            this.expected = Date.now() + this.interval; //Calculate the expected time for the metronome to start
            this.timeout = setTimeout(this.round, this.interval); //Set timeout for the first tick
            console.log(this.timeout); //Print the timeout in console
        };

        //The stop function stops the metronome
        this.stop = () => {
            clearTimeout(this.timeout); // Clear the timeout
            console.log('Metronome stopped'); // Print stopped message in console
        };
        // The round function is called on each tick of the metronome
        this.round = () => {
            callback(); // Call the callback function for each tick
            const drift = Date.now() - this.expected; // Calculate the drift
            this.expected += this.interval; // Update the expected time 
            this.timeout = setTimeout(this.round, Math.max(0, this.interval - drift)); // Set the next timeout
        };
    }

    // Create a new instance of the Metronome class and pass the callback function to play the sound
    metronomeTimer = new Metronome(() => {
        tickSound.currentTime = 0; // Reset the sound to the beginning
        tickSound.play(); // Play the tick sound
       console.log('Tick');
}, interval);

    metronomeTimer.start(); // Start the metronome
}
//Function to stop the metronome
function stopMetronome(){
    if(metronomeTimer){
        metronomeTimer.stop(); // Stop the metronome
    }
}
