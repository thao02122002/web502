export { };
import { sum } from "function"
type Product = {
    id: number,
    name: string,
    price: number
}

type Product2 = {
    id: number,
    name: string,
    status: boolean
}


// mợt 2 cái type lại vs nhau 
type MergeType = Product | Product2;


// các kiểu dữ liệu
const a = 10;
const b = 20;

const myName: string | number = "Van Thi Phuong Thao";
const myAge: number = 19;
const myStatus: boolean = false;
const myObj: Product = { id: 1, name: "Thao", price: 20 };
const arrNumber: number[] = [1, 2, 3, 4];
const arrString: string[] = ["thao", "hsdjs", "hdj"];
const arrObj: MergeType[] = [
    { id: 1, name: "Thao", price: 20 },
    { id: 2, name: "abc", status: false }
];




sum(a, b);