import '../styles.css'

const App = ({ Component, pageProps }) => {
  return <Component { ...pageProps } />
}
export default App

/**
 *  _app.tsx runs before each start
 *  on the server as well as on the client
 */

export const reportWebVitals = (metric) => {
  switch (metric.name) {
    case 'FCP':
      // first contentful paint
      console.log(metric) // or anything else javascripty
      break
    case 'LCP':
      // largest contentful paint
      console.log(metric)
      break
    case 'CLS':
      // cumulative layout shift
      console.log(metric)
      break    
    case 'FID':
      // first input delay
      console.log(metric)
      break
    case 'TTFB':
      // time to first byte
      console.log(metric)
      break
    case 'Next.js-hydration':
      console.log(metric)
      break
    case 'Next.js-route-change-to-render':
      console.log(metric)
      break
    case 'Next.js-render':
      console.log(metric)
      break
    default:
      console.log('default: ', metric)
      break    
  }
}