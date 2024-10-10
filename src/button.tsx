import { useState } from "react";
import { add } from "./add";

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  const [count, setCount] = useState<number>(0);

  return (
    <button
      data-testid="my-button"
      onClick={() => {
        setCount(add(count, 1));
      }}
    >
      {text}: {count}
    </button>
  );
};

export { Button };
