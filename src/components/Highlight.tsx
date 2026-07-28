import React from 'react';
import { HighlightProps } from '../utils/interface';

export default function Highlight({ children, color }: HighlightProps) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
      }}
    >
      {children}
    </span>
  );
}
