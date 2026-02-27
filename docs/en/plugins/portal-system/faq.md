---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions about the Portal System plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Frequently Asked Questions

### 1. How do I get portals?

Use the `/buyportal` command to purchase them, or ask an administrator to give them to you: `/giveportal nickname amount`.

---

### 2. How do I link two portals?

1. Place two portals in different doorways.
2. Approach the first portal -- a menu will open.
3. Click the link button and select the second portal.

---

### 3. How do I increase the portal limit?

Grant a VIP permission: `oxide.grant user nickname portalsystem.limit.6`. Limits are configured in the configuration.

---

### 4. Can I share portals with friends?

Yes. The portal menu has a sharing setting: teammates, friends (Friends plugin), clan members (Clans plugin).

---

### 5. How do I pick up a portal?

Take a hammer and hold the right mouse button on the portal (hold time is configurable). The portal will return to your inventory.

---

## Troubleshooting

### Portal cannot be placed

**Cause:** The player is not authorized in the tool cupboard or is trying to place outside a doorway.

**Solution:** Make sure the player is authorized in the tool cupboard. Place the portal in a doorway.

---

### Teleportation does not work -- "cooldown"

**Cause:** There is a cooldown between teleportations (10 seconds by default).

**Solution:** Wait for the cooldown to end. For VIP players, the cooldown can be reduced via permissions.

---

### Portal unavailable -- "blocked by NoEscape"

**Cause:** The player is in a raid block state.

**Solution:** Wait for the raid block to end. This behavior is determined by the NoEscape plugin.
