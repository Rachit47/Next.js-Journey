import React from "react";

const User = async ({ params }: { params: { user: string } }) => {
  const { user } = await params;
  return (
    <div>
      <h1>Info About {user}</h1>
      <p>Hello I am {user}</p>
    </div>
  );
};

export default User;
