import style from './nav.module.scss';
import Image from 'next/image';
import Link from 'next/link';
export default function Nav() {
  return (
    <nav>
      <div className={style.container}>
        <div className={style.lists}>
          <div className={style.lists}>
            <Link href="/">Корисна інформація</Link>
          </div>
          <div className={style.lists}>
            <Image src="/icon.png" width={75} height={80} alt="icon" />
          </div>
          <div className={style.lists}>
            <Link className={style.link_login} href="/login">
              <Image
                src="/Img/nav/icon.png"
                className={style.login}
                width={20}
                height={20}
                alt="login"
              />
              Вхід
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
