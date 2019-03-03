const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins  // Helper function that processes a photo to match Gatsby's node structure  const processPhoto = photo => {    const nodeId = createNodeId(`pixabay-photo-${photo.id}`)    const nodeContent = JSON.stringify(photo)    const nodeData = Object.assign({}, photo, {      id: nodeId,      parent: null,      children: [],      internal: {        type: `PixabayPhoto`,        content: nodeContent,        contentDigest: createContentDigest(photo),      },    })

  // Convert the options object into a query string
  const apiOptions = queryString.stringify(configOptions)

  // Join apiOptions with the Pixabay API URL
  const apiUrl = `https://pixabay.com/api/?${apiOptions}`

  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    fetch(apiUrl)
      // Parse the response as JSON
      .then(response => response.json())
      // Process the response data into a node
      .then(data => {
        // For each query result (or 'hit')
        data.hits.forEach(photo => {
          // Process the photo data to match the structure of a Gatsby node
          const nodeData = processPhoto(photo)
          // Use Gatsby's createNode helper to create a node from the node data
          createNode(nodeData)
        })
      })
  )
}
