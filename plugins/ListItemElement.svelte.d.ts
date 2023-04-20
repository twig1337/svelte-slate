import { SvelteComponentTyped } from "svelte";
import type { ISvelteEditor } from '../withSvelte';
import type { IElement } from './Element.svelte';
export declare const LIST_ITEM_TYPE: string;
export interface IListItemElement extends IElement {
    type: 'list-item';
}
export declare function isListItemElement(element: IElement): element is IListItemElement;
export declare function withListItem<T extends ISvelteEditor = ISvelteEditor>(editor: T): T;
declare const __propDef: {
    props: {
        element: IListItemElement;
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
export type ListItemElementProps = typeof __propDef.props;
export type ListItemElementEvents = typeof __propDef.events;
export type ListItemElementSlots = typeof __propDef.slots;
export default class ListItemElement extends SvelteComponentTyped<ListItemElementProps, ListItemElementEvents, ListItemElementSlots> {
}
export {};
