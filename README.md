# Product Card OG

Este es un despliegue de paquete de pruebas en NPM

### Orlando Gomez

## Ejemplo

```typescript
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'product-card-og';
```

```typescript
<ProductCard product={product} initialValues={{ count: 0 }}>
  {() => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
