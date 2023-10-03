export default async function ThankYouLayout({ children }) {
  return (
    <div className="w-full">
      <div className="mx-8 flex max-w-2xl flex-col gap-8 py-20 sm:mx-auto">
        {children}
      </div>
    </div>
  );
}
