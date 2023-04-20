import { Range, Editor } from 'slate';
import { toDOMRange } from './utils';
function doRectsIntersect(rect, compareRect) {
    if (rect === compareRect) {
        return true;
    }
    if (!rect) {
        return false;
    }
    if (!compareRect) {
        return false;
    }
    const middle = (compareRect.top + compareRect.bottom) / 2;
    return rect.top <= middle && rect.bottom >= middle;
}
function areRangesSameLine(editor, range1, range2) {
    const rect1 = toDOMRange(editor, range1)?.getBoundingClientRect();
    const rect2 = toDOMRange(editor, range2)?.getBoundingClientRect();
    return doRectsIntersect(rect1, rect2) && doRectsIntersect(rect2, rect1);
}
export function findCurrentLineRange(editor, parentRange) {
    const parentRangeBoundary = Editor.range(editor, Range.end(parentRange));
    const positions = Array.from(Editor.positions(editor, { at: parentRange }));
    let left = 0;
    let right = positions.length;
    let middle = Math.floor(right / 2);
    if (areRangesSameLine(editor, Editor.range(editor, positions[left]), parentRangeBoundary)) {
        return Editor.range(editor, positions[left], parentRangeBoundary);
    }
    if (positions.length < 2) {
        return Editor.range(editor, positions[positions.length - 1], parentRangeBoundary);
    }
    while (middle !== positions.length && middle !== left) {
        if (areRangesSameLine(editor, Editor.range(editor, positions[middle]), parentRangeBoundary)) {
            right = middle;
        }
        else {
            left = middle;
        }
        middle = Math.floor((left + right) / 2);
    }
    return Editor.range(editor, positions[right], parentRangeBoundary);
}
