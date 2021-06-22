import React from "react";
import Card from "../Card/Card";

export default function CardList({ profiles }) {
  return (
    <div>
      {profiles.map((profile) => (
        <Card
          key={profile.id}
          avatar={profile.avatar_url}
          created={profile.created_at}
          name={profile.login}
        />
      ))}
    </div>
  );
}
