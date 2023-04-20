import { SvelteComponentTyped } from "svelte";
import type { Text } from 'slate';
declare const __propDef: {
    props: {
        leaf: Text;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DefaultLeafProps = typeof __propDef.props;
export type DefaultLeafEvents = typeof __propDef.events;
export type DefaultLeafSlots = typeof __propDef.slots;
export default class DefaultLeaf extends SvelteComponentTyped<DefaultLeafProps, DefaultLeafEvents, DefaultLeafSlots> {
}
export {};
