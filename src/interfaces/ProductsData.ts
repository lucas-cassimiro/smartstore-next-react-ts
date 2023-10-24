import { StaticImageData } from "next/image";

export interface PagesProductsData {
    id: number;
    name: string;
    price: number;
    img: StaticImageData;
    blackFriday?: boolean;
    discount?: number;
    rating?: number;
    storage?: number;
    color?: string;
    order?: string;
    //quantity?: number;
}
