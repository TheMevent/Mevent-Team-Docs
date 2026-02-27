---
title: "Coin Flipping Configuration"
description: "Complete reference for all Coin Flipping plugin configuration parameters."
sidebar_position: 4
---

# Coin Flipping Configuration

The configuration file is located at: `oxide/config/CoinFlipping.json`

## Main Parameters

| Parameter | Default | Description |
|---|---|---|
| Commands | `["flip"]` | List of chat commands for opening the interface |
| Work with Notify? | `true` | Whether to use the Notify plugin for notifications |

## Economy Settings

| Parameter | Default | Description |
|---|---|---|
| Type (Plugin/Item) | `Plugin` | Economy type: `Plugin` -- via plugin, `Item` -- via in-game items |
| Plugin name | `Economics` | Economy plugin name |
| Balance add hook | `Deposit` | Hook for adding balance |
| Balance remove hook | `Withdraw` | Hook for deducting balance |
| Balance show hook | `Balance` | Hook for displaying balance |
| ShortName | `scrap` | Item ShortName (when type is Item) |
| Display Name (empty - default) | `""` | Displayed item name |
| Skin | `0` | Item skin (when type is Item) |

## Bet Settings

| Parameter | Default | Description |
|---|---|---|
| Values for Bot Game | `[100, 200, 300]` | Suggested bet amounts for playing against the bot |
| Min Bet for Bot Game | `100` | Minimum bet for playing against the bot |
| Max Bet for Bot Game (0 - disable) | `0` | Maximum bet for playing against the bot (0 -- no limit) |
| Min Bet for Player Game | `100` | Minimum bet for playing against a player |
| Max Bet for Player Game (0 - disable) | `0` | Maximum bet for playing against a player (0 -- no limit) |

## Effect Settings

| Parameter | Default | Description |
|---|---|---|
| Flipping Effect | `""` | Effect when flipping the coin (prefab path) |
| Winning Effect | `""` | Effect on winning |
| Loss Effect | `""` | Effect on losing |

## Interface Settings

| Parameter | Default | Description |
|---|---|---|
| Show coin in header? | `true` | Show coin image in the header |
| Coin Image | URL | Coin image in the header |
| Heads Image | URL | Image for the "Heads" side |
| Tails Image | URL | Image for the "Tails" side |

## Permission Settings

| Parameter | Default | Description |
|---|---|---|
| Opening the interface | `coinflipping.use` | Permission to open the interface |
| Playing against players | `coinflipping.players` | Permission to play against players |
| Playing against NPCs | `coinflipping.npcs` | Permission to play against the bot |
| Creating a room | `coinflipping.createroom` | Permission to create a room |

<details>
<summary>Default Configuration Example</summary>

```json
{
 "Commands": ["flip"],
 "Work with Notify?": true,
 "Economy": {
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "Economics",
 "Balance add hook": "Deposit",
 "Balance remove hook": "Withdraw",
 "Balance show hook": "Balance",
 "ShortName": "scrap",
 "Display Name (empty - default)": "",
 "Skin": 0
 },
 "Interface": {
 "Show coin in header?": true,
 "Coin Image": "https://i.imgur.com/GBVGvQa.png",
 "Tails Image": "https://i.imgur.com/GBVGvQa.png",
 "Heads Image": "https://i.imgur.com/GBVGvQa.png"
 },
 "Values for Bot Game": [100, 200, 300],
 "Min Bet for Bot Game": 100,
 "Max Bet for Bot Game (0 - disable)": 0,
 "Min Bet for Player Game": 100,
 "Max Bet for Player Game (0 - disable)": 0,
 "Flipping Effect": "",
 "Winning Effect": "",
 "Loss Effect": "",
 "Permissions Settings": {
 "Opening the interface": "coinflipping.use",
 "Playing against players": "coinflipping.players",
 "Playing against NPCs": "coinflipping.npcs",
 "Creating a room": "coinflipping.createroom"
 }
}
```

</details>
