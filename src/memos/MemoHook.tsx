import { useCallback, useState } from "react";
import { Mytitle } from "./ui/Mytitle";
import { MySubTitle } from "./ui/MySubTitle";

export const MemoHook = () => {
  const [title, setTitle] = useState("Hola");
  const [subTitle, setSubTitle] = useState("Mundo");
  const handleApi = useCallback(() => {
    console.log("llamar a mi api", subTitle);
  }, [subTitle]);
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Memo App</h1>
      <Mytitle title={title} />
      <MySubTitle subTitle={subTitle} callMyAPI={handleApi} />
      <button
        className="bg-blue-500 text-white px-4 py-3 rounded-md cursor-pointer"
        onClick={() => setTitle("Hello" + new Date().getTime())}
      >
        Cambiar Titulo
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-3 rounded-md cursor-pointer"
        onClick={() => setSubTitle("World")}
      >
        Cambiar Subtitulo
      </button>
    </div>
  );
};
