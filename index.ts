import { gfx, image, lib } from "./src/sdl2";
import { type Pointer, ptr} from 'bun:ffi';

/* SDL Constants */
const SDL_INIT_TIMER           = 0x00000001;
const SDL_INIT_AUDIO           = 0x00000010;
const SDL_INIT_VIDEO           = 0x00000020;
const SDL_INIT_JOYSTICK        = 0x00000200;
const SDL_INIT_HAPTIC          = 0x00001000;
const SDL_INIT_GAMECONTROLLER  = 0x00002000;
const SDL_INIT_NOPARACHUTE     = 0x00100000;
const SDL_INIT_EVERYTHING      = 0x0000FFFF;
const SDL_HINT_DEFAULT = 1;
const SDL_HINT_NORMAL = 2;
const SDL_HINT_OVERRIDE = 3;
const SDL_WINDOW_FULLSCREEN = 0x00000001;
const SDL_WINDOW_OPENGL = 0x00000002;
const SDL_WINDOW_SHOWN = 0x00000004;
const SDL_WINDOW_HIDDEN = 0x00000008;
const SDL_WINDOW_BORDERLESS = 0x00000010;
const SDL_WINDOW_RESIZABLE = 0x00000020;
const SDL_WINDOW_MINIMIZED = 0x00000040;
const SDL_WINDOW_MAXIMIZED = 0x00000080;
const SDL_WINDOW_INPUT_GRABBED = 0x00000100;
const SDL_WINDOW_INPUT_FOCUS = 0x00000200;
const SDL_WINDOW_MOUSE_FOCUS = 0x00000400;
const SDL_WINDOW_FULLSCREEN_DESKTOP = (  0x00000001 | 0x00001000 );
const SDL_WINDOW_FOREIGN = 0x00000800;
const SDL_RENDERER_SOFTWARE = 0x00000001;
const SDL_RENDERER_ACCELERATED = 0x00000002;
const SDL_RENDERER_PRESENTVSYNC = 0x00000004;
const SDL_RENDERER_TARGETTEXTURE = 0x00000008;
const SDL_LOG_PRIORITY_VERBOSE = 1;
const SDL_LOG_PRIORITY_DEBUG = 2;
const SDL_LOG_PRIORITY_INFO = 3;
const SDL_LOG_PRIORITY_WARN = 4;
const SDL_LOG_PRIORITY_ERROR = 5;
const SDL_LOG_PRIORITY_CRITICAL = 6;
const SDL_NUM_LOG_PRIORITIES = 7;
const SDL_QUIT = 0x100;
const SDL_WINDOWPOS_CENTERED = 0x2FFF0000;
const SDL_KEYDOWN = 0x300
const SDL_KEYUP = 0x301

enum image_type {
    IMG_INIT_JPG = 0x00000001,
    IMG_INIT_PNG = 0x00000002,
    IMG_INIT_TIF = 0x00000004
}

/* SDL Types */

type SDL_Window = Pointer | null;
type SDL_Renderer = Pointer | null;
type SDL_Surface = Pointer | null;
type SDL_Texture = Pointer | null;
type SDL_Rect = Pointer | null;
type SDL_Point = Pointer | null;

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

