import { SvelteComponentTyped } from "svelte";
import type { IElement } from './Element.svelte';
export declare const HEADING3_TYPE: string;
export interface IHeading3Element extends IElement {
    type: 'heading3';
}
export declare function isHeading3Element(element: IElement): element is IHeading3Element;
declare const __propDef: {
    props: {
        element: IHeading3Element;
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
export type Heading3ElementProps = typeof __propDef.props;
export type Heading3ElementEvents = typeof __propDef.events;
export type Heading3ElementSlots = typeof __propDef.slots;
export default class Heading3Element extends SvelteComponentTyped<Heading3ElementProps, Heading3ElementEvents, Heading3ElementSlots> {
}
export {};
