import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import noImg from '../assets/no-image.jpg';

export interface ProductImageProps {
  className?: string;
  img?: string;
  title?: string;
  style?: CSSProperties;
}

export const ProductImage = ({
  img,
  title,
  className,
  style,
}: ProductImageProps) => {
  const { product } = useContext(ProductContext);

  const imgToShow = !img && !product.img ? noImg : img ? img : product.img;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt={title}
      style={style}
    />
  );
};
