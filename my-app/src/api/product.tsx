import instance from './instance';
import { ProductType } from '../type/product';
import { isAuthenicate } from '../utils/localStorage';

const {token, user} = isAuthenicate();
export const list = () => {
    const url = `/products`;
    return instance.get(url)
}
export const add = (product: ProductType) => {
    const url = `/products/${user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const remove = (id: any) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const read = (id: any) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const update = (product: any) => {
    const url = `/products/${product._id}`;
    return instance.put(url, product)
}