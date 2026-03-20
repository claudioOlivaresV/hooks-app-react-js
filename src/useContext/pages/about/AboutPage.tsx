import { Button } from "@/components/ui/button";
import { UserContext } from "@/useContext/context/UserContext";
import React, { use } from "react";
import { Link } from "react-router";

export const AboutPage = () => {
  const { user, logout } = use(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Pagina sobre mi</h1>
      <hr />
      <div className="flex flex-col gap-2">
        {/* <a href="/profile">Perfil</a>
        <a href="/login">Inicial sesión</a> */}
        {user ? (
          <Button variant="destructive" onClick={logout}>
            Salir
          </Button>
        ) : (
          <Link to="/login" className="hover:text-blue-500">
            Login
          </Link>
        )}
        {user && (
          <Link to="/profile" className="hover:text-blue-500">
            Perfil
          </Link>
        )}
      </div>
    </div>
  );
};
