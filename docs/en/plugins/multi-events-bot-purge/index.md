---
title: "Bot Purge"
description: "MultiEvents expansion mode -- compete to kill NPC scientists and earn points for each bot eliminated."
sidebar_position: 1
---

# Bot Purge

## Description

**Bot Purge** is an expansion mode for MultiEvents where players compete to kill NPC scientists. You earn points for each bot killed, with the amount depending on the bot type. The player with the most points at the end wins.

## Key Features

- Competitive NPC scientist elimination mode
- Configurable point table for different bot types (regular, heavy, etc.)
- Real-time leaderboard showing top players
- Configurable rewards by ranking position
- Integration with MultiEventsInventory for reward delivery
- Integration with MultiEventsLeaderboard for global stats
- Notify / UINotify support for notifications
- Configurable event duration
- UI panel with countdown timer and current scores

## Requirements

| Dependency | Required | Description |
|---|---|---|
| **MultiEvents** | Required | Core events plugin |
| **ImageLibrary** | Required | Image loading and display for the UI |
| MultiEventsInventory | Optional | For delivering rewards through the event inventory |
| MultiEventsLeaderboard | Optional | For global leaderboard tracking |
| Notify / UINotify | Optional | For visual player notifications |

## Quick Start

1. Make sure **MultiEvents** and **ImageLibrary** are installed and running.
2. Copy `MultiEventsBotPurge.cs` to your server's `oxide/plugins/` folder.
3. The plugin automatically registers with MultiEvents.
4. Adjust the bot point table in the config if needed.
5. Start the event through MultiEvents or with:
 ```
 botpurge.start
 ```
