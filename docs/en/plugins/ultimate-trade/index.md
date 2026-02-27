---
title: "Ultimate Trade"
description: "Secure item exchange between players at a distance through a trade window interface."
version: "1.0.0"
tags: [rust, plugin, trade, exchange]
sidebar_position: 1
---

# Ultimate Trade

## What does this plugin do?

**Ultimate Trade** allows your server to add a secure item exchange system between players. Players send a trade request via a chat command, and after both parties accept, a trade window interface opens where each participant places their items. When both confirm the deal, the items are automatically swapped. This eliminates fraud during exchanges.

## Key Features

- Players can safely exchange items through a trade window
- Players can send and accept trade requests via chat commands
- Administrators can configure the number of trade slots
- Administrators can set cooldowns and restrictions
- Permission system with individual settings for each group
- Trade blocking in dangerous situations (swimming, flying, wounded, building blocked zone)
- Trade distance restriction between players
- Requirement to be on the same team (optional)
- Duel plugin support (trade blocked during duels)
- Cooldown after trade to prevent abuse

## Requirements

- **Oxide** or **Carbon** latest version
- **Notify** or **UINotify** -- recommended for notifications (optional)
- **Duel** -- for blocking trade during duels (optional)
- **SkinBox** -- for compatibility with item customization (optional)

## Quick Start

1. Place the `UltimateTrade.cs` file in the `oxide/plugins` folder.
2. Restart the server or run `o.reload UltimateTrade`.
3. Edit the configuration at `oxide/config/UltimateTrade.json`.
4. Grant the `ultimatetrade.use` permission to players: `oxide.grant group default ultimatetrade.use`.
5. Players can use `/trade nickname` to start a trade.

## Permissions

| Permission | Who Needs It | What It Grants |
|---|---|---|
| `ultimatetrade.use` | Players | Ability to use the trade system |
| Custom permissions | VIP/Premium | Increased slot count and reduced cooldown |

:::tip Note
Custom permissions are configured in the `Permission Settings` section of the configuration. Each permission can have an individual slot count and cooldown.
:::

## Player Commands

| Command | Description | Example |
|---|---|---|
| `/trade [nickname]` | Send a trade request | `/trade PlayerName` |
| `/trade accept` or `/trade yes` | Accept an incoming trade request | `/trade accept` |
| `/trade cancel` or `/trade no` | Decline an incoming trade request | `/trade no` |
| `/t [nickname]` | Short command for trading | `/t PlayerName` |

## Administrator Commands

The plugin does not have special administrative commands. Management is done through the configuration file and the permission system.

## Troubleshooting

### Trade unavailable -- "You don't have permission"
**Symptom:** The player cannot send a trade request.
**Cause:** The player does not have the `ultimatetrade.use` permission.
**Solution:** Grant the permission: `oxide.grant group default ultimatetrade.use`.

### Trade cancelled -- "timeout expired"
**Symptom:** The trade request is automatically declined.
**Cause:** The recipient did not respond within the allotted time (15 seconds by default).
**Solution:** Ask the recipient to type `/trade accept` more quickly. Or increase the response time in the config (`Time to answer trade requests`).

### Trade unavailable in building blocked zone
**Symptom:** A message about being blocked in a Building Blocked zone.
**Cause:** Trade blocking in enemy tool cupboard zones is enabled.
**Solution:** Move to a safe zone. To disable this restriction, change `Block sending requests in BuildingBlock` to `false`.

### Not enough trade slots
**Symptom:** The player cannot place more items in the trade window.
**Cause:** The number of slots is limited by settings (default is 8).
**Solution:** Increase the `Number of active slots for trade` value in the config, or grant the player a VIP permission with an increased slot count.

### Cooldown after trade is too long
**Symptom:** The player receives a "please wait" message after a recent trade.
**Cause:** A cooldown is active (60 seconds by default).
**Solution:** Reduce the `Trade cooldown` value in the config. For VIP players, you can set a reduced cooldown in the `Permission Settings` section.

### Trade blocked -- "Blocked by another plugin"
**Symptom:** Trade is unavailable, reason -- "blocked by another plugin".
**Cause:** Another plugin blocked the trade via the `CanTrade` hook.
**Solution:** Check which plugins on your server use the `CanTrade` hook and configure them accordingly.
