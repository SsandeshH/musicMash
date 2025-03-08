//feature for transpose using js and jquery

//select the button transpose
$(function(){

    const chords = {
        'c' : 1,
        'c#' : 2,
        'd' : 3,
        'd#' : 4,
        'e' : 5,
        'f' : 6,
        'g' : 7,
        'g#' : 8,
        'a' : 9,
        'a#' : 10,
        'b' : 11
    }

    $(".transpose").on("click",function(){
        $(".menu-box").animate({ top: '10vh'})
        $(".features").show(500).css({
                display : "flex",
                justifyContent : "space-around"
            })
        })

        $(".add").on("click",function(){
            values = $(".chords-inp").val()
            if(values != '' || values.trim() != ''){
                let inp_list = values.split(" ").map(item => item.toLowerCase())
                // inp_list = inp_list.toLowerCase()
                
                for(let key in inp_list){

                }
                
            }
            else{
                console.log('retry')
            }
        })
        
})

