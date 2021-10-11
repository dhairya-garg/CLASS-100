var SpeechRecognition= window.webkitSpeechRecognition
var recognition=  new SpeechRecognition()

function start(){
document.getElementById("textbox").innerHTML = ""
recognition.start()
}
recognition.onresult= function run(event){
console.log(event)
var Content=event.results[0][0].transcript;
console.log(Content)
document.getElementById("textbox").innerHTML = Content

if (Content == "take my selfie") {
    console.log("taking selfie")  
    speak()
}
 
}
function speak(){
    var synth= window.speechSynthesis
    speak_data ="taking your selfie in 5 seconds"
    var utterthis = new SpeechSynthesisUtterance(speak_data)
   synth.speak(utterthis)
    Webcam.attach(camera)

setTimeout(function(){
  takesnap();
  save();  
}, 5000);
}

Webcam.set({
weight: 360,
height:250,
image_format:"png",
png_display:90
})
camera=document.getElementById("camera")

function takesnap(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = "<img id='selfie_img' src='"+data_uri+"'>"
    });
}
function save(){
link=document.getElementById("link")
image=document.getElementById("selfie_img").src 
link.href=image
link.click()
}