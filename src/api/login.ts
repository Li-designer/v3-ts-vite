import httpRequest from "@/service/http";

export function userLogin(data: api.LOGIN) {
  return httpRequest("post", "/login", { data });
}
