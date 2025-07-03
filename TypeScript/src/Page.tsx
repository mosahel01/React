type PageProps<T> = {
  count: T;
  countHistory: T[];
};

function Page<T>({ count, countHistory }: PageProps<T>) {
  return (
    <>
      <button>Click ME!</button>
      <div>Count: {String(count)}</div>
      <div>Count History: {countHistory.join(", ")}</div>
    </>
  );
}

export default Page;
