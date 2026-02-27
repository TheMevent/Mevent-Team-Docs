---
title: "FAQ — Npc Underwater Lab"
description: "Frequently asked questions about the Npc Underwater Lab mode for Multi Events."
sidebar_position: 5
---

# Frequently Asked Questions

## General

### Do I need Multi Events for this mode to work?

Yes. **Multi Events** is a required dependency. Npc Underwater Lab is an expansion mode that can't run on its own without the core plugin.

### Which NPCs count?

Only underwater dwellers (UnderwaterDweller) inside underwater labs count -- specifically entities named "npc_underwaterdweller". Killing NPCs in other locations won't earn points.

### How long does the event last?

10 minutes (600 seconds) by default. You can change this with the `Event Duration` setting in the config.

## Configuration

### How do I set up rewards?

In the `Awards Settings` section of the config, define rewards for each position. Items, console commands, Kits, and third-party plugin calls are all supported.

### Can I add more prize positions?

Yes. Add extra entries with position numbers (3, 4, 5, etc.) to the `Awards Settings` section, each with its own set of rewards.

### How do I change the event duration?

Edit the `Event Duration` parameter in the config. The value is in seconds. Reload the plugin after making changes.

## Problems

### Points aren't awarded for killing NPCs

Make sure the event is actually running and you're killing NPCs inside underwater labs specifically. NPCs at other monuments don't count for this mode.

### The map doesn't have underwater labs

This mode requires underwater labs on the map. Make sure your map includes these monuments.

### The UI widget doesn't show up

Check that ImageLibrary is installed and working. Also make sure the player hasn't manually hidden the widget.

### The event ends but rewards aren't given out

Make sure the reward settings in your config are filled in correctly: valid item ShortNames, amounts, and drop chances.
