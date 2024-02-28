import { Wave, Animation } from '../index';

let screen;
let running = false;
let x = 0, y = 0;

let action = 'idle';
let flip = false;
let velocity = {x: 0, y: 0};

let idleAnim: Animation;
let walkAnim: Animation;

const change_action = (action: string, new_action: string) => {
    if (action != new_action) {
        action = new_action;
    }
    return {action: action};
}

function load() {
    Wave.init();
    screen = Wave.createWindow(1280, 720);
    screen.setWindowIcon("./assets/butterfly.png")
    running = true;
    idleAnim = Wave.graphics.loadAnimation("./assets/idle", 120, 8);
    walkAnim = Wave.graphics.loadAnimation("./assets/walk", 120, 8);
}

function update() {
    const event = Wave.event.get();
    const dt = Wave.clock.tick();

    switch (event.type) {
        case Wave.QUIT:
            running = false;
            break;
        case Wave.KEYDOWN:
            if (event.value == Wave.K_ESCAPE) {
                running = false;
            } else if (event.value == Wave.K_a) {
                velocity.x = -128;
            } else if (event.value == Wave.K_d) {
                velocity.x = 128;
            }
            break;
        case Wave.KEYUP:
            if (event.value == Wave.K_a) {
                velocity.x = 0;
            } else if (event.value == Wave.K_d) {
                velocity.x = 0;
            }
            break;
    }

    if (velocity.x > 0) {
        const newact = change_action(action, "walk");
        action = newact.action;
        flip = false;
   } else if (velocity.x < 0) {
        const newact = change_action(action, "walk");
        action = newact.action;
        flip = true;
   } else {
        const newact = change_action(action, "idle");
        action = newact.action;
   }

   if (action == "walk") {
    walkAnim.update();
   } else {
    idleAnim.update();
   }

   x += velocity.x * dt;
   y += velocity.y * dt;
}

function draw() {

    Wave.graphics.clear();
    Wave.graphics.setColor(70,130,170,1);
    Wave.graphics.rectangle('fill', 0, 0, 1280, 720);
    Wave.graphics.setColor(0,0,0,1);
    
    if (action == "walk") {
        walkAnim.draw(x,y,516,516,0,flip);
    } else {
        idleAnim.draw(x,y,516,516,0,flip);
    }

   Wave.graphics.flip();

}

load();

while (running) {
    update();
    draw();
}

Wave.quit();