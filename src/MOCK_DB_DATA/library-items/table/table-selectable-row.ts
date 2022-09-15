import { LibraryItemIds } from 'src/app/views/shared/library/library-item-ids';
import { LibraryItem, LibraryItemType } from 'src/app/views/shared/library/models/library-item.model';

export const TableSelectableRow: LibraryItem[] = [{
  id: LibraryItemIds.TableSelectableRow,
  title: 'Table - selectable row',
  type: LibraryItemType.html,
  exampleHtml: getExampleHtml(),
  codeHtml: getCodeHtml(),
  documentationHtml: getDocumentationHtml()
}];


/*
 * Return value is ignored if LibraryItemType is not html
 */
function getExampleHtml(): string {
  return `
<p>(Example is just showing visuals for current state, there's no toggle functionality here.)</p>

<div class="table-responsive">
  <table class="table table-striped" data-sort-column="2">
    <thead>
      <tr>
        <th scope="col">
          <input class="form-check-input" id="selectAllRows" type="checkbox" />
          <label for="selectAllRows" class="visually-hidden">Velg alle rader</label>
        </th>
        <th scope="col" tabindex="0" aria-sort="ascending" aria-label="Sort the table descending based on First name">
          <span class="text-decoration-underline">First name</span>
          <i class="icon-chevron-up"></i>
        </th>
        <th scope="col" tabindex="0" aria-sort="none" aria-label="Sort the table ascending based on Last name">
          <span class="text-decoration-underline">Last name</span>
          <i class="icon-chevron-expand"></i>
        </th>
        <th scope="col" tabindex="0" aria-sort="none" aria-label="Sort the table ascending based on Role">
          <span class="text-decoration-underline">Role</span>
          <i class="icon-chevron-expand"></i>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th>
          <input class="form-check-input" id="row1" type="checkbox" />
          <label for="row1" class="visually-hidden">Select this row</label>
        </th>
        <td>Elida</td>
        <td>Egge</td>
        <td>Producer</td>
      </tr>
      <tr aria-selected="true">
        <th>
          <input class="form-check-input" id="row2" type="checkbox" checked />
          <label for="row2" class="visually-hidden">Select this row</label>
        </th>
        <td>Elisabeth</td>
        <td>Kristiansen</td>
        <td>Script</td>
      </tr>
      <tr aria-selected="true">
        <th>
          <input class="form-check-input" id="row3" type="checkbox" checked />
          <label for="row3" class="visually-hidden">Select this row</label>
        </th>
        <td>Henrik</td>
        <td>Olsen</td>
        <td>Assistant</td>
      </tr>
      <tr>
        <th>
          <input class="form-check-input" id="row4" type="checkbox" />
          <label for="row4" class="visually-hidden">Select this row</label>
        </th>
        <td>Marie</td>
        <td>Mul</td>
        <td>Director</td>
      </tr>
      <tr>
        <th>
          <input class="form-check-input" id="row5" type="checkbox" />
          <label for="row5" class="visually-hidden">Select this row</label>
        </th>
        <td>Sigurd</td>
        <td>Bråten</td>
        <td>Designer</td>
      </tr>
      <tr>
        <th>
          <input class="form-check-input" id="row5" type="checkbox" />
          <label for="row5" class="visually-hidden">Select this row</label>
        </th>
        <td>Tore</td>
        <td>Gudmundsen</td>
        <td>Assistant</td>
      </tr>
      <tr>
        <th>
          <input class="form-check-input" id="row5" type="checkbox" />
          <label for="row5" class="visually-hidden">Select this row</label>
        </th>
        <td>Vegard</td>
        <td>Bugge-Berntsen</td>
        <td>Light</td>
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
  <table class="table table-striped" data-sort-column="2">
    <thead>
      <tr>
        <th scope="col">
          <input class="form-check-input" id="selectAllRows" type="checkbox" />
          <label for="selectAllRows" class="visually-hidden">Velg alle rader</label>
        </th>
        <th scope="col" tabindex="0" aria-sort="ascending" aria-label="Sort the table descending based on First name">
          <span class="text-decoration-underline">First name</span>
          <i class="icon-chevron-up"></i>
        </th>
        <th scope="col" tabindex="0" aria-sort="none" aria-label="Sort the table ascending based on Last name">
          <span class="text-decoration-underline">Last name</span>
          <i class="icon-chevron-expand"></i>
        </th>
        <th scope="col" tabindex="0" aria-sort="none" aria-label="Sort the table ascending based on Role">
          <span class="text-decoration-underline">Role</span>
          <i class="icon-chevron-expand"></i>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th>
          <input class="form-check-input" id="row1" type="checkbox" />
          <label for="row1" class="visually-hidden">Select this row</label>
        </th>
        <td>Elida</td>
        <td>Egge</td>
        <td>Producer</td>
      </tr>
      <tr aria-selected="true">
        <th>
          <input class="form-check-input" id="row2" type="checkbox" checked />
          <label for="row2" class="visually-hidden">Select this row</label>
        </th>
        <td>Elisabeth</td>
        <td>Kristiansen</td>
        <td>Script</td>
      </tr>
      <tr aria-selected="true">
        <th>
          <input class="form-check-input" id="row3" type="checkbox" checked />
          <label for="row3" class="visually-hidden">Select this row</label>
        </th>
        <td>Henrik</td>
        <td>Olsen</td>
        <td>Assistant</td>
      </tr>
      <tr>
        <th>
          <input class="form-check-input" id="row4" type="checkbox" />
          <label for="row4" class="visually-hidden">Select this row</label>
        </th>
        <td>Marie</td>
        <td>Mul</td>
        <td>Director</td>
      </tr>
      <tr>
        <th>
          <input class="form-check-input" id="row5" type="checkbox" />
          <label for="row5" class="visually-hidden">Select this row</label>
        </th>
        <td>Sigurd</td>
        <td>Bråten</td>
        <td>Designer</td>
      </tr>
      <tr>
        <th>
          <input class="form-check-input" id="row5" type="checkbox" />
          <label for="row5" class="visually-hidden">Select this row</label>
        </th>
        <td>Tore</td>
        <td>Gudmundsen</td>
        <td>Assistant</td>
      </tr>
      <tr>
        <th>
          <input class="form-check-input" id="row5" type="checkbox" />
          <label for="row5" class="visually-hidden">Select this row</label>
        </th>
        <td>Vegard</td>
        <td>Bugge-Berntsen</td>
        <td>Light</td>
      </tr>
    </tbody>
  </table>
</div>`;
}

/*
 * Return null to remove Code from library-item.
 */
function getDocumentationHtml(): string | null {
  return null;
}
