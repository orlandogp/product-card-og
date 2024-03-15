import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: 'ABC',
  title: 'Coffee Mug One - Card',
  // img: './coffee-mug.png',
};

const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        initialValues={{ count: 0 /*Some properties*/ }}
      >
        {({ ...props }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
