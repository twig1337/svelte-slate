import { SvelteComponentTyped } from "svelte";
import type { IBaseElement } from './Element.svelte';
export declare const CODE_LINE_TYPE: string;
export interface ICodeEditorElement extends IBaseElement {
    type: 'code-line';
    children: Array<ICodeEditorText>;
}
export declare function isCodeEditorElement(element: IBaseElement): element is ICodeEditorElement;
import type { ICodeEditorText } from './CodeEditorLeaf.svelte';
declare const __propDef: {
    props: {
        element: ICodeEditorElement;
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
export type CodeEditorElementProps = typeof __propDef.props;
export type CodeEditorElementEvents = typeof __propDef.events;
export type CodeEditorElementSlots = typeof __propDef.slots;
export default class CodeEditorElement extends SvelteComponentTyped<CodeEditorElementProps, CodeEditorElementEvents, CodeEditorElementSlots> {
}
export {};
