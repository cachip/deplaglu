import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ( { data }) => (
  <Layout>
    <div>
      <h1>Site de recettes pour pandas !</h1>
      <p>Il y a {data.allMarkdownRemark.totalCount} recettes de saison ce mois-ci :</p>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => 
          <div key={node.id}>
            <h3><Link to={node.fields.slug}>{node.frontmatter.title}</Link>, publiée le {node.frontmatter.date}</h3>
            <p>Cette recette contient les prébiotiques suivants : {node.frontmatter.prebiotiques}</p>
          </div>
        
        )}
      </div>
      <div>
      <h2><Link to="./page-2">Go back to the homepage</Link></h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {   
          fields {
            slug
          }
          id
          html
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY", locale:"fr")
            prebiotiques
            photoplat
           }
        }      
      }
    }
  }`