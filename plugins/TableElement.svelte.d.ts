import { SvelteComponentTyped } from "svelte";
import { Editor } from 'slate';
import type { IElement } from './Element.svelte';
import type { IElementProps } from '../components/InternalElement.svelte';
export declare const TABLE_TYPE: string;
export interface ITableElement extends IElement {
    type: 'table';
    children: ITableRowElement[];
}
export declare function isTableElement(element: IElement): element is ITableElement;
export declare function withTable<T extends ISvelteEditor = ISvelteEditor>(editor: T): T;
export declare function insertTable(editor: Editor): void;
export declare const TABLE_ELEMENT_CONTEXT_KEY: import("../utils").IContextKey<ISvelteComponent<IElementProps<import("slate").BaseElement>>>;
import { type ISvelteComponent } from '../utils';
import { type ITableRowElement } from './TableRowElement.svelte';
import type { ISvelteEditor } from '../withSvelte';
declare const __propDef: {
    props: {
        element: ITableElement;
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
export type TableElementProps = typeof __propDef.props;
export type TableElementEvents = typeof __propDef.events;
export type TableElementSlots = typeof __propDef.slots;
export default class TableElement extends SvelteComponentTyped<TableElementProps, TableElementEvents, TableElementSlots> {
}
export {};
