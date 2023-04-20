import { SvelteComponentTyped } from "svelte";
import { type ITableDataElement } from './TableDataElement.svelte';
import { type ITableHeaderElement } from './TableHeaderElement.svelte';
declare const __propDef: {
    props: {
        element: ITableDataElement | ITableHeaderElement;
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
export type TableRowChildElementProps = typeof __propDef.props;
export type TableRowChildElementEvents = typeof __propDef.events;
export type TableRowChildElementSlots = typeof __propDef.slots;
export default class TableRowChildElement extends SvelteComponentTyped<TableRowChildElementProps, TableRowChildElementEvents, TableRowChildElementSlots> {
}
export {};
