import { StaticImageData } from "next/image";

export interface PagesProductsData {
    id: number;
    name: string;
    price: number;
    img: StaticImageData;
    black_friday?: boolean;
    discount?: number;
    average_score?: number;
    storage?: number;
    color?: string;
    order?: string;
}
