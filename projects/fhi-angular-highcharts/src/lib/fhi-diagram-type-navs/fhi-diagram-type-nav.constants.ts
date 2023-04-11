import { FhiDiagramTypeGroups, FhiDiagramTypes } from '../fhi-diagram/fhi-diagram-types';

export class FhiDiagramTypeNavs {
  static default = 'default';
};

export enum DiagramTypeGroupIndex {
  table = 0,
  map = 1,
  chart = 2
}

export const NavDiagramTableGroup = {
  diagramType: FhiDiagramTypes.table,
  icon: FhiDiagramTypes.table.icon,
  id: FhiDiagramTypeGroups.table,
  isDisabled: false,
  name: FhiDiagramTypes.table.name
};
