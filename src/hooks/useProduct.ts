import { useEffect, useRef, useState } from 'react';
import { InitialValues, OnChangeArgs, Product } from '../interfaces/product';

interface useProductProps {
    product: Product;
    initialValues?: InitialValues;
    value?: number;
    onChange?: (arg: OnChangeArgs) => void;
}

export const useProduct = ({
    initialValues,
    onChange,
    product,
    value = 0,
}: useProductProps) => {
    const [counter, setCounter] = useState<number>(
        initialValues?.count || value,
    );

    const isMounted = useRef(false);

    const incBy = (value: number) => {
        let count = Math.max(counter + value, 0);

        if (initialValues?.maxCount)
            count = Math.min(count, initialValues.maxCount);

        setCounter(count);

        onChange && onChange({ count, product });
    };

    const reset = () => setCounter(initialValues?.count || value);

    useEffect(() => {
        if (isMounted.current) setCounter(initialValues?.count || value);
    }, [initialValues, value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    return {
        //* Properties
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached:
            !!initialValues?.maxCount && initialValues.maxCount === counter,

        //* Methods
        incBy,
        reset,
    };
};
