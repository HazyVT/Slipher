import { Wave, Animation } from '../index';

let screen;
let running = false;
let x = 40, y = 40;

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
    screen.setWindowIcon(import.meta.dir + "/assets/butterfly.png")
    idleAnim = Wave.graphics.createAnimation(import.meta.dir + "/assets/idle", 6, 8);
    walkAnim = Wave.graphics.createAnimation(import.meta.dir + "/assets/walk", 6, 8);
    running = true;
}

function update() {
    const event = Wave.event.get();
    const dt = Wave.clock.tick();

    switch (event.type) {
        case Wave.event.QUIT:
            running = false;
            break;
        case Wave.event.KEYDOWN:
        case Wave.event.KEYUP:
            Wave.keyboard.handleKey(event);
            break;
    }

    if (Wave.keyboard.isDown('K_a') && (Wave.keyboard.isDown('K_d'))) {
        velocity.x = 0;
        const newact = change_action(action, "idle");
        action = newact.action;
    } else if (Wave.keyboard.isDown('K_a')) {
        velocity.x = -128;
        const newact = change_action(action, "walk");
        action = newact.action;
        flip = true;
    } else if (Wave.keyboard.isDown('K_d')) {
        velocity.x = 128;
        const newact = change_action(action, "walk");
        action = newact.action;
        flip = false;
    } else {
        velocity.x = 0;
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