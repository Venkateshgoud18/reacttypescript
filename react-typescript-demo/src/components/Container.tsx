export const Container = (props: { children: React.ReactNode }) => {
  return <div style={{ border: "1px solid black", padding: "1rem" }}>{props.children}</div>;
};