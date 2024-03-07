import { gfx, image, lib, ttf } from "./sdl2";
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
type TTF_Font = Pointer | null;

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

const TTF_OpenFont = (path: string, ptsize: number) : TTF_Font => ttf.symbols.TTF_OpenFont(Buffer.from(path + "\x00"), ptsize);
const TTF_RenderText_Solid = (font: TTF_Font, text: string, color: Uint32Array) : SDL_Surface => ttf.symbols.TTF_RenderText_Solid(font, Buffer.from(text + "\x00"), color);
const TTF_Init = () : number => ttf.symbols.TTF_Init();
const TTF_SizeText = (font: TTF_Font, text: string, width: Uint32Array, height: Uint32Array) : number => ttf.symbols.TTF_SizeText(font, Buffer.from(text + "\x00"), ptr(width), ptr(height));

const pixelRGBA = (renderer: SDL_Renderer, x: number, y: number, r: number, b: number, g: number, a: number) : number => gfx.symbols.pixelRGBA(renderer, x, y, r, g, b, a);
const pixelColor = (renderer: SDL_Renderer, x: number, y: number, color: string) : number => gfx.symbols.pixelColor(renderer, x, y, Number(color));


const IMG_Init = (flags: number) : number => image.symbols.IMG_Init(flags);
const IMG_Quit = () : void => image.symbols.IMG_Quit();
const IMG_Load = (path: string) : SDL_Surface => image.symbols.IMG_Load(Buffer.from(path + "\x00"));

type keys =
  | "UNKNOWN"
  | "BACKSPACE"
  | "TAB"
  | "RETURN"
  | "ESCAPE"
  | "SPACE"
  | "EXCLAIM"
  | "QUOTEDBL"
  | "HASH"
  | "DOLLAR"
  | "PERCENT"
  | "AMPERSAND"
  | "QUOTE"
  | "LEFTPAREN"
  | "RIGHTPAREN"
  | "ASTERISK"
  | "PLUS"
  | "COMMA"
  | "MINUS"
  | "PERIOD"
  | "SLASH"
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "COLON"
  | "SEMICOLON"
  | "LESS"
  | "EQUALS"
  | "GREATER"
  | "QUESTION"
  | "AT"
  | "LEFTBRACKET"
  | "BACKSLASH"
  | "RIGHTBRACKET"
  | "CARET"
  | "UNDERSCORE"
  | "BACKQUOTE"
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"
  | "DELETE"
  | "CAPSLOCK"
  | "F1"
  | "F2"
  | "F3"
  | "F4"
  | "F5"
  | "F6"
  | "F7"
  | "F8"
  | "F9"
  | "F10"
  | "F11"
  | "F12"
  | "PRINTSCREEN"
  | "SCROLLLOCK"
  | "PAUSE"
  | "INSERT"
  | "HOME"
  | "PAGEUP"
  | "END"
  | "PAGEDOWN"
  | "RIGHT"
  | "LEFT"
  | "DOWN"
  | "UP"
  | "NUMLOCKCLEAR"
  | "KP_DIVIDE"
  | "KP_MULTIPLY"
  | "KP_MINUS"
  | "KP_PLUS"
  | "KP_ENTER"
  | "KP_1"
  | "KP_2"
  | "KP_3"
  | "KP_4"
  | "KP_5"
  | "KP_6"
  | "KP_7"
  | "KP_8"
  | "KP_9"
  | "KP_0"
  | "KP_PERIOD"
  | "APPLICATION"
  | "POWER"
  | "KP_EQUALS"
  | "F13"
  | "F14"
  | "F15"
  | "F16"
  | "F17"
  | "F18"
  | "F19"
  | "F20"
  | "F21"
  | "F22"
  | "F23"
  | "F24"
  | "EXECUTE"
  | "HELP"
  | "MENU"
  | "SELECT"
  | "STOP"
  | "AGAIN"
  | "UNDO"
  | "CUT"
  | "COPY"
  | "PASTE"
  | "FIND"
  | "MUTE"
  | "VOLUMEUP"
  | "VOLUMEDOWN"
  | "KP_COMMA"
  | "KP_EQUALSAS400"
  | "ALTERASE"
  | "SYSREQ"
  | "CANCEL"
  | "CLEAR"
  | "PRIOR"
  | "RETURN2"
  | "SEPARATOR"
  | "OUT"
  | "OPER"
  | "CLEARAGAIN"
  | "CRSEL"
  | "EXSEL"
  | "KP_00"
  | "KP_000"
  | "THOUSANDSSEPARATOR"
  | "DECIMALSEPARATOR"
  | "CURRENCYUNIT"
  | "CURRENCYSUBUNIT"
  | "KP_LEFTPAREN"
  | "KP_RIGHTPAREN"
  | "KP_LEFTBRACE"
  | "KP_RIGHTBRACE"
  | "KP_TAB"
  | "KP_BACKSPACE"
  | "KP_A"
  | "KP_B"
  | "KP_C"
  | "KP_D"
  | "KP_E"
  | "KP_F"
  | "KP_XOR"
  | "KP_POWER"
  | "KP_PERCENT"
  | "KP_LESS"
  | "KP_GREATER"
  | "KP_AMPERSAND"
  | "KP_DBLAMPERSAND"
  | "KP_VERTICALBAR"
  | "KP_DBLVERTICALBAR"
  | "KP_COLON"
  | "KP_HASH"
  | "KP_SPACE"
  | "KP_AT"
  | "KP_EXCLAM"
  | "KP_MEMSTORE"
  | "KP_MEMRECALL"
  | "KP_MEMCLEAR"
  | "KP_MEMADD"
  | "KP_MEMSUBTRACT"
  | "KP_MEMMULTIPLY"
  | "KP_MEMDIVIDE"
  | "KP_PLUSMINUS"
  | "KP_CLEAR"
  | "KP_CLEARENTRY"
  | "KP_BINARY"
  | "KP_OCTAL"
  | "KP_DECIMAL"
  | "KP_HEXADECIMAL"
  | "LCTRL"
  | "LSHIFT"
  | "LALT"
  | "LGUI"
  | "RCTRL"
  | "RSHIFT"
  | "RALT"
  | "RGUI"
  | "MODE"
  | "AUDIONEXT"
  | "AUDIOPREV"
  | "AUDIOSTOP"
  | "AUDIOPLAY"
  | "AUDIOMUTE"
  | "MEDIASELECT"
  | "WWW"
  | "MAIL"
  | "CALCULATOR"
  | "COMPUTER"
  | "AC_SEARCH"
  | "AC_HOME"
  | "AC_BACK"
  | "AC_FORWARD"
  | "AC_STOP"
  | "AC_REFRESH"
  | "AC_BOOKMARKS"
  | "BRIGHTNESSDOWN"
  | "BRIGHTNESSUP"
  | "DISPLAYSWITCH"
  | "KBDILLUMTOGGLE"
  | "KBDILLUMDOWN"
  | "KBDILLUMUP"
  | "EJECT"
  | "SLEEP";

