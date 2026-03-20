import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserContext } from "@/useContext/context/UserContext";
import type React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";

export const LoginPage = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = login(+user);
    console.log(result);
    if (!result) {
      alert("usuario no encontrado");
      return;
    }
    navigate("/profile");
  };
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Iniciar sesión</h1>
      <hr />
      <form
        className="flex flex-col gap-2 my-10"
        onSubmit={(event) => handleSubmit(event)}
      >
        <Input
          type="numnber"
          placeholder="Id del usuario"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
      <Link to="/about">Volver a la pagina principal</Link>
    </div>
  );
};
