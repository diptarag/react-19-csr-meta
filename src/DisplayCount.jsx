export default function DisplayCount ({ count }) {
  return (
    <>
      <title>{`Current count - ${count}`}</title>
      <meta name='author' content='Dipto' />
      <link rel='author' href='https://github.com/diptarag/' />
      <span>Count is {count}</span>
    </>
  );
}