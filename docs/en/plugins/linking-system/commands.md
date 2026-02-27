---
title: "Linking System Commands"
description: "Full list of commands and permissions for the Linking System plugin."
sidebar_position: 3
---

# Commands and Permissions

## Chat Commands

| Command | Description | Permission |
|---|---|---|
| `/link` | Open the Discord linking UI | `linkingsystem.use` |
| `/link status` | Show current link status | `linkingsystem.use` |
| `/link code` | Get a linking code | `linkingsystem.use` |
| `/link remove` | Remove the Discord link | `linkingsystem.use` |

:::tip Tip
Commands are configurable in the `Open UI Commands` config option. Default: `["link"]`.
:::

### Usage Examples

Open the UI:
```
/link
```

Check link status:
```
/link status
```

Remove the link:
```
/link remove
```

## Console Commands (internal)

These commands are used by the Discord bot (LinkBot) to interact with the plugin. They aren't meant for manual use:

| Command | Description |
|---|---|
| `LinkBot_BotOnline` | Bot reports it's connected |
| `LinkBot_UpdatePlayer` | Update player link data |
| `LinkBot_RemovePlayer` | Remove a player's link |

:::warning Warning
These commands are used exclusively by the Discord bot via RCON. Don't run them manually.
:::

## Permissions

| Permission | Description | Default |
|---|---|---|
| `linkingsystem.use` | Access to the linking system | Not granted |

### Setting Up Permissions

```
oxide.grant group default linkingsystem.use
```

## Linking Process

### For Players

1. Type `/link` in chat on the server.
2. Click "CONNECT DISCORD" in the UI.
3. Generate a unique code.
4. Copy the code (CTRL+C).
5. Go to the `#verify` Discord channel on your server.
6. Paste the code in chat or use the Discord bot.
7. Go back to the game and click "CHECK CONNECTION STATUS".
8. If successful, the status changes to "Account linked".

### Unlinking

1. Type `/link` to open the UI.
2. Click "DISCONNECT ACCOUNT".
3. Or use the `/link remove` command.

### Link Statuses

| Status | Description |
|---|---|
| Not Linked | Account isn't linked |
| Wait Confirm | Code generated, waiting for confirmation |
| Linked | Account successfully linked |
