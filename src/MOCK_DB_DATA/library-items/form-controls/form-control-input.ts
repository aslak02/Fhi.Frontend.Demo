import { LibraryItem, LibraryItemType } from 'src/app/views/shared/models/library-item.model';
import { LibraryItemsSharedData as ITEMS } from '../library-items-shared-data';

export const FormControlInput: LibraryItem[] = [
  {
    id: ITEMS.FormControlInput.id,
    title: ITEMS.FormControlInput.title,
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
<label for="FormInput" class="form-label" aria-describedby="hjelpeTekst">Tekstfelt</label>
<p class="form-text" id="hjelpeTekst">Hjelpetekst, f.eks "Valgfritt felt"</p>
<input type="text" id="FormInput" class="form-control" placeholder="Standard tekstfelt">`;
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
