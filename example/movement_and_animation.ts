import { Slipher, Animation } from '../index';

let x = 40, y = 40;

let action = 'idle';
let flip = false;
let velocity = {x: 0, y: 0};

let time = 0;

let idleAnim: Animation;
let walkAnim: Animation;

const change_action = (action: string, new_action: string) => {
    if (action != new_action) {
        action = new_action;
    }
    return {action: action};
}

function load() {
    screen.setIcon("./assets/butterfly.png")
    idleAnim = Slipher.graphics.createAnimation("./assets/idle", 8, 8);
    walkAnim = Slipher.graphics.createAnimation("./assets/walk", 8, 8);
}

function update() {
    const event = Slipher.event.get();
    const tick = Slipher.clock.tick();

    Slipher.event.handleEvent(event);

    if (Slipher.keyboard.isDown('K_a') && (Slipher.keyboard.isDown('K_d'))) {
        velocity.x = 0;
        const newact = change_action(action, "idle");
        action = newact.action;
    } else if (Slipher.keyboard.isDown('K_a')) {
        velocity.x = -4;
        const newact = change_action(action, "walk");
        action = newact.action;
        flip = true;
    } else if (Slipher.keyboard.isDown('K_d')) {
        velocity.x = 4;
        const newact = change_action(action, "walk");
        action = newact.action;
        flip = false;
    } else {
        velocity.x = 0;
        const newact = change_action(action, "idle");
        action = newact.action;
    }

    if (Slipher.keyboard.isDown('K_ESCAPE')) {
        Slipher.running = false;
    }

    if (action == "walk") {
        walkAnim.update();
    } else {
        idleAnim.update();
    }

    x += velocity.x;
    y += velocity.y;

    screen.capFrameRate(tick);

}

function draw() {

    Slipher.graphics.clear();
    Slipher.graphics.setColor(70,130,170,1);
    Slipher.graphics.rectangle('fill', 0, 0, screen.getWidth(), screen.getHeight());
    Slipher.graphics.setColor(255,255,255,1);
    
    if (action == "walk") {
        walkAnim.draw(x,y,516,516,0,flip);
    } else {
        idleAnim.draw(x,y,516,516,0,flip);
    }

    Slipher.graphics.pixel(20, 20, 255, 255, 0, 255);

   Slipher.graphics.flip();

}

const screen = Slipher.createWindow(1280, 720);
load();

while (Slipher.running) {
    update();
    draw();
}

Slipher.quit();