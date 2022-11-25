function preload() {

}

function setup() {
    
    canvas = createCanvas(700, 500)
    canvas.position(100, 300)
    
    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    image(video, 160, 120, 360, 250)
    fill("red")
    circle(657, 55, 80)
    circle(657, 450, 80)
    circle(45, 450, 80)
    circle(45, 55, 80)
    noFill()
    fill("green")
    rect(80, 42, 540, 25)
    rect(80, 436, 540, 25)
    rect(645, 95, 25, 315)
    rect(33, 95, 25, 316)
}
