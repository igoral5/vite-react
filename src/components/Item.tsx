import { ReactElement, ReactNode } from "react";

type ItemProps = {
  children?: ReactNode;
};

export default function Item({children}: ItemProps): ReactElement {
  return <li>{children}</li>;
}
