---
title: "Commands -- Looking Loot"
description: "All commands for the Looking Loot mode"
sidebar_position: 4
---

# Commands

## Console Commands

| Command | Description | Required Permission |
|---|---|---|
| `lookingloot.start` | Start the Looking Loot event manually | `multieventslookingloot.start` |
| `lookingloot.stop` | Stop the current Looking Loot event | `multieventslookingloot.stop` |

## Automatic Launch

Under normal operation, the event starts and stops automatically through the core Multi Events plugin. Manual commands are for admins and testing.

## Notes

- Commands work from both the server console and the in-game console (F1) with the right permission
- If the event is already running, a second `lookingloot.start` is ignored
- The `lookingloot.stop` command immediately ends the event and gives rewards to current leaders
