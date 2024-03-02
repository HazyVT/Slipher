import { Wave, Animation } from '../index';

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
    idleAnim = Wave.graphics.createAnimation("./assets/idle", 8, 8);
    walkAnim = Wave.graphics.createAnimation("./assets/walk", 8, 8);
}

function update() {
    const event = Wave.event.get();
    const tick = Wave.clock.tick();

    Wave.event.handleEvent(event);

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

    if (Wave.keyboard.isDown('K_ESCAPE')) {
        Wave.running = false;
    }

    if (action == "walk") {
        walkAnim.update();
    } else {
        idleAnim.update();
    }

    screen.capFrameRate(tick);

}

function draw() {

    Wave.graphics.clear();
    Wave.graphics.setColor(70,130,170,1);
    Wave.graphics.rectangle('fill', 0, 0, screen.getWidth(), screen.getHeight());
    Wave.graphics.setColor(0,0,0,1);
    
    if (action == "walk") {
        walkAnim.draw(x,y,516,516,0,flip);
    } else {
        idleAnim.draw(x,y,516,516,0,flip);
    }

   Wave.graphics.flip();

}

const screen = Wave.createWindow(1280, 720);
load();

while (Wave.running) {
    update();
    draw();
}

Wave.quit();