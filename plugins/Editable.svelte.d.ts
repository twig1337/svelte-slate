import { SvelteComponentTyped } from "svelte";
import type { ISvelteComponent } from '../utils';
import { defaultScrollSelectionIntoView } from '../components/Editable.svelte';
import type { IPlaceholderProps } from '../components/InternalLeaf.svelte';
import type { defaultDecorate } from '../components/Slate.svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        Placeholder?: ISvelteComponent<IPlaceholderProps> | undefined;
        placeholder?: string | undefined;
        readOnly?: boolean | undefined;
        autoFocus?: boolean | undefined;
        decorate?: typeof defaultDecorate | undefined;
        scrollSelectionIntoView?: typeof defaultScrollSelectionIntoView | undefined;
        ref?: HTMLDivElement | undefined;
        spellcheck?: boolean | undefined;
        autocorrect?: string | undefined;
        autocapitalize?: string | undefined;
        onKeyDown?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EditableProps = typeof __propDef.props;
export type EditableEvents = typeof __propDef.events;
export type EditableSlots = typeof __propDef.slots;
export default class Editable extends SvelteComponentTyped<EditableProps, EditableEvents, EditableSlots> {
}
export {};
