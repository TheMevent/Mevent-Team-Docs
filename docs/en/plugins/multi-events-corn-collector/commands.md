---
title: "Commands and Permissions"
description: "Full list of commands and permissions for the Corn Collector plugin."
sidebar_position: 3
---

# Commands and Permissions

## Commands

### Admin Commands

| Command | Description | Permission |
|---|---|---|
| `corncollector.start` | Start the Corn Collector event | `MultiEventsCornCollector.start` |
| `corncollector.stop` | Stop the current event | `MultiEventsCornCollector.stop` |

:::info Note
The event can also start automatically through MultiEvents scheduling.
:::

### Console Commands (UI)

| Command | Description |
|---|---|
| `UI_CornCollector hide` | Hide the event panel (triggered via UI) |

## Permissions

| Permission | Description |
|---|---|
| `MultiEventsCornCollector.start` | Permission to start the event |
| `MultiEventsCornCollector.stop` | Permission to stop the event |

### Setting Up Permissions

```
oxide.grant group admin MultiEventsCornCollector.start
oxide.grant group admin MultiEventsCornCollector.stop
```

## Player Commands

Regular players don't have special commands. Participation is automatic -- just collect corn on the map during the active event.

## Scoring Mechanics

- Points are awarded for picking up corn (CollectiblePickup)
- Only objects with "corn" in the prefab name count
- Each ear of corn gives 1 point
