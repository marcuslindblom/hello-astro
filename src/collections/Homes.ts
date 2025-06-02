import { type Template } from '@strifeapp/types';

const Homes: Template = {
  name: 'Homes',
  displayName: 'Homes',
  collection: 'Homes',
  type: 'Homes',
  editors: [
    {
      label: 'Heading',
      description: '',
      editor: {
        name: 'str-input',
        type: 'text',
        propertyName: 'heading',
        attributes: {
          required: true,
          validationText: 'Enter a heading.',
        },
      },
      searchable: false,
    },
    {
      label: 'Description',
      description: '',
      editor: {
        name: 'str-textarea',
        type: 'text',
        propertyName: 'description',
        attributes: {
          required: true,
          validationText: 'Enter a description.',
        },
      },
      searchable: false,
    },
  ],
  templateType: 'dt',
  normalizedName: 'homes',
  disableUrl: false,
  archived: false,
  icon: 'home',
  hint: 'The home of your dreams',
  searchfields: [],
  filteredFields: [],
};

export default Homes;
