//feature for transpose using js and jquery

//select the button transpose
$(function(){

    const chords = {
        'C' : 1, 'C#' : 2, 'D' : 3, 'D#' : 4, 'E' : 5,'F' : 6,
        'F#' : 7, 'G' : 8, 'G#' : 9, 'A' : 10, 'A#' : 11,'B' : 12
    }
    
    // Box Animation
    $(".transpose").on("click",function(){
        $(".menu-box").animate({ top: '10vh'})
        $(".features").show(500).css({
                display : "flex",
                justifyContent : "space-around"
            })
    })

    //sun-moon toggle(Dark-Moon)
    $(".moon").on("click",function(){
        $(".moon").hide("fast",function(){
            $("body").css({
                "background-color" : "rgb(49, 47, 47)"
            })
            $(".menu-box").css({
                "color" : "white",
                "background-color" : "rgb(49, 47, 47)",
                "box-shadow": "rgba(232, 229, 232, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(232, 229, 232, 0.35) 0px -2px 6px 0px inset"
            })
            $("button").css({
                "background-color" : "rgb(49, 47, 47)",
                "color" : "white"
            })
            $("button").hover(
                function() {
                    // Hover-in styling
                    $(this).css({
                        "transition": "all 0.2s ease",
                        "background-color": "rgba(244, 242, 240, 0.2)",
                        "outline": "1px solid rgba(212, 73, 13, 0.5)"
                    });
                },
                function() {
                    // Hover-out styling (reverts to original state)
                    $(this).css({
                        "background-color" : "rgb(49, 47, 47)",
                        "outline": ""
                    });
            });

            $(".features").css({
                "background-color" : "rgb(49, 47, 47)",
                "box-shadow": "rgba(232, 229, 232, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(232, 229, 232, 0.35) 0px -2px 6px 0px inset"

            })
            
            $(".sun").show()
        })
    })
    $(".sun").on("click",function(){
        $(".sun").hide("fast",function(){
            $("body").css({
                "background-color" : "white",
            })
            $(".menu-box").css({
                "color" : "black",
                "background-color" : "rgb(232, 229, 232)",
                "box-shadow": "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            })
            $("button").css({
                "color" : "white"
            })
            $("button").css({
                "background-color" : "rgb(232, 229, 232)",
                "color" : "black"
            })
            $("button").hover(
                function() {
                    // Hover-in styling
                    $(this).css({
                        "transition": "all 0.2s ease",
                        "background-color": "rgba(255, 119, 0, 0.2)",
                        "outline": "1px solid rgba(212, 73, 13, 0.5)"
                    });
                },
                function() {
                    // Hover-out styling (reverts to original state)
                    $(this).css({
                        "background-color" : "rgb(232, 229, 232)",
                        "outline": ""
                    });
                });
        })
        $(".features").css({
            "background-color" : "rgb(232, 229, 232)",
            "box-shadow": "rgba(232, 229, 232, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(232, 229, 232, 0.35) 0px -2px 6px 0px inset"

        })
        $(".moon").show("fast")
    })

    function chord_check(inp_list) {
        let check_list = [];
        
        for (let i = 0; i < inp_list.length; i++) {
            const letters = inp_list[i].split('');
            if (letters[letters.length - 1] == 'M') {
                check_list.push(1);  // Minor chord
            } else {
                check_list.push(0);  // Major chord
            }
        }
        console.log(check_list);
        return check_list;
    }
    


    //add
    $(".add").on("click",function(){
            values = $(".chords-inp").val()
            if(values != '' || values.trim() != ''){
                let inp_list = values.split(" ").map(item => item.toUpperCase())
                console.log(inp_list)

                check_list = chord_check(inp_list)
                let results = []

                inp_list.forEach(element => {
                    let val = (chords[element])
                    val += 1
                    if(val % 12 == 0){
                        val = 1
                        results.push(Object.keys(chords).find(value => chords[value] == val%12))
                        
                    }else{
                        results.push(Object.keys(chords).find(value => chords[value] == val%12))
                        
                    }
                    $(".chords-inp").val(results.join(" "));
                    
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
        


