import { lib } from "./sdl2";
import { CString, type Pointer} from 'bun:ffi';

export const SDL_INIT_TIMER           = 0x00000001;
export const SDL_INIT_AUDIO           = 0x00000010;
export const SDL_INIT_VIDEO           = 0x00000020;
export const SDL_INIT_JOYSTICK        = 0x00000200;
export const SDL_INIT_HAPTIC          = 0x00001000;
export const SDL_INIT_GAMECONTROLLER  = 0x00002000;
export const SDL_INIT_NOPARACHUTE     = 0x00100000;
export const SDL_INIT_EVERYTHING      = 0x0000FFFF;

export const SDL_HINT_FRAMEBUFFER_ACCELERATION    = "SDL_FRAMEBUFFER_ACCELERATION";
export const SDL_HINT_RENDER_DRIVER               = "SDL_RENDER_DRIVER";
export const SDL_HINT_RENDER_OPENGL_SHADERS       = "SDL_RENDER_OPENGL_SHADERS";
export const SDL_HINT_RENDER_SCALE_QUALITY        = "SDL_RENDER_SCALE_QUALITY";
export const SDL_HINT_RENDER_VSYNC                = "SDL_RENDER_VSYNC";
export const SDL_HINT_VIDEO_X11_XVIDMODE          = "SDL_VIDEO_X11_XVIDMODE";
export const SDL_HINT_VIDEO_X11_XINERAMA          = "SDL_VIDEO_X11_XINERAMA";
export const SDL_HINT_VIDEO_X11_XRANDR            = "SDL_VIDEO_X11_XRANDR";
export const SDL_HINT_GRAB_KEYBOARD               = "SDL_GRAB_KEYBOARD";
export const SDL_HINT_VIDEO_MINIMIZE_ON_FOCUS_LOSS    = "SDL_VIDEO_MINIMIZE_ON_FOCUS_LOSS";
export const SDL_HINT_IDLE_TIMER_DISABLED  = "SDL_IOS_IDLE_TIMER_DISABLED";
export const SDL_HINT_ORIENTATIONS  = "SDL_IOS_ORIENTATIONS";
export const SDL_HINT_GAMECONTROLLERCONFIG  = "SDL_GAMECONTROLLERCONFIG";
export const SDL_HINT_ALLOW_TOPMOST  = "SDL_ALLOW_TOPMOST";
export const SDL_HINT_DEFAULT = 1;
export const SDL_HINT_NORMAL = 2;
export const SDL_HINT_OVERRIDE = 3;

export const SDL_WINDOW_FULLSCREEN = 0x00000001;
export const SDL_WINDOW_OPENGL = 0x00000002;
export const SDL_WINDOW_SHOWN = 0x00000004;
export const SDL_WINDOW_HIDDEN = 0x00000008;
export const SDL_WINDOW_BORDERLESS = 0x00000010;
export const SDL_WINDOW_RESIZABLE = 0x00000020;
export const SDL_WINDOW_MINIMIZED = 0x00000040;
export const SDL_WINDOW_MAXIMIZED = 0x00000080;
export const SDL_WINDOW_INPUT_GRABBED = 0x00000100;
export const SDL_WINDOW_INPUT_FOCUS = 0x00000200;
export const SDL_WINDOW_MOUSE_FOCUS = 0x00000400;
export const SDL_WINDOW_FULLSCREEN_DESKTOP = (  0x00000001 | 0x00001000 );
export const SDL_WINDOW_FOREIGN = 0x00000800;

export const SDL_RENDERER_SOFTWARE = 0x00000001;
export const SDL_RENDERER_ACCELERATED = 0x00000002;
export const SDL_RENDERER_PRESENTVSYNC = 0x00000004;
export const SDL_RENDERER_TARGETTEXTURE = 0x00000008;

export const SDL_LOG_PRIORITY_VERBOSE = 1;
export const SDL_LOG_PRIORITY_DEBUG = 2;
export const SDL_LOG_PRIORITY_INFO = 3;
export const SDL_LOG_PRIORITY_WARN = 4;
export const SDL_LOG_PRIORITY_ERROR = 5;
export const SDL_LOG_PRIORITY_CRITICAL = 6;
export const SDL_NUM_LOG_PRIORITIES = 7;

export const SDL_QUIT = 0x100;

export type SDL_Window = Pointer | null;
export type SDL_Renderer = Pointer | null;

export const SDL_CreateWindow = (title: string, x: number, y: number, width: number, height: number, flags: number) : SDL_Window => lib.symbols.SDL_CreateWindow(Buffer.from(title), x, y, width, height, flags);
export const SDL_Init = (flag: number) : number => lib.symbols.SDL_Init(flag);
export const SDL_GetWindowSurface = (window: SDL_Window) => lib.symbols.SDL_GetWindowSurface(window);
export const SDL_DestroyWindow = (window: SDL_Window) => lib.symbols.SDL_DestroyWindow(window);
export const SDL_Quit = () : void => lib.symbols.SDL_Quit();
export const SDL_PollEvent = (event: Pointer) => lib.symbols.SDL_PollEvent(event);
export const SDL_CreateRenderer = (window: SDL_Window, index: number, flags: number): SDL_Renderer => lib.symbols.SDL_CreateRenderer(window, index, flags);
export const SDL_SetRenderDrawColor = (renderer: SDL_Renderer, red: number, green: number, blue: number, alpha: number): number => lib.symbols.SDL_SetRenderDrawColor(renderer, red, green, blue, alpha);
export const SDL_RenderClear = (renderer: SDL_Renderer): number => lib.symbols.SDL_RenderClear(renderer);
export const SDL_RenderPresent = (renderer: SDL_Renderer): void => lib.symbols.SDL_RenderPresent(renderer);
export const SDL_Delay = (ms: number): void => lib.symbols.SDL_Delay(ms);
export const SDL_DestroyRenderer = (renderer: SDL_Renderer): void => lib.symbols.SDL_DestroyRenderer(renderer);