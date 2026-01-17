import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import fetchBooks from "@/lib/fetch-books";
import { BookData } from "@/types";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const q = router.query.q;
  const [books, setBooks] = useState<BookData[]>([]);

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  }
  useEffect(() => {
    if(q){
      fetchSearchResult();
    }
  }, [q]);

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