const SDL_CreateWindow = (title: string, x: number, y: number, width: number, height: number, flags: number) : SDL_Window => lib.symbols.SDL_CreateWindow(Buffer.from(title + "\x00"), x, y, width, height, flags);
const SDL_Init = (flag: number) : number => lib.symbols.SDL_Init(flag);
const SDL_DestroyWindow = (window: SDL_Window) => lib.symbols.SDL_DestroyWindow(window);
const SDL_Quit = () : void => lib.symbols.SDL_Quit();
const SDL_PollEvent = (event: SDL_Event) => lib.symbols.SDL_PollEvent(event.getPointer());
const SDL_CreateRenderer = (window: SDL_Window, index: number, flags: number): SDL_Renderer => lib.symbols.SDL_CreateRenderer(window, index, flags);
const SDL_SetRenderDrawColor = (renderer: SDL_Renderer, red: number, green: number, blue: number, alpha: number): number => lib.symbols.SDL_SetRenderDrawColor(renderer, red, green, blue, alpha);
const SDL_RenderClear = (renderer: SDL_Renderer): number => lib.symbols.SDL_RenderClear(renderer);
const SDL_RenderPresent = (renderer: SDL_Renderer): void => lib.symbols.SDL_RenderPresent(renderer);
const SDL_DestroyRenderer = (renderer: SDL_Renderer): void => lib.symbols.SDL_DestroyRenderer(renderer);
const SDL_CreateTextureFromSurface = (renderer: SDL_Renderer, surface: SDL_Surface) : SDL_Texture => lib.symbols.SDL_CreateTextureFromSurface(renderer, surface);
const SDL_SetWindowIcon = (window: SDL_Window, surface: SDL_Surface) : void => lib.symbols.SDL_SetWindowIcon(window, surface); 
const SDL_SetWindowFullscreen = (window: SDL_Window, flags: number) : number => lib.symbols.SDL_SetWindowFullscreen(window, flags);
const SDL_GetPerformanceCounter = () : number => lib.symbols.SDL_GetPerformanceCounter();
const SDL_GetPerformanceFrequency = () : number => lib.symbols.SDL_GetPerformanceFrequency();
const SDL_RenderDrawRect = (renderer: SDL_Renderer, rect: SDL_Rect) : number => lib.symbols.SDL_RenderDrawRect(renderer, rect);
const SDL_RenderFillRect = (renderer: SDL_Renderer, rect: SDL_Rect) : number => lib.symbols.SDL_RenderFillRect(renderer, rect);
const SDL_RenderCopyEx = (renderer: SDL_Renderer, texture: SDL_Texture, srcrect: SDL_Rect, dstrect: SDL_Rect, angle: number, center: SDL_Point, flip: number) : number => lib.symbols.SDL_RenderCopyEx(renderer, texture, srcrect, dstrect, angle, center, flip);
const SDL_SetWindowTitle = (window: SDL_Window, title: string) : void => lib.symbols.SDL_SetWindowTitle(window, Buffer.from(title + "\x00"));
const SDL_SetWindowSize = (window: SDL_Window, width: number, height: number) : void => lib.symbols.SDL_SetWindowSize(window, width, height);
const SDL_SetWindowPosition = (window: SDL_Window, x: number, y: number) : void => lib.symbols.SDL_SetWindowPosition(window, x, y);;
const SDL_GetDesktopDisplayMode = (index: number, mode: Uint32Array) : number => lib.symbols.SDL_GetDesktopDisplayMode(index, ptr(mode));
const SDL_RenderDrawPoint = (renderer: SDL_Renderer, x: number, y: number) : number => lib.symbols.SDL_RenderDrawPoint(renderer, x, y);
const SDL_Delay = (ms: number) : void => lib.symbols.SDL_Delay(ms);
const SDL_GetTicks = () : number => lib.symbols.SDL_GetTicks();

const SDL_getFramerate = (manager: Uint32Array) : number => gfx.symbols.SDL_getFramerate(ptr(manager));
const SDL_initFramerate = (manager: Uint32Array) : void => gfx.symbols.SDL_initFramerate(ptr(manager));
const SDL_setFramerate = (manager: Uint32Array, rate: number) : number => gfx.symbols.SDL_setFramerate(ptr(manager), rate);

const pixelRGBA = (renderer: SDL_Renderer, x: number, y: number, r: number, b: number, g: number, a: number) : number => gfx.symbols.pixelRGBA(renderer, x, y, r, g, b, a);
const pixelColor = (renderer: SDL_Renderer, x: number, y: number, color: string) : number => gfx.symbols.pixelColor(renderer, x, y, Number(color));


const IMG_Init = (flags: number) : number => image.symbols.IMG_Init(flags);
const IMG_Quit = () : void => image.symbols.IMG_Quit();
const IMG_Load = (path: string) : SDL_Surface => image.symbols.IMG_Load(Buffer.from(path + "\x00"));

