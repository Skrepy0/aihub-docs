export interface HighlightProps {
  children: React.ReactNode;
  color: string;
}

export interface PictureProps {
  url: string; // 图片地址（必需）
  height?: number; // 可选，图片高度（像素）
  info?: string; // 可选，图片说明文字
  pos?: 'left' | 'center' | 'right'; // 可选，对齐方式
}

export interface LinkBoxProps {
  url: string; // 网页地址
  title: string; // 标题
  subtitle?: string; // 副标题(可选)
  icon?: string; // 图标地址(可选,本组件可以根据url自动解析)
  tip?: string; // 提示,默认值是'前往以下网站，但是不保证安全性哦~'
}
