function preload()
{}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    
    tint_color = "";

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}


function draw()
{
    image(video, 0, 0, 400, 400);
    tint(tint_color);
}

function take_snapshot()
{
    save("Suraj.png");
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value
}