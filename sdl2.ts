import { dlopen, suffix } from 'bun:ffi';

let path = '';
let imagepath = '';
let gfxpath = '';
let ttfpath = '';

if (import.meta.dir == "B:\\~BUN\\root") {
    path = `./lib/libSDL2.${suffix}`
    imagepath = `./lib/libSDL2_image-2.0.0.${suffix}`
    gfxpath = `./lib/libSDL2_gfx-1.0.0.${suffix}`
    ttfpath = `./lib/libSDL2_ttf.${suffix}`
} else {
    path = import.meta.dir + `/lib/libSDL2.${suffix}`;
    imagepath = import.meta.dir + `/lib/libSDL2_image-2.0.0.${suffix}`;
    gfxpath = import.meta.dir + `/lib/libSDL2_gfx-1.0.0.${suffix}`;
    ttfpath = import.meta.dir + `/lib/libSDL2_ttf.${suffix}`;
} 

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
    },
    SDL_SetWindowTitle: {
        args: ["pointer", "cstring"],
        returns: "void"
    },
    SDL_SetWindowSize: {
        args: ["pointer", "int", "int"],
        returns: "void"
    },
    SDL_SetWindowPosition: {
        args: ["pointer", "int", "int"],
        returns: "void"
    },
    SDL_GetDesktopDisplayMode: {
        args: ["int", "pointer"],
        returns: "int"
    },
    SDL_RenderDrawPoint: {
        args: ["pointer", "int", "int"],
        returns: "int"
    },
    SDL_GetTicks: {
        args: [],
        returns: "uint32_t"
    },
    SDL_HideWindow: {
        args: ["pointer"],
        returns: "void"
    },
    SDL_ShowWindow: {
        args: ["pointer"],
        returns: "void"
    },
    SDL_MaximizeWindow: {
        args: ["pointer"],
        returns: "void"
    },
    SDL_MinimizeWindow: {
        args: ["pointer"],
        returns: "void"
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

export const gfx = dlopen(gfxpath, {
    SDL_getFramerate: {
        args: ["pointer"],
        returns: "int"
    },
    SDL_initFramerate: {
        args: ["pointer"],
        returns: "void"
    },
    SDL_getFramecount: {
        args: ["pointer"],
        returns: "int"
    },
    SDL_setFramerate: {
        args: ["pointer", "int"],
        returns: "int"
    },
    pixelColor: {
        args: ["pointer", "int", "int", 'uint32_t'],
        returns: "int"
    },
    pixelRGBA: {
        args: ["pointer", "int", "int", "int", "int", "int", "int"],
        returns: "int"
    }
})

export const ttf = dlopen(ttfpath, {
    TTF_OpenFont: {
        args: ["cstring", 'int'],
        returns: "pointer"
    },
    TTF_RenderText_Solid: {
        args: ["pointer", "cstring", "int"],
        returns: "pointer"
    },
    TTF_Init: {
        args: [],
        returns: "int"
    },
    TTF_SizeText: {
        args: ["pointer", "cstring", "pointer", "pointer"],
        returns: "int"
    }
})