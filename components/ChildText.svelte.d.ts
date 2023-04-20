import { SvelteComponentTyped } from "svelte";
import type { Ancestor, Text as SlateText, Path, Range } from 'slate';
declare const __propDef: {
    props: {
        parent: Ancestor;
        text: SlateText;
        path: Path;
        index: number;
        isLeafBlock: boolean;
        decorations: Range[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ChildTextProps = typeof __propDef.props;
export type ChildTextEvents = typeof __propDef.events;
export type ChildTextSlots = typeof __propDef.slots;
export default class ChildText extends SvelteComponentTyped<ChildTextProps, ChildTextEvents, ChildTextSlots> {
}
export {};
