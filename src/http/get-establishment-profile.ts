type Response = {
  establishment: {
    id: number;
    name: string;
    email: string;
    avatarUrl: string | null;
  };
};

export async function getEstablishmentProfile() {
  return {
    establishment: {
      id: 1,
      name: "Play Café",
      avatarUrl: null,
      email: "playcafe@email.com",
    },
  } as Response;
}
