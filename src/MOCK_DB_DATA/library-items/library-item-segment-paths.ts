import { AdvancedSelectData } from './advanced-select/_advanced-select.data';
import { PrototypeAngularTreeData } from './prototype-angular-tree/_prototype-angular-tree.data';
import { CardData } from './cards/_cards.data';
import { ColorData } from './color/_color.data';
import { DrawerData } from './drawer/_drawer.data';
import { FormsData } from './forms/_forms.data';
import { GlobalFooterData } from './global-footer/_global-footer.data';
import { GlobalHeaderData } from './global-header/_global-header.data';
import { IconsData } from './icons/_icons.data';
import { LayoutTemplatesData } from './layout-templates/_layout-templates.data';
import { ModalData } from './modal/_modal.data';
import { PaginationData } from './pagination/_pagination.data';
import { PrototypeFormsData } from './prototype-forms/_prototype-forms.data';
import { PrototypePageheaderData } from './prototype-pageheader/_prototype-pageheader.data';
import { PrototypeTableWithExpandableContentData } from './prototype-table-with-expandable-content/_prototype-table-with-expandable-content.data';
import { SearchData } from './search/_search.data';
import { ProgressIndicatorsData } from './progress-indicators/_progress-indicators.data';
import { TableData } from './table/_table.data';
import { TagsData } from './tags/_tags.data';
import { ToastData } from './toast/_toast.data';
import { TootipPopoverData } from './tooltip-popover/_tooltip-popover.data';
import { TreeViewData } from './tree-view/_tree-view.data';
import { TypographyData } from './typography/_typography.data';

function stringTransform(objectNameAsString: string) {
  return objectNameAsString.slice(0, -4);
}

/*
 * LibraryItemSegmentPaths
 *  - corresponds to library second level menus
 */
export class LibraryItemSegmentPaths {
  // Visual identity
  static color = stringTransform(Object.keys({ ColorData })[0]);
  static icons = stringTransform(Object.keys({ IconsData })[0]);
  static typography = stringTransform(Object.keys({ TypographyData })[0]);

  // Components
  static advancedSelect = stringTransform(
    Object.keys({ AdvancedSelectData })[0]
  );
  static card = stringTransform(Object.keys({ CardData })[0]);
  static forms = stringTransform(Object.keys({ FormsData })[0]);
  static modal = stringTransform(Object.keys({ ModalData })[0]);
  static pagination = stringTransform(Object.keys({ PaginationData })[0]);
  static search = stringTransform(Object.keys({ SearchData })[0]);
  static progressindicators = stringTransform(
    Object.keys({ ProgressIndicatorsData })[0]
  );
  static table = stringTransform(Object.keys({ TableData })[0]);
  static tags = stringTransform(Object.keys({ TagsData })[0]);
  static toast = stringTransform(Object.keys({ ToastData })[0]);
  static tooltip = stringTransform(Object.keys({ TootipPopoverData })[0]);

  // Modules
  static globalfooter = stringTransform(Object.keys({ GlobalFooterData })[0]);
  static globalheader = stringTransform(Object.keys({ GlobalHeaderData })[0]);
  static drawer = stringTransform(Object.keys({ DrawerData })[0]);
  static treeview = stringTransform(Object.keys({ TreeViewData })[0]);

  // Layout and page templates
  static layoutandpagetemplates = stringTransform(
    Object.keys({ LayoutTemplatesData })[0]
  );

  // Prototypes (examples on use)
  static prototypeangulartreecomponent = stringTransform(
    Object.keys({ PrototypeAngularTreeData })[0]
  );
  static prototypeforms = stringTransform(
    Object.keys({ PrototypeFormsData })[0]
  );
  static prototypepageheader = stringTransform(
    Object.keys({ PrototypePageheaderData })[0]
  );
  static prototypetablewithexpandablecontent = stringTransform(
    Object.keys({ PrototypeTableWithExpandableContentData })[0]
  );
}
