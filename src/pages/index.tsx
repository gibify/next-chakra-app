import type { NextPage } from 'next'
import styles from '../styles/Main.module.css'
import SellerList from './seller-list';
import Header from '.././components/Header';
import Footer from '.././components/Footer';
import Login from './login';

function Home() {
  return (
    <>
      <Header />
      <SellerList />
      <Footer />
    </>
  )
}

export default Home;
