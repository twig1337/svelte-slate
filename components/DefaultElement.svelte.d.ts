import { SvelteComponentTyped } from "svelte";
import type { Element } from 'slate';
declare const __propDef: {
    props: {
        element: Element;
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
export type DefaultElementProps = typeof __propDef.props;
export type DefaultElementEvents = typeof __propDef.events;
export type DefaultElementSlots = typeof __propDef.slots;
export default class DefaultElement extends SvelteComponentTyped<DefaultElementProps, DefaultElementEvents, DefaultElementSlots> {
}
export {};
