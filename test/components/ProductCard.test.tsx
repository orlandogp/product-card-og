import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { productTwo } from '../data/products';

describe('ProductCard', () => {
  test('should show the component correctly', () => {
    const wrapper = renderer.create(
      <ProductCard product={productTwo}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should inc th counter', () => {
    const wrapper = renderer.create(
      <ProductCard product={productTwo}>
        {({ count, incBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button title="pipi" onClick={() => incBy(1)}></button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();

    expect(tree).toMatchSnapshot();

    act(() => (tree as any).children[2].props.onClick());

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
