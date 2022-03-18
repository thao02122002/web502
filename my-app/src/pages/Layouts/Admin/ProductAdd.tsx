import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string,
    price: number,
};


type ProductAddProps = {
    name: String,
    onAdd: (product: Inputs) => void

}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        // console.log(dataInput); // là 1 object{ name, price}
        props.onAdd(dataInput)
        //call api
    }

    return (
        <form action='' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name')} placeholder='Tên sản phẩm' />
            <input type="number" {...register('price')} placeholder='giá sp' />
            <button>Thêm</button>


        </form>
    )
}

export default ProductAdd