import { SvelteComponentTyped } from "svelte";
import type { IElement } from './Element.svelte';
import type { ITableDataElement } from './TableDataElement.svelte';
import type { ITableHeaderElement } from './TableHeaderElement.svelte';
export declare const TABLE_ROW_TYPE: string;
export interface ITableRowElement extends IElement {
    type: 'table-row';
    children: Array<ITableDataElement | ITableHeaderElement>;
}
export declare function isTableRowElement(element: IElement): element is ITableRowElement;
declare const __propDef: {
    props: {
        element: ITableRowElement;
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
export type TableRowElementProps = typeof __propDef.props;
export type TableRowElementEvents = typeof __propDef.events;
export type TableRowElementSlots = typeof __propDef.slots;
export default class TableRowElement extends SvelteComponentTyped<TableRowElementProps, TableRowElementEvents, TableRowElementSlots> {
}
export {};
