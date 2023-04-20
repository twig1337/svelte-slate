import { SvelteComponentTyped } from "svelte";
import { Editor } from 'slate';
import { defaultDecorate } from './Slate.svelte';
import { DOMNode, DOMRange } from '../dom';
import { type ISvelteComponent } from '../utils';
import type { ISvelteEditor } from '../withSvelte';
import type { IElementProps } from './InternalElement.svelte';
import type { ILeafProps, IPlaceholderProps } from './InternalLeaf.svelte';
export declare const ELEMENT_CONTEXT_KEY: import("../utils").IContextKey<ISvelteComponent<IElementProps<import("slate").BaseElement>>>;
export declare const LEAF_CONTEXT_KEY: import("../utils").IContextKey<ISvelteComponent<ILeafProps>>;
export declare const PLACEHOLDER_CONTEXT_KEY: import("../utils").IContextKey<ISvelteComponent<IPlaceholderProps>>;
export declare function getElementContext(): import("svelte/store").Writable<ISvelteComponent<IElementProps<import("slate").BaseElement>>>;
export declare function getLeafContext(): import("svelte/store").Writable<ISvelteComponent<ILeafProps>>;
export declare function getPlaceholderContext(): import("svelte/store").Writable<ISvelteComponent<IPlaceholderProps>>;
export declare function hasTarget(editor: ISvelteEditor, target: EventTarget | null): target is Node;
export declare function hasEditableTarget(editor: ISvelteEditor, target: EventTarget | null): target is DOMNode;
export declare function isTargetInsideNonReadonlyVoid(editor: ISvelteEditor, target: EventTarget | null): boolean;
export declare function defaultScrollSelectionIntoView(_editor: Editor, domRange: DOMRange): void;
declare const __propDef: {
    props: {
        [x: string]: any;
        Element?: ISvelteComponent<IElementProps<import("slate").BaseElement>> | undefined;
        Leaf?: ISvelteComponent<ILeafProps> | undefined;
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
