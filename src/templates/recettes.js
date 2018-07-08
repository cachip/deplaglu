import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import './recettes.css'

export default ({ data }) => {
  const recette = data.markdownRemark;
  return (
    <Layout>
        <div>
        <div>
                <h4 className={'prebiolegumes'}>Prébiotiques de la recette : {recette.frontmatter.prebiotiques}</h4>
                <h4 className={'prebiolegumes'}>Légumes de saison : {recette.frontmatter.legumessaison}</h4>
            </div>
        <h2>Pourquoi cette recette ?</h2>
            <div className={'histoire'}>
            <img src={recette.frontmatter.photoprepa1} />
            <p>{recette.frontmatter.histoire}</p>
            </div>
            
        
        <h1>{recette.frontmatter.title}</h1>
        <div className={'preparation'}>
            <div className={`imgprep`} >
            <img src={recette.frontmatter.photoprepa1} />
            <img src={recette.frontmatter.photoprepa2} />
            <img src={recette.frontmatter.photoprepa3} />
            </div>
            <div className={`prep`} dangerouslySetInnerHTML={{ __html: recette.html }} />
        </div>
        
        </div>
    </Layout>
  );
};

export const query = graphql`
query RecetteQuery($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      prebiotiques
      legumessaison
      date
      serves
      preparation
      cooking
      recipesource
      photoprepa1
      photoprepa2
      photoprepa3
      photoplat
      histoire
    }
  }
}
`;