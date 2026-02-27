---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions about the Player List plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Frequently Asked Questions

### 1. How do I hide an administrator from the list?

Grant them the `playerlist.hide` permission: `oxide.grant user admin_nick playerlist.hide`.

---

### 2. How do I add a new button to the profile?

In the configuration, add a new object to the `"Buttons"` array. Specify the permission, language file key, command, and color.

---

### 3. How do I add a statistics field?

Add a new object to the `"Fields"` array. Specify the source plugin (e.g., `Statistics`), the function to retrieve data, and the arguments.

---

### 4. Can I show myself in the list?

Yes. Set `"Show the player who opened the player list?"` to `true`.

---

## Troubleshooting

### List is empty

**Cause:** There are no other online players on the server, or all players are hidden with the `playerlist.hide` permission.

**Solution:** Make sure there are other players on the server. Check that the `playerlist.hide` permission is not granted to everyone.

---

### Avatars are not displayed

**Cause:** ImageLibrary is not installed or has not loaded the avatars.

**Solution:** Install ImageLibrary. Reload the Player List plugin.

---

### Button does not execute a command

**Cause:** The command is configured incorrectly or the plugin for the command is not installed.

**Solution:** Check the command format in the configuration. Make sure the target plugin (for TPR, Trade, etc.) is installed.
