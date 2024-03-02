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
|Proper Keyboard Handler| &check;|
|All Window functions implemented| &check;|
|Proper Building| &check;|
|All Graphic functions implemented| &cross;|
|Audio Handler| &cross;|
|Drawing Text| &cross;|


### Simple Example Code

```ts
import { Wave } from "wave";

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
    draw();
}

Wave.quit();
```