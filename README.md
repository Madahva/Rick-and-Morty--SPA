# Rick and Morty React-app

## Routes

- GET /characters (Retrieve a list of 20 characters with pagination)
- GET /characters/name/:name (Retrieve a list of characters that match the given name query)
- GET /characters/filtersName (Retrieve a list of filter names -- hardcoded)
- GET /characters/filter (Retrieve a list of characters filtered by selected filters)
- GET /characters/apiFiltersName (Retrieve a list of filter names from an API with a 15-second response time)

- GET /favourite/:user (Retrieve a list of all characters favorited by the specified user)
- POST /favourite/ (Create a new favorite character)
- DELETE /favourite/:user/:cardId (Remove a favorite character with the given cardId from the specified user's favorites list)
