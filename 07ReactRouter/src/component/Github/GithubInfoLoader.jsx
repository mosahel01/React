export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/mosahel01");
  return response.json();
};
