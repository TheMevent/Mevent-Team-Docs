---
title: "FAQ -- Barrel Event"
description: "Frequently asked questions about the Barrel Event mode for Multi Events."
sidebar_position: 5
---

# Frequently Asked Questions

## General

### Do I need Multi Events for this mode to work?

Yes. **Multi Events** is a required dependency. Barrel Event is an expansion mode that can't run on its own.

### What barrel types are supported?

All standard Rust barrels are supported by default: regular loot barrels (loot-barrel) and oil barrels (oil_barrel). You can add any other barrel types in the config.

### How long does the event last?

10 minutes (600 seconds) by default. You can change this in the config with the `Event Duration` parameter.

## Configuration

### How do I change barrel points?

Edit the `Barrels point` section in the config. The key is the barrel's short name, the value is the point count. Reload the plugin after making changes.

### How do I set up rewards?

In the `Awards Settings` section, you can configure rewards for each placement. Items, console commands, kits, and third-party plugin calls are all supported.

### Can I add more prize positions?

Yes. Add extra entries in the `Awards Settings` section with position numbers (3, 4, 5, etc.), each with its own reward set.

## Problems

### Points aren't awarded for destroying barrels

Make sure the barrel short names in the config match the actual object names on the map. Also check that the event is actually running.

### UI widget doesn't show up

Check that ImageLibrary is installed and working. Also make sure the player hasn't hidden the widget manually.

### Event ends but rewards aren't given

Make sure the reward settings in the config are correct: valid ShortName values, amounts, and drop chances.
