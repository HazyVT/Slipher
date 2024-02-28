import { dlopen, suffix } from 'bun:ffi';

const path = `./lib/libSDL2.${suffix}`;
const imagepath = `./lib/libSDL2_image-2.0.0.${suffix}`;


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
    },
    SDL_DestroyRenderer: {
        args: ["pointer"],
        returns: "void"
    },
    SDL_LoadBMP_RW: {
        args: ["cstring"],
        returns: "pointer"
    },
    SDL_CreateTextureFromSurface: {
        args: ["pointer", "pointer"],
        returns: "pointer"
    },
    SDL_RenderCopy: {
        args: ["pointer", "pointer", "pointer", "pointer"],
        returns: "int"
    },
    SDL_GetError: {
        args: [],
        returns: "cstring"
    },
    SDL_SetWindowIcon: {
        args: ["pointer", "pointer"],
        returns: "void"
    },
    SDL_SetWindowFullscreen: {
        args: ["pointer", "int"],
        returns: "int"
    },
    SDL_GetPerformanceCounter: {
        args: [],
        returns: "int"
    },
    SDL_GetPerformanceFrequency: {
        args: [],
        returns: "int"
    },
    SDL_RenderDrawRect: {
        args: ["pointer", "pointer"],
        returns: "int"
    },
    SDL_RenderFillRect: {
        args: ["pointer", "pointer"],
        returns: "int"
    },
    SDL_RenderCopyEx: {
        args: ["pointer", "pointer", "pointer", "pointer", "double", "pointer", "int"],
        returns: "int"
    }
})

export const image = dlopen(imagepath, {
    IMG_Init: { 
        args: ["int"],
        returns: "int"
    },
    IMG_Quit: {
        args: [],
        returns: "void"
    },
    IMG_Load: {
        args: ["cstring"],
        returns: "pointer"
    }
})