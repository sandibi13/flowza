import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@flowza/auth/server";

export const { POST, GET } = toNextJsHandler(auth);
