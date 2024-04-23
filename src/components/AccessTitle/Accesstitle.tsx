interface PropsTitle {
  title: string;
}
export function AccessTitle({ title }: PropsTitle) {
  return <h1>{title}</h1>;
}
