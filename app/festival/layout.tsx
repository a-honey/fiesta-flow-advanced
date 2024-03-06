export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="blue">{children}</main>;
}
