---
title: "Vehicle Buy Commands"
description: "Complete list of commands for the Vehicle Buy plugin for players and administrators"
sidebar_position: 4
---

# Vehicle Buy Commands

## Player Commands

### Opening the Shop

| Command | Description |
|---|---|
| `/vehiclebuy` | Open the vehicle shop |
| `/vb` | Short command for opening the shop |
| `/vehicle` | Alternative command |

**Example:**
```
/vehiclebuy
```

After entering the command, a graphical menu with available vehicles will open. The player can select a vehicle and click the purchase button.

:::info
Commands are configurable in the configuration. The administrator can change or add custom commands.
:::

### Vehicle Recall

| Command | Description |
|---|---|
| `/callback <vehicle_key>` | Recall a purchased vehicle to your current location |

**Example:**
```
/callback copter
```

The vehicle will teleport to your location. Note:
- The vehicle must not be occupied by another player
- The `vehiclebuy.recall` permission is required
- A recall fee may be required (configurable)
- Recall may not be possible in certain locations

### Vehicle Pickup

| Command | Description |
|---|---|
| `/pickup` | Pick up a nearby vehicle into your inventory |

**Example:**
```
/pickup
```

The picked-up vehicle turns into an item that can be placed later. Conditions:
- You must be near the vehicle (distance is configurable, default is 5 meters)
- The `vehiclebuy.pickup` permission is required
- There must be free space in your inventory
- A pickup fee may be required

### Hammer Pickup

Some vehicle types can be picked up by hitting them with a hammer (if configured). To do this:
1. Equip a hammer.
2. Hit the vehicle 3 times within 2 seconds.
3. The vehicle will be picked up into your inventory.

:::note
The pickup method (command or hammer) is configured for each vehicle type individually via the `Pickup type` parameter.
:::

## Administrator Commands

### Permission Management

```
oxide.grant user <SteamID> vehiclebuy.use
oxide.grant user <SteamID> vehiclebuy.free
oxide.grant user <SteamID> vehiclebuy.pickup
oxide.grant user <SteamID> vehiclebuy.recall
oxide.grant group default vehiclebuy.use
```

### Individual Vehicle Permissions

If a specific vehicle has an individual permission set:
```
oxide.grant user <SteamID> vehiclebuy.vip
oxide.grant group vip vehiclebuy.vip
```

:::tip
The `vehiclebuy.free` permission allows purchasing all vehicles for free -- useful for testing or VIP privileges.
:::

## Purchasing via Vending Machines

Players can also purchase vehicles through vending machines that are automatically placed in safe zones:
- Bandit Camp
- Outpost
- Fishing Village (A, B, C)

To purchase, walk up to a vending machine in a safe zone and select the desired product. Payment is made with in-game items.
