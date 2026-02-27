---
title: "Commands and Permissions"
description: "Complete list of commands and permissions for the Ultimate Trade plugin."
sidebar_position: 3
---

# Commands and Permissions

## Chat Commands

| Command | Description | Permission |
|---|---|---|
| `/trade [nickname]` | Send a trade request to the specified player | `ultimatetrade.use` |
| `/trade accept` or `/trade yes` | Accept an incoming trade request | `ultimatetrade.use` |
| `/trade cancel` or `/trade no` | Decline an incoming trade request | `ultimatetrade.use` |
| `/t [nickname]` | Short command for trading | `ultimatetrade.use` |

:::info Note
Commands are configured in the `"Commands to open trade"` parameter. Default: `["trade", "t"]`.
:::

## Permissions

### Main Permission

| Permission | Description |
|---|---|
| `ultimatetrade.use` | Base permission to use the trade system |

### Custom Permissions

Additional permissions are configured in the `"Permission Settings"` section. Each permission can have:

| Parameter | Description |
|---|---|
| Slot size | Number of trade slots |
| Cooldown | Cooldown after trade (seconds) |

### Permission Configuration Example

```json
"Permission Settings": {
 "ultimatetrade.vip": {
 "Slot size for this permission": 12,
 "Cooldown after trade for this permission": 30
 },
 "ultimatetrade.premium": {
 "Slot size for this permission": 16,
 "Cooldown after trade for this permission": 10
 }
}
```

### How Multiple Permissions Work

- **Slots:** The highest value among all of the player's permissions is used
- **Cooldown:** The lowest value among all of the player's permissions is used
- **Base values:** 8 slots, 60-second cooldown (if no additional permissions are granted)

### Permission Grant Examples

```
oxide.grant group default ultimatetrade.use
oxide.grant group vip ultimatetrade.vip
oxide.grant group premium ultimatetrade.premium
```

## Trade Process

1. **Player A** types `/trade PlayerBName`
2. **Player B** receives a notification and types `/trade accept` or `/trade yes`
3. A trade window interface opens for both players
4. Each player places items in their half of the window
5. Both players confirm the deal (lock their side)
6. Items are automatically exchanged
7. The window closes

:::caution Warning
A trade request expires after the time specified in the configuration (15 seconds by default). If the recipient does not respond, the request is cancelled.
:::
