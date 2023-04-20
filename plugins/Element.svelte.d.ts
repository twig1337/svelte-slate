import { SvelteComponentTyped } from "svelte";
export interface IBaseElement extends ISlateElement {
    type: string;
}
export interface IElement extends IBaseElement {
    children: Array<IElement | IText>;
}
import type { Element as ISlateElement } from 'slate';
import type { IText } from './Leaf.svelte';
declare const __propDef: {
    props: {
        element: IElement;
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
export type ElementProps = typeof __propDef.props;
export type ElementEvents = typeof __propDef.events;
export type ElementSlots = typeof __propDef.slots;
export default class Element extends SvelteComponentTyped<ElementProps, ElementEvents, ElementSlots> {
}
export {};
