export default function SearchableLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div>
      <div>임시 서치바</div>
      {children}
    </div>
  );
}
