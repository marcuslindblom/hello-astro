/// <reference types="astro/client" />

declare module 'strife:store' {
  export const store: IDocumentStore;
  export { IDocumentSession } from 'ravendb';
}

declare module '@strifeapp/strife' {
  export const subscribe: (callback: (data: any) => void) => void;
}