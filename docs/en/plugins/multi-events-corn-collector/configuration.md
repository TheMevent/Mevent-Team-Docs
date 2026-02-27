---
title: "Configuration"
description: "Full reference for all Corn Collector configuration options."
sidebar_position: 4
---

# Configuration

Config file location: `oxide/config/MultiEventsCornCollector.json`

## Main Settings

| Parameter | Default | Description |
|---|---|---|
| Work with Notify? | `true` | Use Notify / UINotify for notifications |
| Event Duration | `600` | Event duration in seconds (default 10 minutes) |

## Award Settings

The `"Awards Settings"` section defines rewards by ranking position.

| Parameter | Description |
|---|---|
| Put the reward in the MultiEventsInventory? | Deliver rewards through MultiEventsInventory |
| Player Awards (top - award) | Reward list by position (1 = first, 2 = second, etc.) |

### Per-Reward Parameters

| Parameter | Description |
|---|---|
| Award IDs from MultiEventsInventory | Reward IDs from MultiEventsInventory |
| Awards | List of reward items |
| Amount (Minimal / Maximum) | Number of rewards to give |

### Reward Types

| Type | Description |
|---|---|
| `Item` | In-game item (ShortName, amount, skin) |
| `Command` | Console command (%steamid%, %username%) |
| `Plugin` | Hook call to another plugin (Economics, etc.) |
| `Kit` | Kit from the Kits plugin |

## Config Example

```json
{
 "Work with Notify?": true,
 "Event Duration": 600,
 "Awards Settings": {
 "Put the reward in the MultiEventsInventory?": true,
 "Player Awards (top - award)": {
 "1": {
 "Award IDs from MultiEventsInventory": [0, 1, 2, 3],
 "Awards": [
 {
 "Type": "Item",
 "Command (%steamid%)": "",
 "Kit": "",
 "Plugin": { "Hook": "", "Plugin Name": "", "Amount": 0 },
 "Item": {
 "DisplayName (empty - default)": "",
 "ShortName": "wood",
 "Skin": 0,
 "Amount Min": 3500,
 "Amount Max": 3500
 },
 "Chance": 100.0
 }
 ],
 "Amount": { "Minimal": 1, "Maximum": 1 }
 }
 }
 }
}
```

:::tip Tip
If your map doesn't have much corn, increase the event duration to give players more time to collect.
:::
