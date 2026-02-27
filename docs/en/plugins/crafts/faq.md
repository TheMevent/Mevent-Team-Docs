---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions about the Crafts plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Common Questions

### 1. How do I add a new craft recipe?

Open the `oxide/config/Crafts.json` file, find the desired category in the `"Categories"` array, and add a new object to the `"Crafts"` array. Copy the structure of an existing recipe and modify the parameters. After making changes, reload the plugin: `oxide.reload Crafts`.

---

### 2. How do I add a new category?

Add a new object to the `"Categories"` array with the fields `Enabled`, `Permission`, `Title`, `Color`, and `Crafts`. Each category can have its own access permission.

---

### 3. How do I set up the economy for crafting?

In the configuration, fill out the `"Economy"` section. For the Economics plugin, set `"Type": "Plugin"`, `"Plugin name": "Economics"`. For item-based economy, use `"Type": "Item"` and specify the ShortName and Skin of the item.

---

### 4. Can I edit crafts through the interface?

Yes. Administrators with the `crafts.edit` permission can open editing mode directly in the crafting menu. This allows changing resources, descriptions, and other parameters without manually editing the configuration.

---

### 5. How do I tie a craft to a workbench?

In the recipe settings, set the `"WorkbenchLevel"` parameter to `One`, `Two`, or `Three`. The player must be near a workbench of the corresponding level to craft.

---

## Troubleshooting

### "IMAGE LIBRARY IS NOT INSTALLED" Error

**Cause:** The ImageLibrary plugin is not installed.

**Solution:** Download and install ImageLibrary in the `oxide/plugins/` folder.

---

### Vehicle does not spawn after crafting

**Cause:** Incorrect prefab path in the configuration or not enough space for spawning.

**Solution:** Check the `"Prefab"` field in the recipe settings. Make sure the player is in an open area.

---

### Recycler does not place

**Cause:** The player is in a building restriction zone or there is no space for placement.

**Solution:** Try placing the recycler in an area where building is allowed.
