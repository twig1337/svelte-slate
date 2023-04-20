export interface IIsHotKeyOptions {
    byKey?: boolean;
}
export type IIsHotKeyFn = (event: KeyboardEvent) => boolean;
export declare function createIsHotkey(hotkey: string | string[], options?: IIsHotKeyOptions): IIsHotKeyFn;
export declare function isHotkey(hotkey: string | string[], event: KeyboardEvent, options?: IIsHotKeyOptions): boolean;
export declare function createIsKeyHotkey(hotkey: string | string[]): IIsHotKeyFn;
export declare function isKeyHotkey(hotkey: string | string[], event: KeyboardEvent): boolean;
export interface IHotKey {
    altKey?: boolean;
    ctrlKey?: boolean;
    metaKey?: boolean;
    shiftKey?: boolean;
    key?: string;
    which?: number;
}
