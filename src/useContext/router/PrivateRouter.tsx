import { use, type JSX } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router";

interface Props {
  element: JSX.Element; // REACT.reeactnode
}
export const PrivateRouter = ({ element }: Props) => {
  const { authStatus } = use(UserContext);
  if (authStatus === "checking") return <div>...cargando</div>;
  if (authStatus === "authenticated") {
    return element;
  }

  return <Navigate to="/login" replace />;
};
