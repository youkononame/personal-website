import Head from 'next/head'
import theme from '@hackclub/theme' // or '../lib/theme'

export default ({
  name = 'Youko',
  title = 'youkononame',
  description = '',
  image = 'https://youko.dev/card.png',
  url = 'https://youko.dev/'
}) => (
  <Head>
    <title>{title}</title>
    <meta property='og:title' content={title} />
    <meta name='twitter:title' content={title} />
    <meta name='og:url' content={url} />
    <meta property='og:type' content='website' />
    <meta property='og:site_name' content={name} />
    <meta name='description' content={description} />
    <meta property='og:description' content={description} />
    <meta name='twitter:description' content={description} />
    <meta property='og:image' content={image} />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:image' content={image} />
    <meta name='msapplication-TileColor' content={theme.colors.primary} />
    <meta name='theme-color' content={theme.colors.primary} />
  </Head>
)