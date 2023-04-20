import { SvelteComponentTyped } from "svelte";
import type { Text } from 'slate';
declare const __propDef: {
    props: {
        leaf: Text;
        isTrailing?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TextStringProps = typeof __propDef.props;
export type TextStringEvents = typeof __propDef.events;
export type TextStringSlots = typeof __propDef.slots;
export default class TextString extends SvelteComponentTyped<TextStringProps, TextStringEvents, TextStringSlots> {
}
export {};
