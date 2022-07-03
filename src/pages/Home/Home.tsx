import React from 'react'
import GlobalSvgSelector from '../../images/GlobalSvgSelector'
import s from './Home.module.scss'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className={s.homepage}>
        <div className={s.brand}>
            <GlobalSvgSelector id={`logo-home`} width={70} height={70}/>
            <h1>Spectrum</h1>
        </div>
    </div>
  )
}

export default Home