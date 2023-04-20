import { SvelteComponentTyped } from "svelte";
import type { IElement } from './Element.svelte';
export declare const BLOCK_QUOTE_TYPE: string;
export interface IBlockQuoteElement extends IElement {
    type: 'block-quote';
}
export declare function isBlockQuoteElement(element: IElement): element is IBlockQuoteElement;
declare const __propDef: {
    props: {
        element: IBlockQuoteElement;
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
export type BlockQuoteElementProps = typeof __propDef.props;
export type BlockQuoteElementEvents = typeof __propDef.events;
export type BlockQuoteElementSlots = typeof __propDef.slots;
export default class BlockQuoteElement extends SvelteComponentTyped<BlockQuoteElementProps, BlockQuoteElementEvents, BlockQuoteElementSlots> {
}
export {};
