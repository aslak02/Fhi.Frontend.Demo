import { LibraryItemIds } from 'src/app/library-item-ids';
import { LibraryItem, LibraryItemType } from 'src/app/views/shared/models/library-item.model';
import { BootstrapComponentsBaseUrl, NgBootstrapComponentsBaseUrl } from '../../bootstrap-base-urls';

const itemTitle = 'Modal';

export const Modal: LibraryItem[] = [{
  id: LibraryItemIds.Modal,
  title: itemTitle,
  type: LibraryItemType.ngBootstrap,
  exampleHtml: getExampleHtml(),
  codeHtml: getCodeHtml(),
  documentationHtml: getDocumentationHtml()
}];


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
<ng-template #content let-modal>
  <div class="modal-header">
    <h2 class="modal-title" id="modal-basic-title">Overskrift</h2>
    <button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss()"></button>
  </div>
  <div class="modal-body">
    <p>Modalvindu innhold.</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn fhi-btn-secondary" (click)="modal.close()">Avbryt</button>
    <button type="button" class="btn fhi-btn-primary" (click)="modal.close('Save click')">Lagre</button>
  </div>
</ng-template>

<p>
  <button class="btn fhi-btn-flat" (click)="open(content)">Åpne modalvindu (standard størrelse)</button>
</p>`;
}

/*
 * Return null to remove Code from library-item.
 */
function getDocumentationHtml(): string | null {
  return `
<p>
  Bootstrap-dokumentasjon for
  <a href="${BootstrapComponentsBaseUrl}/${itemTitle.toLocaleLowerCase()}">${itemTitle}</a>
</p>
<p>
  ${itemTitle} er implementert som
  <a href="${NgBootstrapComponentsBaseUrl}/${itemTitle.toLocaleLowerCase()}">ngBootstrap ${itemTitle}</a>
  i FHI Designsystem.
</p>
<p>
  Hvis du benytter et annet Javascript-rammeverk må du selv finne passende tredjepartskomponent.
</p>`;
}
