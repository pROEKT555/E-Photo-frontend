import Nav from './Component/Nav/Nav';
import Header from './Component/Header/Header';
import style from './page.module.scss';
import Foter from './Component/Footer/Footer';
export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.home_walper}>
        <Nav />
        <Header />
        <Foter />
      </div>
    </div>
  );
}
