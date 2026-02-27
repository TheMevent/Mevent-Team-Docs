---
title: "Installation and Setup"
description: "Step-by-step guide for installing and configuring Capture Zone"
sidebar_position: 2
---

# Installation and Setup

## System Requirements

- A Rust server with **Oxide** or **Carbon** installed

## Step-by-Step Installation

### Step 1: Download the Plugin

Copy the `CaptureZone.cs` file to the plugins directory:

```
oxide/plugins/CaptureZone.cs
```

### Step 2: Reload

Restart the server or run:
```
o.reload CaptureZone
```

### Step 3: Configure

Edit the configuration file as needed:
```
oxide/config/CaptureZone.json
```

### Step 4: Give Items

Give capture zone items to players:
```
give.capturezone SteamID64 amount
```

## How Territory Capture Works

### Placing a Zone

1. The player receives a special item (a cupboard with a unique skin)
2. The player places it on the map like a regular cupboard
3. A capture zone is automatically created around the cupboard with the configured radius
4. A marker appears on the map (if enabled)

### Tax Collection

When another player gathers resources inside a capture zone:
1. The plugin determines whether the player is within the zone
2. It checks whether the player is a friend, teammate, clan member, or authorized in the cupboard
3. If the checks fail, a portion of the resources (the configured percentage) is transferred to the owner's cupboard
4. The player receives a notification about the resource loss

### Tax Bypass

Tax is not collected from:
- **Teammates** (built-in Rust team system)
- **Friends** (via the Friends plugin)
- **Clan members** (via the Clans plugin)
- **Cupboard-authorized players** (players added to the cupboard)
- **Players with the ignore permission** (`capturezone.ignore`)

Each bypass type can be enabled or disabled in the configuration.

## Map Marker Settings

Zone markers are displayed on the game map. Configurable parameters:

| Parameter | Description |
|---|---|
| Enabled | Enable/disable markers |
| Display Name | Marker text (supports `{owner}` for the owner's name) |
| Radius | Marker size on the map |
| Alpha | Marker transparency |
| Refresh Rate | Marker refresh interval (in seconds) |
| Duration | Display duration (0 = infinite) |
| Color 1 / Color 2 | Marker colors in HEX format |

### Who Can See Markers?

Marker visibility is configured separately:

| Parameter | Description |
|---|---|
| All Players | All players can see markers |
| Owner | Only the owner can see their own markers |
| Teammates | Teammates can see the marker |
| Friends | Friends can see the marker |
| Clanmates | Clan members can see the marker |
| Authorized in the cupboard | Cupboard-authorized players can see the marker |
| Permission | Only players with the specified permission can see the marker |

## Container Drop Settings

The special capture zone item can drop from regular containers with a configurable probability:

| Parameter | Description |
|---|---|
| Enabled | Enable/disable drops |
| Prefab name | Container name |
| Min amount | Minimum item quantity |
| Max amount | Maximum item quantity |
| Chance | Drop probability (0-100%) |

By default, the item can drop from:
- Standard crates (50% chance)
- Loot barrels (5% chance)
