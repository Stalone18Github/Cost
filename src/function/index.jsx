import { useState, useEffect } from "react";
export function FetchApiResource(urlResource) {
  const [resource, setResource] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/${urlResource}`)
      .then((d) => {
        return d.json();
      })
      .then((data) => {
        return setResource(data);
      });
  }, []);

  return { resource };
}
