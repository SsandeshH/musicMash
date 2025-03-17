$(function(){
    const note2 = new Audio("/mp3/low.mp3")
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
        }
    })
})