import {SDL_GetError, Tygame} from '../index';

Tygame.init();
const screen = Tygame.graphics.set_mode(640, 480);
let running = true;

const image = Tygame.graphics.new_image("./assets/test.png");

while (running) {
   const event = Tygame.event.get();

   Tygame.graphics.draw(image, 0, 0, 256, 256);

   switch (event.type) {
    case Tygame.QUIT:
        running = false;
        break;
    case Tygame.KEYDOWN:
        if (event.value == Tygame.K_ESCAPE) {
            running = false;
        } else {
            console.log(String.fromCharCode(event.value));
        }
        break;
   }
}

Tygame.quit();