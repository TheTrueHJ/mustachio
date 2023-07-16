x = "";
y = "";

function preload(){
 link = loadImage("https://i.postimg.cc/przg1JBX/m.png");
}

function setup(){
    canvas = createCanvas(700,500);
    canvas.position(240,200);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", getPose);
}

function modelLoaded(){
    console.log("Loaded");
}

function getPose(results){
    if(results.length > 0){
        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y;
    }
}

function draw(){
 image(video, 0, 0, 700, 500);
 image(link, x - 40, y, 150, 75);
}

function take_snapshot(){
    save("mustache.png");
}