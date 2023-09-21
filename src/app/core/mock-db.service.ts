import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

// All item ids
import { LibraryItemIds } from 'src/MOCK_DB_DATA/library-items/library-item-ids';

// All items for debuggings page
import { AllData } from 'src/MOCK_DB_DATA/library-items/library-items.data';

// Items
import { AdvancedSelectData } from 'src/MOCK_DB_DATA/library-items/advanced-select/_advanced-select.data';
import { PrototypeAngularTreeData } from 'src/MOCK_DB_DATA/library-items/prototype-angular-tree/_prototype-angular-tree.data';
import { ButtonGroupData } from 'src/MOCK_DB_DATA/library-items/button-group/_button-group.data';
import { ButtonsData } from 'src/MOCK_DB_DATA/library-items/buttons/_buttons.data';
import { CardData } from 'src/MOCK_DB_DATA/library-items/cards/_cards.data';
import { ColorData } from 'src/MOCK_DB_DATA/library-items/color/_color.data';
import { DrawerData } from 'src/MOCK_DB_DATA/library-items/drawer/_drawer.data';
import { FormsData } from 'src/MOCK_DB_DATA/library-items/forms/_forms.data';
import { GlobalFooterData } from 'src/MOCK_DB_DATA/library-items/global-footer/_global-footer.data';
import { GlobalHeaderData } from 'src/MOCK_DB_DATA/library-items/global-header/_global-header.data';
import { IconsData } from 'src/MOCK_DB_DATA/library-items/icons/_icons.data';
import { LayoutTemplatesData } from 'src/MOCK_DB_DATA/library-items/layout-templates/_layout-templates.data';
import { ModalData } from 'src/MOCK_DB_DATA/library-items/modal/_modal.data';
import { PaginationData } from 'src/MOCK_DB_DATA/library-items/pagination/_pagination.data';
import { PrototypeFormsData } from 'src/MOCK_DB_DATA/library-items/prototype-forms/_prototype-forms.data';
import { PrototypePageheaderData } from 'src/MOCK_DB_DATA/library-items/prototype-pageheader/_prototype-pageheader.data';
import { PrototypeTableWithExpandableContentData } from 'src/MOCK_DB_DATA/library-items/prototype-table-with-expandable-content/_prototype-table-with-expandable-content.data';
import { SearchData } from 'src/MOCK_DB_DATA/library-items/search/_search.data';
import { ProgressIndicatorsData } from 'src/MOCK_DB_DATA/library-items/progress-indicators/_progress-indicators.data';
import { TableData } from 'src/MOCK_DB_DATA/library-items/table/_table.data';
import { TabsData } from 'src/MOCK_DB_DATA/library-items/tabs/_tabs.data';
import { TagsData } from 'src/MOCK_DB_DATA/library-items/tags/_tags.data';
import { NavigationtileData } from 'src/MOCK_DB_DATA/library-items/navigation-tile/_navigation-tile.data';
import { ToastData } from 'src/MOCK_DB_DATA/library-items/toast/_toast.data';
import { TootipPopoverData } from 'src/MOCK_DB_DATA/library-items/tooltip-popover/_tooltip-popover.data';
import { TreeViewData } from 'src/MOCK_DB_DATA/library-items/tree-view/_tree-view.data';
import { TypographyData } from 'src/MOCK_DB_DATA/library-items/typography/_typography.data';


// -----------------------------------------
//
// New id and titel implementation!
//
// -----------------------------------------

import { LibraryItemsSharedData } from 'src/MOCK_DB_DATA/library-items/library-items-shared-data';
import { LibraryItemGroupsSharedData } from 'src/MOCK_DB_DATA/library-items/library-item-groups-shared-data';

import { AccordionsData } from 'src/MOCK_DB_DATA/library-items/accordions/_accordions.data';
import { AlertsData } from 'src/MOCK_DB_DATA/library-items/alerts/_alerts.data';
import { BadgesData } from 'src/MOCK_DB_DATA/library-items/badges/_badges.data';
import { BreadcrumbsData } from 'src/MOCK_DB_DATA/library-items/breadcrumbs/_breadcrumbs.data';
import { ErrorPagesData } from 'src/MOCK_DB_DATA/library-items/error-pages/_error-pages.data';
import { HighchartsData } from 'src/MOCK_DB_DATA/library-items/highcharts/_highcharts.data';
import { TimeSelectorsData } from 'src/MOCK_DB_DATA/library-items/time-selectors/_time-selectors.data';

// TODO: make logic for reading developer/debug/all in LibraryItemGroupsDataService
// const AllLibraryItemsData: LibraryItem[] = [
//   ...HighchartsData.libraryItems,
// ];

@Injectable({
  providedIn: 'root'
})
export class MockDbService implements InMemoryDbService {
  createDb(): object {
    return {
      LibraryItemsSharedData,
      LibraryItemGroupsSharedData,

      // Items
      AccordionsData,
      AlertsData,
      BadgesData,
      BreadcrumbsData,
      ErrorPagesData,
      HighchartsData,
      TimeSelectorsData,

      // Items OLD: deprecate when all items use new system
      AdvancedSelectData,
      PrototypeAngularTreeData,
      ButtonGroupData,
      ButtonsData,
      CardData,
      ColorData,
      DrawerData,
      FormsData,
      GlobalFooterData,
      GlobalHeaderData,
      IconsData,
      LayoutTemplatesData,
      ModalData,
      PaginationData,
      PrototypeFormsData,
      PrototypePageheaderData,
      PrototypeTableWithExpandableContentData,
      SearchData,
      ProgressIndicatorsData,
      TableData,
      TabsData,
      TagsData,
      NavigationtileData,
      ToastData,
      TootipPopoverData,
      TreeViewData,
      TypographyData,

      LibraryItemIds, // TODO: deprecate when all items use new system
      AllData, // TODO: deprecate when all items use new system
    };
  }
}
