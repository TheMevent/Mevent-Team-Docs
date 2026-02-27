---
title: "Configuration -- Kits"
description: "Complete reference for the Kits plugin configuration settings."
sidebar_position: 3
---

# Kits Configuration

The configuration file is located at: `oxide/config/Kits.json`

## Main Parameters

| Parameter | Default | Description |
|---|---|---|
| Automatic wipe on wipe | `false` | Automatically reset player data on server wipe |
| Save given kits on wipe | `false` | Preserve kits granted via command through wipe |
| Default Kit Color | `#A0A935` | Default color for kits in the interface |
| Work with Notify? | `true` | Use the Notify plugin for notifications |
| Enable Offline Image Mode | `false` | Offline image mode (no internet downloads) |
| Use NoEscape? | `false` | Integration with the NoEscape plugin |
| Use Raid Blocked? | `true` | Block kit claiming during raid block |
| Use Combat Blocked? | `true` | Block kit claiming during combat block |
| Can admins edit? (by flag) | `true` | Admins with flag can edit kits |
| Commands | `["kit", "kits"]` | List of commands to open the kit menu |
| Show All Kits? | `false` | Show all kits, including unavailable ones |
| Show No Permission Description? | `true` | Show description when permissions are missing |
| Block in Building Block? | `false` | Block kit claiming in building privilege zones |
| Disable saving data files for players? | `false` | Disable saving player data files |
| Getting an auto kit 1 time? | `false` | Auto-kit is granted only once |
| Allow to enable/disable autokit? | `false` | Allow players to manage auto-kits |
| Ignore auto-kit checking? | `true` | Skip permission checks for auto-kit |
| Update the kits menu during permissions operations? | `false` | Update menu when permissions change |

## Economy

Main currency settings for purchasing kits:

| Parameter | Description |
|---|---|
| Type (Plugin/Item) | Currency type: plugin or in-game item |
| Plugin name | Economy plugin name (e.g., Economics) |
| Balance add hook | Hook for adding balance |
| Balance remove hook | Hook for deducting balance |
| Balance show hook | Hook for checking balance |
| ShortName | Item short name (for Item type) |
| Skin | Item skin (for Item type) |
| Price Format | Price display format |

## Additional Economy

You can configure multiple currency types simultaneously (e.g., Economics + ServerRewards). Each currency has a unique ID.

## Auto-Kits

List of kits that are automatically granted when a player spawns on the server:

```json
"Auto Kits": [
 "autokit",
 "autokit_vip",
 "autokit_premium"
]
```

Auto-kits are granted by priority -- the first matching kit from the list (bottom to top).

## NPC Kits

Link kits to NPCs on the map by their ID:

```json
"NPC Kits": {
 "1234567": {
 "Description": "Free Kits",
 "Kits": ["kit_one", "kit_two"]
 }
}
```

## NoEscape Whitelist

Kits in this list can be claimed even during raid block or combat block:

```json
"Whitelist for NoEscape": [
 "kit name 1",
 "kit name 2"
]
```

## Rarity Settings

Color scheme for kits based on drop chance:

```json
"Rarity Settings": [
 { "Chance": 40, "Color": "#A0A935" }
]
```

## Logging

| Parameter | Description |
|---|---|
| Console | Log to server console |
| File | Log to file |

## Discord Logging

Configure Discord notifications via Webhook:

| Parameter | Description |
|---|---|
| Enabled | Enable/disable sending |
| Discord Webhook URL | Discord webhook URL |
| Color (Decimal format) | Embed message color |
| Title | Message title |
| Footer text | Footer text (variables: `{username}`, `{steamid}`, `{kitname}`) |

Logging settings are divided into two types: kit **claiming** by a player and kit **granting** by an administrator.

## CopyPaste Parameters

Parameters for integration with the CopyPaste plugin:

```json
"CopyPaste Parameters": [
 "deployables", "true",
 "inventories", "true"
]
```

## Hidden Kits

Kits that are not displayed in the interface but are available via command:

```json
"Kits hidden in the interface": [
 "hidden_kit_1",
 "hidden_kit_2"
]
```

<details>
<summary>Default configuration example</summary>

```json
{
 "Automatic wipe on wipe": false,
 "Save given kits (via the kits.givekit command) on wipe?": false,
 "Default Kit Color": "#A0A935",
 "Work with Notify?": true,
 "Enable Offline Image Mode": false,
 "Use NoEscape? (Raid/Combat block)": false,
 "Use Raid Blocked?": true,
 "Use Combat Blocked?": true,
 "Can admins edit? (by flag)": true,
 "Whitelist for NoEscape": [
 "kit name 1",
 "kit name 2"
 ],
 "Commands": ["kit", "kits"],
 "Economy": {
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "Economics",
 "Balance add hook": "Deposit",
 "Balance remove hook": "Withdraw",
 "Balance show hook": "Balance",
 "ShortName": "scrap",
 "Display Name (empty - default)": "",
 "Skin": 0,
 "Price Format": "{0}"
 },
 "Auto Kits": [
 "autokit",
 "autokit_vip",
 "autokit_premium"
 ],
 "Getting an auto kit 1 time?": false,
 "Allow to enable/disable autokit?": false,
 "Ignore auto-kit checking?": true,
 "Show All Kits?": false,
 "Show No Permission Description?": true,
 "Block in Building Block?": false,
 "Disable saving data files for players?": false,
 "Logs": {
 "Console": true,
 "File": true
 },
 "NPC Kits": {
 "1234567": {
 "Description": "Free Kits",
 "Kits": ["kit_one", "kit_two"]
 }
 }
}
```

</details>
