/// <reference types="astro/client" />

declare module 'strife:store' {
  export const store: IDocumentStore;
  export { IDocumentSession } from 'ravendb';
}
