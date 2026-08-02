import request from "./api";

export const getProjects = (signal) => request("/projects", { signal });

export const createProject = (payload) =>
  request("/projects", {
    method: "POST",
    body: JSON.stringify(payload),
  });