import request from "./api";

export const sendContactMessage = (payload) =>
  request("/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });