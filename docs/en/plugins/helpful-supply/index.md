---
title: "Helpful Supply"
description: "A custom supply signal system with configurable airdrop contents."
version: "1.0.17"
tags: [rust, plugin, supply, airdrop, loot]
sidebar_position: 1
---

# Helpful Supply

## What does this plugin do?

**Helpful Supply** allows you to create custom supply signals with unique airdrop contents. Each supply signal type has its own skin, name, and loot list. For example, you can create a "Medical Supply Signal" with medical supplies or a "Weapons Supply Signal" with weapons. Custom supply signals can also drop from containers on the map.

## Key Features

- Create an unlimited number of supply signal types with unique skins
- Configure airdrop contents for each type (items, quantities, drop chances)
- Access control for airdrops (all players, teammates, friends, clan members)
- Drop speed configuration (fall speed, plane altitude)
- Custom supply signals drop from barrels and crates on the map
- Console command to give supply signals to players
- Integration with Friends, Clans, and Loottable plugins

## Requirements

| Dependency | Required | Description |
|---|---|---|
| Oxide / uMod / Carbon | Required | Compatible with Oxide, uMod, and Carbon |
| **Friends** | Optional | Airdrop access for friends |
| **Clans** | Optional | Airdrop access for clan members |
| **Loottable** | Optional | Integration with loot tables |

## Quick Start

1. Copy the `HelpfulSupply.cs` file to the `oxide/plugins/` folder.
2. Restart the server or run `oxide.reload HelpfulSupply`.
3. Configure supply signal types in `oxide/config/HelpfulSupply.json`.
4. Give a supply signal to a player: `hsupply.give nickname heal 1`.
