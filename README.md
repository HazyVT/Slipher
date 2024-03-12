# Slipher

A game framework made for typescript using bun and SDL2. 

### Slipher is not yet ready Please do not use until ready.

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
|Drawing Text| &check;|&cross;|-|
|Mouse Handler| &check; | &cross;| -|


### Simple Example Code

```ts
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

    Slipher.graphics.print("Hello World!", 20, 20);    

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
```