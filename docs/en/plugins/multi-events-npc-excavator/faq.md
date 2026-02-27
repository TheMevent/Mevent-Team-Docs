---
title: "FAQ -- Npc Excavator"
description: "Frequently asked questions about the Npc Excavator mode for Multi Events."
sidebar_position: 5
---

# Frequently Asked Questions

## General Questions

### Is Multi Events required for this mode to work?

Yes, **Multi Events** is a required dependency. Npc Excavator is an expansion mode that cannot work independently without the core plugin.

### Which NPCs are counted?

Only NPC scientists located at the Excavator monument are counted (objects named "scientistnpc_excavator"). Killing scientists at other locations does not award points.

### How long does the event last?

By default, the event lasts 10 minutes (600 seconds). The duration can be changed in the configuration via the `Event Duration` parameter.

## Configuration

### How do I configure rewards?

In the `Awards Settings` section of the configuration, you can set rewards for each placement. Items, console commands, Kit sets, and third-party plugin calls are supported.

### Can I add more prize placements?

Yes. In the `Awards Settings` section, you can add additional entries with placement numbers (3, 4, 5, etc.), each with its own set of rewards.

### How do I change the event duration?

Edit the `Event Duration` parameter in the configuration. The value is specified in seconds. Reload the plugin after making changes.

## Problems

### Points are not awarded for killing scientists

Make sure the event is actually running and you are killing scientists specifically at the Excavator. Scientists at other monuments are not counted by this mode.

### The map does not have an Excavator monument

This mode requires the Excavator monument to be present on the map. Make sure the map being used contains this monument.

### The UI widget is not displayed

Check that the ImageLibrary plugin is installed and working correctly. Also make sure the player has not hidden the widget manually.

### The event ends but rewards are not given

Make sure the reward settings in the configuration are filled in correctly: correct item ShortNames, amounts, and drop chances are specified.
