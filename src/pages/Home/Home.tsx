import React from 'react'
import GlobalSvgSelector from '../../images/GlobalSvgSelector'
import s from './Home.module.scss'

type Props = {}

const Home: React.FC = (props: Props) => {
  return (
    <div className={s.homepage}>
        <div className={s.brand}>
            <GlobalSvgSelector id={`logo-home`}/>
            <h1 className={s.brand_text}>Spectrum</h1>
        </div>
    </div>
  )
}

export default React.memo(Home);