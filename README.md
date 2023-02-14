# Pig (dice game)

## Description

Pig is a simple dice game first described in print in John Scarne in 1945. Players take turns to roll a single die as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1.

See more about this game history on [Wikipedia](<https://en.wikipedia.org/wiki/Pig_(dice_game)>).

### How to install

Install [Node.js](https://nodejs.org)

Install [live-server npm package](https://www.npmjs.com/package/live-server) running this command in the terminal:

```bash
npm install -g live-server
```

### How to run

Run the following command in the project folder to start the server

```bash
live-server
```

### How to play

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

- If the player rolls a 1, they score nothing and it becomes the next player's turn.
- If the player rolls any other number, it is added to their turn total and the player's turn continues.
- If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

The first player to score 100 or more points wins.
