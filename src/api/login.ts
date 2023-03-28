import httpRequest from "@/service/http";

export function userLogin(data: LOGIN) {
  return httpRequest("post", "/login", data);
}