type keys =
  | "K_UNKNOWN"
  | "K_BACKSPACE"
  | "K_TAB"
  | "K_RETURN"
  | "K_ESCAPE"
  | "K_SPACE"
  | "K_EXCLAIM"
  | "K_QUOTEDBL"
  | "K_HASH"
  | "K_DOLLAR"
  | "K_PERCENT"
  | "K_AMPERSAND"
  | "K_QUOTE"
  | "K_LEFTPAREN"
  | "K_RIGHTPAREN"
  | "K_ASTERISK"
  | "K_PLUS"
  | "K_COMMA"
  | "K_MINUS"
  | "K_PERIOD"
  | "K_SLASH"
  | "K_0"
  | "K_1"
  | "K_2"
  | "K_3"
  | "K_4"
  | "K_5"
  | "K_6"
  | "K_7"
  | "K_8"
  | "K_9"
  | "K_COLON"
  | "K_SEMICOLON"
  | "K_LESS"
  | "K_EQUALS"
  | "K_GREATER"
  | "K_QUESTION"
  | "K_AT"
  | "K_LEFTBRACKET"
  | "K_BACKSLASH"
  | "K_RIGHTBRACKET"
  | "K_CARET"
  | "K_UNDERSCORE"
  | "K_BACKQUOTE"
  | "K_a"
  | "K_b"
  | "K_c"
  | "K_d"
  | "K_e"
  | "K_f"
  | "K_g"
  | "K_h"
  | "K_i"
  | "K_j"
  | "K_k"
  | "K_l"
  | "K_m"
  | "K_n"
  | "K_o"
  | "K_p"
  | "K_q"
  | "K_r"
  | "K_s"
  | "K_t"
  | "K_u"
  | "K_v"
  | "K_w"
  | "K_x"
  | "K_y"
  | "K_z"
  | "K_DELETE"
  | "K_CAPSLOCK"
  | "K_F1"
  | "K_F2"
  | "K_F3"
  | "K_F4"
  | "K_F5"
  | "K_F6"
  | "K_F7"
  | "K_F8"
  | "K_F9"
  | "K_F10"
  | "K_F11"
  | "K_F12"
  | "K_PRINTSCREEN"
  | "K_SCROLLLOCK"
  | "K_PAUSE"
  | "K_INSERT"
  | "K_HOME"
  | "K_PAGEUP"
  | "K_END"
  | "K_PAGEDOWN"
  | "K_RIGHT"
  | "K_LEFT"
  | "K_DOWN"
  | "K_UP"
  | "K_NUMLOCKCLEAR"
  | "K_KP_DIVIDE"
  | "K_KP_MULTIPLY"
  | "K_KP_MINUS"
  | "K_KP_PLUS"
  | "K_KP_ENTER"
  | "K_KP_1"
  | "K_KP_2"
  | "K_KP_3"
  | "K_KP_4"
  | "K_KP_5"
  | "K_KP_6"
  | "K_KP_7"
  | "K_KP_8"
  | "K_KP_9"
  | "K_KP_0"
  | "K_KP_PERIOD"
  | "K_APPLICATION"
  | "K_POWER"
  | "K_KP_EQUALS"
  | "K_F13"
  | "K_F14"
  | "K_F15"
  | "K_F16"
  | "K_F17"
  | "K_F18"
  | "K_F19"
  | "K_F20"
  | "K_F21"
  | "K_F22"
  | "K_F23"
  | "K_F24"
  | "K_EXECUTE"
  | "K_HELP"
  | "K_MENU"
  | "K_SELECT"
  | "K_STOP"
  | "K_AGAIN"
  | "K_UNDO"
  | "K_CUT"
  | "K_COPY"
  | "K_PASTE"
  | "K_FIND"
  | "K_MUTE"
  | "K_VOLUMEUP"
  | "K_VOLUMEDOWN"
  | "K_KP_COMMA"
  | "K_KP_EQUALSAS400"
  | "K_ALTERASE"
  | "K_SYSREQ"
  | "K_CANCEL"
  | "K_CLEAR"
  | "K_PRIOR"
  | "K_RETURN2"
  | "K_SEPARATOR"
  | "K_OUT"
  | "K_OPER"
  | "K_CLEARAGAIN"
  | "K_CRSEL"
  | "K_EXSEL"
  | "K_KP_00"
  | "K_KP_000"
  | "K_THOUSANDSSEPARATOR"
  | "K_DECIMALSEPARATOR"
  | "K_CURRENCYUNIT"
  | "K_CURRENCYSUBUNIT"
  | "K_KP_LEFTPAREN"
  | "K_KP_RIGHTPAREN"
  | "K_KP_LEFTBRACE"
  | "K_KP_RIGHTBRACE"
  | "K_KP_TAB"
  | "K_KP_BACKSPACE"
  | "K_KP_A"
  | "K_KP_B"
  | "K_KP_C"
  | "K_KP_D"
  | "K_KP_E"
  | "K_KP_F"
  | "K_KP_XOR"
  | "K_KP_POWER"
  | "K_KP_PERCENT"
  | "K_KP_LESS"
  | "K_KP_GREATER"
  | "K_KP_AMPERSAND"
  | "K_KP_DBLAMPERSAND"
  | "K_KP_VERTICALBAR"
  | "K_KP_DBLVERTICALBAR"
  | "K_KP_COLON"
  | "K_KP_HASH"
  | "K_KP_SPACE"
  | "K_KP_AT"
  | "K_KP_EXCLAM"
  | "K_KP_MEMSTORE"
  | "K_KP_MEMRECALL"
  | "K_KP_MEMCLEAR"
  | "K_KP_MEMADD"
  | "K_KP_MEMSUBTRACT"
  | "K_KP_MEMMULTIPLY"
  | "K_KP_MEMDIVIDE"
  | "K_KP_PLUSMINUS"
  | "K_KP_CLEAR"
  | "K_KP_CLEARENTRY"
  | "K_KP_BINARY"
  | "K_KP_OCTAL"
  | "K_KP_DECIMAL"
  | "K_KP_HEXADECIMAL"
  | "K_LCTRL"
  | "K_LSHIFT"
  | "K_LALT"
  | "K_LGUI"
  | "K_RCTRL"
  | "K_RSHIFT"
  | "K_RALT"
  | "K_RGUI"
  | "K_MODE"
  | "K_AUDIONEXT"
  | "K_AUDIOPREV"
  | "K_AUDIOSTOP"
  | "K_AUDIOPLAY"
  | "K_AUDIOMUTE"
  | "K_MEDIASELECT"
  | "K_WWW"
  | "K_MAIL"
  | "K_CALCULATOR"
  | "K_COMPUTER"
  | "K_AC_SEARCH"
  | "K_AC_HOME"
  | "K_AC_BACK"
  | "K_AC_FORWARD"
  | "K_AC_STOP"
  | "K_AC_REFRESH"
  | "K_AC_BOOKMARKS"
  | "K_BRIGHTNESSDOWN"
  | "K_BRIGHTNESSUP"
  | "K_DISPLAYSWITCH"
  | "K_KBDILLUMTOGGLE"
  | "K_KBDILLUMDOWN"
  | "K_KBDILLUMUP"
  | "K_EJECT"
  | "K_SLEEP";

