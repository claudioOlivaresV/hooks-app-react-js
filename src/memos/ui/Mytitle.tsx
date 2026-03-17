import React from "react";

interface Props {
  title: string;
}
export const Mytitle = React.memo(({ title }: Props) => {
  console.log("my title re-render");

  return <h1 className="text-3xl">{title}</h1>;
});
