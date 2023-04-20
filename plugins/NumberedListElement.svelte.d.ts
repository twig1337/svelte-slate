import { SvelteComponentTyped } from "svelte";
import type { IElement } from './Element.svelte';
export declare const NUMBERED_LIST_TYPE: string;
export interface INumberedListItemElement extends IElement {
    type: 'numbered-list';
    children: Array<IListItemElement>;
}
export declare function isNumberedListItemElement(element: IElement): element is INumberedListItemElement;
import type { IListItemElement } from './ListItemElement.svelte';
declare const __propDef: {
    props: {
        element: INumberedListItemElement;
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
export type NumberedListElementProps = typeof __propDef.props;
export type NumberedListElementEvents = typeof __propDef.events;
export type NumberedListElementSlots = typeof __propDef.slots;
export default class NumberedListElement extends SvelteComponentTyped<NumberedListElementProps, NumberedListElementEvents, NumberedListElementSlots> {
}
export {};
