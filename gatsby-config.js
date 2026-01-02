module.exports = {
  siteMetadata: {
    title: "Pondok Pesantren Al Ittihad",
    siteUrl: "https://alittihad.web.id",
    description:
      "Website resmi Pondok Pesantren Al Ittihad sebagai pusat informasi pendidikan Islam dan kegiatan pesantren.",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    "gatsby-plugin-sitemap",
    "gatsby-plugin-manifest",
    "gatsby-plugin-offline",

    "gatsby-plugin-decap-cms"
  ],
}
