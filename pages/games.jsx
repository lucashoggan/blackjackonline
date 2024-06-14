import React, { use } from "react";
import Header from "../components/header";
import { useRouter } from "next/router";

const games = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <main className="games">
        <h1 className="title">Games</h1>
        <div className="multi-choices">
          <div className="create">
            <button>Create multiplayer game</button>
          </div>
          <div className="join">
            <button>Join multiplayer game</button>
            <input type="text" placeholder="Game Code" />
          </div>
          <div className="local">
            <button onClick={() => router.push("/games/local")}>
              Create local game
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default games;
