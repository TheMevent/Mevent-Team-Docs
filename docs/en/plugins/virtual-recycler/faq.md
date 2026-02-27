---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions about the Virtual Recycler plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Frequently Asked Questions

### 1. What happens to items when the recycler is closed?

When the virtual recycler is closed, all remaining items are automatically returned to the player's inventory. If the inventory is full, items drop on the ground.

---

### 2. Can I enable auto-start for the recycler?

Yes. Set `"AutoStart": true` in the configuration. The recycler will start working automatically when items are added.

---

### 3. How do I speed up recycling for VIP players?

Add a new permission to `"PermissionSpeeds"` with a lower speed value (e.g., `0.3`) and grant this permission to the VIP group.

---

### 4. Does the plugin work with stationary recyclers?

Yes. The `"StaticRecyclerSpeeds"` section allows you to set recycling speeds for stationary recyclers on the map.

---

### 5. Can the virtual recycler be used in RaidableBases zones?

Yes. To do this, grant the `virtualrecycler.raidablebases` permission and make sure the RaidableBases plugin is installed.

---

## Troubleshooting

### "You don't have permission" message

**Cause:** The player does not have the `virtualrecycler.use` permission.

**Solution:** Grant the permission: `oxide.grant group default virtualrecycler.use`.

---

### Recycler works too slowly

**Cause:** The player is using the default speed (1.0).

**Solution:** Grant a permission with accelerated speed (e.g., `virtualrecycler.vip` = 0.5) or change `"DefaultSpeed"` in the configuration.

---

### Items disappear during recycling

**Cause:** This is normal recycler behavior -- not all items have a recycling recipe.

**Solution:** Make sure the items support recycling. Check that the inventory is not full.
