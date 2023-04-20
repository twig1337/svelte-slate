import { SvelteComponentTyped } from "svelte";
import type { IElement } from './Element.svelte';
export declare const HEADING6_TYPE: string;
export interface IHeading6Element extends IElement {
    type: 'heading6';
}
export declare function isHeading6Element(element: IElement): element is IHeading6Element;
declare const __propDef: {
    props: {
        element: IHeading6Element;
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
export type Heading6ElementProps = typeof __propDef.props;
export type Heading6ElementEvents = typeof __propDef.events;
export type Heading6ElementSlots = typeof __propDef.slots;
export default class Heading6Element extends SvelteComponentTyped<Heading6ElementProps, Heading6ElementEvents, Heading6ElementSlots> {
}
export {};
