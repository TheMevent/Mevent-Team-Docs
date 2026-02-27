---
title: "Commands and Permissions"
description: "Complete list of commands and permissions for the Helpful Supply plugin."
sidebar_position: 3
---

# Commands and Permissions

## Console Commands

| Command | Description | Example |
|---|---|---|
| `hsupply.give [nickname/steamid/all] [signal name] [amount]` | Give a custom supply signal to a player | `hsupply.give Player1 heal 3` |

### Command Parameters

- `[nickname/steamid/all]` -- player name, SteamID64, or `all` to give to everyone
- `[signal name]` -- supply signal type name (e.g., `heal`, `guns`, `explosive`)
- `[amount]` -- number of supply signals to give

### Examples

```
hsupply.give Player1 heal 1
```
Give one medical supply signal to Player1.

```
hsupply.give 76561198012345678 guns 2
```
Give two weapon supply signals to a player by SteamID.

```
hsupply.give all explosive 1
```
Give one explosive supply signal to all players on the server.

## Permissions

The Helpful Supply plugin has no special permissions. The console command `hsupply.give` is executed from the server console or RCON.

:::info Note
Any player can use a custom supply signal if it is in their inventory. Access control is managed through supply signal distribution.
:::
