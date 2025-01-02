export const GET_NOTES = `
  *[_type == "notes-post"] | order(createdAt asc){ _id, title, body, createdAt, archived }
`