import { Wave } from "../index";

let running = false;

function load() {
    Wave.init();
    const screen = Wave.createWindow(640, 480);
    screen.setWindowIcon("./assets/butterfly.png");
    running = true;
}

function update() {
    const event = Wave.event.get();

    if (event.type == Wave.QUIT) {
        running = false;
    }

    Wave.graphics.flip();
}

function draw() {
    Wave.graphics.setColor(255,255,255,1);
    Wave.graphics.rectangle('fill', 0, 0, 640, 480);
}

load();

while(running) {
    update();
    draw();
}

Wave.quit();