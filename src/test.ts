import { Wave } from '../index';

Wave.init();
const screen = Wave.createWindow(1280, 720);
screen.setWindowIcon("./assets/butterfly.png")
let running = true;

let x = 0, y = 0;

const image = Wave.graphics.newImage("./assets/test.png");

while (running) {
   const event = Wave.event.get();

   Wave.graphics.clear();
   Wave.graphics.draw(image, x, y, 256, 256);

   switch (event.type) {
    case Wave.QUIT:
        running = false;
        break;
    case Wave.KEYDOWN:
        switch (event.value) {
            case Wave.K_ESCAPE:
                running = false;
                break;
            case Wave.K_d:
                x += 4;
                break;
            case Wave.K_a:
                x -= 4;
                break;
        }
        break;
   }
}

Wave.quit();