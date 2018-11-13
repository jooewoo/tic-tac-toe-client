#!/bin/bash

curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'",
      "player_x": {
        "id": "'"${PLAYERXID}"'",
        "email": "'"${PLAYERXEMAIL}"'"
      },
      "player_o": {
        "id": "'"${PLAYEROID}"'",
        "email": "'"${PLAYEROEMAIL}"'"
      },
    }
  }'

echo
