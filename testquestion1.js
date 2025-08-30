function setup(){
    createCanvas(600,400);
    background(0);
}

function draw(){
    stroke("red");
    strokeWeight(10);
    fill("black");
    circle(width/3-10,height/2,50,50);
    triangle((width/3)+60,(height/2)+25,width/2,(height/2)-30,(width/2)+30,(height/2)+25,100,100);
    rect(width/2+90,height/2-20,50,50)
}


