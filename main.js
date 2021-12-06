$(".btn").click(function (){
$(".btn").hide(800)})

 function cont(){
    var tim = 60;
    var stop = setInterval(function(){
         tim--
         console.log(tim)
        if(tim>=0){
            document.getElementById('count').innerHTML ="" + tim
        }if
        (tim===0){
        var stopFunction = clearInterval(stop)
            document.getElementById('count').innerHTML ='your time is over'
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
    