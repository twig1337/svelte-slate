import { SvelteComponentTyped } from "svelte";
import type { IElement } from './Element.svelte';
export declare const BULLETED_LIST_TYPE: string;
export interface IBulletedListItemElement extends IElement {
    type: 'bulleted-list';
    children: Array<IListItemElement>;
}
export declare function isBulletedListItemElement(element: IElement): element is IBulletedListItemElement;
import type { IListItemElement } from './ListItemElement.svelte';
declare const __propDef: {
    props: {
        element: IBulletedListItemElement;
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
export type BulletedListElementProps = typeof __propDef.props;
export type BulletedListElementEvents = typeof __propDef.events;
export type BulletedListElementSlots = typeof __propDef.slots;
export default class BulletedListElement extends SvelteComponentTyped<BulletedListElementProps, BulletedListElementEvents, BulletedListElementSlots> {
}
export {};
