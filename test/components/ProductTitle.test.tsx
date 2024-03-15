import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src/components';
import { productOne } from '../data/products';

describe('ProductTitle', () => {
  test('should show the component correctly with custom title', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product" className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show the component with product title in context', () => {
    const wrapper = renderer.create(
      <ProductCard product={productOne}>
        {() => <ProductTitle className="custom-class" />}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
