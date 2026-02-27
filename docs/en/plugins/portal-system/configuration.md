---
title: "Portal System Configuration"
description: "Complete configuration reference for the Portal System plugin."
sidebar_position: 4
---

# Portal System Configuration

The configuration file is located at: `oxide/config/PortalSystem.json`

## Plugin Settings

| Parameter | Default | Description |
|---|---|---|
| Prefix text | `[PortalSystem]` | Chat message prefix |
| Prefix color | `#00FF00` | Prefix color |
| Send notifications in chat | `true` | Send notifications in chat |
| Show notifications as GameTips | `true` | Show notifications as GameTip |
| GameTip display time | `10` | GameTip display duration (seconds) |

## Portal Settings

### Teleportation

| Parameter | Default | Description |
|---|---|---|
| Teleport cooldown | `10` | Cooldown between teleportations (seconds) |
| VIP cooldown overrides | `{"portalsystem.vip1": 5, "portalsystem.vip2": 2}` | VIP cooldowns |
| Move player forward from exit | `1.0` | Player offset forward from exit (meters) |
| Block arrivals if under foundations | `true` | Block teleportation under foundations |

### Placement

| Parameter | Default | Description |
|---|---|---|
| Require TC auth to place | `true` | Require tool cupboard authorization to place |
| Require TC auth to pick up | `true` | Require authorization to pick up |
| Require TC auth to configure | `true` | Require authorization to configure |
| Allow pickup with hammer | `true` | Allow picking up with a hammer |
| Right-click hold time for pickup | `0` | Right-click hold time for pickup (seconds) |

### Limits

| Parameter | Default | Description |
|---|---|---|
| Default portal limit | `2` | Default portal limit |
| Extra portal limits from permissions | `[4, 6, 10]` | Additional limits via permissions |

### Entry Cost

| Parameter | Default | Description |
|---|---|---|
| Charge entry price | `true` | Charge an entry fee |
| Entry price | `{"ShortName": "scrap", "Amount": 0, "SkinID": 0}` | Entry cost |
| Free entry permission | `portalsystem.freeuse` | Permission for free entry |

### Purchase

| Parameter | Default | Description |
|---|---|---|
| Require buy permission | `true` | Require permission to purchase |
| Buy prices | Price list | Portal purchase cost |

## UI Settings

| Parameter | Description |
|---|---|
| Menu UI distance | Maximum distance to open the menu |
| Colors | Interface colors |
| Skin offset | Portal skin |

## Portal Skins

Individual placement offsets can be configured for each skin:

| Parameter | Description |
|---|---|
| DoorwayDown | Downward offset in a doorway |
| UpLift | Upward offset outside a doorway |
