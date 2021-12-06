$("#R").hide()
$(".red").hide()
$(".blue").hide()
$(".yallow").hide()
$(".green").hide()
///
$(".btn").click(function (){
$(".btn").hide(800)
$("#R").show()
$(".red").show()
$(".blue").show()
$(".yallow").show()
$(".green").show()
})


////
var time = 4
 function cont(){
    
    var stop = setInterval(function(){
         time--
         console.log(time)
        if(time>=0){
            document.getElementById('count').innerHTML ="" + time
        }if(time===0){
        var stopFunction = clearInterval(stop)
            alert("your time is over")
            }
           
        },1000);
    };
    var counter = 0
    function myCounter(){
     console.log(counter=counter+10)
     if(counter>=0){
        document.getElementById('Score').innerText ="" + counter 
    }
    };


////////////////////////////
$(".description").hide()
function about(){
    $("#box").hide(800)
    $(".a").hide(800)
    $(".btn").hide(800)
    $(".description").show()
}



////////
$(".r").hide()
$(".g").hide()
$(".b").hide()
$(".p").hide()
$("#G").hide()
function red (){
$("#R").hide(800)
$(".red").hide(800)
$(".blue").hide(800)
$(".yallow").hide(800)
$(".green").hide(800)
$("#G").show(800)
$(".p").show(800)
$(".r").show(800)
$(".b").show(800)
$(".g").show(800) 
if($(".red").click(function(){
})){
    console.log(time=4)
}

}
function lose (){
    if($(".yallow").click(function(){
    })){
        alert("you lose Please Try Again")
    }
    if($(".blue").click(function(){
    })){
        alert("you lose Please Try Again")
    }
    if($(".green").click(function(){
    })){
        alert("you lose Please Try Again")
    }
    if($(".r").click(function(){
    })){
        alert("you lose Please Try Again")
    }
    if($(".b").click(function(){
    })){
        alert("you lose Please Try Again")
    }
    if($(".p").click(function(){
    })){
        alert("you lose Please Try Again")
    }
    if($(".green").click(function(){
    })){
        alert("you lose Please Try Again")
    }


}
$(".black").hide(0)
$(".black").hide(0)
$(".maron").hide(0)
$(".pink1").hide(0)
$(".purple").hide(0)    
$("#b1").hide(0)    

function ger (){
$(".r").hide(800)
$(".g").hide(800)
$(".b").hide(800)
$(".p").hide(800)
$("#G").hide(800)    
$(".black").show(800)
$(".maron").show(800)
$(".pink1").show(800)
$(".purple").show(800)    
$("#b1").show(800)
    
if($(".g").click(function(){
})){
    console.log(time=4)}
    }

function blc(){
    $(".black").hide(800)
    $(".maron").hide(800)
    $(".pink1").hide(800)
    $(".purple").hide(800)    
    $("#b1").hide(800)  
    
    if($(".g").click(function(){
    })){
        console.log(time=4)}
        }

  
        
    