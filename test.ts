import { SDL_CreateRenderer, SDL_CreateWindow, SDL_Delay, SDL_GetWindowSurface, SDL_INIT_EVERYTHING, SDL_INIT_VIDEO, SDL_Init, SDL_PollEvent, SDL_RenderClear, SDL_RenderPresent, SDL_SetRenderDrawColor, SDL_WINDOW_FULLSCREEN, SDL_WINDOW_SHOWN, type SDL_Renderer, type SDL_Window, SDL_Quit, SDL_QUIT, SDL_DestroyWindow, SDL_DestroyRenderer } from ".";
import { type Pointer, read, ptr } from 'bun:ffi'

let isRunning: boolean = false;
let renderer: SDL_Renderer;
let window : SDL_Window;
let count: number = 0;

function init() {

    let flags = 0;
    flags = SDL_WINDOW_SHOWN;

    if (SDL_Init(SDL_INIT_EVERYTHING) != 0) {
        console.error("SDL Failed to initialize");
        isRunning = false;
        return;
    }

    window = SDL_CreateWindow("Hello World!", 320, 240, 640, 480, flags);
    renderer = SDL_CreateRenderer(window, -1, 0);
    SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);

    isRunning = true;
}

function handleEvents() {
    const events = new Uint32Array(32);
    const eventptr = ptr(events);
    while (SDL_PollEvent(eventptr)) {
        events.forEach((event) => {
            if (event == SDL_QUIT) {
                isRunning = false;
            };
        })
    };
}

function clean() {
    SDL_DestroyWindow(window);
    SDL_DestroyRenderer(renderer);
    SDL_Quit();
}

function loop() {
    SDL_RenderClear(renderer);
    SDL_RenderPresent(renderer);
    count++;
}

init();

while (isRunning) {
    handleEvents();
    loop();
}

clean();