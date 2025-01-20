import service from "@/service";

export default async function httpRequest(method: string, url: string, options: Object) {
  return await service({ method, url, ...options });
}
