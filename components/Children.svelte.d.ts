import { SvelteComponentTyped } from "svelte";
import { Range } from 'slate';
export declare function getChildDecorations(childDecorations: Range[], range: Range, decorations?: Range[]): Range[];
import type { Ancestor } from 'slate';
declare const __propDef: {
    props: {
        node: Ancestor;
        decorations: Range[];
        selection?: import("slate").BaseSelection | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ChildrenProps = typeof __propDef.props;
export type ChildrenEvents = typeof __propDef.events;
export type ChildrenSlots = typeof __propDef.slots;
export default class Children extends SvelteComponentTyped<ChildrenProps, ChildrenEvents, ChildrenSlots> {
}
export {};
