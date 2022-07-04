import React, { useEffect } from 'react'
import GlobalSvgSelector from '../../images/GlobalSvgSelector'
import useApi from '../../hooks/useApi'
import './Home.scss'

type Props = {}

const Home: React.FC = (props: Props) => {
  const {getFilm} = useApi();

  useEffect(() => {
    getFilm('Q')
     .then(console.log)
  }, [])

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
    </div>
  )
}

export default React.memo(Home);