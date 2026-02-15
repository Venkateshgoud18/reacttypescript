import React from "react";

type TextProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export default function Text<T extends React.ElementType = "span">({
  as,
  children,
  ...props
}: TextProps<T>) {
  const Component = as || "span";

  return <Component {...props}>{children}</Component>;
}
