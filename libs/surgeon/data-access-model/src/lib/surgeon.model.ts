import { TSurgeonId } from '@mycompany/surgeon/data-access-typing';

export interface ISurgeon {
  id?: TSurgeonId;
  name?: string;
}

export class Surgeon implements ISurgeon {
  constructor(public id?: number, public surgeonName?: string) {}
}
