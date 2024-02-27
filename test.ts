import {SDL_GetError, Tygame} from './index';

Tygame.init();
const screen = Tygame.display.set_mode(640, 480);
let running = true;

while (running) {
   const event = Tygame.event.get();
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