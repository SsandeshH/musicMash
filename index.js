$(function(){
    // Box Animation
    $(".transpose").on("click",function(){
        $(".metronomeBox").hide()
        $(".earTrainBox").hide()
        $(".menu-box").animate({ top: '10vh'})
        $(".transposeBox").show(500).css({
                display : "flex",
                justifyContent : "space-around"
            })
            
    })

    $(".metronome").on("click",function(){
        $(".transposeBox").hide()
        $(".earTrainBox").hide()
        $(".menu-box").animate({ top: '10vh'})
        $(".metronomeBox").show(500).css({
                display : "flex",
                justifyContent : "space-around"
            })
            
    })

    $(".earTrainBox").on("click",function(){
        $(".transposeBox").hide()
        $(".metronomeBox").hide()
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

            $(".sun").show("fast")
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
            $(".features").css({
                "background-color" : "rgb(232, 229, 232)",
                "box-shadow": "rgba(232, 229, 232, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(232, 229, 232, 0.35) 0px -2px 6px 0px inset"
        
            })

                
        })
        

        $(".moon").show("fast")
    })
}) 