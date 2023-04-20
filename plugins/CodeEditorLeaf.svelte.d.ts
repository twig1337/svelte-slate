import { SvelteComponentTyped } from "svelte";
export interface ICodeEditorText extends Text {
    comment?: boolean;
    operator?: boolean;
    keyword?: boolean;
    string?: boolean;
    number?: boolean;
    boolean?: boolean;
    variable?: boolean;
    property?: boolean;
    regex?: boolean;
    punctuation?: boolean;
    tag?: boolean;
    url?: boolean;
    constant?: boolean;
    symbol?: boolean;
    selector?: boolean;
    char?: boolean;
    function?: boolean;
    'class-name'?: boolean;
    'attr-name'?: boolean;
}
import type { Text } from 'slate';
declare const __propDef: {
    props: {
        leaf: ICodeEditorText;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type CodeEditorLeafProps = typeof __propDef.props;
export type CodeEditorLeafEvents = typeof __propDef.events;
export type CodeEditorLeafSlots = typeof __propDef.slots;
export default class CodeEditorLeaf extends SvelteComponentTyped<CodeEditorLeafProps, CodeEditorLeafEvents, CodeEditorLeafSlots> {
}
export {};
