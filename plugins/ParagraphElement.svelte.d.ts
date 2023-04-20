import { SvelteComponentTyped } from "svelte";
import type { IElement } from './Element.svelte';
export declare const PARAGRAPH_TYPE: string;
export interface IParagraphElement extends IElement {
    type: 'paragraph';
}
export declare function isParagraphElement(element: IElement): element is IParagraphElement;
declare const __propDef: {
    props: {
        element: IParagraphElement;
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
export type ParagraphElementProps = typeof __propDef.props;
export type ParagraphElementEvents = typeof __propDef.events;
export type ParagraphElementSlots = typeof __propDef.slots;
export default class ParagraphElement extends SvelteComponentTyped<ParagraphElementProps, ParagraphElementEvents, ParagraphElementSlots> {
}
export {};
