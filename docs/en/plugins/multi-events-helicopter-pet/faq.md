---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions and troubleshooting for the Helicopter Pet plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Common Questions

### 1. How do I earn points?

Points are awarded automatically when the helicopter pays attention to you. If it circles around you (orbit mode), you get 1 point. If it attacks you (strafe mode), you get 2 points.

---

### 2. Do I need to shoot the helicopter?

Shooting the helicopter can attract its attention and make it attack you, which gives more points (2 instead of 1). But be careful -- it shoots back!

---

### 3. What happens if the helicopter is destroyed?

If the helicopter's health drops to zero, the event ends early. Increase the `"Helicopter Health"` config value to prevent this.

---

### 4. Where does the helicopter spawn?

It spawns at the position set in `"Heli Init Position"`. If left at the default `(0, 0, 0)`, it spawns at the map center.

---

### 5. Can players die from the helicopter?

Yes. The helicopter behaves like a regular patrol helicopter and will fire at players it's targeting. That's part of the event -- players have to balance scoring with survival.

---

### 6. Do points carry over after death?

Yes. Points earned before death are kept. A player can keep scoring after respawning.

---

## Troubleshooting

### Helicopter doesn't spawn

**Symptoms:** The event started but no helicopter appears.

**Cause:** Invalid spawn position or initialization error.

**Fix:** Check `"Heli Init Position"` in the config. Make sure the coordinates are within the map bounds. Check the console for errors.

---

### Helicopter gets destroyed too fast

**Symptoms:** The event ends early because the helicopter is destroyed.

**Cause:** Helicopter health is too low.

**Fix:** Increase `"Helicopter Health"` in the config. 10000+ is recommended for servers with experienced players.

---

### Points aren't awarded

**Symptoms:** The helicopter is flying around but points aren't registering.

**Cause:** The helicopter hasn't locked onto the player as a target.

**Fix:** Attract the helicopter's attention -- shoot at it, stand in the open. Points only count when the helicopter AI is in orbit or attack state toward a specific player.

---

### Rewards aren't given

**Symptoms:** The event ends but winners don't get rewards.

**Cause:** `"Put the reward in the MultiEventsInventory?"` is enabled but MultiEventsInventory isn't installed.

**Fix:** Install MultiEventsInventory, or disable the option and set up direct reward delivery.
