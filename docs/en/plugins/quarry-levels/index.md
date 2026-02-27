---
title: "Quarry Levels"
description: "A leveling system for quarries and pumpjacks with upgradeable production and capacity."
version: "2.2.0"
tags: [rust, plugin, quarry, pumpjack, levels, upgrade]
sidebar_position: 1
---

# Quarry Levels

## What does this plugin do?

**Quarry Levels** adds an upgrade (leveling) system for quarries (Mining Quarry) and pumpjacks (Pumpjack). Players can upgrade their quarries, increasing production output, hopper capacity, and unlocking new resources (metal, sulfur, HQM). Upgrades cost an additional quarry/pumpjack or currency (Economics/ServerRewards). A visual interface with level information is included.

## Key Features

- Leveling quarries and pumpjacks up to a maximum level
- Unlocking new resources at specific levels (metal, sulfur, HQM)
- Increasing hopper capacity with each level
- Upgrade payment with a quarry or currency (Economics, ServerRewards)
- Visual interface with current and next level information
- Protection from unauthorized players (blocking opening and toggling)
- Configurable work speed with different fuel types (diesel, Low Grade)
- Chance for oil craters from Survey Charge
- Permission support for using the upgrade system

## Requirements

| Dependency | Required | Description |
|---|---|---|
| **Economics** | Optional | Paying for upgrades with currency |
| **ServerRewards** | Optional | Paying for upgrades with points |
| Oxide / uMod / Carbon | Required | Compatible with Oxide, uMod, and Carbon |

## Quick Start

1. Copy the `QuarryLevels.cs` file into the `oxide/plugins/` folder.
2. Restart the server or run `oxide.reload QuarryLevels`.
3. Grant the permission: `oxide.grant group default quarrylevels.use`.
4. Open a quarry -- an "Upgrade" button will appear.
