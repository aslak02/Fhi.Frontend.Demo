import { LibraryItem } from 'src/app/shared/models/library-item.model';

import { Accordion } from './components/accordion';
import { FhiBtnPrimary } from './components/fhi-btn-primary';
import { FhiBtnSecondary } from './components/fhi-btn-secondary';
import { FhiBtnFlat } from './components/fhi-btn-flat';
// import { FhiBtnShortcut } from './components/fhi-btn-shorcut';
import { FormInput } from './components/form-input';
import { FormTextarea } from './components/form-textarea';
import { FormRadio } from './components/form-radio';
import { FormSwitch } from './components/form-switch'
import { FormChecks } from './components/form-checkbox';
import { FormInputValidation } from './components/form-input-valdation';
import { FormSelect } from './components/form-select';
import { Pagination } from './components/pagination';
import { TableSimple } from './components/table-simple';
import { TableSortable } from './components/table-sortable';
import { TableSelectableRow } from './components/table-selectable-row';
import { Toast } from './components/toast';
import { Tooltip } from './components/tooltip';

export const CssComponentsData: LibraryItem[] = [
  ...Accordion,
  ...FhiBtnPrimary,
  ...FhiBtnSecondary,
  ...FhiBtnFlat,
  // ...FhiBtnShortcut,
  ...FormChecks,
  ...FormRadio,
  ...FormSwitch,
  ...FormInput,
  ...FormInputValidation,
  ...FormTextarea,
  ...FormSelect,
  ...Pagination,
  ...TableSimple,
  ...TableSortable,
  ...TableSelectableRow,
  ...Toast,
  ...Tooltip,
];


