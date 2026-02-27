---
title: "Commands -- Collection Resources"
description: "All commands for the Collection Resources mode"
sidebar_position: 4
---

# Commands

## Console Commands

| Command | Description | Required Permission |
|---|---|---|
| `collectionresources.start` | Start the Collection Resources event manually | `multieventscollectionresources.start` |
| `collectionresources.stop` | Stop the current Collection Resources event | `multieventscollectionresources.stop` |

## Automatic Launch

Under normal operation, the event starts and stops automatically through the core Multi Events plugin. Manual commands are for admins and testing.

## Notes

- Commands work from both the server console and the in-game console (F1) with the right permission
- If the event is already running, a second `collectionresources.start` is ignored
- The `collectionresources.stop` command immediately ends the event and gives rewards to current leaders
- Players with the `multieventscollectionresources.edit` permission can edit event settings through the in-game UI
