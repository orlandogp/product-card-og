import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { productTwo } from '../data/products';

describe('ProductImage', () => {
  test('should show the component correctly with custom img', () => {
    const wrapper = renderer.create(<ProductImage img="https://hola.jpg" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show the component with product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={productTwo}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
