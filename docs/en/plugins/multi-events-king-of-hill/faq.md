---
title: "FAQ -- King Of Hill"
description: "Frequently asked questions about the King Of Hill mode"
sidebar_position: 5
---

# Frequently Asked Questions

## General

### How does scoring work?

Every second, the system checks the vertical position (height) of each active player on the server. If a player's current height exceeds their previous max, their record updates. Only heights below the config limit (`Max Height`) count.

### Do players need to sign up for the event?

No. All players on the server automatically participate. Just be at a high point on the map -- a mountain top, a building roof, a tower, whatever works.

### What happens if a player goes above the max height?

Heights above the `Max Height` config value won't be recorded. This prevents abuse from flying vehicles or cheats.

## Configuration

### Can I set rewards for more than 2 positions?

Yes. Add more entries in the `Player Awards (top - award)` config section. The key is the position number (3, 4, 5, etc.).

### How do I change the event duration?

Change the `Event Duration` config value. It's in seconds (default: 600 = 10 minutes).

### Can I use commands as rewards?

Yes. Set the reward type to `Command` and specify the console command. Use `%steamid%` and `%username%` as placeholders for player data.

## Technical

### Is the plugin compatible with Carbon?

Yes. It works with both Oxide and Carbon.

### Can I run this mode at the same time as other Multi Events modes?

Event scheduling is managed by the core Multi Events plugin. Check its documentation for configuring schedules and concurrent events.
