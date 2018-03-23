module.exports = {
    pathPrefix: `/`,
    siteMetadata: {
        author: `DD01`,
        description: `DD01 reThinking `,
        siteUrl: ``,
        title: `DD01`,
        
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`
            }
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 550,
                            linkImagesToOriginal: false
                        }
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`
                ]
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Digital`,
                short_name: `Digital `, // eslint-disable-line camelcase
                start_url: `/?utm_source=homescreen`, // eslint-disable-line camelcase
                background_color: `#ffffff`, // eslint-disable-line camelcase
                theme_color: `#ffffff`, // eslint-disable-line camelcase
                display: `minimal-ui`,
                icons: [
                    {
                        src: `/logo-128.png`,
                        sizes: `128x128`,
                        type: `image/png`
                    },
                    {
                        src: `/logo-158.png`,
                        sizes: `158x158`,
                        type: `image/png`
                    },
                    {
                        src: `/logo-197.png`,
                        sizes: `197x197`,
                        type: `image/png`
                    },
                    {
                        src: `/logo-512.png`,
                        sizes: `512x512`,
                        type: `image/png`
                    }
                ]
            }
        },
        // Deactivate for now because service workers
        // are only supported via https
        // `gatsby-plugin-offline`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: ``
            }
        }
    ]
};
