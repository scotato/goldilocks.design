const Promise = require('bluebird')
const fetch = require('node-fetch')
const libnpm = require('libnpm')
const moment = require('moment')
const frontmatter = require('front-matter')
const getFiles = require('./getFiles')
fetch.Promise = Promise

const npmPackageUrl = 'https://www.npmjs.com/package/'
const parsePackageId = url => url.replace(npmPackageUrl, '')
const rangeStart = moment().subtract(1, 'week').format('YYYY-MM-DD')
const rangeEnd = moment().format('YYYY-MM-DD')
const npmPackageDownloads = id => `https://api.npmjs.org/downloads/range/${rangeStart}:${rangeEnd}/${id}`

const queryPackage = async id => {
  const downloadEndpoint = npmPackageDownloads(id)
  const { name, version } = await libnpm.manifest(id)
  const response = await fetch(downloadEndpoint).then(res => res.json())
  const url = `${npmPackageUrl}${name}`
  const downloadsWeekly = response.downloads
    .map(record => record.downloads)
    .reduce((acc, cur) => acc + cur, 0)
  
  return { name, url, version, downloadsWeekly }
}


module.exports = async ({ createNode, createNodeId, createContentDigest }) => {
  const npmUrls = await getFiles(`${__dirname}/../content`, { match: /.md$/ })
    .map(frontmatter)
    .filter(project => project.attributes.npm)
    .map(project => project.attributes.npm)

  const repos = npmUrls.map(parsePackageId).map(queryPackage)

  await Promise.all(repos).then(packages => {
    packages.forEach(package => {
      const nodeMeta = {
        id: createNodeId(`npm-package-${package.name}`),
        parent: null,
        children: [],
        internal: {
          type: `NPMPackage`,
          mediaType: `application/javascript`,
          content: JSON.stringify(package),
          contentDigest: createContentDigest(package)
        }
      }

      createNode({ ...package, ...nodeMeta })
    })
  })

  return
}
