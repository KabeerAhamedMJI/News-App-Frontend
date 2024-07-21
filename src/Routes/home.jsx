import React from 'react';
import TopNews from '../Components/topnews';
import SubNews from '../Components/subnews'
import LifesStyle from '../Components/lifestyle';
import Technology from '../Components/technology';
import TrendingNow from '../Components/trendinNow';

function Home(props) {

    return (
        <>
            <section>
                <div className="container">
                    <TrendingNow />
                    <div className="d-flex flex-column flex-xl-row gap-4">
                        <div id="ArtBox1" className="d-flex flex-column">
                            <TopNews />
                            <SubNews />
                        </div>
                        <LifesStyle />
                    </div>
                </div>
            </section>
            <Technology />
        </>
    );
}

export default Home;
