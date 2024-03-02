# Wave

A game framework made for typescript using bun and SDL2.

## Wave is not yet ready Please do not use until ready.

|Feature|Windows|Mac|Linux|
|:-------|--------|--------|-----:|
|Window Rendering| &check;|&check;|-|
|Drawing Images| &check;|&check;|-|
|Delta Time| &check;|&check;|-|
|Loading Animations| &check;|&check;|-|
|Event Handler| &check;|&check;|-|
|Proper Keyboard Handler| &check;|&check;|-|
|All Window functions implemented| &check;|&check;|-|
|Proper Building| &check;|&cross;|-|
|All Graphic functions implemented| &cross;|&cross;|-|
|Audio Handler| &cross;|&cross;|-|
|Drawing Text| &cross;|&cross;|-|


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