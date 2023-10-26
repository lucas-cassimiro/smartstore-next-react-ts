export default async function getAddress(cep: string) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    return await response.json();
}

export async function getData(): Promise<any[]> {
    const response = await fetch("http://localhost:3001/products");
    const data = await response.json();
    return data;
}

export async function getProducts(param: string): Promise<any[]> {
    const response = await fetch(`http://localhost:3001/products/${param}`);
    const data = await response.json();
    return data;
}