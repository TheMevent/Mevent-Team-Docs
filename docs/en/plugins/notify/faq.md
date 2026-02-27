---
title: "FAQ -- Notify"
description: "Frequently asked questions about the Notify plugin for Rust servers."
sidebar_position: 5
---

# Frequently Asked Questions (FAQ)

## 1. How do I add a custom notification type?

Open the configuration file `oxide/config/Notify.json` and in the `"Notifications (type - settings)"` section, add a new entry with a unique numeric identifier. Copy the structure of an existing type (e.g., `"0"`) and modify the colors, icon, and other parameters to your needs.

**Example:** to add type 2 with a green color:

```json
"2": {
 "Enabled": true,
 "Background Color": { "HEX": "#000000", "Opacity (0 - 100)": 98.0 },
 "Enable Gradient?": true,
 "Gradient Color": { "HEX": "#0FF542", "Opacity (0 - 100)": 35.0 },
 "Icon Color": { "HEX": "#0FF542", "Opacity (0 - 100)": 100.0 },
 "Icon Text": "i",
 "Title Key (lang)": "Notification",
 ...
}
```

Do not forget to reload the plugin after making changes: `oxide.reload Notify`.

---

## 2. Can I make a notification clickable?

Yes. In the notification type settings, enable the `"Use command": true` parameter and specify the command in the `"Command"` field. For example, `"Command": "shop"` will open the shop when the notification is clicked. If the `"Close after using the command?"` parameter is enabled, the notification will close after the click.

---

## 3. Why do some players see chat messages instead of graphical notifications?

This happens if the player does not have the `notify.see` permission. The plugin automatically sends a text message to chat as a fallback. This behavior can be disabled by setting the `"Send text message to chat if player doesn't have notification permission"` parameter to `false`.

---

## 4. How do I change the notification position on screen?

In the configuration, change the `"Display notifications on the top right?"` parameter:
- `true` -- notifications in the top right corner of the screen (default)
- `false` -- notifications in the bottom left corner of the screen

For fine-tuning the position, use the `"X Margin"`, `"Y Margin"`, and `"Y Indent"` parameters.

---

## 5. How can other plugins send notifications through Notify?

Other plugins use an API call to send notifications. The plugin must declare a reference to Notify and call a special function specifying the player, notification type, and message text. Many Mevent plugins already have built-in Notify support -- simply enable the `"Work with Notify?"` option in their configuration.

---

## 6. Can I use custom images for notification icons?

Yes. In the notification type settings under the "Image Settings" section, set `"Enabled": true` and specify the image URL in the `"Image"` field. The image will be loaded through ImageLibrary and displayed instead of the text icon. Using small PNG images is recommended.

---

## 7. Notifications overlap the minimap or other interface elements. How do I fix this?

Try the following:
1. Change the `"Display type"` parameter from `"OverlayNonScaled"` to `"Hud"`.
2. Increase the `"Y Indent"` value (more negative) to move notifications lower.
3. Increase `"X Margin"` to move notifications further from the screen edge.
4. Move notifications to a different corner by changing `"Display notifications on the top right?"` to `false`.

---

## 8. How many notification types can I create?

There are no limits. You can create any number of notification types, assigning each a unique numeric identifier. Each type can have its own colors, icons, sound effects, dimensions, and behavior.

---

## 9. How do I disable notification sound effects?

In the desired notification type settings, clear the `"Sound Effect (empty - disable)"` field by setting it to an empty string `""`. This will disable the sound for that type.

---

## 10. Can I set different display times for different notification types?

Yes. In the notification type settings, set `"Use custom cooldown": true` and specify the desired time in seconds in the `"Cooldown"` field. If no individual time is set, the global `"Notify Cooldown"` parameter is used.
