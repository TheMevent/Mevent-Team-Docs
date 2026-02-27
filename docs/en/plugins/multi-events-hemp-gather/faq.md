---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions and troubleshooting for the Hemp Gather plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Common Questions

### 1. Which hemp counts?

All collectible objects (CollectibleEntity) with "hemp" in their prefab name. This means wild hemp growing on the map.

---

### 2. Does hemp from planters count?

No. The plugin only tracks hemp picked up through the OnCollectiblePickup event, which applies to wild hemp, not hemp grown in planters.

---

### 3. How many points per plant?

Each hemp plant gives 1 point.

---

### 4. How is Hemp Gather different from Corn Collector?

Both events share the same mechanics (collecting resources), but they track different plants: Hemp Gather tracks hemp, Corn Collector tracks corn. This lets you run varied events on the same server.

---

### 5. Can I run Hemp Gather and Corn Collector at the same time?

Technically yes, but it might confuse players. Better to run them one at a time through MultiEvents scheduling.

---

## Troubleshooting

### Points aren't awarded

**Symptoms:** A player collects plants but points don't register.

**Cause:** The event isn't active or the player is collecting something other than hemp.

**Fix:** Make sure the event is running with `hempgather.start`. Verify the player is collecting hemp, not other plants.

---

### Not enough hemp on the map

**Symptoms:** Players can't find enough hemp.

**Cause:** The map doesn't have enough hemp or resources haven't respawned.

**Fix:** Wait for resources to respawn. Hemp grows mainly in forest and grassland biomes. Consider increasing the event duration.

---

### Event doesn't register in MultiEvents

**Symptoms:** Hemp Gather doesn't appear in the MultiEvents event list.

**Cause:** MultiEvents loaded after Hemp Gather.

**Fix:** Reload the plugin: `oxide.reload MultiEventsHempGather`.

---

### Event panel doesn't show

**Symptoms:** The event started but the UI panel isn't visible.

**Cause:** ImageLibrary issue or the player hid the panel.

**Fix:** Make sure ImageLibrary is installed. The panel will reappear on the next event start.
