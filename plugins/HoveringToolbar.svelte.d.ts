import { SvelteComponentTyped } from "svelte";
export declare function addLongPress(node: HTMLElement, threshold: number | undefined, callback: () => void): () => void;
declare const __propDef: {
    props: {
        container?: HTMLElement | undefined;
        threshold?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type HoveringToolbarProps = typeof __propDef.props;
export type HoveringToolbarEvents = typeof __propDef.events;
export type HoveringToolbarSlots = typeof __propDef.slots;
export default class HoveringToolbar extends SvelteComponentTyped<HoveringToolbarProps, HoveringToolbarEvents, HoveringToolbarSlots> {
}
export {};
