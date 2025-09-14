export const getCurrentUser = () => {
  return {
    name: "Jane Doe",
    username: "janedoe",
    displayUsername: "Jane",
    image: "https://github.com/omsi6.png",
    email: "jane.doe@example.com",
  };
};

export const getAllUsers = () => {
  return [
    {
      name: "Jane Doe",
      username: "janedoe",
      displayUsername: "Jane",
      image: "https://github.com/omsi6.png",
      email: "jane.doe@example.com",
    },
    {
      name: "John Smith",
      username: "johnsmith",
      displayUsername: "John",
      image: "https://github.com/octocat.png",
      email: "john.smith@example.com",
    },
    {
      name: "Alice Johnson",
      username: "alicej",
      displayUsername: "Alice",
      image: "https://github.com/alicej.png",
      email: "alice.johnson@example.com",
    },
    {
      name: "Bob Lee",
      username: "boblee",
      displayUsername: "Bob",
      image: "https://github.com/boblee.png",
      email: "bob.lee@example.com",
    },
  ];
};
