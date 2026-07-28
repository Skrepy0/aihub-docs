import { LinkBoxProps } from '../utils/interface';
import { Icon } from '@iconify/react';
import './components-style/LinkBox.model.css';

export default function LinkBox({ url, title, subtitle, icon, tip = '前往以下网站，但是不保证安全性哦~' }: LinkBoxProps) {
  const iconUrl = icon || `https://favicon.splitbee.io/?url=${url}`;
  return (
    <a className="link-card" href={url} target="_blank" rel="noopener noreferrer" title={title}>
      <Icon icon="mdi:open-in-new" className="external-icon" />
      <div className="link-card__tip">{tip}</div>
      <hr className="link-card__divider" />
      <div className="link-card__icon">
        <img src={iconUrl} alt="Favicon" />
      </div>
      <div className="link-card__info">
        <div className="link-card__title">{title}</div>
        {subtitle ? <div className="link-card__subtitle">{subtitle}</div> : <></>}
      </div>
    </a>
  );
}
