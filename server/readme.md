# Rick and Morty React-app

## Routes

- GET /characters/:id (Retrive a character that match the given ID)
- GET /characters/name/:name (Retrieve a list of characters that match the given name query)
- GET /characters/filtersName (Retrieve a list of filter names)
- GET /characters/filter (Retrieve a list of characters filtered by selected filters)

- GET /favourite/:user (Retrieve a list of all characters favorited by the specified user)
- POST /favourite/ (Create a new favorite character)
- DELETE /favourite/:user/:cardId (Remove a favorite character with the given cardId from the specified user's favorites list)
