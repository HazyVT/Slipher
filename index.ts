import { lib } from "./sdl2";
import { type Pointer, ptr} from 'bun:ffi';

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

export const SDL_WINDOWPOS_CENTERED = 0x2FFF0000;
export const SDL_WINDOWPOS_UNDEFINED = 0x1FFF0000;

export const SDL_KEYDOWN = 0x300
export const SDL_KEYUP = 0x301

/* SDL Types */

export type SDL_Window = Pointer | null;
export type SDL_Renderer = Pointer | null;
export type SDL_Surface = Pointer | null;
export type SDL_Texture = Pointer | null;
export type SDL_Rect = Pointer | null;

/* SDL Classes */

export class SDL_Event {

    public event : Uint32Array;
    private pointer;

    constructor() {
        this.event = new Uint32Array(32);
        this.pointer = ptr(this.event);
    }

    getPointer() {
        return this.pointer;
    }
}


class EvClass {
    public type;
    public value;

    constructor(type: number, value: number) {
        this.type = type;
        this.value = value;
    } 
}

export const SDL_CreateWindow = (title: string, x: number, y: number, width: number, height: number, flags: number) : SDL_Window => lib.symbols.SDL_CreateWindow(Buffer.from(title), x, y, width, height, flags);
export const SDL_Init = (flag: number) : number => lib.symbols.SDL_Init(flag);
export const SDL_GetWindowSurface = (window: SDL_Window) => lib.symbols.SDL_GetWindowSurface(window);
export const SDL_DestroyWindow = (window: SDL_Window) => lib.symbols.SDL_DestroyWindow(window);
export const SDL_Quit = () : void => lib.symbols.SDL_Quit();
export const SDL_PollEvent = (event: SDL_Event) => lib.symbols.SDL_PollEvent(event.getPointer());
export const SDL_CreateRenderer = (window: SDL_Window, index: number, flags: number): SDL_Renderer => lib.symbols.SDL_CreateRenderer(window, index, flags);
export const SDL_SetRenderDrawColor = (renderer: SDL_Renderer, red: number, green: number, blue: number, alpha: number): number => lib.symbols.SDL_SetRenderDrawColor(renderer, red, green, blue, alpha);
export const SDL_RenderClear = (renderer: SDL_Renderer): number => lib.symbols.SDL_RenderClear(renderer);
export const SDL_RenderPresent = (renderer: SDL_Renderer): void => lib.symbols.SDL_RenderPresent(renderer);
export const SDL_Delay = (ms: number): void => lib.symbols.SDL_Delay(ms);
export const SDL_DestroyRenderer = (renderer: SDL_Renderer): void => lib.symbols.SDL_DestroyRenderer(renderer);
export const SDL_LoadBMP = (path: string) : SDL_Surface => lib.symbols.SDL_LoadBMP_RW(Buffer.from(path));
export const SDL_CreateTextureFromSurface = (renderer: SDL_Renderer, surface: SDL_Surface) : SDL_Texture => lib.symbols.SDL_CreateTextureFromSurface(renderer, surface);
export const SDL_RenderCopy = (renderer: SDL_Renderer, texture: SDL_Texture, srcrect: SDL_Rect, dstrect: SDL_Rect) : number => lib.symbols.SDL_RenderCopy(renderer, texture, srcrect, dstrect);
export const SDL_GetError = () : String => lib.symbols.SDL_GetError();

class Display {
    static set_mode(width: number, height: number) {
        const window = SDL_CreateWindow("Tygame", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, width, height, 0);
        return window;
    }
}

class Event {
    static get() : EvClass {
        const event = new SDL_Event();
        SDL_PollEvent(event);
        return new EvClass(event.event[0], event.event[5]);
    }
}

export class Tygame {

    public static display = Display;
    public static event = Event;

    public static QUIT = SDL_QUIT;
    public static KEYDOWN = SDL_KEYDOWN;
    public static KEYUP = SDL_KEYUP;

