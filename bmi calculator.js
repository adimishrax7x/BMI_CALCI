function cchange(r)
{
	if(r<18.5)
 document.getElementById("c1").style.backgroundColor="red";
else if(r>=18.5 & r<24.9)
	document.getElementById("c2").style.backgroundColor="green";
else if(r>=25 & r<29.5)
	document.getElementById("c3").style.backgroundColor="blue";
else if(r>29.6)
	    document.getElementById("c4").style.backgroundColor="red";
}


function bmi() 
{
var h = document.getElementById("height").value;
var w = document.getElementById("weight").value;
var r = w / ((h/100) * (h/100));
document.getElementById("result").innerHTML = "Your bmi score is : " + r;
cchange(r);
reload();
}



