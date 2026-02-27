---
title: "Collection Resources -- Multi Events"
description: "An event mode where players compete to gather resources with multipliers for tools and permissions"
version: "1.0.5"
tags: [rust, plugin, multi-events, event-mode]
sidebar_position: 1
---

# Collection Resources

## What does this mode do?

**Collection Resources** is an event mode for Multi Events where players compete to gather resources. Every resource you collect earns points, and a multiplier system lets you balance the value of different tools, items, and permissions. The player with the most points when time runs out wins.

## Key Features

- Automatic point tracking for all resource gathering (ore, wood, stone, plants, item pickup)
- Tool multipliers -- different tools give different point amounts
- Item multipliers -- configure value for specific items including skins
- Permission multipliers -- VIP players can earn more points
- Real-time leaderboard
- Flexible reward system by ranking position
- Integration with Multi Events Inventory and Multi Events Leaderboard
- Notify / UINotify notification support
- Permission for configuring the event through the UI

## Requirements

- **Multi Events** (core plugin) -- required
- **Image Library** -- recommended (for icon display)
- **Notify** or **UINotify** -- optional (for pop-up notifications)
- **Multi Events Inventory** -- optional (for event inventory rewards)
- **Multi Events Leaderboard** -- optional (for global stats)

## Quick Start

1. Install **Multi Events** (if you haven't already)
2. Place the mode file in `oxide/plugins` (or `carbon/plugins`)
3. Restart the server or load the plugin via console
4. The mode auto-registers with Multi Events
5. Configure multipliers and rewards (see [Configuration](./configuration))

## Permissions

| Permission | Description |
|---|---|
| `multieventscollectionresources.start` | Permission to start the event manually |
| `multieventscollectionresources.stop` | Permission to stop the event manually |
| `multieventscollectionresources.edit` | Permission to edit event settings through the UI |
| Custom multiplier permissions | Permissions for increased point multipliers (e.g., VIP) |

## Commands

| Command | Description | Required Permission |
|---|---|---|
| `collectionresources.start` | Start the event manually | `multieventscollectionresources.start` |
| `collectionresources.stop` | Stop the event manually | `multieventscollectionresources.stop` |

See [Commands](./commands) for details.

## How the Event Works

1. **Start** -- Multi Events launches Collection Resources. All players see a UI notification
2. **Competition** -- players gather resources across the map. Ore, stone, wood, plant harvesting, and item pickup all count. Points depend on tool, item, and permission multipliers
3. **Leaderboard** -- the right side of the screen shows the current ranking with player names and scores
4. **End** -- when time runs out, the system picks winners and hands out rewards

## Troubleshooting

| Problem | Solution |
|---|---|
| Event won't start | Make sure Multi Events is installed and loaded |
| Points not awarded for a resource | Check multipliers in the config. Make sure the item multiplier isn't 0 |
| Permission multipliers not working | Make sure permissions are registered and granted. Check spelling in the config |
| UI doesn't show | Check if Image Library is installed. Make sure the player hasn't hidden notifications |
