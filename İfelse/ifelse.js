var date = new Date();
var hour = date.getHour();

if(hour >= 5 && hour<11){
    alert("Good Morning")
} else if (hour >=11 && hour< 17){
    alert("Good Afternoon")
} else if (hour >=17 && hour <23){

    alert("Good Evening")
} else if (hour >=23 && hour<5){
    alert("Good Night")
}