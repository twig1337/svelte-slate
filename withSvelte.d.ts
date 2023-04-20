import type { BaseEditor, Element } from 'slate';
import { Editor, Range } from 'slate';
export interface ISvelteEditor extends BaseEditor {
    insertData: (data: DataTransfer) => void;
    insertFragmentData: (data: DataTransfer) => boolean;
    insertTextData: (data: DataTransfer) => boolean;
    setFragmentData: (data: DataTransfer) => void;
    hasRange: (editor: ISvelteEditor, range: Range) => boolean;
    hasOwnContext: (element: Element) => boolean;
}
export declare function withSvelte<T extends Editor>(editor: T): T & ISvelteEditor;
