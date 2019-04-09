
var app ={}
app.get = function (elem){ return document.querySelector(elem) }






app.calculate = function (ttime){
	var time = parseInt(ttime)
	var in_secs = time*60
   return in_secs
}

app.countDown = function (){
var time = app.get("#time").value
var timeLeft = app.calculate(time)	
var display = app.get(".val")
app.get("#start").setAttribute("disabled",true) 
var intv = setInterval(function(){
if (timeLeft<=0){
	clearInterval(intv)
	var notif = new Notification("Time up", {
		body : "Countdown finished"
	})
 
	//alert("Countdown has finished")
	app.get("#start").setAttribute("disabled",false)
	display.innerHTML = "00"
}
var info = app.gist(timeLeft)
display.innerHTML = info
timeLeft--

 },1000)
 }
 
app.gist  = function(t){
var min = parseInt(t/60)
var secs = parseInt(t%60),
mintext = min > 1 ? ' mins' :' min'
sectext = secs > 1 ? ' secs' :' sec'
return min+" : "+secs
}

app.reset = function (){
window.location.replace("index.html")
}
