import { Slipher } from "../index";

function load() {
}

function update() {
    const event = Slipher.event.get();

    Slipher.event.handleEvent(event);
}

function draw() {

    Slipher.graphics.rectangle('fill', 0, 0, 640, 480, 255, 255, 255);
    
    Slipher.graphics.print("Hello World", 20, 20,)

    Slipher.graphics.flip();
}

Slipher.init();
const screen = Slipher.createWindow(640, 480);
load();

while(Slipher.running) {
    update();
    draw();
}

Slipher.quit();