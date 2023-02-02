import Link from "next/Link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const notFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Oops!</h1>
      <h2>That page cannot be found...</h2>
      <p>
        Redirecting to the<Link href="/"> Homepage</Link>
      </p>
    </div>
  );
};

export default notFound;
