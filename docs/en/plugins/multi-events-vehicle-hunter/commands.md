---
title: "Commands & Permissions — Vehicle Hunter"
description: "Console commands and permissions for the Vehicle Hunter mode."
sidebar_position: 3
---

# Commands & Permissions

## Console Commands

| Command | Description | Permission |
|---|---|---|
| `vehiclehunter.start` | Start the event manually | `MultiEventsVehicleHunter.start` |
| `vehiclehunter.stop` | Stop the current event | `MultiEventsVehicleHunter.stop` |

:::info
The event usually starts automatically through the main Multi Events plugin. Manual commands are meant for testing and special cases.
:::

## Permissions

| Permission | Description |
|---|---|
| `MultiEventsVehicleHunter.start` | Allows starting the event |
| `MultiEventsVehicleHunter.stop` | Allows stopping the event |

### Granting Permissions

To grant permissions via server console:

```
oxide.grant group admin MultiEventsVehicleHunter.start
oxide.grant group admin MultiEventsVehicleHunter.stop
```

## UI Controls

Players can hide the event widget by clicking the close button on the notification panel. The widget will reappear automatically when the next event starts.
