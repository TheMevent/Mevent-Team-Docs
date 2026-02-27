---
title: "Daily Rewards Configuration"
description: "Complete reference for all Daily Rewards plugin configuration parameters."
sidebar_position: 4
---

# Daily Rewards Configuration

The configuration file is located at: `oxide/config/DailyRewards.json`

## Main Parameters

| Parameter | Default | Description |
|---|---|---|
| Commands | `["rewards", "daily"]` | Chat commands for opening the interface |
| Work with Notify? | `true` | Use the Notify plugin for notifications |
| Work with LangAPI? | `true` | Use LangAPI for multilingual support |
| Enable Offline Image Mode | `false` | Offline image mode |
| Wipe on new map save | `false` | Reset progress on new map save |
| Permission (ex: dailyrewards.use) | `dailyrewards.use` | Permission to use the plugin |
| Show UI with rewards when player connects to server? | `false` | Show the rewards interface when a player connects |

## Cooldown Settings

| Parameter | Default | Description |
|---|---|---|
| Enabled | `true` | Enable the cooldown system |
| DefaultCooldown | `3600` | Default cooldown time (in seconds) |
| Cooldowns | see below | Individual cooldowns for permissions |
| CheckAFK | `false` | Do not count AFK time (requires AFKAPI) |

### VIP Cooldown Configuration Example

```json
{
 "Cooldown Settings": {
 "Enabled": true,
 "DefaultCooldown": 3600,
 "Cooldowns": {
 "dailyrewards.vip": 3100,
 "dailyrewards.premium": 2600
 },
 "CheckAFK": false
 }
}
```

## Daily Reset Settings

| Parameter | Default | Description |
|---|---|---|
| TimeZone | `Europe/London` | Timezone for reset calculation |
| Time | `05:00` | Daily reset time |

## Inventory Settings

| Parameter | Default | Description |
|---|---|---|
| Enabled | `true` | Enable inventory for unclaimed rewards |
| RetainItemsOnWipe | `true` | Keep items in inventory after wipe |
| UseCooldownAfterWipe | `false` | Use cooldown after wipe |
| CooldownAfterWipe | `0` | Cooldown time after wipe (in seconds) |
| UseBuildingBlocked | `false` | Block item claiming in another player's cupboard zone |
| UseCombatBlocked | `false` | Block during combat block |
| UseRaidBlocked | `false` | Block during raid block |

## Daily Reward Settings

Rewards are configured in the `"Daily awards"` section. Each day has a unique number (1, 2, 3...) and contains:

| Parameter | Description |
|---|---|
| Enabled | Whether the reward is enabled for this day |
| Image | Image URL for the day's card |
| Title | Day card title |
| Awards | List of rewards (items, commands, plugins) |
| IsSpecialDay | Whether the day is special (visually highlighted) |

### Reward Types

**Item:**
```json
{
 "Type": "Item",
 "ShortName": "rifle.ak",
 "Amount": 1,
 "Skin": 0,
 "DisplayName": ""
}
```

**Command:**
```json
{
 "Type": "Command",
 "Command": "deposit %steamid% 100",
 "Amount": 1,
 "Image": "https://example.com/image.png"
}
```

## Notification Settings

| Parameter | Description |
|---|---|
| On Cooldown Ended | Notification when cooldown ends |
| Has Cooldown | Notification when cooldown is active |
| Picked up daily reward | Notification when reward is received |

Each notification has the following parameters:
- `Type` -- Notify notification type (numeric ID)
- `Show...` -- when to show the notification

:::tip Recommendation
Configure the timezone to match your server's main audience so that the day reset occurs at a convenient time for players.
:::
