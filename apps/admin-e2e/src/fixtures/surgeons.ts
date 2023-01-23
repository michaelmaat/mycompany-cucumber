import { ISurgeon } from '@mycompany/surgeon/data-access-model';

const defaultSurgeon: ISurgeon = {
  name: 'Default',
};

export const surgeons: {
  [key: string]: ISurgeon;
} = {
  default: defaultSurgeon,
  nameWithSpaces: {
    name: 'Name With Spaces',
  },
};
