$(function(){
    const note2 = new Audio("mp3/low.mp3")
    let intervals = null
    let state = 0
    $(".play").on("click",function(){
        state ++;
        if(state %2 == 1){
            let bpm = $(".bpm").val()
            $(".play").text("Stop")
            clearInterval(intervals)
            intervals = setInterval(function(){
                note2.cloneNode().play()
            },Math.round(60000/bpm))
        }else{
            $(".play").text("Play")
            clearInterval(intervals)
            note2.pause()
            note2.currentTime = 0;
        }
    })


    let taps = []
    $(".tap").on("click", function(event) {
        let now = performance.now();
        inpLag =now - event.timeStamp;
        console.log(now)
        if (taps.length > 0) {
            
            let taplength = now - taps[taps.length - 1];
            let newBpm = Math.round((60000 / taplength) - inpLag);
            $(".bpm").val(newBpm)
        }
        taps.push(now);
    });
    
    
})