import { SvelteComponentTyped } from "svelte";
import type { ISvelteEditor } from '../withSvelte';
import type { IBaseElement } from './Element.svelte';
export declare const IMAGE_TYPE: string;
export interface IImageElement extends IBaseElement {
    type: 'image';
    url: string;
    label?: string;
    hideLabel?: boolean;
    hideId?: boolean;
}
export declare function isImageElement(element: IBaseElement): element is IImageElement;
export declare function isUrl(string: string): boolean;
export type ImagesOptions = {
    allowPaste?: boolean;
};
export declare function withImages<T extends ISvelteEditor = ISvelteEditor>(editor: T, options?: ImagesOptions): T;
export declare function insertImage(editor: Editor, url: string | ArrayBuffer): void;
import { Editor } from 'slate';
declare const __propDef: {
    props: {
        element: IImageElement;
        isInline: boolean;
        isVoid: boolean;
        contenteditable: boolean;
        ref?: HTMLElement | undefined;
        dir?: 'rtl' | 'ltr' | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ImageElementProps = typeof __propDef.props;
export type ImageElementEvents = typeof __propDef.events;
export type ImageElementSlots = typeof __propDef.slots;
export default class ImageElement extends SvelteComponentTyped<ImageElementProps, ImageElementEvents, ImageElementSlots> {
}
export {};
