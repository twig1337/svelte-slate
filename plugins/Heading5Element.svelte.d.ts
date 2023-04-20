import { SvelteComponentTyped } from "svelte";
import type { IElement } from './Element.svelte';
export declare const HEADING5_TYPE: string;
export interface IHeading5Element extends IElement {
    type: 'heading5';
}
export declare function isHeading5Element(element: IElement): element is IHeading5Element;
declare const __propDef: {
    props: {
        element: IHeading5Element;
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
export type Heading5ElementProps = typeof __propDef.props;
export type Heading5ElementEvents = typeof __propDef.events;
export type Heading5ElementSlots = typeof __propDef.slots;
export default class Heading5Element extends SvelteComponentTyped<Heading5ElementProps, Heading5ElementEvents, Heading5ElementSlots> {
}
export {};
