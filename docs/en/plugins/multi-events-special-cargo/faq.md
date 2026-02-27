---
title: "FAQ — Special Cargo"
description: "Frequently asked questions about the Special Cargo mode for Multi Events."
sidebar_position: 5
---

# Frequently Asked Questions

## General

### Do I need Multi Events for this mode to work?

Yes. **Multi Events** is a required dependency. Special Cargo is an expansion mode that can't run on its own without the core plugin.

### How is the runner chosen?

The runner is picked randomly from all active online players on the server. They get a notification that they've been selected.

### What happens when the runner dies?

If the runner dies, the role automatically passes to another random active player. If the runner is killed by another player, the killer may become the new runner.

### Can the runner teleport?

If `Block TP?` is enabled in the config, teleportation is blocked for the runner. They'll get a notification that teleportation isn't available while carrying cargo.

### How long does the event last?

10 minutes (600 seconds) by default. The event also ends early if the cargo is delivered successfully. You can change the duration with the `Event Duration` setting.

### How does the game know the runner reached the monument?

The runner is considered to have reached the destination monument when they're within the zone radius set by the `Monument Radius` parameter (50 meters by default).

## Configuration

### How do I block certain monuments?

Add monument names (or partial names) to the `Blocked Monuments` list in the config. For example, to block oil rigs, add "oilrig".

### How do I change the map marker colors?

Edit the `Color 1` and `Color 2` parameters in the `Monument Marker` section of the config. Colors use HEX format (e.g., "#EA9999").

### How do I set up rewards?

In the `Reward for the winner` section of the config, define rewards for the winner. Items, console commands, Kits, and third-party plugin calls are all supported.

### How do I change the monument zone radius?

Edit the `Monument Radius` parameter in the config. Bigger values make delivery easier, smaller values make it harder.

## Problems

### Event won't start -- "Insufficient Monuments" error

The map doesn't have enough monuments for the event. Make sure there are at least two monuments that aren't on the blocked list. Check the `Blocked Monuments` list in the config.

### Markers don't show up on the map

Check the marker settings in the config. Make sure the `Radius` and `Refresh Rate` values are correct.

### The runner doesn't get notifications

Check that the Notify or UINotify plugin is installed and the `Work with Notify?` option is enabled in the config.

### The UI widget doesn't show up

Check that ImageLibrary is installed and working. Also make sure the player hasn't manually hidden the widget.

### The event ends but rewards aren't given out

Make sure the reward settings in your config are filled in correctly: valid item ShortNames, amounts, and drop chances.
