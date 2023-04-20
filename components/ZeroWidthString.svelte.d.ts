import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        length?: number | undefined;
        isLineBreak?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ZeroWidthStringProps = typeof __propDef.props;
export type ZeroWidthStringEvents = typeof __propDef.events;
export type ZeroWidthStringSlots = typeof __propDef.slots;
export default class ZeroWidthString extends SvelteComponentTyped<ZeroWidthStringProps, ZeroWidthStringEvents, ZeroWidthStringSlots> {
}
export {};
