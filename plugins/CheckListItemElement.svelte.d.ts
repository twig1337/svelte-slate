import { SvelteComponentTyped } from "svelte";
import type { IElement } from './Element.svelte';
export declare const CHECK_LIST_ITEM_TYPE: string;
export interface ICheckListItemElement extends IElement {
    type: 'check-list-item';
    checked: boolean;
}
export declare function isCheckListItemElement(element: IElement): element is ICheckListItemElement;
export declare function withCheckListItem<T extends ISvelteEditor = ISvelteEditor>(editor: T): T;
export declare function insertCheckListItem(editor: Editor): void;
import { Editor } from 'slate';
import type { ISvelteEditor } from '../withSvelte';
declare const __propDef: {
    props: {
        element: ICheckListItemElement;
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
export type CheckListItemElementProps = typeof __propDef.props;
export type CheckListItemElementEvents = typeof __propDef.events;
export type CheckListItemElementSlots = typeof __propDef.slots;
export default class CheckListItemElement extends SvelteComponentTyped<CheckListItemElementProps, CheckListItemElementEvents, CheckListItemElementSlots> {
}
export {};
