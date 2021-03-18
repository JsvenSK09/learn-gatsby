import React from 'react'
import Header from "../examples/Header"
import Layout from "../components/layout"
import HeaderStatic from "../examples/HeaderStatic"
import {graphql} from 'gatsby'

const examples = ({data}) => {

    const{
        site: {
            info: {author}
        }

    } = data

    return (
        <Layout>
            <h1>this is examples page</h1>
            <Header/>
            <HeaderStatic/>
            <h4>author: {author}</h4>
        </Layout>
    )
}

export const data = graphql `
query MyQuery{
    site{
        info: siteMetadata{
            title
      description
      author
      data
      person {
        name
        age
      }
    }
  }
}`

export default examples

