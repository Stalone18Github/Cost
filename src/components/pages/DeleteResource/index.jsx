import { Navigate, useParams } from "react-router-dom";
export function DeleResource() {
  const { id, resource } = useParams();
  fetch(`http://localhost:3000/${resource}/${id}`, {
    method: "delete",
    headers: { "content-type": "application/json" },
  });
  return Navigate({ to: "/user" });
}
