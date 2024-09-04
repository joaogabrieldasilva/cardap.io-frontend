import { api } from "./api-client";

type Request = {
  name: string;
  phone: string;
  email: string;
  password: string;
};

type Response = {
  token: string;
};

export async function signUpWithPassword({
  name,
  phone,
  email,
  password,
}: Request) {
  const result = await api
    .post("auth/sign-up", {
      json: {
        name,
        phone,
        email,
        password,
      },
    })
    .json<Response>();

  return result;
}
