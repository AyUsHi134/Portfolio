import request from "./api";

export const getAbout = (signal) => request("/about", { signal });

export const updateAbout = (payload) =>
  request("/about", {
    method: "PUT",
    body: JSON.stringify(payload),
  });