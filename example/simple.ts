import { Wave } from "../index";

function load() {
}

function update() {
    const event = Wave.event.get();

    Wave.event.handleEvent(event);
}

function draw() {
    Wave.graphics.setColor(255,255,255,1);
    Wave.graphics.rectangle('fill', 0, 0, screen.getWidth(), screen.getHeight());

    Wave.graphics.draw(Wave.graphics.newImage("./assets/floor.png"), 20, 20, 8, 8);
    

    Wave.graphics.flip();
}

Wave.init();
const screen = Wave.createWindow(640, 480);
load();

while(Wave.running) {
    update();
    draw();
}

Wave.quit();