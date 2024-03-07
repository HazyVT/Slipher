import { Slipher, Animation, Drawable } from '../index';

let x = 380, y = 387;
let velocity = {x: 0, y: 0};
let time = 0;

let flip = false;

let npcstate = false;
let action = 'idle';
const string = "So what exactly are you doing in my house?";



let idleAnim: Animation;
let walkAnim: Animation;
let npcwaitAnim: Animation;
let npctalkAnim: Animation;

let room: Drawable;

const change_action = (action: string, new_action: string) => {
    if (action != new_action) {
        action = new_action;
    }
    return {action: action};
}

const draw_text = () => {
    if (time < string.length) {
        time += 0.2;
    }
    Slipher.graphics.rectangle('fill', 420, 260, 440, 60, 255,255,255);
    Slipher.graphics.print(string.substring(0, Math.floor(time)), 440, 270);
}

function load() {
    screen.setIcon("./assets/butterfly.png")
    idleAnim = Slipher.graphics.createAnimation("./assets/idle", 8, 8);
    walkAnim = Slipher.graphics.createAnimation("./assets/walk", 8, 8);
    npcwaitAnim = Slipher.graphics.createAnimation("./assets/wait", 8, 6);
    npctalkAnim = Slipher.graphics.createAnimation("./assets/talk", 8, 7);
    const tempr = Slipher.graphics.newImage("./assets/map.png");
    if (tempr != null) {
        room = tempr;
    }
}

function update() {
    const event = Slipher.event.get();
    const tick = Slipher.clock.tick();

    Slipher.event.handleEvent(event);

    if (!npcstate) {
        if (Slipher.keyboard.isDown('a') && (Slipher.keyboard.isDown('d'))) {
            velocity.x = 0;
            const newact = change_action(action, "idle");
            action = newact.action;
        } else if (Slipher.keyboard.isDown('a')) {
            velocity.x = -2;
            const newact = change_action(action, "walk");
            action = newact.action;
            flip = true;
        } else if (Slipher.keyboard.isDown('d')) {
            velocity.x = 2;
            const newact = change_action(action, "walk");
            action = newact.action;
            flip = false;
        } else {
            velocity.x = 0;
            const newact = change_action(action, "idle");
            action = newact.action;
        }
    }

    if (x <= 360) {
        x = 360;
    } else if (x >= 790) {
        x = 790;
    }

    if (x >= 440 && x <= 480) {
        if (Slipher.keyboard.isPressed('z')) {
            time = 0;
            velocity.x = 0;
            action = "idle";
            npcstate = !npcstate;
        }
    }

    if (Slipher.keyboard.isDown('ESCAPE')) {
        Slipher.running = false;
    }

    if (action == "walk") {
        walkAnim.update();
    } else {
        idleAnim.update();
    }

    x += velocity.x;
    y += velocity.y;

    if (npcstate) {
        npctalkAnim.update();
    } else {
        npcwaitAnim.update();
    }
    
    screen.capFrameRate(tick);

}

function draw() {

    Slipher.graphics.clear();


    //Slipher.graphics.rectangle('fill', 0, 0, 1280, 720, 255, 255, 255);

    Slipher.graphics.draw(room, (screen.getWidth() / 2) - 240, (screen.getHeight() / 2) - 120, 480, 240);

    if (npcstate) {
        npctalkAnim.draw(500, 387, 124, 124, 0, true);
        draw_text();
        //Slipher.graphics.print("Hello World!", 420, 350);
    } else {
        npcwaitAnim.draw(500, 387, 124, 124, 0, true);
    }
    
    if (action == "walk") {
        walkAnim.draw(x,y,124,124,0,flip);
    } else {
        idleAnim.draw(x,y,124,124,0,flip);
    }


   Slipher.graphics.flip();

}

Slipher.init();
const screen = Slipher.createWindow(1280, 720);
load();

while (Slipher.running) {
    update();
    draw();
}

Slipher.quit();