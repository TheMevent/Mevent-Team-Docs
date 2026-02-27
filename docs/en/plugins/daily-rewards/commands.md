---
title: "Daily Rewards Commands"
description: "Full list of commands and permissions for the Daily Rewards plugin for Rust servers."
sidebar_position: 3
---

# Commands and Permissions

## Chat Commands

| Command | Description | Permission |
|---|---|---|
| `/daily` | Open the daily rewards interface | `dailyrewards.use` |
| `/rewards` | Open the daily rewards interface (alternative) | `dailyrewards.use` |

:::tip Tip
Chat commands are configured in the configuration under the `Commands` parameter. By default, `daily` and `rewards` are available.
:::

## Console Commands

| Command | Description | Who can use it |
|---|---|---|
| `dailyrewards.wipe` | Reset all players' progress | Server console only |
| `dailyrewards.manage playtime set <steam_id> <amount>` | Set playtime for a player | Server console only |
| `dailyrewards.top` | Show top players by playtime | Server console only |
| `dailyrewards.template [fullscreen/inmenu] [number]` | Switch the interface template | Server console only |

### Usage Examples

Reset all players' progress:
```
dailyrewards.wipe
```

Set playtime for a specific player:
```
dailyrewards.manage playtime set 76561198012345678 3600
```

Switch to fullscreen template:
```
dailyrewards.template fullscreen 1
```

## Permissions

| Permission | Description | Default |
|---|---|---|
| `dailyrewards.use` | Access to the daily rewards interface | Not granted |
| `dailyrewards.edit` | Editing rewards through the interface | Not granted |
| `dailyrewards.vip` | VIP group with reduced cooldown (3100 sec.) | Not granted |
| `dailyrewards.premium` | Premium group with minimal cooldown (2600 sec.) | Not granted |

:::info Note
VIP permission names and corresponding cooldowns are configured in the configuration under the `Cooldown Settings` section. You can create any number of groups with different wait times.
:::

### Setting Up Permissions

```
oxide.grant group default dailyrewards.use
oxide.grant group admin dailyrewards.edit
oxide.grant group vip dailyrewards.vip
oxide.grant group premium dailyrewards.premium
```

## Notifications (Notify)

The plugin supports sending notifications via Notify for the following events:

| Event | Notification Type | Description |
|---|---|---|
| Cooldown ended | `2130354` | Reward is available for claiming |
| Cooldown active | `2130355` | Shows the remaining time until claiming |
| Reward received | `2130356` | Confirmation of reward receipt |

Notifications are configured in the `"Notification settings"` section of the configuration.