const keyMap = new Map([
  ["K_UNKNOWN", 0],
  ["K_BACKSPACE", 8],
  ["K_TAB", 9],
  ["K_RETURN", 13],
  ["K_ESCAPE", 27],
  ["K_SPACE", 32],
  ["K_EXCLAIM", 33],
  ["K_QUOTEDBL", 34],
  ["K_HASH", 35],
  ["K_DOLLAR", 36],
  ["K_PERCENT", 37],
  ["K_AMPERSAND", 38],
  ["K_QUOTE", 39],
  ["K_LEFTPAREN", 40],
  ["K_RIGHTPAREN", 41],
  ["K_ASTERISK", 42],
  ["K_PLUS", 43],
  ["K_COMMA", 44],
  ["K_MINUS", 45],
  ["K_PERIOD", 46],
  ["K_SLASH", 47],
  ["K_0", 48],
  ["K_1", 49],
  ["K_2", 50],
  ["K_3", 51],
  ["K_4", 52],
  ["K_5", 53],
  ["K_6", 54],
  ["K_7", 55],
  ["K_8", 56],
  ["K_9", 57],
  ["K_COLON", 58],
  ["K_SEMICOLON", 59],
  ["K_LESS", 60],
  ["K_EQUALS", 61],
  ["K_GREATER", 62],
  ["K_QUESTION", 63],
  ["K_AT", 64],
  ["K_LEFTBRACKET", 91],
  ["K_BACKSLASH", 92],
  ["K_RIGHTBRACKET", 93],
  ["K_CARET", 94],
  ["K_UNDERSCORE", 95],
  ["K_BACKQUOTE", 96],
  ["K_a", 97],
  ["K_b", 98],
  ["K_c", 99],
  ["K_d", 100],
  ["K_e", 101],
  ["K_f", 102],
  ["K_g", 103],
  ["K_h", 104],
  ["K_i", 105],
  ["K_j", 106],
  ["K_k", 107],
  ["K_l", 108],
  ["K_m", 109],
  ["K_n", 110],
  ["K_o", 111],
  ["K_p", 112],
  ["K_q", 113],
  ["K_r", 114],
  ["K_s", 115],
  ["K_t", 116],
  ["K_u", 117],
  ["K_v", 118],
  ["K_w", 119],
  ["K_x", 120],
  ["K_y", 121],
  ["K_z", 122],
  ["K_DELETE", 127],
  ["K_CAPSLOCK", 1073741881],
  ["K_F1", 1073741882],
  ["K_F2", 1073741883],
  ["K_F3", 1073741884],
  ["K_F4", 1073741885],
  ["K_F5", 1073741886],
  ["K_F6", 1073741887],
  ["K_F7", 1073741888],
  ["K_F8", 1073741889],
  ["K_F9", 1073741890],
  ["K_F10", 1073741891],
  ["K_F11", 1073741892],
  ["K_F12", 1073741893],
  ["K_PRINTSCREEN", 1073741894],
  ["K_SCROLLLOCK", 1073741895],
  ["K_PAUSE", 1073741896],
  ["K_INSERT", 1073741897],
  ["K_HOME", 1073741898],
  ["K_PAGEUP", 1073741899],
  ["K_END", 1073741901],
  ["K_PAGEDOWN", 1073741902],
  ["K_RIGHT", 1073741903],
  ["K_LEFT", 1073741904],
  ["K_DOWN", 1073741905],
  ["K_UP", 1073741906],
  ["K_NUMLOCKCLEAR", 1073741907],
  ["K_KP_DIVIDE", 1073741908],
  ["K_KP_MULTIPLY", 1073741909],
  ["K_KP_MINUS", 1073741910],
  ["K_KP_PLUS", 1073741911],
  ["K_KP_ENTER", 1073741912],
  ["K_KP_1", 1073741913],
  ["K_KP_2", 1073741914],
  ["K_KP_3", 1073741915],
  ["K_KP_4", 1073741916],
  ["K_KP_5", 1073741917],
  ["K_KP_6", 1073741918],
  ["K_KP_7", 1073741919],
  ["K_KP_8", 1073741920],
  ["K_KP_9", 1073741921],
  ["K_KP_0", 1073741922],
  ["K_KP_PERIOD", 1073741923],
  ["K_APPLICATION", 1073741925],
  ["K_POWER", 1073741926],
  ["K_KP_EQUALS", 1073741927],
  ["K_F13", 1073741928],
  ["K_F14", 1073741929],
  ["K_F15", 1073741930],
  ["K_F16", 1073741931],
  ["K_F17", 1073741932],
  ["K_F18", 1073741933],
  ["K_F19", 1073741934],
  ["K_F20", 1073741935],
  ["K_F21", 1073741936],
  ["K_F22", 1073741937],
  ["K_F23", 1073741938],
  ["K_F24", 1073741939],
  ["K_EXECUTE", 1073741940],
  ["K_HELP", 1073741941],
  ["K_MENU", 1073741942],
  ["K_SELECT", 1073741943],
  ["K_STOP", 1073741944],
  ["K_AGAIN", 1073741945],
  ["K_UNDO", 1073741946],
  ["K_CUT", 1073741947],
  ["K_COPY", 1073741948],
  ["K_PASTE", 1073741949],
  ["K_FIND", 1073741950],
  ["K_MUTE", 1073741951],
  ["K_VOLUMEUP", 1073741952],
  ["K_VOLUMEDOWN", 1073741953],
  ["K_KP_COMMA", 1073741957],
  ["K_KP_EQUALSAS400", 1073741958],
  ["K_ALTERASE", 1073741977],
  ["K_SYSREQ", 1073741978],
  ["K_CANCEL", 1073741979],
  ["K_CLEAR", 1073741980],
  ["K_PRIOR", 1073741981],
  ["K_RETURN2", 1073741982],
  ["K_SEPARATOR", 1073741983],
  ["K_OUT", 1073741984],
  ["K_OPER", 1073741985],
  ["K_CLEARAGAIN", 1073741986],
  ["K_CRSEL", 1073741987],
  ["K_EXSEL", 1073741988],
  ["K_KP_00", 1073742000],
  ["K_KP_000", 1073742001],
  ["K_THOUSANDSSEPARATOR", 1073742002],
  ["K_DECIMALSEPARATOR", 1073742003],
  ["K_CURRENCYUNIT", 1073742004],
  ["K_CURRENCYSUBUNIT", 1073742005],
  ["K_KP_LEFTPAREN", 1073742006],
  ["K_KP_RIGHTPAREN", 1073742007],
  ["K_KP_LEFTBRACE", 1073742008],
  ["K_KP_RIGHTBRACE", 1073742009],
  ["K_KP_TAB", 1073742010],
  ["K_KP_BACKSPACE", 1073742011],
  ["K_KP_A", 1073742012],
  ["K_KP_B", 1073742013],
  ["K_KP_C", 1073742014],
  ["K_KP_D", 1073742015],
  ["K_KP_E", 1073742016],
  ["K_KP_F", 1073742017],
  ["K_KP_XOR", 1073742018],
  ["K_KP_POWER", 1073742019],
  ["K_KP_PERCENT", 1073742020],
  ["K_KP_LESS", 1073742021],
  ["K_KP_GREATER", 1073742022],
  ["K_KP_AMPERSAND", 1073742023],
  ["K_KP_DBLAMPERSAND", 1073742024],
  ["K_KP_VERTICALBAR", 1073742025],
  ["K_KP_DBLVERTICALBAR", 1073742026],
  ["K_KP_COLON", 1073742027],
  ["K_KP_HASH", 1073742028],
  ["K_KP_SPACE", 1073742029],
  ["K_KP_AT", 1073742030],
  ["K_KP_EXCLAM", 1073742031],
  ["K_KP_MEMSTORE", 1073742032],
  ["K_KP_MEMRECALL", 1073742033],
  ["K_KP_MEMCLEAR", 1073742034],
  ["K_KP_MEMADD", 1073742035],
  ["K_KP_MEMSUBTRACT", 1073742036],
  ["K_KP_MEMMULTIPLY", 1073742037],
  ["K_KP_MEMDIVIDE", 1073742038],
  ["K_KP_PLUSMINUS", 1073742039],
  ["K_KP_CLEAR", 1073742040],
  ["K_KP_CLEARENTRY", 1073742041],
  ["K_KP_BINARY", 1073742042],
  ["K_KP_OCTAL", 1073742043],
  ["K_KP_DECIMAL", 1073742044],
  ["K_KP_HEXADECIMAL", 1073742045],
  ["K_LCTRL", 1073742048],
  ["K_LSHIFT", 1073742049],
  ["K_LALT", 1073742050],
  ["K_LGUI", 1073742051],
  ["K_RCTRL", 1073742052],
  ["K_RSHIFT", 1073742053],
  ["K_RALT", 1073742054],
  ["K_RGUI", 1073742055],
  ["K_MODE", 1073742081],
  ["K_AUDIONEXT", 1073742082],
  ["K_AUDIOPREV", 1073742083],
  ["K_AUDIOSTOP", 1073742084],
  ["K_AUDIOPLAY", 1073742085],
  ["K_AUDIOMUTE", 1073742086],
  ["K_MEDIASELECT", 1073742087],
  ["K_WWW", 1073742088],
  ["K_MAIL", 1073742089],
  ["K_CALCULATOR", 1073742090],
  ["K_COMPUTER", 1073742091],
  ["K_AC_SEARCH", 1073742092],
  ["K_AC_HOME", 1073742093],
  ["K_AC_BACK", 1073742094],
  ["K_AC_FORWARD", 1073742095],
  ["K_AC_STOP", 1073742096],
  ["K_AC_REFRESH", 1073742097],
  ["K_AC_BOOKMARKS", 1073742098],
  ["K_BRIGHTNESSDOWN", 1073742099],
  ["K_BRIGHTNESSUP", 1073742100],
  ["K_DISPLAYSWITCH", 1073742101],
  ["K_KBDILLUMTOGGLE", 1073742102],
  ["K_KBDILLUMDOWN", 1073742103],
  ["K_KBDILLUMUP", 1073742104],
  ["K_EJECT", 1073742105],
  ["K_SLEEP", 1073742106],
]);

