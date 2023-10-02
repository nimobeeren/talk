export function Section(props) {
  return <section className="flex flex-col gap-3" {...props} />;
}

function SectionHeading(props) {
  return <h2 className="text-lg font-medium" {...props} />;
}
Section.Heading = SectionHeading;

export function Label(props) {
  return <label className="flex grow flex-col gap-2 text-sm" {...props} />;
}

export function Input(props) {
  return (
    <input
      className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 focus:ring-blue-600 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      {...props}
    />
  );
}

export function Select(props) {
  return (
    <select
      className="w-full rounded-lg border bg-white p-2 text-sm invalid:text-neutral-500 focus:ring-blue-600 dark:border-neutral-800 dark:bg-transparent dark:invalid:text-neutral-400"
      required
      {...props}
    />
  );
}

export function Button(props) {
  return (
    <button
      className="rounded-xl bg-blue-600 px-8 py-4 font-medium text-white transition-colors hover:bg-blue-700 active:bg-blue-800"
      {...props}
    />
  );
}
