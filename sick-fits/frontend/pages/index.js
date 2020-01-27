import React from 'react';
import Link from 'next/link';

const Home = props => {
    return(
        <div>
            <div>Hey</div>
            <Link href="/sell"><a href="/sell">Sell</a></Link>
        </div>
    )
}

export default Home;