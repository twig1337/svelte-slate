import { SvelteComponentTyped } from "svelte";
export declare const PLUGINS_CONTEXT_KEY: import("../utils").IContextKey<IPluginsContext>;
export declare function getPluginsContext(): import("svelte/store").Writable<IPluginsContext>;
export type IWithFn<E extends ISvelteEditor = ISvelteEditor, O extends object = object> = (editor: E, config?: O) => E;
export type IPluginWithFn<C extends ISvelteComponent<IElementProps> = ISvelteComponent<IElementProps>, E extends ISvelteEditor = ISvelteEditor, O extends object = object> = {
    component: C;
    withFn?: IWithFn<E, O>;
    options?: O;
};
export type IPlugin<C extends ISvelteComponent<IElementProps> = ISvelteComponent<IElementProps>, E extends ISvelteEditor = ISvelteEditor, O extends object = object> = C | IPluginWithFn<C, E, O>;
export declare function isPluginWithFn<C extends ISvelteComponent<IElementProps> = ISvelteComponent<IElementProps>, E extends ISvelteEditor = ISvelteEditor, O extends object = object>(plugin: IPlugin<C, E, O>): plugin is IPluginWithFn<C, E, O>;
export interface IPlugins<C extends ISvelteComponent<IElementProps> = ISvelteComponent<IElementProps>, E extends ISvelteEditor = ISvelteEditor, O extends object = object> {
    [type: string]: IPlugin<C, E, O>;
}
export interface IPluginsContext {
    [type: string]: ISvelteComponent<IElementProps>;
}
import type { IElementProps } from '../components/InternalElement.svelte';
import { type ISvelteComponent } from '../utils';
import type { ISvelteEditor } from '../withSvelte';
import type { BaseSelection, Descendant } from 'slate';
declare const __propDef: {
    props: {
        plugins?: IPlugins<ISvelteComponent<IElementProps<import("slate").BaseElement>>, ISvelteEditor, object> | undefined;
        editor: ISvelteEditor;
        value?: Descendant[] | undefined;
        selection?: BaseSelection | undefined;
    };
    events: {
        value: CustomEvent<Descendant[]>;
        selection: CustomEvent<BaseSelection>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SlateProps = typeof __propDef.props;
export type SlateEvents = typeof __propDef.events;
export type SlateSlots = typeof __propDef.slots;
export default class Slate extends SvelteComponentTyped<SlateProps, SlateEvents, SlateSlots> {
}
export {};
