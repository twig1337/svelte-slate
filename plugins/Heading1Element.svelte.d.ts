import { SvelteComponentTyped } from "svelte";
import type { IElement } from './Element.svelte';
export declare const HEADING1_TYPE: string;
export interface IHeading1Element extends IElement {
    type: 'heading1';
}
export declare function isHeading1Element(element: IElement): element is IHeading1Element;
declare const __propDef: {
    props: {
        element: IHeading1Element;
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
export type Heading1ElementProps = typeof __propDef.props;
export type Heading1ElementEvents = typeof __propDef.events;
export type Heading1ElementSlots = typeof __propDef.slots;
export default class Heading1Element extends SvelteComponentTyped<Heading1ElementProps, Heading1ElementEvents, Heading1ElementSlots> {
}
export {};
