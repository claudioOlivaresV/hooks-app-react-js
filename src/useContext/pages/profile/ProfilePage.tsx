import { Button } from "@/components/ui/button";
import { UserContext } from "@/useContext/context/UserContext";
import { use } from "react";

export const ProfilePage = () => {
  const { user, logout } = use(UserContext);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Perfil usuario</h1>
      <pre className="w-[50%]">{JSON.stringify(user, null, 2)}</pre>
      <Button variant="destructive" onClick={logout}>
        Salir
      </Button>
    </div>
  );
};
