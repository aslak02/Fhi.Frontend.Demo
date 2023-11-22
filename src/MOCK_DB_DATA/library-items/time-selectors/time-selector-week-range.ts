import { LibraryItem, LibraryItemType } from 'src/app/views/shared/models/library-item.model';
import { LibraryItemsSharedData as ITEMS } from '../library-items-shared-data';
import { LibraryItemConstants as CONST } from '../library-item-constants';

export const TimeSelectorWeekRange: LibraryItem[] = [
  {
    id: ITEMS.TimeSelectorWeekRange.id,
    title: ITEMS.TimeSelectorWeekRange.title,
    type: LibraryItemType.angular,
    exampleHtml: getExampleHtml(),
    codeHtml: getCodeHtml(),
    documentationHtml: getDocumentationHtml(),
  },
];

/*
 * Return value is ignored if LibraryItemType is not html
 */
function getExampleHtml(): string {
  return ``;
}

/*
 * Return empty string to use a copy of exampleHtml as codeHtml.
 * Return null to remove Code from library-item.
 */
function getCodeHtml(): string | null {
  return `
<fhi-week-range (weekRangeSelect)="onWeekRangeSelect($event)"></fhi-week-range>
`;
}

/*
 * Return null to remove Documentation from library-item.
 */
function getDocumentationHtml(): string | null {
  return `
  <p><span lang="en">Week range</span> er en utvidelse av <a href="/developer/components/time-selectors#time-selector-weekpicker">FHI Weekpicker</a> , og for å ta den i bruk i en Angular-applikasjon må NPM-pakken
  <a href="${CONST.FhiAngularComponentsNpmUrl}">@folkehelseinstituttet/angular-components</a>
  være lagt til som en dependency.</p>
  
  <h2 class="h5">Nyttige lenker</h2>
  <ul>
    <li>
      <a href="${CONST.FhiAngularComponentsGithubLibUrl}/fhi-week-range">
        Kildekode og API
      </a>
    </li>
    <li>
      <a href="${CONST.ExampleComponentsGithubUrl}/time-selectors">
        Kode for demo-eksempel
      </a>
    </li>
    <li>
      <a href="${CONST.FhiAngularComponentsNpmUrl}">
        NPM-pakke @folkehelseinstituttet/angular-components
      </a>
    </li>
  </ul>
  `;
}
