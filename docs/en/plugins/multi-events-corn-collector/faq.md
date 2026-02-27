---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions and troubleshooting for the Corn Collector plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Common Questions

### 1. Which corn counts?

All collectible objects (CollectibleEntity) with "corn" in their prefab name. This means standard wild corn growing on the map.

---

### 2. Does corn from planters count?

No. The plugin only tracks corn picked up through the OnCollectiblePickup event, which applies to wild corn on the map, not corn grown in planters.

---

### 3. How many points per ear?

Each ear of corn gives 1 point.

---

### 4. What happens when the event ends?

The winner is the player with the most points. They and other top finishers (if configured) receive rewards.

---

### 5. Can I run the event on a map with no corn?

Technically yes, but it'd be pointless since nobody can score. Only use this mode on maps with enough wild corn.

---

## Troubleshooting

### Points aren't awarded for collecting corn

**Symptoms:** A player collects corn but points don't register.

**Cause:** The event isn't active, or the player is collecting something other than corn.

**Fix:** Make sure the event is running with `corncollector.start`. Check that it's actually corn being collected.

---

### Event doesn't register in MultiEvents

**Symptoms:** The event doesn't appear in the MultiEvents event list.

**Cause:** MultiEvents wasn't loaded or was loaded after Corn Collector.

**Fix:** Reload the plugin: `oxide.reload MultiEventsCornCollector`.

---

### No corn on the map

**Symptoms:** The event is running but players can't find corn.

**Cause:** The map doesn't have enough wild corn, or resources haven't respawned yet.

**Fix:** Wait for resources to respawn, or use a map with more vegetation.
