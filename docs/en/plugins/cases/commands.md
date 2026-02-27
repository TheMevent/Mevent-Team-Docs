---
title: "Commands -- Cases"
description: "Full list of Cases plugin commands with usage examples."
sidebar_position: 4
---

# Cases Commands

## Player Commands

| Command | Description |
|---|---|
| `/cases` | Opens the main cases menu |
| `/opencase` | Alias for the `/cases` command |

:::info Note
Commands are configured in the configuration. The administrator can change them to any other commands (e.g., `/case`, `/open`, etc.).
:::

### How to Open a Case

1. Type `/cases` in chat
2. Select a case from the list
3. Make sure you have enough currency
4. Click the open button
5. Watch the roulette animation
6. Collect your reward!

## Admin Commands

### Giving Cases

| Command | Description |
|---|---|
| `givecase <steamid> <case_id> <amount>` | Give a specific number of cases to a specific player |
| `givecase all <case_id> <amount>` | Give case(s) to all players currently on the server |

:::tip Examples
Give 5 cases (ID: 1) to a specific player:
```
givecase 76561198000000000 1 5
```

Give 1 case (ID: 2) to all players:
```
givecase all 2 1
```
:::

### givecase Command Parameters

| Parameter | Description |
|---|---|
| `steamid` | Player's Steam ID or `all` for all players |
| `case_id` | Numeric case ID from the configuration |
| `amount` | Number of cases to give |

:::caution Important
The `givecase` command is only available to administrators and from the server console. Regular players cannot use it.
:::

## In-Game Editor

Administrators with the `Cases.edit` permission can edit cases and items through the built-in in-game interface, without needing to manually edit the configuration file.
