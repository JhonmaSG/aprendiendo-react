import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "JhonmaSG",
    name: 'Jhon Mario Serrano',
    isFollowing: true
  },
  {
    userName: "midudev",
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: "pheralb",
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: "ThomasRLS",
    name: 'Thomas R.',
    isFollowing: true
  }
]

export function App() {
  const [isFollowing, setIsFollowing] = useState(false);

  console.log("[App] render with isFollowing: ", isFollowing);

  return (
    <section className="App">
      {
        users.map(user => {
            const { userName, name, isFollowing} = user
            return (
                <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                >
                    {name}
                </TwitterFollowCard>
            )
        })
      }      
    </section>
  );
}
