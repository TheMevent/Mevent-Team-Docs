---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions about the Object Stacks plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Common Questions

### 1. How do I stack objects?

Hold a deployable object in your hands, aim your crosshair at an already placed object of the same type, and right-click (RMB).

---

### 2. How do I add support for a new object?

In the configuration, add a new entry to the `"Objects and offsets"` section. Specify the object's prefab path, vertical offset (`YOffset`), and shortname for permissions. Then add permissions to the `"Permissions"` section.

---

### 3. How do I increase the maximum number of objects in a stack?

Add a new permission to the `"Permissions"` section with the desired limit. For example: `"objectstacks.box_wooden.premium": 8`. Then grant this permission to the desired group.

---

### 4. Does stacking work on tugboats?

Yes. The plugin supports placing stacks on tugboats. Objects are attached to the tugboat as child entities.

---

### 5. Can I prevent stacking of objects with a specific skin?

Yes. Add the skin ID to the `"Blacklisted Skins"` array in the configuration.

---

## Troubleshooting

### "Building blocked!" message

**Cause:** The player is outside a TC zone and the `"Can stack only in Building Privileged zones?"` parameter is set to `true`.

**Solution:** Place a tool cupboard and authorize yourself, or set the parameter to `false`.

---

### "You reached max limit of stackable objects" message

**Cause:** The player has reached the maximum number of objects in a stack for their permission.

**Solution:** Grant the player a permission with a higher limit.

---

### Object does not stack

**Cause:** The object is not in the supported list, or the player does not have the stacking permission for this object type.

**Solution:** Check that the object is listed in `"Objects and offsets"` and that the corresponding permission has been granted to the player.
