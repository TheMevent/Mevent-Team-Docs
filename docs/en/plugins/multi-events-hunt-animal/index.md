---
title: "Hunt Animal"
description: "MultiEvents expansion mode -- compete to hunt animals with a tiered point system."
sidebar_position: 1
---

# Hunt Animal

## Description

**Hunt Animal** is an expansion mode for MultiEvents where players compete to hunt animals. Each kill earns points based on the animal type. Chickens give 1 point, wolves and boars give 4, and bears and tigers are worth 10. The player with the most points at the end wins.

## Key Features

- Competitive animal hunting mode
- Configurable point table for each animal type
- Wide range of supported animals (chickens, wolves, boars, bears, tigers, crocodiles, panthers, snakes, etc.)
- Real-time leaderboard
- Configurable rewards by ranking position
- Integration with MultiEventsInventory and MultiEventsLeaderboard
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
2. Copy `MultiEventsHuntAnimal.cs` to your server's `oxide/plugins/` folder.
3. The plugin automatically registers with MultiEvents.
4. Adjust the animal point table in the config if needed.
5. Start the event through MultiEvents or with:
 ```
 huntanimal.start
 ```
6. Hunt animals to score points!
