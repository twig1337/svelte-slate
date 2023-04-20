import { SvelteComponentTyped } from "svelte";
export declare function getSelectedContext(): import("svelte/store").Writable<boolean>;
import type { Ancestor, Element as SlateElement, Path } from 'slate';
import { Range } from 'slate';
declare const __propDef: {
    props: {
        parent: Ancestor;
        element: SlateElement;
        path: Path;
        index: number;
        decorations: Range[];
        selection?: import("slate").BaseSelection | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ChildElementProps = typeof __propDef.props;
export type ChildElementEvents = typeof __propDef.events;
export type ChildElementSlots = typeof __propDef.slots;
export default class ChildElement extends SvelteComponentTyped<ChildElementProps, ChildElementEvents, ChildElementSlots> {
}
export {};
