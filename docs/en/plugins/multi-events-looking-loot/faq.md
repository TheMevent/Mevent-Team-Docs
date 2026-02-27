---
title: "FAQ -- Looking Loot"
description: "Frequently asked questions about the Looking Loot mode"
sidebar_position: 5
---

# Frequently Asked Questions

## General

### How does scoring work?

Every time a player picks up an item from a container, they earn points. The amount depends on the item value table in the config. Items not in the table use the default multiplier (`Default Score`).

### Do players need to register to participate?

No. All players on the server automatically participate. Just loot containers during the event.

### Which containers count?

All standard map containers count -- crates, barrels, loot containers at monuments, and so on.

## Configuration

### How do I make certain items worth more?

Add the item and its multiplier to the `Score Table (shortname - score)` config section. For example, to make `scrap` worth 5x the points, set its value to `5.0`.

### Can I disable scoring for certain items?

Yes. Add the item to the value table with a multiplier of `0`.

### How do I change the event duration?

Change the `Event Duration` config value. It's in seconds (default: 600 = 10 minutes).

## Technical

### Is the plugin compatible with Carbon?

Yes. It works with both Oxide and Carbon.

### Can I set rewards for more than 2 positions?

Yes. Add more entries in the `Player Awards (top - award)` config section with the position numbers you want.