class Event {
    public type;
    public value;

    constructor(type: number, value: number) {
        this.type = type;
        this.value = value;
    } 
}

class Drawable {
    name: string;
    image: SDL_Surface
    texture: SDL_Texture

    constructor(name: string, image: SDL_Surface, texture: SDL_Texture) {
        this.name = name;
        this.image = image;
        this.texture = texture;
    }
}

export class Animation {
    images: Map<string, Drawable>
    data: string[];
    private frame = 0;

    constructor(images: Map<string, Drawable>, data: string[]) {
        this.images = images;
        this.data = data;
    }

    /**
     * The method that runs the animation
     * 
     */
    update() : void {
        this.frame++;
        if (this.frame == this.data.length) {
            this.frame = 0;
        }
    }

    /**
     * The method that draw the animation
     * 
     * @param x x position on screen
     * @param y y position on screen
     * @param width width of image
     * @param height height of image
     * @param rotate (optional) rotation of image. Defaults to 0
     * @param flip (optional) flips the image on the center horizontally. Defaults to false
     */
    draw(x: number, y: number, width: number, height: number, rotate?: number, flip?: boolean) : void {
        let r = rotate || 0;
        let f = flip ? 1 : 0;
        const destsrc = new Uint32Array(4);
        destsrc[0] = x;
        destsrc[1] = y;
        destsrc[2] = width;
        destsrc[3] = height;
        const drawable = this.images.get(this.data[this.frame]);
        if (drawable != null) {
            SDL_RenderCopyEx(Wave.rendererPointer, drawable!.texture, null, ptr(destsrc), r, null, f);
        }

    }
}

