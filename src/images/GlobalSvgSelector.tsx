import React from 'react'

type Props = {
    id: string
}

const GlobalSvgSelector = ({id}: Props) => {
    switch (id) {
        case 'logo-home':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox={`0 0 70 70`} fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70ZM52.5076 35.1118C43.7478 33.3214 36.9022 26.4757 35.1118 17.716C33.3214 26.4757 26.4757 33.3214 17.716 35.1118C26.4757 36.9022 33.3214 43.7478 35.1118 52.5076C36.9022 43.7478 43.7478 36.9022 52.5076 35.1118Z" fill="white"/>
                </svg>
            )
    
        default:
            return null;
    }
}

export default GlobalSvgSelector