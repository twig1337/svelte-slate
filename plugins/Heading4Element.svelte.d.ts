import { SvelteComponentTyped } from "svelte";
import type { IElement } from './Element.svelte';
export declare const HEADING4_TYPE: string;
export interface IHeading4Element extends IElement {
    type: 'heading4';
}
export declare function isHeading4Element(element: IElement): element is IHeading4Element;
declare const __propDef: {
    props: {
        element: IHeading4Element;
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
export type Heading4ElementProps = typeof __propDef.props;
export type Heading4ElementEvents = typeof __propDef.events;
export type Heading4ElementSlots = typeof __propDef.slots;
export default class Heading4Element extends SvelteComponentTyped<Heading4ElementProps, Heading4ElementEvents, Heading4ElementSlots> {
}
export {};
