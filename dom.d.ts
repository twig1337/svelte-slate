import DOMNode = globalThis.Node;
import DOMComment = globalThis.Comment;
import DOMElement = globalThis.Element;
import DOMText = globalThis.Text;
import DOMRange = globalThis.Range;
import DOMSelection = globalThis.Selection;
import DOMStaticRange = globalThis.StaticRange;
export { DOMNode, DOMComment, DOMElement, DOMText, DOMRange, DOMSelection, DOMStaticRange };
declare global {
    interface Window {
        Selection: typeof Selection['constructor'];
        DataTransfer: typeof DataTransfer['constructor'];
        Node: typeof Node['constructor'];
    }
}
export type DOMPoint = [Node, number];
export declare function getDefaultView(value: unknown): Window | null;
export declare function isDOMComment(value: unknown): value is DOMComment;
export declare function isDOMElement(value: unknown): value is DOMElement;
export declare function isDOMNode(value: unknown): value is DOMNode;
export declare function isDOMSelection(value: unknown): value is DOMSelection;
export declare function isDOMText(value: unknown): value is DOMText;
export declare function isPlainTextOnlyPaste(event: ClipboardEvent): boolean | null;
export declare function normalizeDOMPoint(domPoint: DOMPoint): DOMPoint;
export declare function hasShadowRoot(): boolean;
export declare function getEditableChildAndIndex(parent: DOMElement, index: number, direction: 'forward' | 'backward'): [DOMNode, number];
export declare function getEditableChild(parent: DOMElement, index: number, direction: 'forward' | 'backward'): DOMNode;
export declare function getPlainText(domNode: DOMNode): string;
export declare function getSlateFragmentAttribute(dataTransfer: DataTransfer): string | void;
export declare function getClipboardData(dataTransfer: DataTransfer): DataTransfer;
