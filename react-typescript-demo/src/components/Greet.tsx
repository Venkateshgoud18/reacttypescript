type GreetProps = {
  name?: string;
};
export const Greet = (props:GreetProps) => {
  return <h1>Hello, {props.name}! with React! course</h1>;
};