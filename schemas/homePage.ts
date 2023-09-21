export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'information',
      type: 'array',
      title: 'Information',
      description: 'This text will appear in the "Info" section of the home page',
      of: [{type: 'block'}]
    },
    {
      name: 'clientsCollaborators',
      type: 'array',
      title: 'Select Clients/Collaborators',
      description: "This text will appear in the 'Clients/Collaborators' section of the home page",
      of: [{type: 'block'}]
    },
    {
      name: 'featuredProjects',
      type: 'array',
      title: 'Featured Projects',
      description: 'These projects will appear in the "Featured Projects" section of the home page',
      of: [
        {
          type: 'object',
          name: 'project',
          fields: [
            {
              type: 'string',
              name: 'title',
              title: 'Title',
              description: 'The title of the project'
            },
            {
              type: 'url',
              name: 'link',
              title: 'Link',
              description: 'Should link to an outside website — e.g. "https://espn.com"'
            },
            {
              type: 'array',
              title: 'Project Information',
              name: 'information',
              description: 'Information about the project',
              of: [{type: 'block'}]
            }
          ]
        }
      ]
    }
  ]
}