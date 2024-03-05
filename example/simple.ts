import { Slipher } from "../index";

function load() {
}

function update() {
    const event = Slipher.event.get();

    Slipher.event.handleEvent(event);
}

function draw() {
    Slipher.graphics.setColor(255,255,255,1);
    Slipher.graphics.rectangle('fill', 0, 0, screen.getWidth(), screen.getHeight());

    Slipher.graphics.draw(Slipher.graphics.newImage("./assets/floor.png"), 20, 20, 8, 8);
    

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