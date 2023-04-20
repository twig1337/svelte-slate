import { SvelteComponentTyped } from "svelte";
import type { IElement } from './Element.svelte';
export declare const TABLE_DATA_TYPE: string;
export interface ITableDataElement extends IElement {
    type: 'table-row-data';
}
export declare function isTableDataElement(element: IElement): element is ITableDataElement;
declare const __propDef: {
    props: {
        element: ITableDataElement;
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
export type TableDataElementProps = typeof __propDef.props;
export type TableDataElementEvents = typeof __propDef.events;
export type TableDataElementSlots = typeof __propDef.slots;
export default class TableDataElement extends SvelteComponentTyped<TableDataElementProps, TableDataElementEvents, TableDataElementSlots> {
}
export {};
