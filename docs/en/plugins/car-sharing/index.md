---
title: "Car Sharing"
description: "A car rental system for Rust servers with per-minute billing and NPC bots"
version: "1.1.7"
tags: [rust, plugin, "transport", "rental", "car sharing"]
sidebar_position: 1
---

# Car Sharing

## What does this plugin do?

**Car Sharing** allows your server to add a full-featured car sharing system where players can rent vehicles for in-game currency with per-minute billing. The plugin supports configurable car classes, NPC bots for interaction, a speedometer, and a polished user interface.

## Key Features

- Modular car rental with per-minute billing
- Configurable car classes (Luxe, Comfort, etc.)
- Integration with NPC bots (HumanNPC) for rental points
- Built-in speedometer displaying speed and remaining time
- Support for economy plugins (Economics, ServerRewards, BankSystem) and items as currency
- Flexible permission system for each vehicle
- Automatic delivery of a vehicle summon item with configurable skin
- Notification support via Notify / UINotify

## Requirements

| Dependency | Required | Description |
|---|---|---|
| ImageLibrary | Yes | Loading and displaying images in the interface |
| SpawnModularCar | Yes | Creating modular cars with specified modules |
| Economics / ServerRewards | No | Economy plugin for rental payments |
| Notify / UINotify | No | Player notifications |
| HumanNPC | No | NPC bots for rental points |

## Quick Start

1. Install the `CarSharing.cs` plugin into the `oxide/plugins` folder.
2. Make sure the **ImageLibrary** and **SpawnModularCar** dependencies are installed.
3. Restart the server or run `oxide.reload CarSharing`.
4. Edit the configuration file `oxide/config/CarSharing.json`, adding the desired vehicles and NPC bots.
5. Use the `/rent` or `/carsharing` command to open the rental menu.

## Permissions

| Permission | Description |
|---|---|
| `carsharing.use` (configurable) | General permission to use the car sharing system |
| `carsharing.vip` (configurable) | Permission to access certain car classes (configurable per vehicle) |

:::info
The permission name is set in the configuration. If the `Permission` field is left empty, the vehicle is available to all players.
:::

## Player Commands

| Command | Description |
|---|---|
| `/rent` | Open the car sharing menu |
| `/carsharing` | Open the car sharing menu (alternative command) |

**Usage example:**
```
/rent
```
This opens the menu with available vehicles, where you can see the class, average speed, and rental cost.

## Admin Commands

| Command | Description |
|---|---|
| Individual give commands (e.g. `share.ferrari`) | Give a specific vehicle to a player |

**Example:**
```
share.ferrari
```
Each vehicle can have its own give command, which is configured in the configuration file.

## Troubleshooting

| Problem | Solution |
|---|---|
| Plugin not working, console error | Make sure **ImageLibrary** and **SpawnModularCar** are installed |
| Menu does not open | Check whether the player has the required permission (if configured) |
| Vehicle does not spawn | Make sure the car modules are correctly specified in the modular car settings |
| Balance is not deducted | Check the economy settings: plugin, hooks, and item name must be specified correctly |
| NPC does not open the menu | Verify that the NPC bot ID is correctly specified in the `Bots` section of the configuration |
| Speedometer does not display | The plugin automatically shows the speedometer during rental; make sure the player is sitting in the rented vehicle |
