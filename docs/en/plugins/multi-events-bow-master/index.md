---
title: "Bow Master"
description: "MultiEvents expansion mode -- compete for kills using bows and crossbows."
sidebar_position: 1
---

# Bow Master

## Description

**Bow Master** is an expansion mode for MultiEvents where players compete in marksmanship with bows and crossbows. Points are awarded for each kill made with arrows (Arrow damage type). Kills on both players and animals count. The player with the most points at the end wins.

## Key Features

- Competitive bow and crossbow mode
- Only arrow kills count (Arrow damage type)
- Player and animal kills both count
- Real-time leaderboard
- Configurable rewards by ranking position
- Integration with MultiEventsInventory for reward delivery
- Integration with MultiEventsLeaderboard for global stats
- Notify / UINotify support
- Configurable event duration
- UI panel with timer and current scores

## Requirements

| Dependency | Required | Description |
|---|---|---|
| **MultiEvents** | Required | Core events plugin |
| **ImageLibrary** | Required | Image loading and display |
| MultiEventsInventory | Optional | Event inventory reward delivery |
| MultiEventsLeaderboard | Optional | Global leaderboard tracking |
| Notify / UINotify | Optional | Visual player notifications |

## Quick Start

1. Make sure **MultiEvents** and **ImageLibrary** are installed and running.
2. Copy `MultiEventsBowMaster.cs` to your server's `oxide/plugins/` folder.
3. The plugin automatically registers with MultiEvents.
4. Start the event through MultiEvents or with:
 ```
 bowmaster.start
 ```
5. Kill players or animals with a bow or crossbow to score points.
