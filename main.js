prediction1="";
prediction2="";
Webcam.set({ width:350, height:300, image_format : 'png', png_quality:90 });
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot() { Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; }); }
console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4tXKBA2YM/model.json",modelloaded);
function modelloaded(){
console.log("modelloaded");
}
function speak(){
var synth=window.speechSynthesis;
speak1="the first prediction is"+prediction1;
speak2="the second prediction is"+prediction2;
var utterThis=new SpeechSynthesisUtterance(speak1+speak2);
synth.speak(utterThis);
}
function check(){
img=document.getElementById("captured_image")
classifier.classify(img,gotresult);
}
function gotresult(error,results){
if(error)
{
console.log(error);
}
else{
console.log(result);
document.getElementsByid("result_emotion_name").innerHTML=results[0].label;
document.getElementsByid("result_emotion_name2").innerHTML=results[1].label;
prediction_1=results[0].label
prediction_2=results[1].label
speak();
if(results[0].label=="happy"){
document.getElementById("update_all_the_best").innerHTML="&#128077;";
}
if(results[0].label=="sad"){
    document.getElementById("update_victory").innerHTML="&#128532;";
    }
    if(results[0].label=="angry"){
        document.getElementById("update_amazing").innerHTML="&#128079;";
        }
        if(results[0].label=="happy"){
            document.getElementById("update_all_the_best").innerHTML="&#128077;";
            }
            if(results[0].label=="sad"){
                document.getElementById("update_victory").innerHTML="&#128532;";
                }
                if(results[0].label=="angry"){
                    document.getElementById("update_amazing").innerHTML="&#128079;";
                    }
}
}