class WaveClock {
    private static dt : number = 0;
    private static last = 0;
    private static now = SDL_GetPerformanceCounter();

    /**
     * Method to create and return delta time
     * 
     * @returns delta time
     */
    static tick() : number {
        return SDL_GetTicks();
    }

    static counter() {
        return SDL_GetPerformanceCounter();
    }

    static frequency() {
        return SDL_GetPerformanceFrequency();
    }

}

class WaveEvent {

    public static QUIT = SDL_QUIT;
    public static KEYDOWN = SDL_KEYDOWN;
    public static KEYUP = SDL_KEYUP;

    /**
     * 
     * @returns current event
     */
    static get() : Event {
        const event = new SDL_Event();
        SDL_PollEvent(event);
        return new Event(event.event[0], event.event[5]);
    }

    static handleEvent(event:Event) {
        switch (event.type) {
            case Wave.event.QUIT:
                Wave.running = false;
                break;
            case Wave.event.KEYDOWN:
            case Wave.event.KEYUP:
                Wave.keyboard.handleKey(event);
                break;
        }
    }
}

class WaveGraphics {

    /**
     * Creates a new drawable from the path given
     * 
     * @param path path of image
     * @returns Drawable object
     */
    static newImage(path: string) {
        const img = IMG_Load(path);
        const texture = SDL_CreateTextureFromSurface(Wave.rendererPointer, img);
        const path_split = path.split('/');
        const t = path_split[path_split.length - 1].replace(".png", "");

        if (img != null && texture != null) {    
            return new Drawable(t, img, texture);
        }

        console.error("Failed to load image " + t);
        return null;
    }

