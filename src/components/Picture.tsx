import { PictureProps } from '../utils/interface';
import './components-style/Picture.model.css';

export default function Picture({ url, height, info, pos = 'center' }: PictureProps) {
  const imgStyle = height ? { height: `${height}px`, width: 'auto', maxWidth: '100%' } : { width: '100%', height: 'auto' };
  return (
    <div className="picture-wrapper" style={{ textAlign: pos }}>
      <img src={url} style={imgStyle} className="picture-img" alt={info || ''} />
      {info ? <div className="picture-caption">{info}</div> : <></>}
    </div>
  );
}
