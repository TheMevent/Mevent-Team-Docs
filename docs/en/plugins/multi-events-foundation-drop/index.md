---
title: "Foundation Drop"
description: "MultiEvents expansion mode -- a survival minigame on crumbling foundations. Last one standing wins."
sidebar_position: 1
---

# Foundation Drop

## Description

**Foundation Drop** is an expansion mode for MultiEvents -- a survival minigame. Players spawn on a platform made of foundations that start crumbling one by one. You have to jump between the remaining foundations to avoid falling. The last player standing wins. When only one foundation remains, a final phase kicks in with radiation and weapons.

## Key Features

- Survival minigame with crumbling foundations
- Configurable arena size (NxN grid)
- Voting phase for player registration
- Final battle with radiation and weapons on the last foundation
- Configurable kit or item for the final phase
- Support for multiple winners
- Command blocking during the event
- Integration with NoEscape, NTeleportation, and Vanish
- Integration with MultiEventsInventory for reward delivery
- Integration with MultiEventsLeaderboard for global stats
- Notify / UINotify support
- Configurable minimum player count

## Requirements

| Dependency | Required | Description |
|---|---|---|
| **MultiEvents** | Required | Core events plugin |
| **ImageLibrary** | Required | Image loading and display |
| MultiEventsInventory | Optional | Event inventory reward delivery |
| MultiEventsLeaderboard | Optional | Global leaderboard |
| Kits | Optional | For giving kits in the final phase |
| Vanish | Optional | For detecting invisible players |
| NTeleportation | Optional | For blocking teleportation during the event |
| NoEscape | Optional | For blocking zone exit during the event |
| Notify / UINotify | Optional | Visual notifications |

## Quick Start

1. Make sure **MultiEvents** and **ImageLibrary** are installed and running.
2. Copy `MultiEventsFoundationDrop.cs` to your server's `oxide/plugins/` folder.
3. The plugin automatically registers with MultiEvents.
4. Configure minimum player count and arena size in the config.
5. Start the event through MultiEvents or with:
 ```
 foundationdrop.start
 ```
