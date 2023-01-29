import Link from "next/link";

import React from 'react';

function Container({children}) {
    return (
        <>
            <nav className={'flex items-center justify-evenly w-full px-4 py-2 bg-blue-500 text-white mb-4'}>
                <Link href={'/'}>Accueil</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/liste'}>Liste</Link>
            </nav>
            {children}
        </>
    );
}

export default Container;