import { BookData } from "@/types";

export default async function fetchOneBook(id : number): Promise<BookData | null> {
    const url = `https://onebite-books-server-chi-one.vercel.app/book/${id}`

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch book");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }   
}
    
