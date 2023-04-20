import BlockQuoteElement from './BlockQuoteElement.svelte';
import ParagraphElement from './ParagraphElement.svelte';
import Heading1Element from './Heading1Element.svelte';
import Heading2Element from './Heading2Element.svelte';
import Heading3Element from './Heading3Element.svelte';
import Heading4Element from './Heading4Element.svelte';
import Heading5Element from './Heading5Element.svelte';
import Heading6Element from './Heading6Element.svelte';
import ListItemElement, { withListItem } from './ListItemElement.svelte';
import NumberedListElement from './NumberedListElement.svelte';
import CheckListItemElement, { withCheckListItem } from './CheckListItemElement.svelte';
import BulletedListElement from './BulletedListElement.svelte';
import TableElement, { withTable } from './TableElement.svelte';
export declare const DEFAULT_PLUGINS: {
    [x: string]: typeof ParagraphElement | typeof Heading1Element | typeof Heading2Element | typeof Heading3Element | typeof Heading4Element | typeof Heading5Element | typeof Heading6Element | typeof NumberedListElement | typeof BulletedListElement | typeof BlockQuoteElement | {
        component: typeof ListItemElement;
        withFn: typeof withListItem;
    } | {
        component: typeof CheckListItemElement;
        withFn: typeof withCheckListItem;
    } | {
        component: typeof TableElement;
        withFn: typeof withTable;
    };
};
