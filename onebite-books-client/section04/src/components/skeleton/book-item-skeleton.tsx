import style from "./book-item-skeleton.module.css";

export default function BookItemSkeleton() {
  return (
    <div className={style.container}>
      <div className={style.cover_img}></div>
      <div className={style.info_container}>
        <div className={style.title} />
        <div className={style.author} />
        <div className={style.publisher} />
      </div>
    </div>
  );
}
