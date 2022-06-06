var speechrecognition=window.webkitSpeechRecognition;

var recognition=new speechrecognition();

function start()
{
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult=function()
{
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    Speak_computer()
}
function Speak_computer()
{
var synth=window.speechSynthesis;
speech_data=document.getElementById("textbox").value;
var utterthis=new SpeechSynthesisUtterance(speech_data);
synth.speak(utterthis);
Webcam.attach(mycam);
}

Webcam.set({
 width:360,
 height:250,
 image_format:'png',
 png_quality:90   
});

mycam=document.getElementById("camera");