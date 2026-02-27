---
title: "Kits"
description: "An item kit system for Rust servers with cooldown support, permissions, economy, and NPC vendors."
version: "2.2.32"
tags: [rust, plugin, kits, loadouts]
sidebar_position: 1
---

# Kits

## What does this plugin do?

**Kits** allows your server to provide players with pre-configured item sets (kits). Administrators create kits with specific contents, set cooldowns, permission restrictions, and prices. Players can claim kits through a convenient in-game interface, chat commands, or from NPC vendors.

## Key Features

- Create an unlimited number of kits with any items
- Configurable cooldowns and usage limits for each kit
- Permission system -- different kits for different player groups
- Purchase kits with in-game currency (Economics, ServerRewards, or items)
- Auto-kits on server join (with player opt-out option)
- Link kits to NPCs on the map
- Fully customizable interface (fullscreen and embedded in menu)
- Kit category support
- Integration with CopyPaste for building distribution
- Block claiming during raid or combat (NoEscape)
- Automatic kit data wipe on server wipe
- Discord logging
- In-game kit editing (visual editor)
- Oxide and Carbon support

## Requirements

| Dependency | Required? | Description |
|---|---|---|
| **ImageLibrary** | Yes | Required for displaying images in the interface |
| ServerPanel | No | Integration with the server menu panel |
| CopyPaste | No | For distributing buildings through kits |
| Notify / UINotify | No | Styled notifications for players |
| NoEscape | No | Block kits during raid/combat |

## Quick Start

1. Install the **ImageLibrary** plugin (required)
2. Place the plugin file in the `oxide/plugins` folder (or `carbon/plugins`)
3. Restart the server or run `o.reload Kits`
4. Open the configuration file and set up commands, economy, and interface
5. Use the `/editkit` command in-game to create kits through the visual editor
6. Grant the necessary permissions to players or groups

## Permissions

| Permission | Description |
|---|---|
| `Kits.admin` | Full access to kit management and administrative commands |
| `Kits.dlc` | Bypass DLC item restrictions |
| `Kits.bypasscooldown` | Bypass cooldown when claiming kits |
| `kits.changeautokit` | Ability to enable/disable auto-kits (configurable) |
| Individual permissions for each kit | Set when creating a kit in the editor |

## Player Commands

| Command | Description |
|---|---|
| `/kit` or `/kits` | Opens the main kit menu |
| `/kit <name>` | Claim a specific kit by name |

:::tip Example
To claim the starter kit, type in chat:
```
/kit starter
```
:::

## Administrator Commands

| Command | Description |
|---|---|
| `/editkit` | Opens the visual kit editor in-game |
| `kits.give <name/steamid> <kit_name>` | Give kit items directly to a player |
| `kits.givekit <name/steamid> <kit_name> [amount]` | Grant kit uses to a player |
| `kits.reset data all` | Reset kit data for all players |
| `kits.reset data <steamid>` | Reset kit data for a specific player |
| `kits.reset data <steamid> <kit_name>` | Reset a specific kit's data for a player |
| `kits.reset kits` | Delete all created kits |
| `kits.template <template>` | Switch the interface template (server console only) |
| `kits.convert` | Convert data from other plugins |

:::tip Examples
```
kits.give 76561198000000000 vip_kit
kits.givekit PlayerName starter 5
kits.reset data 76561198000000000 starter
kits.template fullscreen rust normal
```
:::

## Troubleshooting

### Interface does not open
Make sure the **ImageLibrary** plugin is installed and loaded. Without it, the plugin cannot display the kit menu.

### Player does not see a kit in the list
Check that the player has the required permission for that kit. If the "Show all kits" option is enabled, kits will be visible but unavailable for claiming without permissions.

### Kit not granted -- cooldown message
The cooldown has not expired yet. The player will see the remaining time in the interface. Administrators with the `Kits.bypasscooldown` permission can bypass cooldowns.

### Kit unavailable during raid or combat
If NoEscape integration is enabled, kits are blocked during raid block or combat block. Add the kit name to the Whitelist if you want to allow claiming during a block.

### Items do not fit in inventory
If the player's inventory is full, items will be dropped on the ground near the player.

### Auto-kit not granted on join
Check that the kit name is added to the auto-kits list in the configuration, and that the player has permission to claim that kit.
