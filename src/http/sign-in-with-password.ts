import { api } from "./api-client";

type Request = {
  email: string;
  password: string;
};

type Response = {
  token: string;
};

export async function signInWithPassword({ email, password }: Request) {
  const result = await api
    .post("sessions/password", {
      json: {
        email,
        password,
      },
    })
    .json<Response>();

  return result;
}
