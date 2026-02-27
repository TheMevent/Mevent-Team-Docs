---
title: "FAQ — Scavenger Hunt"
description: "Frequently asked questions about the Scavenger Hunt mode for Multi Events."
sidebar_position: 5
---

# Frequently Asked Questions

## General

### Do I need Multi Events for this mode to work?

Yes. **Multi Events** is a required dependency. Scavenger Hunt is an expansion mode that can't run on its own without the core plugin.

### How is this different from other modes?

Unlike most modes, Scavenger Hunt doesn't have a leaderboard or point scoring. Instead, a single hidden chest spawns on the map. Only the first player to find and try to open it wins all the rewards.

### How do players know where the chest is?

The UI widget shows each player's distance to the chest in real time, displayed in meters or kilometers. The exact location isn't revealed -- players have to navigate by watching how the distance changes.

### How long does the event last?

10 minutes (600 seconds) by default. The event also ends early if someone finds the chest. You can change the duration with the `Event Duration` setting.

### What happens if nobody finds the chest?

If time runs out and no player found the chest, the event ends with no winner and the chest is destroyed.

## Configuration

### How do I change the chest's appearance?

Edit the `Treasure prefab` (for the container type) and `Treasure skin id` (for the skin) parameters in the config.

### How do I set up rewards?

In the `Reward for the winner` section of the config, define rewards for the winner. Items, console commands, Kits, and third-party plugin calls are all supported.

### How do I change the event duration?

Edit the `Event Duration` parameter in the config. The value is in seconds. Reload the plugin after making changes.

## Problems

### The chest doesn't spawn on the map

Check the server logs for errors. The plugin searches for a valid spawn position -- if the map is too small or unusual, this can cause issues.

### Distance to the chest doesn't display

Make sure ImageLibrary is installed and the icon URLs in the UI settings are valid.

### The UI widget doesn't show up

Check that ImageLibrary is installed and working. Also make sure the player hasn't manually hidden the widget.

### The event ends but rewards aren't given out

Make sure the reward settings in your config are filled in correctly: valid item ShortNames, amounts, and drop chances.
