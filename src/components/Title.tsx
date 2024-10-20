import React, { type HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLElement> {
  level: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({
  level,
  children,
  ...delegatedProps
}) => {
  const Heading: React.FC<HTMLAttributes<HTMLElement>> = ({
    ...delegatedProps
  }) => {
    return React.createElement(level, delegatedProps, children);
  };

  return <Heading {...delegatedProps}>{children}</Heading>;
};

export default Title;
