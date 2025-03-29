export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h1>Demo Layout</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
