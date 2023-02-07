import React from 'react'
import AnimatedLoader from './Loader.styled';

function Loader() {
    return (
        <AnimatedLoader className="lds-ellipsis"><div></div><div></div><div></div><div></div></AnimatedLoader>
    )
}

export default Loader