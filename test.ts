import { SDL_CreateRenderer, SDL_CreateWindow, SDL_Delay, SDL_GetWindowSurface, SDL_INIT_EVERYTHING, SDL_INIT_VIDEO, SDL_Init, SDL_PollEvent, SDL_RenderClear, SDL_RenderPresent, SDL_SetRenderDrawColor, SDL_WINDOW_SHOWN } from ".";

SDL_Init(SDL_INIT_EVERYTHING);

const window = SDL_CreateWindow("Hello World!", 320, 240, 640, 480, SDL_WINDOW_SHOWN);
const renderer = SDL_CreateRenderer(window, -1, 0);

SDL_SetRenderDrawColor(renderer, 0, 255, 0, 255);

SDL_RenderClear(renderer);

SDL_RenderPresent(renderer);

SDL_Delay(3000);