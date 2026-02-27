---
title: "Vehicle Buy"
description: "Vehicle shop for Rust servers with UI, vending machines, recall, and pickup features"
version: "2.2.8"
tags: [rust, plugin, "vehicles", "shop", "purchase"]
sidebar_position: 1
---

# Vehicle Buy

## What does this plugin do?

**Vehicle Buy** allows your server to add a fully featured vehicle shop where players can purchase any type of vehicle -- from minicopters and boats to modular cars, horses, and bicycles. The plugin supports purchases through a graphical interface, vending machines in safe zones, as well as recall and pickup of purchased vehicles.

## Key Features

- Purchase over 19 vehicle types through a beautiful UI
- Vending machines in Bandit Camp, Outpost, and Fishing Village
- Vehicle recall system -- bring your vehicle back to you
- Vehicle pickup system -- collect your vehicle into inventory
- Pickup via hammer or command (configurable per vehicle)
- Three currency types supported: Economics, Server Rewards, in-game items
- Purchase cooldown and purchase limits for each vehicle
- Automatic engine part installation for modular cars
- Damage protection for purchased vehicles (optional)

## Requirements

| Dependency | Required | Description |
|---|---|---|
| KaruzaEntitiesCommon | Yes | Common library for working with entities |
| ImageLibrary | Yes | Loading and displaying images in the interface |
| Economics | No | Economy plugin (one of the currency options) |
| ServerRewards | No | Server rewards plugin (one of the currency options) |
| BankSystem | No | Banking system (one of the currency options) |
| Notify / UINotify | No | Player notifications |

## Quick Start

1. Install `VehicleBuy.cs` and the required dependencies into the `oxide/plugins` folder.
2. Restart the server or run `oxide.reload VehicleBuy`.
3. Edit the configuration at `oxide/config/VehicleBuy.json`.
4. Grant players the `vehiclebuy.use` permission via console:
 ```
 oxide.grant group default vehiclebuy.use
 ```
5. Players can type the purchase command (configurable) or use vending machines in safe zones.

## Permissions

| Permission | Description |
|---|---|
| `vehiclebuy.use` | Permission to use the vehicle shop |
| `vehiclebuy.free` | Free vehicle purchases |
| `vehiclebuy.pickup` | Permission to pick up vehicles |
| `vehiclebuy.recall` | Permission to recall vehicles |
| Custom (e.g., `vehiclebuy.vip`) | Individual permissions for specific vehicle types |

## Player Commands

| Command | Description |
|---|---|
| `/vehiclebuy` | Open the vehicle shop |
| `/vb` | Open the vehicle shop (short command) |
| `/vehicle` | Open the vehicle shop (alternative command) |
| `/callback <name>` | Recall a purchased vehicle to your location |
| `/pickup` | Pick up a nearby vehicle |

**Examples:**
```
/vehiclebuy
/callback copter
/pickup
```

## Administrator Commands

The administrator manages the plugin through the configuration and Oxide console commands for granting permissions:

```
oxide.grant user <SteamID> vehiclebuy.use
oxide.grant user <SteamID> vehiclebuy.free
oxide.grant user <SteamID> vehiclebuy.pickup
oxide.grant user <SteamID> vehiclebuy.recall
```

## Troubleshooting

| Problem | Solution |
|---|---|
| Shop does not open | Make sure the player has the `vehiclebuy.use` permission and **ImageLibrary** is installed |
| Vehicle does not appear after purchase | Make sure there is enough free space nearby for spawning |
| Vending machines do not appear | Enable the needed vending machines in the `Vending machines` section of the configuration |
| Error when purchasing with Economics | Make sure the Economics plugin is installed and the currency name is specified correctly |
| Recall does not work | Make sure the vehicle has `Can recall?` enabled and the player has the `vehiclebuy.recall` permission |
| Hammer pickup does not work | Check that `Pickup type` is set to `1` (hammer) and `Can pickup?` is enabled |
