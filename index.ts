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

export const SDLK_UNKNOWN = 0
export const SDLK_BACKSPACE = 8
export const SDLK_TAB = 9
export const SDLK_RETURN = 13
export const SDLK_ESCAPE = 27
export const SDLK_SPACE = 32
export const SDLK_EXCLAIM = 33
export const SDLK_QUOTEDBL = 34
export const SDLK_HASH = 35
export const SDLK_DOLLAR = 36
export const SDLK_PERCENT = 37
export const SDLK_AMPERSAND = 38
export const SDLK_QUOTE = 39
export const SDLK_LEFTPAREN = 40
export const SDLK_RIGHTPAREN = 41
export const SDLK_ASTERISK = 42
export const SDLK_PLUS = 43
export const SDLK_COMMA = 44
export const SDLK_MINUS = 45
export const SDLK_PERIOD = 46
export const SDLK_SLASH = 47
export const SDLK_0 = 48
export const SDLK_1 = 49
export const SDLK_2 = 50
export const SDLK_3 = 51
export const SDLK_4 = 52
export const SDLK_5 = 53
export const SDLK_6 = 54
export const SDLK_7 = 55
export const SDLK_8 = 56
export const SDLK_9 = 57
export const SDLK_COLON = 58
export const SDLK_SEMICOLON = 59
export const SDLK_LESS = 60
export const SDLK_EQUALS = 61
export const SDLK_GREATER = 62
export const SDLK_QUESTION = 63
export const SDLK_AT = 64
export const SDLK_LEFTBRACKET = 91
export const SDLK_BACKSLASH = 92
export const SDLK_RIGHTBRACKET = 93
export const SDLK_CARET = 94
export const SDLK_UNDERSCORE = 95
export const SDLK_BACKQUOTE = 96
export const SDLK_a = 97
export const SDLK_b = 98
export const SDLK_c = 99
export const SDLK_d = 100
export const SDLK_e = 101
export const SDLK_f = 102
export const SDLK_g = 103
export const SDLK_h = 104
export const SDLK_i = 105
export const SDLK_j = 106
export const SDLK_k = 107
export const SDLK_l = 108
export const SDLK_m = 109
export const SDLK_n = 110
export const SDLK_o = 111
export const SDLK_p = 112
export const SDLK_q = 113
export const SDLK_r = 114
export const SDLK_s = 115
export const SDLK_t = 116
export const SDLK_u = 117
export const SDLK_v = 118
export const SDLK_w = 119
export const SDLK_x = 120
export const SDLK_y = 121
export const SDLK_z = 122
export const SDLK_DELETE = 127
export const SDLK_CAPSLOCK = 1073741881
export const SDLK_F1 = 1073741882
export const SDLK_F2 = 1073741883
export const SDLK_F3 = 1073741884
export const SDLK_F4 = 1073741885
export const SDLK_F5 = 1073741886
export const SDLK_F6 = 1073741887
export const SDLK_F7 = 1073741888
export const SDLK_F8 = 1073741889
export const SDLK_F9 = 1073741890
export const SDLK_F10 = 1073741891
export const SDLK_F11 = 1073741892
export const SDLK_F12 = 1073741893
export const SDLK_PRINTSCREEN = 1073741894
export const SDLK_SCROLLLOCK = 1073741895
export const SDLK_PAUSE = 1073741896
export const SDLK_INSERT = 1073741897
export const SDLK_HOME = 1073741898
export const SDLK_PAGEUP = 1073741899
export const SDLK_END = 1073741901
export const SDLK_PAGEDOWN = 1073741902
export const SDLK_RIGHT = 1073741903
export const SDLK_LEFT = 1073741904
export const SDLK_DOWN = 1073741905
export const SDLK_UP = 1073741906
export const SDLK_NUMLOCKCLEAR = 1073741907
export const SDLK_KP_DIVIDE = 1073741908
export const SDLK_KP_MULTIPLY = 1073741909
export const SDLK_KP_MINUS = 1073741910
export const SDLK_KP_PLUS = 1073741911
export const SDLK_KP_ENTER = 1073741912
export const SDLK_KP_1 = 1073741913
export const SDLK_KP_2 = 1073741914
export const SDLK_KP_3 = 1073741915
export const SDLK_KP_4 = 1073741916
export const SDLK_KP_5 = 1073741917
export const SDLK_KP_6 = 1073741918
export const SDLK_KP_7 = 1073741919
export const SDLK_KP_8 = 1073741920
export const SDLK_KP_9 = 1073741921
export const SDLK_KP_0 = 1073741922
export const SDLK_KP_PERIOD = 1073741923
export const SDLK_APPLICATION = 1073741925
export const SDLK_POWER = 1073741926
export const SDLK_KP_EQUALS = 1073741927
export const SDLK_F13 = 1073741928
export const SDLK_F14 = 1073741929
export const SDLK_F15 = 1073741930
export const SDLK_F16 = 1073741931
export const SDLK_F17 = 1073741932
export const SDLK_F18 = 1073741933
export const SDLK_F19 = 1073741934
export const SDLK_F20 = 1073741935
export const SDLK_F21 = 1073741936
export const SDLK_F22 = 1073741937
export const SDLK_F23 = 1073741938
export const SDLK_F24 = 1073741939
export const SDLK_EXECUTE = 1073741940
export const SDLK_HELP = 1073741941
export const SDLK_MENU = 1073741942
export const SDLK_SELECT = 1073741943
export const SDLK_STOP = 1073741944
export const SDLK_AGAIN = 1073741945
export const SDLK_UNDO = 1073741946
export const SDLK_CUT = 1073741947
export const SDLK_COPY = 1073741948
export const SDLK_PASTE = 1073741949
export const SDLK_FIND = 1073741950
export const SDLK_MUTE = 1073741951
export const SDLK_VOLUMEUP = 1073741952
export const SDLK_VOLUMEDOWN = 1073741953
export const SDLK_KP_COMMA = 1073741957
export const SDLK_KP_EQUALSAS400 = 1073741958
export const SDLK_ALTERASE = 1073741977
export const SDLK_SYSREQ = 1073741978
export const SDLK_CANCEL = 1073741979
export const SDLK_CLEAR = 1073741980
export const SDLK_PRIOR = 1073741981
export const SDLK_RETURN2 = 1073741982
export const SDLK_SEPARATOR = 1073741983
export const SDLK_OUT = 1073741984
export const SDLK_OPER = 1073741985
export const SDLK_CLEARAGAIN = 1073741986
export const SDLK_CRSEL = 1073741987
export const SDLK_EXSEL = 1073741988
export const SDLK_KP_00 = 1073742000
export const SDLK_KP_000 = 1073742001
export const SDLK_THOUSANDSSEPARATOR = 1073742002
export const SDLK_DECIMALSEPARATOR = 1073742003
export const SDLK_CURRENCYUNIT = 1073742004
export const SDLK_CURRENCYSUBUNIT = 1073742005
export const SDLK_KP_LEFTPAREN = 1073742006
export const SDLK_KP_RIGHTPAREN = 1073742007
export const SDLK_KP_LEFTBRACE = 1073742008
export const SDLK_KP_RIGHTBRACE = 1073742009
export const SDLK_KP_TAB = 1073742010
export const SDLK_KP_BACKSPACE = 1073742011
export const SDLK_KP_A = 1073742012
export const SDLK_KP_B = 1073742013
export const SDLK_KP_C = 1073742014
export const SDLK_KP_D = 1073742015
export const SDLK_KP_E = 1073742016
export const SDLK_KP_F = 1073742017
export const SDLK_KP_XOR = 1073742018
export const SDLK_KP_POWER = 1073742019
export const SDLK_KP_PERCENT = 1073742020
export const SDLK_KP_LESS = 1073742021
export const SDLK_KP_GREATER = 1073742022
export const SDLK_KP_AMPERSAND = 1073742023
export const SDLK_KP_DBLAMPERSAND = 1073742024
export const SDLK_KP_VERTICALBAR = 1073742025
export const SDLK_KP_DBLVERTICALBAR = 1073742026
export const SDLK_KP_COLON = 1073742027
export const SDLK_KP_HASH = 1073742028
export const SDLK_KP_SPACE = 1073742029
export const SDLK_KP_AT = 1073742030
export const SDLK_KP_EXCLAM = 1073742031
export const SDLK_KP_MEMSTORE = 1073742032
export const SDLK_KP_MEMRECALL = 1073742033
export const SDLK_KP_MEMCLEAR = 1073742034
export const SDLK_KP_MEMADD = 1073742035
export const SDLK_KP_MEMSUBTRACT = 1073742036
export const SDLK_KP_MEMMULTIPLY = 1073742037
export const SDLK_KP_MEMDIVIDE = 1073742038
export const SDLK_KP_PLUSMINUS = 1073742039
export const SDLK_KP_CLEAR = 1073742040
export const SDLK_KP_CLEARENTRY = 1073742041
export const SDLK_KP_BINARY = 1073742042
export const SDLK_KP_OCTAL = 1073742043
export const SDLK_KP_DECIMAL = 1073742044
export const SDLK_KP_HEXADECIMAL = 1073742045
export const SDLK_LCTRL = 1073742048
export const SDLK_LSHIFT = 1073742049
export const SDLK_LALT = 1073742050
export const SDLK_LGUI = 1073742051
export const SDLK_RCTRL = 1073742052
export const SDLK_RSHIFT = 1073742053
export const SDLK_RALT = 1073742054
export const SDLK_RGUI = 1073742055
export const SDLK_MODE = 1073742081
export const SDLK_AUDIONEXT = 1073742082
export const SDLK_AUDIOPREV = 1073742083
export const SDLK_AUDIOSTOP = 1073742084
export const SDLK_AUDIOPLAY = 1073742085
export const SDLK_AUDIOMUTE = 1073742086
export const SDLK_MEDIASELECT = 1073742087
export const SDLK_WWW = 1073742088
export const SDLK_MAIL = 1073742089
export const SDLK_CALCULATOR = 1073742090
export const SDLK_COMPUTER = 1073742091
export const SDLK_AC_SEARCH = 1073742092
export const SDLK_AC_HOME = 1073742093
export const SDLK_AC_BACK = 1073742094
export const SDLK_AC_FORWARD = 1073742095
export const SDLK_AC_STOP = 1073742096
export const SDLK_AC_REFRESH = 1073742097
export const SDLK_AC_BOOKMARKS = 1073742098
export const SDLK_BRIGHTNESSDOWN = 1073742099
export const SDLK_BRIGHTNESSUP = 1073742100
export const SDLK_DISPLAYSWITCH = 1073742101
export const SDLK_KBDILLUMTOGGLE = 1073742102
export const SDLK_KBDILLUMDOWN = 1073742103
export const SDLK_KBDILLUMUP = 1073742104
export const SDLK_EJECT = 1073742105
export const SDLK_SLEEP = 1073742106

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