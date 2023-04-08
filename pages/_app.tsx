import '../styles/globals.css'
import '../styles/Main.scss';
import Menu from '../components/Menu.jsx';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Menu />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
