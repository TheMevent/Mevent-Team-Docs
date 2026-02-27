---
title: "Commands & Permissions — Scavenger Hunt"
description: "Console commands and permissions for the Scavenger Hunt mode."
sidebar_position: 3
---

# Commands & Permissions

## Console Commands

| Command | Description | Permission |
|---|---|---|
| `scavengerhunt.start` | Start the event manually | `MultiEventsScavengerHunt.start` |
| `scavengerhunt.stop` | Stop the current event | `MultiEventsScavengerHunt.stop` |

:::info
The event usually starts automatically through the main Multi Events plugin. Manual commands are meant for testing and special cases.
:::

## Permissions

| Permission | Description |
|---|---|
| `MultiEventsScavengerHunt.start` | Allows starting the event |
| `MultiEventsScavengerHunt.stop` | Allows stopping the event |

### Granting Permissions

To grant permissions via server console:

```
oxide.grant group admin MultiEventsScavengerHunt.start
oxide.grant group admin MultiEventsScavengerHunt.stop
```

## UI Controls

Players can hide the event widget by clicking the close button on the notification panel. The widget will reappear automatically when the next event starts.
