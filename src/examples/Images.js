import React from 'react'
import {graphql, useStaticQuery } from 'gatsby'
import img from "../images/img1.jpeg"
import Image from 'gatsby-image'

const getImages = graphql`
{
	fixed:file(relativePath:{eq:"img2.jpeg"}) {
		childImageSharp{
			fixed (width:300){
				...GatsbyImageSharpFixed
      }
    }
  }
  
  fluid:file(relativePath:{eq:"img3.jpeg"}) {
		childImageSharp{
			fluid{
				...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  
}
`

const Images = () => {
const data = useStaticQuery(getImages)


    return (
        <div>
           <section className="images">
               <article className="single-image"> 
                    <h3>basic image</h3>
                    <img src={img} width="100%" alt=""></img>
               </article>
               <article className="single-image"> 
                    <h3>fixed image/blur</h3>
                    <Image fixed={data.fixed.childImageSharp.fixed}/>
               </article>
               <article className="single-image"> 
                    <h3>fluid image/svg</h3>
                    <Image fluid={data.fluid.childImageSharp.fluid} />
               </article>
           </section>
        </div>
    )
}

export default Images