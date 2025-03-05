import style from './header.module.scss';
import Image from 'next/image';
import base from '../../style/base/base.module.scss';
import up_loading from '../../Img/header/up-loading.png';
import warning from '../../Img/header/warning.png';
export default function Header() {
  return (
    <div className={base.container}>
      <div className={style.walper}>
        <div>
          <Image src={up_loading} alt="" width={125} height={100} />
        </div>
        <div className={style.about_title}>Перетягніть зображення </div>
        <div></div>
        <div className={style.about}>
          <div className={`${style.about_icon} ${style.about_icon_jpg}`}>JPG</div>
          <div className={`${style.about_icon} ${style.about_icon_png}`}>PNG</div>
          <div className={`${style.about_icon} ${style.about_icon_bmp}`}>BMP</div>
          <div className={`${style.about_icon} ${style.about_icon_gif}`}>GIF</div>
          <div className={`${style.about_icon} ${style.about_icon_webp}`}>WEBP</div>
          <div>5 MB </div>
          <div>
            <Image src={warning} width={12} height={12} alt="warning" />
          </div>
        </div>
      </div>
    </div>
  );
}
