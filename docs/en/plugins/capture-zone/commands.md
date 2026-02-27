---
title: "Commands"
description: "Full list of Capture Zone commands"
sidebar_position: 4
---

# Commands

## Admin Commands

| Command | Description |
|---|---|
| `/give.capturezone [steamid/nickname] [amount]` | Give the capture zone item to the specified player |

:::note Admins Only
This command is only available to players with server administrator privileges.
:::

### Usage Examples

Give 1 item to a player by SteamID:
```
/give.capturezone 76561198012345678 1
```

Give 5 items to a player by nickname:
```
/give.capturezone PlayerName 5
```

If no amount is specified, 1 item is given:
```
/give.capturezone 76561198012345678
```

## Player Commands

Capture Zone has no chat commands for players. Interaction occurs through in-game mechanics:

### Placing a Capture Zone

1. Obtain the special item (a cupboard with a unique skin)
2. Choose a placement location
3. Place the cupboard like a regular item
4. The zone is automatically created around the cupboard

### Destroying a Zone

Destroy the cupboard by any means (demolition, decay) to remove the zone.

## Permissions

| Permission | Description |
|---|---|
| `capturezone.ignore` | Player's resources are not taxed on other players' territories |

### Configurable Permissions (defaults)

| Permission | Tax Percentage | Zone Limit |
|---|---|---|
| (no permissions) | 20% | 3 |
| `capturezone.vip` | 25% | 5 |
| `capturezone.deluxe` | 30% | 7 |

### Additional Configurable Permissions

| Purpose | Description |
|---|---|
| Placement permission | If specified in the configuration -- only players with this permission can place zones |
| Marker view permission | If specified -- only players with this permission can see zone markers on the map |

## Permission Management

### Granting Permissions

```
o.grant user SteamID64 capturezone.ignore
o.grant user SteamID64 capturezone.vip
o.grant user SteamID64 capturezone.deluxe
```

### Granting Permissions to a Group

```
o.grant group vip capturezone.vip
o.grant group premium capturezone.deluxe
```

### Revoking Permissions

```
o.revoke user SteamID64 capturezone.vip
```

## Player Messages

| Message | Description |
|---|---|
| Resource loss | Notification when gathering on another player's territory showing the percentage |
| Too close to a zone | Error when placing a cupboard near another zone |
| No permission | Error when the required placement permission is missing |
| Limit reached | Error when the maximum number of zones has been exceeded |
