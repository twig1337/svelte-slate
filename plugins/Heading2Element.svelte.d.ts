import { SvelteComponentTyped } from "svelte";
import type { IElement } from './Element.svelte';
export declare const HEADING2_TYPE: string;
export interface IHeading2Element extends IElement {
    type: 'heading2';
}
export declare function isHeading2Element(element: IElement): element is IHeading2Element;
declare const __propDef: {
    props: {
        element: IHeading2Element;
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
export type Heading2ElementProps = typeof __propDef.props;
export type Heading2ElementEvents = typeof __propDef.events;
export type Heading2ElementSlots = typeof __propDef.slots;
export default class Heading2Element extends SvelteComponentTyped<Heading2ElementProps, Heading2ElementEvents, Heading2ElementSlots> {
}
export {};