    /**
     * Method to draw a drawable to the screen
     * 
     * @param drawable Drawable object to draw
     * @param x top position of drawable
     * @param y left position of drawable
     * @param width width of drawable
     * @param height height of drawable
     * @param rotate (optional) rotation of drawable. Defaults to 0
     * @param flip  (optional) horizontal flip of drawable. Defaults to false;
     */
    static draw(drawable: Drawable, x: number, y: number, width: number, height: number, rotate?: number, flip?: boolean) : void {
        let r = rotate || 0;
        let f = flip ? 1 : 0;
        const destsrc = new Uint32Array(4);
        destsrc[0] = x;
        destsrc[1] = y;
        destsrc[2] = width;
        destsrc[3] = height;
        SDL_RenderCopyEx(Wave.rendererPointer, drawable.texture, null, ptr(destsrc), r, null, f);
    }

    /**
     * Method to clear the screen.
     * Make sure to call before drawing anything
     */
    static clear() : void {
        SDL_RenderClear(Wave.rendererPointer);
    }

    /**
     * Method to draw a rectangle to the screen
     * 
     * @param mode Fill or Line. How the rectangle looks.
     * @param x top position of rectangle
     * @param y left position of rectangle
     * @param width width of rectangle
     * @param height height of rectangle
     */
    static rectangle(mode: 'fill' | 'line', x: number, y: number, width: number, height: number) : void {
        const rect = new Uint32Array(4);
        rect[0] = x;
        rect[1] = y;
        rect[2] = width;
        rect[3] = height;

        if (mode == 'fill') {
            SDL_RenderFillRect(Wave.rendererPointer, ptr(rect));
        } else if (mode == 'line') {
            SDL_RenderDrawRect(Wave.rendererPointer, ptr(rect));
        }

    }

    /**
     * Method to actually draw everything to the screen
     */
    static flip() : void {
        SDL_RenderPresent(Wave.rendererPointer);
    }

    /**
     * Method to change the active color.
     * All values of colors start at 0 and end at 255
     * Alpha value starts at 0 and ends at 1
     * 
     * @param red value of red 
     * @param green value of blue
     * @param blue  value of green
     * @param alpha value of alpha
     */
    static setColor(red: number, green: number, blue: number, alpha: number) : void {
        SDL_SetRenderDrawColor(Wave.rendererPointer, red, green, blue, alpha);
    }
    
    /**
     * Method to create a new animation
     * 
     * @param path Path of folder where images are held
     * @param frame_duration How long each frame is going to last
     * @param frames How many frames are in the animation
     * @returns Animation object
     */
    static createAnimation(path: string, frame_duration: number, frames: number) : Animation {
        const animation_frames = new Map<string, Drawable>();
        const animation_frame_data = [];
        const split_path = path.split('/');
        const animation_name = split_path[split_path.length - 1];
        for (let n = 0; n < frames; n++) {
            const animation_frame_id = animation_name + "_" + n.toString();
            let image_loc = path + `/` + animation_frame_id + ".png";
            image_loc = image_loc.replace('\\', '/');
            const image = Wave.graphics.newImage(image_loc);
            if (image != null) {
                animation_frames.set(image.name, image);
                for (let i = 0; i < frame_duration; i++) {
                    animation_frame_data.push(animation_frame_id);
                }
            }
        }
        return new Animation(animation_frames, animation_frame_data);
    }

    private static checkhex(hex: string) {
        if (hex.length == 1) {
            return hex.padStart(2, '0');
        } else {
            return hex;
        }
    }

    /* Primitive shape rendering */
    static pixel(x: number, y: number, red: number, green: number, blue: number, alpha: number) {
        const rhex = this.checkhex(red.toString(16));
        const ghex = this.checkhex(green.toString(16));
        const bhex = this.checkhex(blue.toString(16));
        const ahex = this.checkhex(alpha.toString(16));
        const color = "0x" + rhex + ghex + bhex + ahex;
        console.log(color);
        pixelColor(Wave.rendererPointer, x, y, color);
    }
}

class WaveWindow {
    private pointer: SDL_Window;
    private width: number;
    private height: number;
    private title: string;
    private fullscreen = false;
    private manager = new Uint32Array(6);
    private framerate = 60;

