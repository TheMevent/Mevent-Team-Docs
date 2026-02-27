---
title: "Car Sharing Configuration"
description: "Detailed description of all Car Sharing plugin configuration parameters"
sidebar_position: 3
---

# Car Sharing Configuration

The configuration file is located at:
```
oxide/config/CarSharing.json
```

## Main Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Commands | string array | `["rent", "carsharing"]` | Chat commands for opening the car sharing menu |
| Permission | string | `""` | Permission required to use the plugin (empty -- available to everyone) |
| Work with Notify? | bool | `true` | Use the Notify plugin for notifications |

## Economy Settings

| Parameter | Type | Description |
|---|---|---|
| Type | `Plugin` / `Item` | Currency type: economy plugin or in-game item |
| Plugin name | string | Economy plugin name (e.g., `Economics`) |
| Balance add hook | string | Hook for adding balance |
| Balance remove hook | string | Hook for deducting balance |
| Balance show hook | string | Hook for displaying balance |
| ShortName | string | Item shortname (if type is Item) |
| Display Name | string | Displayed item name (empty -- default) |
| Skin | number | Item skin ID |

## Vehicle Summon Item

The player receives a special item that allows them to summon the rented vehicle.

| Parameter | Type | Default | Description |
|---|---|---|---|
| Display Name | string | `"RUSTSharing {carname}"` | Item name (supports `{carname}` for car name substitution) |
| ShortName | string | `"box.wooden.large"` | Base item |
| Skin | number | `2591806406` | Item skin |

## Vehicle Settings

Each vehicle is defined in the `Cars` array and has the following parameters:

| Parameter | Type | Description |
|---|---|---|
| Permission | string | Permission to access this vehicle (empty -- available to everyone) |
| Command to give | string | Chat command for giving the vehicle |
| Image | string | Vehicle image URL for the menu |
| Name | string | Vehicle name |
| Cost per minute | number | Rental cost per minute |
| Car class | string | Vehicle class (e.g., `Luxe`, `Comfort`) |
| Average Speed | string | Displayed average speed |

### Modular Car Settings

| Parameter | Type | Description |
|---|---|---|
| CodeLock | bool | Install a code lock |
| KeyLock | bool | Install a key lock |
| Engine Parts Tier | number | Engine parts quality level (1-3) |
| Fresh Water Amount | number | Amount of fresh water |
| Fuel Amount | number | Amount of fuel on creation |
| Modules | string array | Car modules (e.g.: `vehicle.1mod.engine`, `vehicle.1mod.cockpit.armored`) |

## NPC Bot Settings

Bots are configured in the `Bots` section, where the key is the NPC bot's ID:

| Parameter | Type | Description |
|---|---|---|
| Car Classes | string array | Available car classes (`*` -- all classes) |

### Bot Configuration Example

```json
"Bots": {
 "5154454": {
 "Car Classes (* - all)": [
 "Luxe",
 "Comfort"
 ]
 }
}
```

## Minimal Vehicle Configuration Example

```json
{
 "Permission (example: carsharing.vip)": "",
 "Command to give": "share.ferrari",
 "Image": "https://i.imgur.com/0GvWGOv.png",
 "Name": "Ferrari",
 "Cost per minute": 25,
 "Car class": "Luxe",
 "Average Speed": "100",
 "Modular Car Settings": {
 "CodeLock": true,
 "KeyLock": false,
 "Engine Parts Tier": 2,
 "Fresh Water Amount": 0,
 "Fuel Amount": 140,
 "Modules": [
 "vehicle.1mod.engine",
 "vehicle.1mod.cockpit.armored",
 "vehicle.1mod.cockpit.armored"
 ]
 }
}
```
