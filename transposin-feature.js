$(function(){
    //chord map
    const chords = {
        'C' : 1, 'C#' : 2, 'D' : 3, 'D#' : 4, 'E' : 5,'F' : 6,
        'F#' : 7, 'G' : 8, 'G#' : 9, 'A' : 10, 'A#' : 11,'B' : 12
    }

    //check chords
    function check_chords(inpList){
        return inpList.map(element => element.endsWith('M')?1:0)
    }

    function extract_notes(inpList){
        return inpList.map(element => element.replace('M',''))
    }

    //add logic
    $(".add").on("click",function(){
        if($(".chords-inp").val()!= "" || $(".chords-inp").val().trim() != ""){
            let inpList = $(".chords-inp").val().toUpperCase().split(' ')
            const checkList = check_chords(inpList)

            let processedList = extract_notes(inpList)

            let newChords = []
            for(let i = 0;i<inpList.length;i++){
            let key = chords[processedList[i]]
            key ++;
            if(key > 12){
                key = 1
            }
            newChords[i] = Object.keys(chords).find(chord => chords[chord] == key)

            if(checkList[i]==1) newChords[i] += 'm'
            $(".chords-inp").val(newChords.join(' '))
        }
    }else{
            $(".chords-inp").val("Retry")
    }  
    })

    $(".substract").on("click",function(){
        if($(".chords-inp").val()!= "" || $(".chords-inp").val().trim() != ""){
        let inpList = $(".chords-inp").val().toUpperCase().split(' ')
        
        const checkList = check_chords(inpList)

        let processedList = extract_notes(inpList)

        let newChords = []
        for(let i = 0;i<inpList.length;i++){
           let key = chords[processedList[i]]
           key --;
        if(key <= 0){
            key = 12
        }
        newChords[i] = Object.keys(chords).find(chord => chords[chord] == key)

        if(checkList[i]==1) newChords[i] += 'm'
        }

        $(".chords-inp").val(newChords.join(' '))
    }else{
        $(".chords-inp").val("Retry")
    }
    })
})