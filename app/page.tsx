import style from './page.module.css';
import Nav from './Component/Nav/Nav';
export default function Home() {
  return (
    <>
      <Nav className={style.page}></Nav>
    </>
  );
}
