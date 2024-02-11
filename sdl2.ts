import { dlopen, suffix } from 'bun:ffi';
import { SDL_PollEvent } from '.';

const path = `./lib/SDL2.${suffix}`;

export const lib = dlopen(path, {
    SDL_Init: {
        args: ["int"],
        returns: "int",
    },
    SDL_CreateWindow: {
        args: ["cstring", "int", "int", "int", "int", "uint32_t"],
        returns: "pointer"
    },
    SDL_GetWindowSurface: {
        args: ["ptr"],
        returns: "ptr"
    },
    SDL_FreeSurface: {
        args: ["ptr"],
        returns: "void"
    },
    SDL_DestroyWindow: {
        args: ["ptr"],
        returns: "void"
    },
    SDL_Quit: {
        args: [],
        returns: "void"
    },
    SDL_UpdateWindowSurface: {
        args: ["ptr"],
        returns: "int"
    },
    SDL_PollEvent: {
        args: ["pointer"],
        returns: "int"
    },
    SDL_CreateRenderer: {
        args: ["pointer", "int", "uint32_t"],
        returns: "pointer"
    },
    SDL_SetRenderDrawColor: {
        args: ["pointer", "uint8_t", "uint8_t", "uint8_t", "uint8_t"],
        returns: "int"
    },
    SDL_RenderClear: {
        args: ["pointer"],
        returns: "int"
    },
    SDL_RenderPresent: {
        args: ["pointer"],
        returns: "void"
    },
    SDL_Delay: {
        args: ["uint32_t"],
        returns: "void"
    }
})