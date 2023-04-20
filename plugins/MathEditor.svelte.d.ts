import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        open?: boolean | undefined;
        title?: string | undefined;
        math?: string | undefined;
        inline?: boolean | undefined;
        isNew?: boolean | undefined;
        onDone: (math: string, inline: boolean) => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MathEditorProps = typeof __propDef.props;
export type MathEditorEvents = typeof __propDef.events;
export type MathEditorSlots = typeof __propDef.slots;
export default class MathEditor extends SvelteComponentTyped<MathEditorProps, MathEditorEvents, MathEditorSlots> {
}
export {};
