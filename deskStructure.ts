export const myStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')),
      S.listItem()
        .title('Home Page')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')),
      ...S.documentTypeListItems().filter((listItem: any) => !['siteSettings', 'homePage'].includes(listItem.getId()))
    ])