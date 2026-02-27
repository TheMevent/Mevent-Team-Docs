---
title: "Commands & Permissions — NPC Missile Silo"
description: "Console commands and permissions for the NPC Missile Silo mode."
sidebar_position: 4
---

# Commands & Permissions

## Console Commands

| Command | Description | Permission |
|---|---|---|
| `npcmissilesilo.start` | Start the event manually | `MultiEventsNpcMissileSilo.start` |
| `npcmissilesilo.stop` | Stop the current event | `MultiEventsNpcMissileSilo.stop` |

:::info
The event usually starts automatically through the main Multi Events plugin. Manual commands are meant for testing and special cases.
:::

## Permissions

| Permission | Description |
|---|---|
| `MultiEventsNpcMissileSilo.start` | Allows starting the event |
| `MultiEventsNpcMissileSilo.stop` | Allows stopping the event |

### Granting Permissions

```
oxide.grant group admin MultiEventsNpcMissileSilo.start
oxide.grant group admin MultiEventsNpcMissileSilo.stop
```

## UI Controls

Players can hide the event widget by clicking the close button on the notification panel.
