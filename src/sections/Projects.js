import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Github from "../images/svg/github.inline.svg";

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      projects: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/content/projects/"}}
        sort: {frontmatter: {date: ASC}}
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              cover {
                childImageSharp {
                  gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              external
            }
            html
          }
        }
      }
    }
  `);

  const featuredProjects = data.projects.edges.filter(({ node }) => node);

  return (
      <section
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem'
  }}
>
  <h2 style={{ color: '#FCFCFC', textAlign: 'center' }}>
    Featured Projects
  </h2>

  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',          // ✅ allows stacking
      justifyContent: 'center',  // ✅ better than space-evenly
      gap: '2rem',
      width: '100%'
    }}
  >
    {featuredProjects.map(({ node }, i) => {
      const { frontmatter, html } = node
      const { external, title, tech, github, cover } = frontmatter
      const image = getImage(cover)

      return (
        <div
          key={i}
          style={{
            display: 'flex',
            flexDirection: 'column',

            // ✅ responsive card width
            width: '100%',
            maxWidth: '350px',

            color: '#CE8147'
          }}
        >
          <h3>
            <a
              style={{ color: '#72A98F' }}
              href={external}
              target="_blank"
              rel="noreferrer"
            >
              {title}
            </a>
          </h3>

          <div dangerouslySetInnerHTML={{ __html: html }} />

          <GatsbyImage
            style={{
              height: 320,
              width: '100%',
              objectFit: 'cover'
            }}
            image={image}
            alt={title}
          />

          {tech?.length > 0 && (
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',   // ✅ prevents overflow
                listStyle: 'none',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: 0,
                alignItems: 'center'
              }}
            >
              {github && (
                <a
                  href={github}
                  aria-label="GitHub Link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github width={24} height={24} />
                </a>
              )}

              {tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          )}
        </div>
      )
    })}
  </div>
</section>
  )}

export default Projects