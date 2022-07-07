import React, { useState } from 'react'
import GlobalSvgSelector from '../../images/GlobalSvgSelector'

import { Link } from 'react-router-dom'

import './Home.scss'


const Home: React.FC = () => {

  console.log('render home');
  

  const [query, setQuery] = useState<string>('');

  return (
    <div className="homepage">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <GlobalSvgSelector id={`logo-home`}/>
            Spectrum
          </div>
        </div>
      </nav>

      <div className='bottom'>
        <h1>Meta Universe</h1>
        <h2>Meta Films</h2>
      </div>

      <main className='main'>
        <input 
          type="text"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />
        <Link 
          to={`/movie/${query}`}
        >
          Go
        </Link>
      </main>
    </div>
  )
}

export default React.memo(Home);