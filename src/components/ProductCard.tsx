import React, { CSSProperties, createContext } from 'react';
import {
  InitialValues,
  OnChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from '../interfaces/product';
import { useProduct } from '../hooks';
import styles from '../styles/styles.module.css';

export interface ProductCardProps {
  className?: string;
  initialValues?: InitialValues;
  product: Product;
  style?: CSSProperties;
  value?: number;
  children: (args: ProductCardHandlers) => JSX.Element;
  onChange?: (args: OnChangeArgs) => void;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  className,
  initialValues,
  onChange,
  product,
  style,
  value,
}: ProductCardProps) => {
  const { counter, maxCount, isMaxCountReached, incBy, reset } = useProduct({
    initialValues,
    onChange,
    product,
    value,
  });

  return (
    <Provider value={{ counter, incBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.count,
          product,
          incBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
