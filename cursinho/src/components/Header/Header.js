import React from 'react'

import ImagemLogo from './components/ImagemLogo/ImagemLogo'
import TextoLogo from './components/TextoLogo/TextoLogo'
import NavLinks from './components/NavLinks/NavLinks'

export default function Header () {

    return (

        <header>

            <nav>

                <ImagemLogo/>
                <TextoLogo/>
                <NavLinks/>

            </nav>

        </header>
        
    );

}