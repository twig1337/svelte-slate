import { SvelteComponentTyped } from "svelte";
import type { Text as SlateText, Element as SlateElement } from 'slate';
declare const __propDef: {
    props: {
        isLast: boolean;
        leaf: SlateText;
        parent: SlateElement;
        text: SlateText;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type StringProps = typeof __propDef.props;
export type StringEvents = typeof __propDef.events;
export type StringSlots = typeof __propDef.slots;
export default class String extends SvelteComponentTyped<StringProps, StringEvents, StringSlots> {
}
export {};
