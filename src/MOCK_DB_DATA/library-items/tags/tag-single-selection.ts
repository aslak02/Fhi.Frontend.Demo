import { LibraryItemIds } from '../library-item-ids';
import { LibraryItem, LibraryItemType } from 'src/app/views/shared/models/library-item.model';

export const TagSingleSelection: LibraryItem[] = [
  {
    id: LibraryItemIds.TagSingleSelection,
    title: 'Tag - single selection',
    type: LibraryItemType.html,
    exampleHtml: getExampleHtml(),
    codeHtml: getCodeHtml(),
    documentationHtml: getDocumentationHtml(),
  },
];

/*
 * Return value is ignored if LibraryItemType is not html
 */
function getExampleHtml(): string {
  return `
<div class="fhi-tag-selector">
  <input class="fhi-tag-selector__input" type="radio" id="option1" name="singleSelectionTags">
  <label class="fhi-tag-selector__label" for="option1">Valg 1</label>
</div>
<div class="fhi-tag-selector">
  <input class="fhi-tag-selector__input" type="radio" id="option2" name="singleSelectionTags">
  <label class="fhi-tag-selector__label" for="option2">Valg 2</label>
</div>
<div class="fhi-tag-selector">
  <input class="fhi-tag-selector__input" type="radio" id="option3" name="singleSelectionTags">
  <label class="fhi-tag-selector__label" for="option3">Valg 3</label>
</div>`;
}

/*
 * Return empty string to use a copy of exampleHtml as codeHtml.
 * Return null to remove Code from library-item.
 */
function getCodeHtml(): string | null {
  return ``;
}

/*
 * Return null to remove Documentation from library-item.
 */
function getDocumentationHtml(): string | null {
  return null;
}