const keyMap = new Map([
  ["UNKNOWN", 0],
  ["BACKSPACE", 8],
  ["TAB", 9],
  ["RETURN", 13],
  ["ESCAPE", 27],
  ["SPACE", 32],
  ["EXCLAIM", 33],
  ["QUOTEDBL", 34],
  ["HASH", 35],
  ["DOLLAR", 36],
  ["PERCENT", 37],
  ["AMPERSAND", 38],
  ["QUOTE", 39],
  ["LEFTPAREN", 40],
  ["RIGHTPAREN", 41],
  ["ASTERISK", 42],
  ["PLUS", 43],
  ["COMMA", 44],
  ["MINUS", 45],
  ["PERIOD", 46],
  ["SLASH", 47],
  ["0", 48],
  ["1", 49],
  ["2", 50],
  ["3", 51],
  ["4", 52],
  ["5", 53],
  ["6", 54],
  ["7", 55],
  ["8", 56],
  ["9", 57],
  ["COLON", 58],
  ["SEMICOLON", 59],
  ["LESS", 60],
  ["EQUALS", 61],
  ["GREATER", 62],
  ["QUESTION", 63],
  ["AT", 64],
  ["LEFTBRACKET", 91],
  ["BACKSLASH", 92],
  ["RIGHTBRACKET", 93],
  ["CARET", 94],
  ["UNDERSCORE", 95],
  ["BACKQUOTE", 96],
  ["a", 97],
  ["b", 98],
  ["c", 99],
  ["d", 100],
  ["e", 101],
  ["f", 102],
  ["g", 103],
  ["h", 104],
  ["i", 105],
  ["j", 106],
  ["k", 107],
  ["l", 108],
  ["m", 109],
  ["n", 110],
  ["o", 111],
  ["p", 112],
  ["q", 113],
  ["r", 114],
  ["s", 115],
  ["t", 116],
  ["u", 117],
  ["v", 118],
  ["w", 119],
  ["x", 120],
  ["y", 121],
  ["z", 122],
  ["DELETE", 127],
  ["CAPSLOCK", 1073741881],
  ["F1", 1073741882],
  ["F2", 1073741883],
  ["F3", 1073741884],
  ["F4", 1073741885],
  ["F5", 1073741886],
  ["F6", 1073741887],
  ["F7", 1073741888],
  ["F8", 1073741889],
  ["F9", 1073741890],
  ["F10", 1073741891],
  ["F11", 1073741892],
  ["F12", 1073741893],
  ["PRINTSCREEN", 1073741894],
  ["SCROLLLOCK", 1073741895],
  ["PAUSE", 1073741896],
  ["INSERT", 1073741897],
  ["HOME", 1073741898],
  ["PAGEUP", 1073741899],
  ["END", 1073741901],
  ["PAGEDOWN", 1073741902],
  ["RIGHT", 1073741903],
  ["LEFT", 1073741904],
  ["DOWN", 1073741905],
  ["UP", 1073741906],
  ["NUMLOCKCLEAR", 1073741907],
  ["KP_DIVIDE", 1073741908],
  ["KP_MULTIPLY", 1073741909],
  ["KP_MINUS", 1073741910],
  ["KP_PLUS", 1073741911],
  ["KP_ENTER", 1073741912],
  ["KP_1", 1073741913],
  ["KP_2", 1073741914],
  ["KP_3", 1073741915],
  ["KP_4", 1073741916],
  ["KP_5", 1073741917],
  ["KP_6", 1073741918],
  ["KP_7", 1073741919],
  ["KP_8", 1073741920],
  ["KP_9", 1073741921],
  ["KP_0", 1073741922],
  ["KP_PERIOD", 1073741923],
  ["APPLICATION", 1073741925],
  ["POWER", 1073741926],
  ["KP_EQUALS", 1073741927],
  ["F13", 1073741928],
  ["F14", 1073741929],
  ["F15", 1073741930],
  ["F16", 1073741931],
  ["F17", 1073741932],
  ["F18", 1073741933],
  ["F19", 1073741934],
  ["F20", 1073741935],
  ["F21", 1073741936],
  ["F22", 1073741937],
  ["F23", 1073741938],
  ["F24", 1073741939],
  ["EXECUTE", 1073741940],
  ["HELP", 1073741941],
  ["MENU", 1073741942],
  ["SELECT", 1073741943],
  ["STOP", 1073741944],
  ["AGAIN", 1073741945],
  ["UNDO", 1073741946],
  ["CUT", 1073741947],
  ["COPY", 1073741948],
  ["PASTE", 1073741949],
  ["FIND", 1073741950],
  ["MUTE", 1073741951],
  ["VOLUMEUP", 1073741952],
  ["VOLUMEDOWN", 1073741953],
  ["KP_COMMA", 1073741957],
  ["KP_EQUALSAS400", 1073741958],
  ["ALTERASE", 1073741977],
  ["SYSREQ", 1073741978],
  ["CANCEL", 1073741979],
  ["CLEAR", 1073741980],
  ["PRIOR", 1073741981],
  ["RETURN2", 1073741982],
  ["SEPARATOR", 1073741983],
  ["OUT", 1073741984],
  ["OPER", 1073741985],
  ["CLEARAGAIN", 1073741986],
  ["CRSEL", 1073741987],
  ["EXSEL", 1073741988],
  ["KP_00", 1073742000],
  ["KP_000", 1073742001],
  ["THOUSANDSSEPARATOR", 1073742002],
  ["DECIMALSEPARATOR", 1073742003],
  ["CURRENCYUNIT", 1073742004],
  ["CURRENCYSUBUNIT", 1073742005],
  ["KP_LEFTPAREN", 1073742006],
  ["KP_RIGHTPAREN", 1073742007],
  ["KP_LEFTBRACE", 1073742008],
  ["KP_RIGHTBRACE", 1073742009],
  ["KP_TAB", 1073742010],
  ["KP_BACKSPACE", 1073742011],
  ["KP_A", 1073742012],
  ["KP_B", 1073742013],
  ["KP_C", 1073742014],
  ["KP_D", 1073742015],
  ["KP_E", 1073742016],
  ["KP_F", 1073742017],
  ["KP_XOR", 1073742018],
  ["KP_POWER", 1073742019],
  ["KP_PERCENT", 1073742020],
  ["KP_LESS", 1073742021],
  ["KP_GREATER", 1073742022],
  ["KP_AMPERSAND", 1073742023],
  ["KP_DBLAMPERSAND", 1073742024],
  ["KP_VERTICALBAR", 1073742025],
  ["KP_DBLVERTICALBAR", 1073742026],
  ["KP_COLON", 1073742027],
  ["KP_HASH", 1073742028],
  ["KP_SPACE", 1073742029],
  ["KP_AT", 1073742030],
  ["KP_EXCLAM", 1073742031],
  ["KP_MEMSTORE", 1073742032],
  ["KP_MEMRECALL", 1073742033],
  ["KP_MEMCLEAR", 1073742034],
  ["KP_MEMADD", 1073742035],
  ["KP_MEMSUBTRACT", 1073742036],
  ["KP_MEMMULTIPLY", 1073742037],
  ["KP_MEMDIVIDE", 1073742038],
  ["KP_PLUSMINUS", 1073742039],
  ["KP_CLEAR", 1073742040],
  ["KP_CLEARENTRY", 1073742041],
  ["KP_BINARY", 1073742042],
  ["KP_OCTAL", 1073742043],
  ["KP_DECIMAL", 1073742044],
  ["KP_HEXADECIMAL", 1073742045],
  ["LCTRL", 1073742048],
  ["LSHIFT", 1073742049],
  ["LALT", 1073742050],
  ["LGUI", 1073742051],
  ["RCTRL", 1073742052],
  ["RSHIFT", 1073742053],
  ["RALT", 1073742054],
  ["RGUI", 1073742055],
  ["MODE", 1073742081],
  ["AUDIONEXT", 1073742082],
  ["AUDIOPREV", 1073742083],
  ["AUDIOSTOP", 1073742084],
  ["AUDIOPLAY", 1073742085],
  ["AUDIOMUTE", 1073742086],
  ["MEDIASELECT", 1073742087],
  ["WWW", 1073742088],
  ["MAIL", 1073742089],
  ["CALCULATOR", 1073742090],
  ["COMPUTER", 1073742091],
  ["AC_SEARCH", 1073742092],
  ["AC_HOME", 1073742093],
  ["AC_BACK", 1073742094],
  ["AC_FORWARD", 1073742095],
  ["AC_STOP", 1073742096],
  ["AC_REFRESH", 1073742097],
  ["AC_BOOKMARKS", 1073742098],
  ["BRIGHTNESSDOWN", 1073742099],
  ["BRIGHTNESSUP", 1073742100],
  ["DISPLAYSWITCH", 1073742101],
  ["KBDILLUMTOGGLE", 1073742102],
  ["KBDILLUMDOWN", 1073742103],
  ["KBDILLUMUP", 1073742104],
  ["EJECT", 1073742105],
  ["SLEEP", 1073742106],
]);

