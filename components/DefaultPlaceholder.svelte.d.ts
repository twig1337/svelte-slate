import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        clientHeight?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DefaultPlaceholderProps = typeof __propDef.props;
export type DefaultPlaceholderEvents = typeof __propDef.events;
export type DefaultPlaceholderSlots = typeof __propDef.slots;
export default class DefaultPlaceholder extends SvelteComponentTyped<DefaultPlaceholderProps, DefaultPlaceholderEvents, DefaultPlaceholderSlots> {
}
export {};
