import { Response, Request, Router, NextFunction } from "express";
import { User } from "../models/User";

const router = Router();

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  User.findOne({ where: { id: id } })
    .then((user) => {
      res.send(user);
    })
    .catch((error) => next(error));
});

router.post("/login", (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  User.findOne({ where: { email: email } })
    .then((user) => {
      if (!user || user.password !== password) {
        res.status(401).send("Invalid email or password");
      } else {
        res.send(user);
      }
    })
    .catch((error) => next(error));
});

router.post("/register", (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  User.create(user)
    .then((createdUser) => {
      res.send(createdUser);
    })
    .catch((error) => next(error));
});

export default router;
