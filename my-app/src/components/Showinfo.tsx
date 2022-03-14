import React from 'react'
import type { Product } from '../type/product'

type ShowinfoProps = {

    person: Product
}
const Showinfo = (props: ShowinfoProps) => {
    console.log(props)
    return (
        <div>
            <div>Showinfo</div>
            
            <h1>{props.person.age}</h1>
            <h1>{props.person.name}</h1>
        </div>
    )
}

export default Showinfo