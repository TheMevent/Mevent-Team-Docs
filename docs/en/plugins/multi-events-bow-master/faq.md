---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions and troubleshooting for the Bow Master plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Common Questions

### 1. Which weapons count in the event?

Only kills made with arrows (Arrow damage type). This includes the Hunting Bow, Compound Bow, and Crossbow.

---

### 2. Do animal kills count?

Yes. Points are awarded for kills on both players (BasePlayer) and animals (BaseAnimalNPC) made with arrows.

---

### 3. How many points per kill?

Each arrow kill gives 1 point, regardless of target type.

---

### 4. Do fire arrow kills count?

No. If the final hit comes from the fire of a fire arrow rather than the arrow itself, the kill won't count because the damage type won't be Arrow.

---

### 5. Can I set different points for players vs. animals?

In the current version, points are fixed at 1 per arrow kill.

---

## Troubleshooting

### Points aren't being awarded

**Symptoms:** A player kills things with a bow but points don't register.

**Cause:** The damage type isn't Arrow (e.g., fire from a fire arrow), or the event isn't active.

**Fix:** Make sure the event is running. Check that you're using a regular bow or crossbow with regular arrows.

---

### Event doesn't show in MultiEvents

**Symptoms:** The event doesn't appear in the available events list.

**Cause:** MultiEvents wasn't loaded, or was loaded after Bow Master.

**Fix:** Reload the plugin: `oxide.reload MultiEventsBowMaster`. It'll auto-register with MultiEvents.

---

### Event panel doesn't display

**Symptoms:** The event started but the UI panel isn't visible.

**Cause:** ImageLibrary issue or the player hid the panel.

**Fix:** Make sure ImageLibrary is installed. The panel will reappear on the next event start.
