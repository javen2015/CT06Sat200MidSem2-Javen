function setup(){
    createCanvas(600,600);
    background(100);
}
function draw(){
    for (let i = 0; i < 10; i++) {
        fill(i*20);
        //11 gaps
        circle(((width/11)*i)+50,((height/11)*i)+30,50,50);
    }
}

