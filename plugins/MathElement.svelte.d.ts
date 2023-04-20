import { SvelteComponentTyped } from "svelte";
import 'katex/dist/katex.min.css';
import { Editor } from 'slate';
import type { IElement } from './Element.svelte';
import type { ISvelteEditor } from '../withSvelte';
export declare const MATH_TYPE: string;
export interface IMathElement extends IElement {
    type: 'math';
    math: string;
    inline: boolean;
}
export declare function isMathElement(element: IElement): element is IMathElement;
export declare function withMath<T extends ISvelteEditor = ISvelteEditor>(editor: T): T;
export declare function insertMath(editor: Editor, math: string, inline: boolean, at?: Location): void;
import { type Location } from 'slate';
declare const __propDef: {
    props: {
        element: IMathElement;
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
export type MathElementProps = typeof __propDef.props;
export type MathElementEvents = typeof __propDef.events;
export type MathElementSlots = typeof __propDef.slots;
export default class MathElement extends SvelteComponentTyped<MathElementProps, MathElementEvents, MathElementSlots> {
}
export {};
