img = "";
status = "";

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function preload(){
    img = loadImage('dog_cat.jpg');
}

function draw(){
    image(img,0,0,640,420);
    fill("#4169e1");
    text("dog",45,75)
    noFill();
    stroke("#4169e1");
    rect(30,40,450,350);

    fill("#4169e1");
    text("cat", 300, 100);
    noFill();
    stroke("#4169e1");
    rect(280, 70, 340, 330);
}

objectDetector = ml5.objectDetector('status', modelLoaded);
document.getElementById('status').innerHTML = "status: Detecting Objects";

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, Results){
    if(error){
        console.log(error);
    }
    else
    console.log(Results);
}

