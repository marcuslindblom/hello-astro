import { DocumentStore } from 'ravendb';

const store = new DocumentStore(
  import.meta.env.STRIFE_DATABASE_URLS,
  import.meta.env.STRIFE_DATABASE
);

export default store.initialize();