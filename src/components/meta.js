import React from 'react'

import { Helmet } from 'react-helmet'

export default function meta(props) {
    return (
        <Helmet>
            <title>{props.Title}</title>
            <meta name="description" content={props.Description} />
            <meta property="og:title" content={props.Title} />
            <meta
                name="keywords"
                content={props.Keywords}
            />
            <meta
                property="og:description"
                content={props.Description}
            />
            <meta
                property="og:image"
                content={props.Image}
            />
        </Helmet>)
}