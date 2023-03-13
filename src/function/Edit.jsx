import { useState, useEffect } from "react";
export function FetchApiResourceId(urlResource) {
  const [resourceId, setResourceId] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/${urlResource}`)
      .then((d) => {
        return d.json();
      })
      .then((data) => {
        return setResourceId(data);
      });
  }, []);

  return { resourceId, setResourceId };
}
