# Wave

A game framework made for typescript using bun and SDL2.

## Wave is not yet ready Please do not use until ready.

|Feature|Done|
|:-------|--------:|
|Window Rendering| &check;|
|Drawing Images| &check;|
|Delta Time| &check;|
|Loading Animations| &check;|
|Event Handler| &check;|
|Proper Keyboard Handler| &cross;|
|All Graphic functions implemented| &cross;|
|Audio Handler| &cross;|
|Drawing Text| &cross;|
|Proper Building| &cross;|
|Extend All Classes with proper getters and setters| &cross;|


### Simple Example Code

```ts
import { Wave } from "wave";

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
```