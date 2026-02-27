---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions about the Operation Fortress plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Common Questions

### 1. How do I start the event manually?

Run the `operation.start` command from the console or chat (with the `operationfortress.start` permission).

---

### 2. How do I set up automatic launching?

In the configuration, set `"enableAutoTimer": true` and specify the interval in minutes (`repeatEveryMin` / `repeatEveryMax`).

---

### 3. How do I create a building preset for the fortress?

Use RustEdit to create a building preset. Save it with a unique name and add it to the `"Building Presets"` array in the configuration.

---

### 4. How many towers need to be activated to win?

The number is set by the `"towerNeedActivated"` parameter. Default: 4.

---

### 5. What rewards does the winner receive?

Rewards are configured in the `"Rewards"` section. You can combine economy rewards (Economics, ServerRewards) and commands (e.g., granting VIP privileges).

---

## Troubleshooting

### The event does not start

**Cause:** The building preset was not found on the map or NpcSpawn is not installed.

**Solution:** Make sure the building preset was created in RustEdit and is present on the map. Install the NpcSpawn plugin.

---

### NPCs do not spawn

**Cause:** NPC presets are configured incorrectly.

**Solution:** Check the NPC preset settings in the configuration. Make sure the equipment and weapon shortnames are correct.

---

### Players cannot enter the fortress zone

**Cause:** PveMode is blocking entry.

**Solution:** Check the PveMode settings in the configuration. Set `"CanEnter": true` to allow entry.
