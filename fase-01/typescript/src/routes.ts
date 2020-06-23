import { Request, Response } from "express";

import CreateUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = CreateUser({
    name: "Ruan",
    email: "email.email.com",
    password: "1234",
    techs: [
      "Nodejs",
      "ReactJS",
      "React Native",
      { title: "ReactJS", experience: 50 },
    ],
  });
  return response.json({ user });
}
