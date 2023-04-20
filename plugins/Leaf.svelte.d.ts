import { SvelteComponentTyped } from "svelte";
export interface IText extends Text {
    bold?: boolean;
    italic?: boolean;
    code?: boolean;
    underline?: boolean;
}
import type { Text } from 'slate';
declare const __propDef: {
    props: {
        leaf: IText;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type LeafProps = typeof __propDef.props;
export type LeafEvents = typeof __propDef.events;
export type LeafSlots = typeof __propDef.slots;
export default class Leaf extends SvelteComponentTyped<LeafProps, LeafEvents, LeafSlots> {
}
export {};
