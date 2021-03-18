import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'

const getData = graphql `
query FirstQuery {
    site{
        siteMetadata{
            person{
                age
                name
            }
            author
            data
            description
            title

        }
    }

}`

const Header = () => {
    const data = useStaticQuery(getData)

    return (
        <div>
            <h2>this is header</h2>
            <h2>name : {data.site.siteMetadata.person.name}</h2>
        </div>
    )
}

export default Header


