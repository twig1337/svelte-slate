import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        container?: HTMLElement | undefined;
        ref?: HTMLElement | undefined;
        open?: number | false | undefined;
        retires?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type HoveringProps = typeof __propDef.props;
export type HoveringEvents = typeof __propDef.events;
export type HoveringSlots = typeof __propDef.slots;
export default class Hovering extends SvelteComponentTyped<HoveringProps, HoveringEvents, HoveringSlots> {
}
export {};
