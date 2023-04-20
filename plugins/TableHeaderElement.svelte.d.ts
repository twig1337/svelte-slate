import { SvelteComponentTyped } from "svelte";
import type { IElement } from './Element.svelte';
export declare const TABLE_HEADER_TYPE: string;
export interface ITableHeaderElement extends IElement {
    type: 'table-row-header';
}
export declare function isTableHeaderElement(element: IElement): element is ITableHeaderElement;
declare const __propDef: {
    props: {
        element: ITableHeaderElement;
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
export type TableHeaderElementProps = typeof __propDef.props;
export type TableHeaderElementEvents = typeof __propDef.events;
export type TableHeaderElementSlots = typeof __propDef.slots;
export default class TableHeaderElement extends SvelteComponentTyped<TableHeaderElementProps, TableHeaderElementEvents, TableHeaderElementSlots> {
}
export {};
