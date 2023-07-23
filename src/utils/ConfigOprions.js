import Cookies from "js-cookie";
import { Config } from "./Config";

export const ConfigOptions = () => {
  if (typeof window === undefined) return;
  if (!Cookies.get(Config.key.token)) return;

  const accessToken = Cookies.get(Config.key.token);

  if (accessToken) {
    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }

  return {};
};
