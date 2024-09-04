import { api } from "./api-client";

type Response = {
  name: string;
  phone: string;
  email: string;
};

export async function getUserProfile() {
  const result = await api.get("users/profile").json<Response>();

  return result;
}
