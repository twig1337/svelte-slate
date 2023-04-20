import { Editor } from 'slate';
export declare function isMarkActive(editor: Editor, format: string): boolean;
export declare function toggleMark(editor: Editor, format: string): void;
export declare function isBlockActive(editor: Editor, format: string): boolean;
export declare function toggleBlock(editor: Editor, format: string): void;
export declare function setSelection(node: Node): void;
