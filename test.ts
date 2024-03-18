import { Slipher } from ".";

Slipher.init();

console.log(import.meta.dir);

const window = Slipher.createWindow(640, 480, "Slipher");

while (Slipher.running) {
    const event = Slipher.event.get();
    Slipher.event.handleEvent(event);
    Slipher.graphics.clear();

    Slipher.graphics.setColor(255,255,255,1);
    Slipher.graphics.rectangle('fill', 0, 0, window.getWidth(), window.getHeight());

    Slipher.graphics.flip();
}

Slipher.quit();