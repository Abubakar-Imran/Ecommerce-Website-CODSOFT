import React from 'react'
import Layout from './../components/Layout/Layout'
import { Link } from 'react-router-dom'


export default function PageNotFound() {
  return (
    <Layout>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Page Not Found</h2>
        <Link to="/" className='pnf-btn'>Go Back</Link>
      </div>
    </Layout>
  )
}