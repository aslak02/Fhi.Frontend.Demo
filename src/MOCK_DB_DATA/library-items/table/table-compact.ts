import { LibraryItemIds } from '../library-item-ids';
import { LibraryItem, LibraryItemType } from 'src/app/views/shared/models/library-item.model';

export const TableCompact: LibraryItem[] = [
  {
    id: LibraryItemIds.TableCompact,
    title: 'Table - compact (sm)',
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
<div class="table-responsive">
  <table class="table table-sm">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Fornavn</th>
        <th scope="col">Etternavn</th>
        <th scope="col">Rolle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1202</th>
        <td>Birger Henrik</td>
        <td>Tybring-Gjedde Olssen</td>
        <td>Assistant</td>
      </tr>
      <tr>
        <th>2003</th>
        <td>Sigurd</td>
        <td>Bråten</td>
        <td>Designer</td>
      </tr>
      <tr>
        <th>1009</th>
        <td>Elida</td>
        <td>Egge</td>
        <td>Producer</td>
      </tr>
      <tr>
        <th>1337</th>
        <td>Marie</td>
        <td>Mul</td>
        <td>Director</td>
      </tr>
      <tr>
        <th>4211</th>
        <td>Elisabeth</td>
        <td>Kristiansen</td>
        <td>Script</td>
      </tr>
    </tbody>
  </table>
</div>`;
}

/*
 * Return empty string to use a copy of exampleHtml as codeHtml.
 * Return null to remove Code from library-item.
 */
function getCodeHtml(): string | null {
  return `
<div class="table-responsive">
  <table class="table table-sm">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Fornavn</th>
        <th scope="col">Etternavn</th>
        <th scope="col">Rolle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1202</th>
        <td>Birger Henrik</td>
        <td>Tybring-Gjedde Olssen</td>
        <td>Assistant</td>
      </tr>
    </tbody>
  </table>
</div>`;
}

/*
 * Return null to remove Documentation from library-item.
 */
function getDocumentationHtml(): string | null {
  return null;
}
