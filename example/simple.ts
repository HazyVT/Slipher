import { Wave } from "../index";

function load() {
    screen.setSize(1280, 720);
}

function update() {
    const event = Wave.event.get();

    Wave.event.handleEvent(event);
}

function draw() {
    Wave.graphics.setColor(255,255,255,1);
    Wave.graphics.rectangle('fill', 0, 0, screen.getWidth(), screen.getHeight());    

    Wave.graphics.flip();
}

Wave.init();
const screen = Wave.createWindow(640, 480);
load();

while(Wave.running) {
    update();
    console.log(screen.getFrameRate());
    draw();
}

Wave.quit();