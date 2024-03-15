import {
    ProductButtonsProps,
    ProductCardProps,
    ProductImageProps,
    ProductTitleProps,
} from '../components';

export interface Product {
    id: string;
    title: string;
    img?: string;
}
export interface ProductContextProps {
    counter: number;
    maxCount?: number;
    product: Product;
    incBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface OnChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    incBy: (value: number) => void;
    reset: () => void;
}
