---
title: "FAQ -- Coin Flipping"
description: "Frequently asked questions about the Coin Flipping plugin for Rust servers."
sidebar_position: 5
---

# Frequently Asked Questions (FAQ)

## 1. How do I change the betting currency?

Open the configuration file `oxide/config/CoinFlipping.json` and modify the `Economy` section. You can use virtual currency through an economy plugin or in-game items. For items, set `"Type (Plugin/Item)"` to `"Item"` and specify the `ShortName` of the desired item.

---

## 2. How do I change the minimum and maximum bet?

In the configuration, modify the parameters:
- `"Min Bet for Bot Game"` -- minimum bet for playing against the bot
- `"Max Bet for Bot Game (0 - disable)"` -- maximum bet for playing against the bot (0 -- no limit)
- `"Min Bet for Player Game"` -- minimum bet for playing against players
- `"Max Bet for Player Game (0 - disable)"` -- maximum bet for playing against players

---

## 3. Can I change the command for opening the interface?

Yes. In the configuration, modify the `"Commands"` array. For example:
```json
"Commands": ["flip", "coin", "coinflip"]
```
All specified commands will work to open the interface.

---

## 4. How do I change the coin images?

In the `"Interface"` section of the configuration, change the image URLs:
- `"Coin Image"` -- coin image in the header
- `"Heads Image"` -- image for the "Heads" side
- `"Tails Image"` -- image for the "Tails" side

It is recommended to use PNG format images.

---

## 5. What happens if a player disconnects during a game?

If one of the players disconnects during a game against another player, the game is automatically cancelled and bets are returned to both participants. The player will receive a notification: "The game was cancelled due to a disconnection. Bets have been returned."

---

## 6. The interface does not open. What should I do?

**Possible causes:**
1. The player does not have the `coinflipping.use` permission. Solution: `oxide.grant group default coinflipping.use`
2. The ImageLibrary plugin is not installed. Solution: install ImageLibrary.
3. The plugin loaded with errors. Solution: check the server console for errors.

---

## 7. A player does not have enough funds but is trying to place a bet.

The plugin automatically checks the player's balance before starting the game. If there are insufficient funds, the player will be shown an error message and the game will not start.

---

## 8. Can I allow bot games for everyone but player games only for VIP?

Yes. Grant permissions as follows:
```
oxide.grant group default coinflipping.use
oxide.grant group default coinflipping.npcs
oxide.grant group vip coinflipping.players
oxide.grant group vip coinflipping.createroom
```

---

## 9. Can I use scrap as the betting currency?

Yes. Configure the economy section to use items:
```json
{
 "Economy": {
 "Type (Plugin/Item)": "Item",
 "ShortName": "scrap",
 "Display Name (empty - default)": "",
 "Skin": 0
 }
}
```
