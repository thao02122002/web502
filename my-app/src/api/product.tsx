import instance from './instance';

export const list = () => {
    const url = `/product`;
    return instance.get(url)
}
export const add = (product: any) => {
    const url = `/product`;
    return instance.post(url, product);
}