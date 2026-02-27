---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions about the F1 Item Menu plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Common Questions

### 1. How do I give an item through the menu?

Type `/f1menu` in chat, find the desired item (you can use search), click on it, and select the quantity. The item will be given to your inventory.

---

### 2. Why are some items displayed in red?

Items displayed in red are on the blacklist (vehicles). They are unavailable for giving through this menu.

---

### 3. Can I modify the blacklist?

The blacklist is defined in the plugin's source code. To modify it, you need to edit the `F1ItemMenu.cs` file and recompile the plugin.

---

### 4. How do I set up Discord notifications?

Enable `"Enable Discord Webhook"` in the configuration, specify the webhook URL, and configure the message format. Each time an item is given, a message will be sent to the specified channel.

---

## Troubleshooting

### The `/f1menu` command does not work

**Cause:** The player does not have the `f1itemmenu.f1` permission.

**Solution:** Grant the permission: `oxide.grant user nickname f1itemmenu.f1` or `oxide.grant group admin f1itemmenu.f1`.

---

### Notifications are not arriving in Discord

**Cause:** The webhook is disabled or the URL is incorrect.

**Solution:** Verify that `"Enable Discord Webhook"` is set to `true` and the webhook URL is correct. Make sure the server has internet access.

---

### The menu does not show all items

**Cause:** Items are distributed across pages (132 items per page).

**Solution:** Use the `<` and `>` navigation buttons to switch pages, or use the search field.
