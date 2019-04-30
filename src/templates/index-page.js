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
                    <p>I am also the VP of Technology for the Golden Retriever Rescue of Wisconsin (GRRoW). I manage their website (hosted by Squarespace), google drive, facebook page and any other technology related things for the organization.</p>
                  </div>                  

                  <div className="column is-6">

                    <h1 className="title">Current Interests</h1>
                    <p>
                        Windows 10 IoT<br/>
                        Anything Azure related<br/>
                        Angular 2, Aurelia, ReactJS<br/>
                        Elasticsearch, Kibana, Logstash (ELK)
                    </p>
                  </div>                  
                </div>

                <div className="columns">
                  <div className="column is-12">
                    <h1 className="title">Volunteer Activities</h1>
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

                <div className="content" id="interests">
                  <div className="tile">
                    <h1 className="title">Other Interests</h1>
                  </div>                  
                </div>     
                <div className="columns">
                  <div className="column is-12">
                    <div style={{'padding-right': '15px', 'float' : 'left'}}><PreviewCompatibleImage imageInfo={{'image': '/img/badges.beer.png'}} /></div>
                    <div style={{'padding-right': '15px', 'float' : 'left'}}><PreviewCompatibleImage imageInfo={{'image': '/img/badges.dogs.png'}} /></div>
                    <div style={{'padding-right': '15px', 'float' : 'left'}}><PreviewCompatibleImage imageInfo={{'image': '/img/badges.gaming.png'}} /></div>
                    <div style={{'padding-right': '15px', 'float' : 'left'}}><PreviewCompatibleImage imageInfo={{'image': '/img/badges.scifi.png'}} /></div>
                    <div style={{'padding-right': '15px', 'float' : 'left'}}><PreviewCompatibleImage imageInfo={{'image': '/img/badges.weights.png'}} /></div>
                  </div>
                </div>

                <div className="content" id="projects">
                  <div className="tile">
                    <h1 className="title">Projects</h1>
                  </div>                  
                </div>   
                <div className="columns">
                  <div className="column is-6">
                    <h1 className="title">Single App Web Applications</h1>
                    <p>
                        I am currently wrapping up a project that has evolved over the past five years. Originally, it was an ASP MVC 2 application that heavily utilized jQuery and jQueryUI. Looking to make the application a true single page web application (SPA), I decided to use Angular JS, Bootstrap, and ASP MVC 4-WebAPI. I completely redesigned the user interface and switched the back-end to JSON calls with WebAPI. Angular JS is a very impressive framework and does a lot of the heavy lifting. I was able to replace a lot of custom JavaScript code with Angular JS framework features.<br/>
                    </p>                 
                  </div>
                  <div className="column is-6">
                    <h1 className="title">iPhone Application (IOS dev)</h1>
                    <p>
                    I have started to dabble in some Objective-C after my girlfriend suggested an application she would like to have on her iPhone. She travels on the city bus daily to UW-Milwaukee and has complained that the transit system website is quite poor and makes finding the bus schedules difficult. However, the site does offer and API where one can retrieve all of the routes and schedules in CSV files. My goal is to make an iPhone application that gathers this information and provides an easy way to search and access this information. Ideally, this should help her bus traveling experience.
                    </p>                 
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h1 className="title">Git Hub Contributions</h1>
                    <p>
                    I use a great project called Bonobo Git which is basically a git hub server that runs on windows. I have made several contributions to give back to such a wonderful and useful project.
                    </p>                 
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
            fluid(maxWidth: 2048, quality: 100) {
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