    public static K_UNKNOWN = 0
    public static K_BACKSPACE = 8
    public static K_TAB = 9
    public static K_RETURN = 13
    public static K_ESCAPE = 27
    public static K_SPACE = 32
    public static K_EXCLAIM = 33
    public static K_QUOTEDBL = 34
    public static K_HASH = 35
    public static K_DOLLAR = 36
    public static K_PERCENT = 37
    public static K_AMPERSAND = 38
    public static K_QUOTE = 39
    public static K_LEFTPAREN = 40
    public static K_RIGHTPAREN = 41
    public static K_ASTERISK = 42
    public static K_PLUS = 43
    public static K_COMMA = 44
    public static K_MINUS = 45
    public static K_PERIOD = 46
    public static K_SLASH = 47
    public static K_0 = 48
    public static K_1 = 49
    public static K_2 = 50
    public static K_3 = 51
    public static K_4 = 52
    public static K_5 = 53
    public static K_6 = 54
    public static K_7 = 55
    public static K_8 = 56
    public static K_9 = 57
    public static K_COLON = 58
    public static K_SEMICOLON = 59
    public static K_LESS = 60
    public static K_EQUALS = 61
    public static K_GREATER = 62
    public static K_QUESTION = 63
    public static K_AT = 64
    public static K_LEFTBRACKET = 91
    public static K_BACKSLASH = 92
    public static K_RIGHTBRACKET = 93
    public static K_CARET = 94
    public static K_UNDERSCORE = 95
    public static K_BACKQUOTE = 96
    public static K_a = 97
    public static K_b = 98
    public static K_c = 99
    public static K_d = 100
    public static K_e = 101
    public static K_f = 102
    public static K_g = 103
    public static K_h = 104
    public static K_i = 105
    public static K_j = 106
    public static K_k = 107
    public static K_l = 108
    public static K_m = 109
    public static K_n = 110
    public static K_o = 111
    public static K_p = 112
    public static K_q = 113
    public static K_r = 114
    public static K_s = 115
    public static K_t = 116
    public static K_u = 117
    public static K_v = 118
    public static K_w = 119
    public static K_x = 120
    public static K_y = 121
    public static K_z = 122
    public static K_DELETE = 127
    public static K_CAPSLOCK = 1073741881
    public static K_F1 = 1073741882
    public static K_F2 = 1073741883
    public static K_F3 = 1073741884
    public static K_F4 = 1073741885
    public static K_F5 = 1073741886
    public static K_F6 = 1073741887
    public static K_F7 = 1073741888
    public static K_F8 = 1073741889
    public static K_F9 = 1073741890
    public static K_F10 = 1073741891
    public static K_F11 = 1073741892
    public static K_F12 = 1073741893
    public static K_PRINTSCREEN = 1073741894
    public static K_SCROLLLOCK = 1073741895
    public static K_PAUSE = 1073741896
    public static K_INSERT = 1073741897
    public static K_HOME = 1073741898
    public static K_PAGEUP = 1073741899
    public static K_END = 1073741901
    public static K_PAGEDOWN = 1073741902
    public static K_RIGHT = 1073741903
    public static K_LEFT = 1073741904
    public static K_DOWN = 1073741905
    public static K_UP = 1073741906
    public static K_NUMLOCKCLEAR = 1073741907
    public static K_KP_DIVIDE = 1073741908
    public static K_KP_MULTIPLY = 1073741909
    public static K_KP_MINUS = 1073741910
    public static K_KP_PLUS = 1073741911
    public static K_KP_ENTER = 1073741912
    public static K_KP_1 = 1073741913
    public static K_KP_2 = 1073741914
    public static K_KP_3 = 1073741915
    public static K_KP_4 = 1073741916
    public static K_KP_5 = 1073741917
    public static K_KP_6 = 1073741918
    public static K_KP_7 = 1073741919
    public static K_KP_8 = 1073741920
    public static K_KP_9 = 1073741921
    public static K_KP_0 = 1073741922
    public static K_KP_PERIOD = 1073741923
    public static K_APPLICATION = 1073741925
    public static K_POWER = 1073741926
    public static K_KP_EQUALS = 1073741927
    public static K_F13 = 1073741928
    public static K_F14 = 1073741929
    public static K_F15 = 1073741930
    public static K_F16 = 1073741931
    public static K_F17 = 1073741932
    public static K_F18 = 1073741933
    public static K_F19 = 1073741934
    public static K_F20 = 1073741935
    public static K_F21 = 1073741936
    public static K_F22 = 1073741937
    public static K_F23 = 1073741938
    public static K_F24 = 1073741939
    public static K_EXECUTE = 1073741940
    public static K_HELP = 1073741941
    public static K_MENU = 1073741942
    public static K_SELECT = 1073741943
    public static K_STOP = 1073741944
    public static K_AGAIN = 1073741945
    public static K_UNDO = 1073741946
    public static K_CUT = 1073741947
    public static K_COPY = 1073741948
    public static K_PASTE = 1073741949
    public static K_FIND = 1073741950
    public static K_MUTE = 1073741951
    public static K_VOLUMEUP = 1073741952
    public static K_VOLUMEDOWN = 1073741953
    public static K_KP_COMMA = 1073741957
    public static K_KP_EQUALSAS400 = 1073741958
    public static K_ALTERASE = 1073741977
    public static K_SYSREQ = 1073741978
    public static K_CANCEL = 1073741979
    public static K_CLEAR = 1073741980
    public static K_PRIOR = 1073741981
    public static K_RETURN2 = 1073741982
    public static K_SEPARATOR = 1073741983
    public static K_OUT = 1073741984
    public static K_OPER = 1073741985
    public static K_CLEARAGAIN = 1073741986
    public static K_CRSEL = 1073741987
    public static K_EXSEL = 1073741988
    public static K_KP_00 = 1073742000
    public static K_KP_000 = 1073742001
    public static K_THOUSANDSSEPARATOR = 1073742002
    public static K_DECIMALSEPARATOR = 1073742003
    public static K_CURRENCYUNIT = 1073742004
    public static K_CURRENCYSUBUNIT = 1073742005
    public static K_KP_LEFTPAREN = 1073742006
    public static K_KP_RIGHTPAREN = 1073742007
    public static K_KP_LEFTBRACE = 1073742008
    public static K_KP_RIGHTBRACE = 1073742009
    public static K_KP_TAB = 1073742010
    public static K_KP_BACKSPACE = 1073742011
    public static K_KP_A = 1073742012
    public static K_KP_B = 1073742013
    public static K_KP_C = 1073742014
    public static K_KP_D = 1073742015
    public static K_KP_E = 1073742016
    public static K_KP_F = 1073742017
    public static K_KP_XOR = 1073742018
    public static K_KP_POWER = 1073742019
    public static K_KP_PERCENT = 1073742020
    public static K_KP_LESS = 1073742021
    public static K_KP_GREATER = 1073742022
    public static K_KP_AMPERSAND = 1073742023
    public static K_KP_DBLAMPERSAND = 1073742024
    public static K_KP_VERTICALBAR = 1073742025
    public static K_KP_DBLVERTICALBAR = 1073742026
    public static K_KP_COLON = 1073742027
    public static K_KP_HASH = 1073742028
    public static K_KP_SPACE = 1073742029
    public static K_KP_AT = 1073742030
    public static K_KP_EXCLAM = 1073742031
    public static K_KP_MEMSTORE = 1073742032
    public static K_KP_MEMRECALL = 1073742033
    public static K_KP_MEMCLEAR = 1073742034
    public static K_KP_MEMADD = 1073742035
    public static K_KP_MEMSUBTRACT = 1073742036
    public static K_KP_MEMMULTIPLY = 1073742037
    public static K_KP_MEMDIVIDE = 1073742038
    public static K_KP_PLUSMINUS = 1073742039
    public static K_KP_CLEAR = 1073742040
    public static K_KP_CLEARENTRY = 1073742041
    public static K_KP_BINARY = 1073742042
    public static K_KP_OCTAL = 1073742043
    public static K_KP_DECIMAL = 1073742044
    public static K_KP_HEXADECIMAL = 1073742045
    public static K_LCTRL = 1073742048
    public static K_LSHIFT = 1073742049
    public static K_LALT = 1073742050
    public static K_LGUI = 1073742051
    public static K_RCTRL = 1073742052
    public static K_RSHIFT = 1073742053
    public static K_RALT = 1073742054
    public static K_RGUI = 1073742055
    public static K_MODE = 1073742081
    public static K_AUDIONEXT = 1073742082
    public static K_AUDIOPREV = 1073742083
    public static K_AUDIOSTOP = 1073742084
    public static K_AUDIOPLAY = 1073742085
    public static K_AUDIOMUTE = 1073742086
    public static K_MEDIASELECT = 1073742087
    public static K_WWW = 1073742088
    public static K_MAIL = 1073742089
    public static K_CALCULATOR = 1073742090
    public static K_COMPUTER = 1073742091
    public static K_AC_SEARCH = 1073742092
    public static K_AC_HOME = 1073742093
    public static K_AC_BACK = 1073742094
    public static K_AC_FORWARD = 1073742095
    public static K_AC_STOP = 1073742096
    public static K_AC_REFRESH = 1073742097
    public static K_AC_BOOKMARKS = 1073742098
    public static K_BRIGHTNESSDOWN = 1073742099
    public static K_BRIGHTNESSUP = 1073742100
    public static K_DISPLAYSWITCH = 1073742101
    public static K_KBDILLUMTOGGLE = 1073742102
    public static K_KBDILLUMDOWN = 1073742103
    public static K_KBDILLUMUP = 1073742104
    public static K_EJECT = 1073742105
    public static K_SLEEP = 1073742106

    public static init() {
        SDL_Init(SDL_INIT_EVERYTHING);
    }
}