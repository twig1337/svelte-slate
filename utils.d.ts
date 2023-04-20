import { Node, Path, Point, Range, type BaseElement, type NodeMatch } from 'slate';
import { type Writable } from 'svelte/store';
import { Key } from './Key';
import type { DOMPoint } from './dom';
import { DOMNode, DOMRange, DOMSelection, DOMStaticRange } from './dom';
import type { ISvelteEditor } from './withSvelte';
import type { SvelteComponentTyped } from 'svelte';
export type ISvelteComponent<T extends Record<string, any> = Record<string, any>> = new (...args: any[]) => SvelteComponentTyped<T>;
export declare function getWindow(editor: ISvelteEditor): Window;
export declare function findKey(node: Node): Key;
export declare function findPath(node: Node): Path;
export declare function getElementIndex(editor: ISvelteEditor, element: BaseElement, isElement: NodeMatch<Node>): number;
export declare function findDocumentOrShadowRoot(editor: ISvelteEditor): Document | ShadowRoot;
export declare function isFocused(editor: ISvelteEditor): boolean;
export declare function isReadOnly(editor: ISvelteEditor): boolean;
export declare function blur(editor: ISvelteEditor): void;
export declare function focus(editor: ISvelteEditor): void;
export declare function deselect(editor: ISvelteEditor): void;
export declare function hasDOMNode(editor: ISvelteEditor, target: DOMNode, options?: {
    editable?: boolean;
}): boolean;
export declare function toDOMNode(editor: ISvelteEditor, node: Node, throwError?: boolean): HTMLElement;
export declare function hasDOMPoint(editor: ISvelteEditor, point: Point): boolean;
export declare function toDOMPoint(editor: ISvelteEditor, point: Point, throwError?: boolean): DOMPoint;
export declare function hasDOMRange(editor: ISvelteEditor, range: Range): boolean;
export declare function toDOMRange(editor: ISvelteEditor, range: Range, throwError?: boolean): DOMRange | undefined;
export declare function toSlateNode(domNode: DOMNode): Node;
export declare function findEventRange(editor: ISvelteEditor, event: any): Range;
export declare function toSlatePoint<T extends boolean>(editor: ISvelteEditor, domPoint: DOMPoint, options: {
    exactMatch: T;
    suppressThrow: T;
}): T extends true ? Point | null : Point;
export declare function toSlateRange<T extends boolean>(editor: ISvelteEditor, domRange: DOMRange | DOMStaticRange | DOMSelection, options: {
    exactMatch: T;
    suppressThrow: T;
}): T extends true ? Range | null : Range;
export declare function hasRange(editor: ISvelteEditor, range: Range): boolean;
export declare function isDecoratorRangeListEqual(list?: Range[], another?: Range[]): boolean;
export declare function isSelectionEqual(selection: Range | null, other: Range | null): boolean;
export type IContextKey<T> = {
    _type: T;
};
export declare function createContextKey<T>(): IContextKey<T>;
export declare function getFromContext<T>(key: IContextKey<T>): Writable<T>;
export declare function createContext<T>(key: IContextKey<T>, intialValue: T): Writable<T>;
export declare function setInContext<T>(key: IContextKey<T>, store: Writable<T>): Writable<T>;
