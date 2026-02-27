---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions about the Hit Markers plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Common Questions

### 1. How does a player customize markers?

Type `/marker` or `/hits` in chat. A window will open where you can enable/disable each marker type, choose a font, and set the text size.

---

### 2. Markers do not appear when hitting NPCs

Check the `"Show damage to NPC"` parameter in the configuration. By default, it is enabled (`true`).

---

### 3. Can I show damage to animals?

Yes. Set `"Show damage to animals": true` in the configuration.

---

### 4. How do I change the marker display duration?

Change the `"Marker removal time"` parameter in the configuration. The value is specified in seconds.

---

### 5. How do I restrict access to certain fonts?

For each font in the `"Fonts"` section, you can specify an access permission in the `"Permission"` field. The font will only be available to players with that permission.

---

## Troubleshooting

### Markers do not appear

**Cause:** ImageLibrary is not installed, or the player has disabled all modes in their settings.

**Solution:** Install ImageLibrary. Ask the player to open `/marker` and enable the desired modes.

---

### The health bar does not appear

**Cause:** The Health Line mode is disabled in the player's settings or in the configuration.

**Solution:** Enable the Health Line mode in the `"Buttons"` section of the configuration and make sure the player has activated it through the interface.