type mouse = 'MOUSELEFT' | 'MOUSERIGHT' | 'MOUSEMIDDLE';

const mousedown = new Map([
    ['MOUSELEFT', 65793],
    ['MOUSERIGHT', 65795],
    ['MOUSEMIDDLE', 65794]
])

class Event {
    public type;
    public value;

    constructor(type: number, value: number) {
        this.type = type;
        this.value = value;
    } 
}

class MouseMotionEvent {
    public type;
    public xpos;
    public ypos;

    constructor(type: number, xpos: number, ypos: number) {
        this.type = type;
        this.xpos = xpos;
        this.ypos = ypos;
    }
}

class MouseButtonEvent {
    public type;
    public xpos;
    public ypos;
    public button;
    public clicks;

    constructor(type: number, xpos: number, ypos: number, button: number, clicks: number) {
        this.type = type;
        this.xpos = xpos;
        this.ypos = ypos;
        this.button = button;
        this.clicks = clicks;
    }
}

export class Drawable {
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
            SDL_RenderCopyEx(Slipher.rendererPointer, drawable!.texture, null, ptr(destsrc), r, null, f);
        }

    }
}

class SlipherClock {
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

class SlipherEvent {

    public static QUIT = SDL_QUIT;
    public static KEYDOWN = SDL_KEYDOWN;
    public static KEYUP = SDL_KEYUP;
    public static MOUSEMOTION = 1024;
    public static MOUSEDOWN = 1025;
    public static MOUSEUP = 1026;


