---
title: "Notify Commands"
description: "Complete list of Notify plugin commands for Rust servers with usage examples."
sidebar_position: 4
---

# Notify Commands

## Overview

The Notify plugin provides three commands for sending notifications. All commands are intended for administrators and are executed via chat or the server console.

:::info Note
Regular players do not use commands directly. They automatically receive notifications from other plugins that are integrated with Notify through the API.
:::

## Administrator Commands

### Send a notification to yourself

```
notify.show [type] [message]
```

**Required permission:** `notify.notify`

Sends a notification to the current player (yourself). Useful for testing settings.

**Parameters:**
- `[type]` -- numeric notification type identifier (0, 1, etc.)
- `[message]` -- notification text (supports spaces)

**Examples:**

```
notify.show 0 Welcome to the server!
```
Shows an information notification (type 0, blue).

```
notify.show 1 You violated the server rules!
```
Shows an error notification (type 1, red).

---

### Send a notification to a specific player

```
notify.player [steamid/name] [type] [message]
```

**Required permission:** `notify.player`

Sends a notification to the specified player. The player must be online.

**Parameters:**
- `[steamid/name]` -- SteamID64 or name of the target player
- `[type]` -- numeric notification type identifier
- `[message]` -- notification text

**Examples:**

```
notify.player 76561198012345678 0 Your application has been approved!
```
Sends an information notification to the player with the specified SteamID.

```
notify.player PlayerName 1 Warning: rule violation!
```
Sends an error notification to the player by name.

:::warning Warning
Name search may find the wrong player if multiple players have similar names. It is recommended to use SteamID for precise targeting.
:::

---

### Send a notification to all players

```
notify.allplayers [type] [message]
```

**Required permission:** `notify.allplayer`

Sends a notification to all players currently on the server.

**Parameters:**
- `[type]` -- numeric notification type identifier
- `[message]` -- notification text

**Examples:**

```
notify.allplayers 0 Wipe in 30 minutes! Get ready!
```
Sends an information notification to all players.

```
notify.allplayers 1 Server will restart in 5 minutes!
```
Sends a warning to all players.

## Usage from Server Console

All commands can be executed from the server (RCON) console. When executed from the console, permission checks are not required.

```
notify.allplayers 0 Scheduled maintenance in 10 minutes
```

## Usage by Other Plugins (API)

Other plugins can send notifications by calling the following functions:

### Send a notification to a single player

```
Notify.Call("SendNotify", player, type, message);
```

- `player` -- target player
- `type` -- numeric notification type (int)
- `message` -- message text (string)

### Send a notification to all players

```
Notify.Call("SendNotifyAllPlayers", type, message);
```

### Enable/disable a notification type

```
Notify.Call("TryToggleType", type, newValue);
```

- `type` -- numeric type (int)
- `newValue` -- `true` (enable) or `false` (disable)

:::tip Tip
Many popular plugins (shops, raids, events) already support Notify. Simply enable the "Work with Notify" option in their settings.
:::
