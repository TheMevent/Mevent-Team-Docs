---
title: "Operation Fortress"
description: "A PvP fortress capture event with NPC guards, towers, a boss, and rewards."
version: "1.1.0"
tags: [rust, plugin, event, pvp, fortress, npc]
sidebar_position: 1
---

# Operation Fortress

## What does this plugin do?

**Operation Fortress** adds a large-scale PvP fortress capture event to the server. A fortified base with NPC guards, towers, and a boss commander appears on the map. Players must activate a certain number of towers to capture the fortress. Winners receive rewards (economy, commands, items). The event supports automatic launching, map markers, and integration with PvE systems.

## Key Features

- Automatic event launch on a timer
- Configurable NPC guard presets (equipment, weapons, behavior)
- Multiple NPC types: territory guards, tower snipers, boss commander
- Tower activation system for fortress capture
- Preparation phase with countdown
- Map markers (Vending + Radius)
- Reward system (Economics, ServerRewards, commands)
- Integration with PveMode for PvP/PvE zones
- Teleportation and command blocking during the event
- Building presets (RustEdit)
- Winner announcement to all players

## Requirements

| Dependency | Required | Description |
|---|---|---|
| **NpcSpawn** | Required | NPC guard spawning |
| **PveMode** | Optional | PvP/PvE zone management |
| **Notify** / **UINotify** | Optional | Styled notifications |
| **BetterNpc** | Optional | Integration with enhanced NPCs |
| **AlphaLoot** | Optional | Loot management |
| Oxide / uMod / Carbon | Required | Compatible with Oxide, uMod, and Carbon |

## Quick Start

1. Install **NpcSpawn** on the server.
2. Copy the `OperationFortress.cs` file to the `oxide/plugins/` folder.
3. Restart the server or run `oxide.reload OperationFortress`.
4. Configure building presets and NPCs in the configuration.
5. Launch the event: `operation.start`.