    /**
     * 
     * @returns current event
     */
    static get() {
        const event = new SDL_Event();
        SDL_PollEvent(event);
        return event;
    }

    static handleEvent(event: SDL_Event) {
        switch (event.event[0]) {
            case Slipher.event.QUIT:
                Slipher.running = false;
                break;
            case Slipher.event.KEYDOWN:
            case Slipher.event.KEYUP:
                Slipher.keyboard.handleKey(new Event(event.event[0], event.event[5]));
                break;
            case Slipher.event.MOUSEDOWN:
            case Slipher.event.MOUSEUP:
                Slipher.mouse.handleMouseButton(new MouseButtonEvent(event.event[0], event.event[5], event.event[6], event.event[4], event.event[10]));
                break;
            case Slipher.event.MOUSEMOTION:
                Slipher.mouse.handleMouseMotion(new MouseMotionEvent(event.event[0], event.event[5], event.event[6]));
                break;
        }
    }
}

class SlipherGraphics {

    /**
     * Creates a new drawable from the path given
     * 
     * @param path path of image
     * @returns Drawable object
     */
    static newImage(path: string) {
        const img = IMG_Load(path);
        const texture = SDL_CreateTextureFromSurface(Slipher.rendererPointer, img);
        const path_split = path.split('/');
        const t = path_split[path_split.length - 1].replace(".png", "");

        if (img != null && texture != null) {    
            return new Drawable(t, img, texture);
        } else {
            if (img == null && texture == null) {
                console.error("Failed to load both image and texture");
            } else if (texture == null) {
                console.error("Failed to load texture");
            } else if (img == null) {
                console.error("Failed to load image " + t);
            } 
            return null;
        }

        
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
        SDL_RenderCopyEx(Slipher.rendererPointer, drawable.texture, null, ptr(destsrc), r, null, f);
    }

