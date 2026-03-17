import { memo } from "react";

interface Props {
  subTitle: string;

  callMyAPI: () => void;
}

export const MySubTitle = memo(({ subTitle, callMyAPI }: Props) => {
  console.log("my subtitle re-render");

  return (
    <>
      <h6 className="text-2xl">{subTitle}</h6>
      <button onClick={callMyAPI}>LLamar a funcion</button>
    </>
  );
});
