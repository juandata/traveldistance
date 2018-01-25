import React from 'react';
import {Helmet} from "react-helmet";


export class Head extends React.Component {


  render () {
    return (
        <div className="Head">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Travel Distance App for Mozio</title>
                <link rel="canonical" href="http://juandavidarce.co" />


            </Helmet>

        </div>
    );
  }
};
