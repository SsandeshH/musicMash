
function transpose(step){
    let input = document.querySelector('.js-user-input').value.split(' ');
    let result = input.map(chord =>{
        let minorChords = chord.toLowerCase().endsWith('m');
        let normalChords = minorChords ? chord.slice(0, -1).toLowerCase() : chord.toLowerCase(); 
        if(chords[normalChords] !== undefined){
            let changedChords = (chords[normalChords] + step - 1 + 12) %12 + 1;

            let newChords = Object.keys(chords).find(key => chords[key] === changedChords);

            return minorChords ? newChords.toUpperCase() + 'm' : newChords.toUpperCase();

        }
        else{
            document.querySelector('.js-transposed-chords').innerHTML = `${chord} not found. Please enter a valid chord.`;
            console.log('Enter a valid chord');
        }

    });

    document.querySelector('.js-transposed-chords').innerText = result.join(' ');

    document.querySelector('.js-user-input').value = result.join(' ');

   }
