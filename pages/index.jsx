import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, []);

  return <></>;
}

export default Home;
