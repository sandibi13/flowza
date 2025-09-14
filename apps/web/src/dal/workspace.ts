export const getCurrentWorkspace = () => {
  return {
    name: "Analog",
    slug: "analog",
    logo: "https://github.com/analogdotnow.png",
    plan: "Free",
  };
};

export const getAllWorkspaces = () => {
  return [
    {
      name: "Analog",
      slug: "analog",
      logo: "https://github.com/analogdotnow.png",
      plan: "Free",
    },
    {
      name: "BetaWorks",
      slug: "betaworks",
      logo: "https://github.com/betaworks.png",
      plan: "Pro",
    },
    {
      name: "GammaTech",
      slug: "gammatech",
      logo: "https://github.com/gammatech.png",
      plan: "Enterprise",
    },
    {
      name: "DeltaDev",
      slug: "deltadev",
      logo: "https://github.com/deltadev.png",
      plan: "Free",
    },
  ];
};
