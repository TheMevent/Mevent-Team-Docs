---
title: "FAQ -- Mushroom Madness"
description: "Frequently asked questions about the Mushroom Madness mode for Multi Events."
sidebar_position: 5
---

# Frequently Asked Questions

## General Questions

### Is Multi Events required for this mode to work?

Yes, **Multi Events** is a required dependency. Mushroom Madness is an expansion mode that cannot work independently without the core plugin.

### Which mushrooms are counted?

All mushrooms on the map are counted (objects containing "mushroom" in the prefab name). These are standard Rust collectible mushrooms.

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

### Points are not awarded for collecting mushrooms

Make sure the event is actually running and mushrooms are present on the map. Mushrooms are standard collectible objects on the Rust map.

### The UI widget is not displayed

Check that the ImageLibrary plugin is installed and working correctly. Also make sure the player has not hidden the widget manually.

### The event ends but rewards are not given

Make sure the reward settings in the configuration are filled in correctly: correct item ShortNames, amounts, and drop chances are specified.
