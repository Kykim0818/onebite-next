import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import { Suspense } from "react";

async function SearchResult({ q }: { q: string }) {
  const reponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
    { cache: "force-cache" },
  );
  if (!reponse.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const books: BookData[] = await reponse.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export default function Page({
  searchParams,
}: {
  // 이거 왜 Promise 타입에서 변경됫지?
  searchParams: { q?: string };
}) {
  return (
    <Suspense key={searchParams.q || ""} fallback={<div>Loading...</div>}>
      <SearchResult q={searchParams.q || ""} />;
    </Suspense>
  );
}
