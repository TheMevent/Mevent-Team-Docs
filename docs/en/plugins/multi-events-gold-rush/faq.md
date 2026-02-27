---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions and troubleshooting for the Gold Rush plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Common Questions

### 1. How is Gold Rush different from other MultiEvents modes?

Unlike competitive modes (Bot Purge, Bow Master, etc.), Gold Rush is a bonus mode. All players get extra items when mining ore and chopping trees -- there's no competition for points. There's no leaderboard -- everyone participates at the same time.

---

### 2. Which resources give bonuses?

Bonuses drop when gathering two resource types:
- **Ore** -- stone, sulfur ore, metal ore, etc.
- **Trees** -- all tree types

Each type has its own drop table.

---

### 3. How do VIP multipliers work?

Players with the `MultiEventsGoldRush.vip` permission (or another configured one) get increased drop chances. For example, a 2.0 multiplier doubles each item's chance. If an item has a 20% chance, it becomes 40% for VIP players.

---

### 4. Can the chance go above 100%?

If the base chance multiplied by the VIP multiplier exceeds 100%, the item drops guaranteed on every hit.

---

### 5. Can I add multiple VIP tiers?

Yes. Add new permissions in the `"Permissions Multiplier chane"` section:
```json
{
 "MultiEventsGoldRush.vip": 2.0,
 "MultiEventsGoldRush.premium": 3.0,
 "MultiEventsGoldRush.elite": 5.0
}
```
Each permission needs to be registered through Oxide. If a player has multiple permissions, the highest multiplier is used.

---

## Troubleshooting

### Bonus items don't drop

**Symptoms:** A player mines resources but doesn't get extra items.

**Cause:** The event isn't active, or the drop chances are too low.

**Fix:** Make sure the event is running with `goldrush.start`. Check drop chances in the config -- set them high (80-100%) for testing.

---

### VIP multiplier doesn't work

**Symptoms:** A VIP player doesn't get boosted chances.

**Cause:** The permission isn't granted or registered.

**Fix:** Make sure the permission is granted: `oxide.grant group vip MultiEventsGoldRush.vip`. The plugin auto-registers permissions from the config on load.

---

### Event panel doesn't show

**Symptoms:** The event is active but the UI panel isn't visible.

**Cause:** ImageLibrary issue or the player hid the panel.

**Fix:** Make sure ImageLibrary is installed and working. The panel will reappear on the next event start.

---

### Event doesn't register in MultiEvents

**Symptoms:** Gold Rush doesn't appear in the MultiEvents event list.

**Cause:** MultiEvents loaded after Gold Rush.

**Fix:** Reload the plugin: `oxide.reload MultiEventsGoldRush`.
