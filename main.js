
song_1 = "";

song_2 = "";

leftWristX = 0;

leftWristY = 0;

rightWristX = 0;

rightWristY = 0;

function preload() {
    
song_1 = loadSound('music.mp3');

song_2 = loadSound('music2.mp3');

}

function setup() {

canvas = createCanvas(600, 500);
    
canvas.position(500, 165);

video = createCapture(VIDEO);

video.hide();

poseNet = ml5.poseNet(video, modelLoaded);

poseNet.on("pose", gotPoses);

}

function draw() {

image(video, 0, 0, 600, 500);

}

function modelLoaded() {

console.log("Posenet is Intialized");

}

function gotPoses(results) {

if(results.length > 0) {

console.log(results);

leftWristX = results[0].pose.leftWrist.x;

leftWristY = results[0].pose.leftWrist.y;

console.log("left Wrist X = " + leftWristX + "Left Wrist Y" + leftWristY);

rightWristX = results[0].pose.rightWrist.x;

rightWristY = results[0].pose.rightWrist.y;

console.log("right Wrist X = " + rightWristX + "right Wrist Y" + rightWristY);

}

}