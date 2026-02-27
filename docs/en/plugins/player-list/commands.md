---
title: "Commands and Permissions"
description: "Complete list of commands and permissions for the Player List plugin."
sidebar_position: 3
---

# Commands and Permissions

## Chat Commands

| Command | Description | Permission |
|---|---|---|
| `/players` or `/plist` | Open the online players list | Configurable (available to everyone by default) |

:::info Note
Commands are configured in the `"Commands"` parameter of the configuration. Default: `["players", "plist"]`.
:::

## Permissions

| Permission | Description |
|---|---|
| `playerlist.hide` | Hides the player from the list (for administrators, moderators) |
| Configurable | General permission to open the list (set in the configuration) |
| Field permissions | Individual permissions for each profile field |
| Button permissions | Individual permissions for each button (e.g., `playerlist.admin` for the kick button) |

## Action Buttons

The following buttons are available by default in a player's profile:

| Button | Command | Description |
|---|---|---|
| TP | `tpr %steamid%` | Request teleportation to the player |
| Trade | `trade %username%` | Request a trade with the player |
| Stats | `stats %steamid%` | View the player's statistics |
| Kick | `kick %steamid%` | Kick the player (requires `playerlist.admin` permission) |

### Command Variables

| Variable | Description |
|---|---|
| `%steamid%` | SteamID64 of the selected player |
| `%username%` | Name of the selected player |

:::tip Tip
You can add custom buttons with any commands. Use the `%steamid%` and `%username%` variables to substitute data of the selected player.
:::
