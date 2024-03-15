import React, { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
  const { counter, maxCount, incBy } = useContext(ProductContext);

  const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [
    counter,
    maxCount,
  ]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        type="button"
        className={styles.buttonMinus}
        onClick={() => incBy(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        disabled={isMaxReached()}
        type="button"
        className={`${styles.buttonAdd} ${
          isMaxReached() ? styles.disabled : ''
        }`}
        onClick={() => incBy(1)}
      >
        +
      </button>
    </div>
  );
};
