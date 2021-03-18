import React from 'react'
import Layout from '../components/layout'
import * as styles from '../components/blog.module.css'
console.log(styles)

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
            <h1>this is blog page</h1>
            </div>
        </Layout>
    )
}

export default blog
