import httpRequest from "@/service/http";

export function userLogin(data: api.LOGIN) {
  return httpRequest("post", "/login", { data });
}
export function userTest(data: api.LOGIN) {
  return httpRequest("get", "/backstage/api/roles", { data });
}
