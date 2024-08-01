import type { ISortOption } from '../types';

export const sortOptions: ISortOption[] = [
  { id: '1', value: '', text: 'Without sorting' },
  { id: '2', value: 'sortByTitle=true', text: 'Title A-Z' },
  { id: '3', value: 'sortByTitle=false', text: 'Title Z-A' },
  { id: '4', value: 'sortByEventDate=true', text: 'Ascending Date' },
  { id: '5', value: 'sortByEventDate=false', text: 'Descending Date' },
  { id: '6', value: 'sortByOrganaizer=true', text: 'Organaizer A-Z' },
  { id: '7', value: 'sortByOrganaizer=false', text: 'Organaizer Z-A' },
];
