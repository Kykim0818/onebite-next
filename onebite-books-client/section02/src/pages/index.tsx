// CSS Module
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import style from "./index.module.css";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";

export const getServerSideProps = () => {
  const data = "hello";

  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }: any) {
  console.log(data);
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
