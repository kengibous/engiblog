import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  aboutme,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content" id="aboutme">
                  <div className="tile">
                    <h1 className="title">{aboutme.title}</h1>
                  </div>                  
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <p><img src="/img/kyle.me.jpg" alt="Kyle Engibous" style={{ 'float':'left', 'padding-right':'15px', 'border-radius': '50%'}}/></p>                    
                    <p>{aboutme.description}</p>
                  </div>                  
                </div>                

                <div className="columns">
                  <div className="column is-6">
                    <h1 className="title">Volunteer Activities</h1>
                    <ul>
                      <li>(Past) Church Live Streaming - Facebook Live, OBS software</li>
                      <li>(Past) VP of Technology for the Golden Retriever Rescue of Wisconsin (GRRoW). I managed their website (hosted by Squarespace), google drive, facebook page and any other technology related things for the organization.</li>
                    </ul>
                  </div>                  

                  <div className="column is-6">

                    <h1 className="title">Current Interests</h1>
                    <ul>
                      <li>Kubernetes (focused on premise)</li>
                      <li>Rancher</li>
                      <li>DevSecOps Pratices</li>
                      <li>Continuous Integration/Delivery Pipelines</li>
                      <li>dotnet, asp.net, blazor</li>
                    </ul>
                  </div>                  
                </div>

                <div className="columns">
                  <div className="column is-12">
                    <h1 className="title">Academic History</h1>
                    <p>
                      B.S. Computer Science, UW Milwaukee 2003 - 2007 <b>Magna Cum Laude</b><br/>
                      M.S. Computer Science, UW Milwaukee 2007 - 2011<br/>
                      - <b>Thesis - XVCS: An XML Version Control System Using a Relational Database</b><br/>
                      UW Milwaukee - Teaching Assistant<br/>
                      - Introduction to Linux Operation Systems<br/>
                      - Introduction to C++ Programming<br/>
                      - Introduction to Java Programming
                    </p>
                  </div>                  
                </div>
                
                <div className="columns">
                  <div className="column is-12">
                    <h1 className="title">Other Interests</h1>
                    <ul>
                      <li>Enjoys craft beers</li>
                      <li>Dogs</li>
                      <li>PC Gamer</li>
                      <li>Sci-Fi Nerd</li>
                      <li>Weight lifter</li>
                    </ul>
                  </div>
                </div>
               
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest posts
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  aboutme: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        aboutme={frontmatter.aboutme}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 10) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        aboutme {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
