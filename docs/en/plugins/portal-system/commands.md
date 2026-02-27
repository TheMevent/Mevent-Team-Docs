---
title: "Commands and Permissions"
description: "Complete list of commands and permissions for the Portal System plugin."
sidebar_position: 3
---

# Commands and Permissions

## Chat Commands

| Command | Description | Permission |
|---|---|---|
| `/portal` | Open the portal management menu | `portalsystem.use` |
| `/buyportal` | Purchase a portal with resources/currency | `portalsystem.buy` |
| `/giveportal [nickname] [amount]` | Give portals to a player | `portalsystem.give` |
| `/spawnportal [nickname] [amount]` | Spawn portals (admin) | `portalsystem.spawn` |

## Console Commands

| Command | Description |
|---|---|
| `giveportal [nickname/steamid] [amount]` | Give portals from the server console |

## Portal Interface

When approaching a portal, the following actions are available through the visual menu:

| Action | Description |
|---|---|
| Rename | Change the portal name |
| Link | Link the portal with another portal |
| Sharing | Configure access (teammates, friends, clan) |
| Map marker | Enable/disable the marker |
| Marker color | Choose the map marker color |
| Portal skin | Change the visual skin |
| Delete | Remove the portal |
| Show text | Enable/disable the name text |

## Permissions

| Permission | Description |
|---|---|
| `portalsystem.use` | Basic portal usage |
| `portalsystem.place` | Placing portals |
| `portalsystem.buy` | Purchasing portals |
| `portalsystem.give` | Giving portals to others |
| `portalsystem.spawn` | Spawning portals (admin) |
| `portalsystem.admin` | Administration |
| `portalsystem.free` | Free teleportation |
| `portalsystem.freeuse` | Free usage |
| `portalsystem.limit.N` | Portal limit (N = 4, 6, 10) |
| `portalsystem.vip1` | VIP cooldown (5 seconds) |
| `portalsystem.vip2` | VIP cooldown (2 seconds) |

:::tip Tip
Portal limits are configured in the configuration (`"Extra portal limits from permissions"`). Defaults: 2, 4, 6, 10.
:::
