import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <div>
    <h1>Page 3</h1>
    <p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </p>
    <p>
      <Link to="/">Back Homepage</Link>
    </p>
    <p>
      <Link to="/page-2/">Go to page 2</Link>
    </p>
  </div>
)
