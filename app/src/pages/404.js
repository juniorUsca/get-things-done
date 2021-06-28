/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="not-found">
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Ooops...</h1>
            <h2>¿Te perdiste?</h2>
          </div>
          <Link href="/"><a>Regresa a nosotros</a></Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