    constructor(pointer : SDL_Window, width: number, height: number, title: string) {
        this.pointer = pointer;
        this.width = width;
        this.height = height;
        this.title = title;
        SDL_initFramerate(this.manager);
        SDL_setFramerate(this.manager, this.framerate);
    }

    getWidth() : number{
        return this.width;
    }

    getHeight() : number {
        return this.height;
    }

    getDimensions() {
        return {width: this.width, height: this.height};
    }

    getFrameRate() {
        SDL_getFramerate(this.manager);
        return this.manager;
    }

    setFrameRate(framerate: number) {
        SDL_setFramerate(this.manager, framerate);
        this.framerate = framerate;
    }

    setSize(width: number, height: number) {
        SDL_SetWindowSize(this.pointer, width, height);

        SDL_SetWindowPosition(this.pointer, Wave.desktopWidth / 2 - (width / 2), Wave.deskopHeight / 2 - (height / 2));
        
        this.width = width;
        this.height = height;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title: string) {
        SDL_SetWindowTitle(this.pointer, title);
        this.title = title;
    }

    /**
     * Method to set the icon of the window
     * @param path Path of image
     */
    setIcon(path: string) {
        const icon = IMG_Load(path);
        SDL_SetWindowIcon(this.pointer, icon);
    }

    /**
     * Method to either turn on or off fullscreen
     * 
     * @param flag set the fullscreen flag of the window
     */
    setFullscreen(flag: boolean) {
        SDL_SetWindowFullscreen(this.pointer, flag ? SDL_WINDOW_FULLSCREEN : 0);
        this.fullscreen = flag;
    }

    getFullscreen() {
        return this.fullscreen;
    }

    capFrameRate(tick: number) {
        if ((1000 / this.framerate) > Wave.clock.tick() - tick) {
            SDL_Delay(1000 / this.framerate - (Wave.clock.tick() - tick));
        }
    }
}

class WaveKeyboard {

    private static state = new Map<number, boolean>();

    /**
     * Method to handle all key events
     * 
     * @param event The current event gotten from Wave.event.get()
     */
    public static handleKey(event: Event) : void {
        if (event.type == SDL_KEYDOWN) {
            this.state.set(event.value, true);
        } else if (event.type == SDL_KEYUP) {
            this.state.set(event.value, false);
        }
    }

    /**
     * Method to check if key is down
     * 
     * @param keycode key to check
     * @returns true if key is down and false if it is not.
     */
    public static isDown(key: keys) : boolean {
        if (this.state.get(keyMap.get(key)!) != undefined && this.state.get(keyMap.get(key)!) == true) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Method to check if key is up
     * 
     * @param key key to check
     * @returns true if key is up and false if it is not.
     */
    public static isUp(key: keys) : boolean {
        if (this.state.get(keyMap.get(key)!) != undefined && this.state.get(keyMap.get(key)!) == false) {
            return true;
        } else if (this.state.get(keyMap.get(key)!) == undefined) {
            return true;
        } else {
            return false;
        }
    }
}

export class Wave {

    public static event = WaveEvent;
    public static graphics = WaveGraphics;
    public static clock = WaveClock;
    public static keyboard = WaveKeyboard;

    public static running = true;

    public static desktopWidth = 0;
    public static deskopHeight = 0;

    /**
     * Pointer of window. Please never touch this.
     */
    public static windowPointer : SDL_Window;
    /**
     * Pointer of renderer. Please never touch this.
     */
    public static rendererPointer : SDL_Renderer;

    /**
     * Method to initialize wave.
     */
    public static init() : void {
        SDL_Init(SDL_INIT_EVERYTHING);
        IMG_Init(image_type.IMG_INIT_PNG + image_type.IMG_INIT_JPG);
        const mode = new Uint32Array(3);
        SDL_GetDesktopDisplayMode(0, mode);
        this.desktopWidth = mode[1];
        this.deskopHeight = mode[2];
    }

    /**
     * Method to quit wave.
     */
    public static quit() : void {
        IMG_Quit();
        SDL_DestroyRenderer(this.rendererPointer);
        SDL_DestroyWindow(this.windowPointer);
        SDL_Quit();
    }

    /**
     * Method to create a window in the center of the screen
     * 
     * @param title Title of window
     * @param width Width of window
     * @param height Height of window
     * @returns 
     */
    public static createWindow(width: number, height: number) {
        this.windowPointer = SDL_CreateWindow("title", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, width, height, 0);
        this.rendererPointer = SDL_CreateRenderer(this.windowPointer, -1, SDL_RENDERER_PRESENTVSYNC);
        return new WaveWindow(this.windowPointer, width, height, "title");;
    }
}