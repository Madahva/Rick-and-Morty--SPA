import { Request, Response } from "express";
import {
  createFavourite,
  getFavouritesByUser,
  deleteFavourite,
} from "../controllers/favouriteController";

export const addFavouriteHandler = async (req: Request, res: Response) => {
  const card: any = req.body;
  try {
    const favourite = await createFavourite(card);
    res.status(201).json(favourite);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getFavouriteHandler = async (req: Request, res: Response) => {
  const user: string = req.params.user;
  try {
    const favourites = await getFavouritesByUser(user);
    res.status(200).json(favourites);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteFavouriteHandler = async (req: Request, res: Response) => {
  const { user, cardId } = req.params;
  try {
    const deletedFavourite = await deleteFavourite(user, cardId);
    console.log(deletedFavourite);
    res.status(200).json({
      success: true,
      message: `Favourite ${cardId} deleted for user ${user}`,
      deletedFavourite,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