    /**
     * Method to clear the screen.
     * Make sure to call before drawing anything
     */
    static clear() : void {
        SDL_RenderClear(Slipher.rendererPointer);
    }

    /**
     * Method to draw a rectangle to the screen
     * 
     * @param mode Fill or Line. How the rectangle looks.
     * @param x top position of rectangle
     * @param y left position of rectangle
     * @param width width of rectangle
     * @param height height of rectangle
     * @param red 0 - 255
     * @param green 0 - 255
     * @param blue 0 - 255
     * @param alpha 0 - 1
     */
    static rectangle(mode: 'fill' | 'line', x: number, y: number, width: number, height: number, red: number, green: number, blue: number) : void {
        const rect = new Uint32Array(4);
        rect[0] = x;
        rect[1] = y;
        rect[2] = width;
        rect[3] = height;
        SDL_SetRenderDrawColor(Slipher.rendererPointer, red, green, blue, 1);
        if (mode == 'fill') {
            SDL_RenderFillRect(Slipher.rendererPointer, ptr(rect));
        } else if (mode == 'line') {
            SDL_RenderDrawRect(Slipher.rendererPointer, ptr(rect));
        }
        SDL_SetRenderDrawColor(Slipher.rendererPointer, 0, 0, 0, 1);

    }

    /**
     * Method to actually draw everything to the screen
     */
    static flip() : void {
        SDL_RenderPresent(Slipher.rendererPointer);
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
        SDL_SetRenderDrawColor(Slipher.rendererPointer, red, green, blue, alpha);
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
            const image = Slipher.graphics.newImage(image_loc);
            if (image != null) {
                animation_frames.set(image.name, image);
                for (let i = 0; i < frame_duration; i++) {
                    animation_frame_data.push(animation_frame_id);
                }
            }
        }
        return new Animation(animation_frames, animation_frame_data);
    }

