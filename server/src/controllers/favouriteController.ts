import { Favourite } from "../models/Favourite";

export const createFavourite = (card: any) => {
  try {
    return Favourite.create(card);
  } catch (error) {
    console.error(error);
  }
};

export const getFavouritesByUser = async (user: string) => {
  try {
    const cards = await Favourite.findAll({ where: { user } });
    return cards;
  } catch (error: any) {
    throw new Error(
      `Could not get cards for user with ID ${user}. Error: ${error}`
    );
  }
};

export const deleteFavourite = async (user: string, cardId: string) => {
  try {
    const favourite = await Favourite.findOne({
      where: { user: user, id: cardId },
    });
    if (!favourite) {
      throw new Error(
        `Favourite not found for user ${user} and cardId ${cardId}`
      );
    }
    await favourite.destroy();

    return {
      success: true,
      message: `Favourite ${cardId} deleted for user ${user}`,
    };
  } catch (error: any) {
    throw new Error(`Could not delete favourite. Error: ${error}`);
  }
};

