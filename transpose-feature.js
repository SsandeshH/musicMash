//feature for transpose using js and jquery

//select the button transpose
$(function(){

    const chords = {
        'C' : 1,
        'C#' : 2,
        'D' : 3,
        'D#' : 4,
        'E' : 5,
        'F' : 6,
        'F#' : 7,
        'G' : 8,
        'G#' : 9,
        'A' : 10,
        'A#' : 11,
        'B' : 12
    }

    
    // Box Animation
    $(".transpose").on("click",function(){
        $(".menu-box").animate({ top: '10vh'})
        $(".features").show(500).css({
                display : "flex",
                justifyContent : "space-around"
            })
    })


    //add
    $(".add").on("click",function(){
            values = $(".chords-inp").val()
            if(values != '' || values.trim() != ''){
                let inp_list = values.split(" ").map(item => item.toUpperCase())
                console.log(inp_list)
                let results = []
                inp_list.forEach(element => {
                    let val = (chords[element])
                    val += 1
                    if(val % 12 == 0){
                        val = 1
                        results.push(Object.keys(chords).find(value => chords[value] == val%12))
                        $(".chords-inp").val(results.join(" "));
                    }else{
                        results.push(Object.keys(chords).find(value => chords[value] == val%12))
                        $(".chords-inp").val(results.join(" "));
                    }
                    
                });
                    
            }
            else{
                $(".chords-inp").val("Retry");
            }
    })


    // Subtract
    $(".substract").on("click", function() {
        values = $(".chords-inp").val();
        if (values != '' || values.trim() != '') {
            let inp_list = values.split(" ").map(item => item.toUpperCase());
            let results = [];

            inp_list.forEach(element => {
                let val = chords[element];
                val -= 1;
                if (val == 0) {
                    val = 12;
                    results.push(Object.keys(chords).find(value => chords[value] == val));
                } else {
                    results.push(Object.keys(chords).find(value => chords[value] == val % 12));
                }
            });

            $(".chords-inp").val(results.join(" "));

        } else {
            $(".chords-inp").val("Retry");
        }
    });
            
})
        