    static print(text: string, x: number, y: number) {
        const color = new Uint32Array(4);
        color[0] = 255;
        color[1] = 0;
        color[2] = 0;
        color[3] = 1;
        const surf  = TTF_RenderText_Solid(Slipher.font, text, color);
        const tex = SDL_CreateTextureFromSurface(Slipher.rendererPointer, surf);
        const w = new Uint32Array(1);
        const h = new Uint32Array(1);
        TTF_SizeText(Slipher.font, text, w, h);
        const destsrc = new Uint32Array(4);
        destsrc[0] = x;
        destsrc[1] = y;
        destsrc[2] = w[0];
        destsrc[3] = h[0];
        SDL_RenderCopyEx(Slipher.rendererPointer, tex, null, ptr(destsrc), 0, null, 0);
        
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

        SDL_SetWindowPosition(this.pointer, Slipher.desktopWidth / 2 - (width / 2), Slipher.deskopHeight / 2 - (height / 2));
        
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
        if ((1000 / this.framerate) > Slipher.clock.tick() - tick) {
            SDL_Delay(1000 / this.framerate - (Slipher.clock.tick() - tick));
        }
    }
}

class SlipherKeyboard {

    private static state = new Map<number, boolean>();
    private static prevcheck = false;

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
            this.prevcheck = false;
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

    public static isPressed(key: keys) : boolean {
        if (this.state.get(keyMap.get(key)!) == true && this.prevcheck == false) {
            this.prevcheck = true;
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

class SlipherMouse {
    private static state = new Map<string, boolean>([
        ['MOUSELEFT', false],
        ['MOUSERIGHT', false],
        ['MOUSEMIDDLE', false]
    ]);
    private static x = 0;
    private static y = 0;
    private static prevcheck = false;

    private static mouseLeftDown = 65793
    private static mouseRightDown = 65795
    private static mouseMiddleDown = 65794;

    private static mouseLeftUp = 65537;
    private static mouseRightUp = 65539;
    private static mouseMiddleUp = 65538;


    public static handleMouseButton(event: MouseButtonEvent) {
        if (event.type == Slipher.event.MOUSEDOWN) {
            switch(event.button) {
                case this.mouseLeftDown:
                    this.state.set('MOUSELEFT', true);
                    break;
                case this.mouseRightDown:
                    this.state.set('MOUSERIGHT', true);
                    break;
                case this.mouseMiddleDown:
                    this.state.set('MOUSEMIDDLE', true);
                    break;
            }
        } else if (event.type == Slipher.event.MOUSEUP) {
            switch(event.button) {
                case this.mouseLeftUp:
                    this.state.set('MOUSELEFT', false);
                    break;
                case this.mouseRightUp:
                    this.state.set('MOUSERIGHT', false);
                    break;
                case this.mouseMiddleUp:
                    this.state.set('MOUSEMIDDLE', false);
                    break;
            }
            this.prevcheck = false;
        }
    }

    public static handleMouseMotion(event: MouseMotionEvent) {
        this.x = event.xpos;
        this.y = event.ypos;
    }

    public static isPressed(button: mouse) {
        if (this.state.get(button) == true && !this.prevcheck) {
            this.prevcheck = true;
            return true;
        } else {
            return false;
        }
    }

    public static isDown(button: mouse) {
        if (this.state.get(button) == true) {
            return true;
        } else {
            return false;
        }
    }

    public static isUp(button: mouse) {
        if (this.state.get(button) == false) {
            return true;
        } else if (this.state.get(button.toString()) == undefined) {
            return true;
        } else {
            return false;
        }
    }

    public static getPosition() {
        return {x: this.x, y: this.y};
    }
}

export class Slipher {

    public static event = SlipherEvent;
    public static graphics = SlipherGraphics;
    public static clock = SlipherClock;
    public static keyboard = SlipherKeyboard;
    public static mouse = SlipherMouse;

    public static running = true;

    public static desktopWidth = 0;
    public static deskopHeight = 0;

    public static font: TTF_Font;

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
        if (SDL_Init(SDL_INIT_EVERYTHING) != 0) {
            console.error("SDL failed to init")
        };
        if (IMG_Init(image_type.IMG_INIT_PNG) != 0) {
            console.error("IMG failed to init")
        };
        if (TTF_Init() != 0) {
            console.error("TTF failed to init")
        };
        this.font = TTF_OpenFont(import.meta.dir + '/font/arial.ttf', 14);
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
        this.windowPointer = SDL_CreateWindow("Wave", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, width, height, 0);
        this.rendererPointer = SDL_CreateRenderer(this.windowPointer, -1, SDL_RENDERER_PRESENTVSYNC);
        return new WaveWindow(this.windowPointer, width, height, "Wave");;
    }
}