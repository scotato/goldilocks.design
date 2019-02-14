// import React from 'react'
// import styled from 'styled-components'
// import { StaticQuery, graphql } from 'gatsby'
// import { AppBadge } from '../components/AppIcon'

// const Apps = styled.div`
//   display: grid;
//   padding: ${props => props.theme.size.layout[300]} ${props => props.theme.size.layout[700]};
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
//   grid-column-gap: ${props => props.theme.size.layout[300]};
//   /* path {
//     fill: ${props => props.theme.colors.black[400]};
//   } */
// `

// export default props => (
//   <StaticQuery
//     query={graphql`
//       query AppsQuery {
//         apps: allMarkdownRemark(filter: { frontmatter: { appId: { gt: 0 } } }, sort: { fields: [frontmatter___appId] }) {
//           edges {
//             node {
//               frontmatter {
//                 icon
//                 slug
//                 title
//                 color
//                 colorWeight
//                 appId
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <Apps>
//         {data.apps.edges.map(edge => {
//           const app = edge.node.frontmatter
//           return (
//             <AppBadge
//               key={app.appId}
//               title={app.title}
//               icon={app.icon}
//               to={app.slug}
//               // color="black"
//               // colorWeight="100"
//               color={app.color}
//               colorWeight={app.colorWeight}
//             />
//           )
//         })}
//       </Apps>
//     )}
//   />
// )
