import { LibraryItem } from 'src/app/views/shared/models/library-item.model';

import { BadgeCircular } from './badge-circular';
import { BadgeRounded } from './badge-rounded';

export const BadgeData: LibraryItem[] = [
  ...BadgeCircular,
  ...BadgeRounded
];
