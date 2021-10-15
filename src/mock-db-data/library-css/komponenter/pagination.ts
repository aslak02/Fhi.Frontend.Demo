import { LibraryExample } from 'src/app/shared/models/library-example.model';
import { LibraryMenuLevel2Categories } from 'src/app/_felles/konstanter/library-menu-level-2-categories';

const categoryNames = LibraryMenuLevel2Categories.cssKomponentCategories;

export const Pagination: LibraryExample[] = [{
  title: 'Paginasjon',
  exampleHtml: `
<nav aria-label="Sidenavigasjon">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#">
        <span class="visually-hidden">Forrige</span>
        &laquo;
      </a>
    </li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">1</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">3</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <span class="visually-hidden">Neste</span>
        &raquo;
      </a>
    </li>
  </ul>
</nav>
`,
  category: categoryNames.paginasjon
}];
