import { SvelteComponentTyped } from "svelte";
import type { Element, Range } from 'slate';
import { Text as SlateText } from 'slate';
declare const __propDef: {
    props: {
        decorations: Range[];
        isLast: boolean;
        parent: Element;
        text: SlateText;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TextProps = typeof __propDef.props;
export type TextEvents = typeof __propDef.events;
export type TextSlots = typeof __propDef.slots;
export default class Text extends SvelteComponentTyped<TextProps, TextEvents, TextSlots> {
}
export {};
