---
title: "Gold Rush"
description: "MultiEvents expansion mode -- mine ore and chop trees for a chance at bonus items."
sidebar_position: 1
---

# Gold Rush

## Description

**Gold Rush** is an expansion mode for MultiEvents where mining ore and chopping trees gives you a chance to get bonus items. Every hit on a resource node (ore or tree) rolls for a bonus item from a configurable drop table. Ore and trees have separate reward tables with different drop rates.

## Key Features

- Bonus items from mining ore and chopping trees
- Separate drop tables for ore and trees
- Configurable drop chance per item
- Chance multiplier system based on permissions (VIP)
- Notify / UINotify support
- Configurable event duration
- UI panel with countdown timer and event description

## Requirements

| Dependency | Required | Description |
|---|---|---|
| **MultiEvents** | Required | Core events plugin |
| **ImageLibrary** | Required | Image loading and display |
| Notify / UINotify | Optional | Visual player notifications |

## Quick Start

1. Make sure **MultiEvents** and **ImageLibrary** are installed and running.
2. Copy `MultiEventsGoldRush.cs` to your server's `oxide/plugins/` folder.
3. The plugin automatically registers with MultiEvents.
4. Configure the ore and tree drop tables in the config.
5. Start the event through MultiEvents or with:
 ```
 goldrush.start
 ```
6. Mine ore or chop trees to get bonus items.
