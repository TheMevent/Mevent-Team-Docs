---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions about the Panel System plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Frequently Asked Questions

### 1. How do I add a new button?

Open the configuration and add a new object to the `"Buttons"` array inside `"Buttons Setting"`. Specify the Image (icon URL), Lang Key, Command, and Permission. Reload the plugin.

---

### 2. How do I add a new economy indicator?

Add a new object to the `"Economics"` array. Specify the plugin, balance function, and icon. Any economy plugin is supported.

---

### 3. How do I hide the panel for myself?

If the hide feature is enabled (`"Hide Settings" > "Enabled": true`), use the command `/panel hide`. To show it again: `/panel show`.

---

### 4. How do I change the panel position?

Change the `"Panel Anchor"` parameter in the configuration. Available values: `UpperRight`, `UpperLeft`.

---

### 5. Can I show real time instead of server time?

Yes. In the `"Time Settings"` section, set `"GameUpdate": false`. The panel will display the server's real time.

---

### 6. How do I customize event indicator colors?

Each player can customize colors through the settings window (gear button). The administrator sets the available colors and default values in the configuration.

---

### 7. How do I add support for a new event?

The plugin supports events from third-party plugins (Convoy, ArmoredTrain, Sputnik, etc.). Add a new object to the `"Events"` array specifying the event type.

---

## Troubleshooting

### Panel is not displayed

**Cause:** ImageLibrary is not installed, or the panel is hidden by the player.

**Solution:** Make sure ImageLibrary is installed. Ask the player to enter the panel show command. Verify that elements are enabled in the configuration (`"Enabled": true`).

---

### Event indicators do not change color

**Cause:** The plugin is not receiving event information.

**Solution:** Make sure the events are enabled in the configuration. For custom events, verify that the event plugin is installed.

---

### Economy balance is not displayed

**Cause:** The economy plugin is not installed or is configured incorrectly.

**Solution:** Check the plugin name and balance function in the configuration.

---

### Error "IMAGE LIBRARY IS NOT INSTALLED"

**Cause:** ImageLibrary is not installed on the server.

**Solution:** Download and install ImageLibrary. Reload Panel System.

---

### Panel interferes with other UI elements

**Cause:** The panel position coincides with other elements.

**Solution:** Change the panel position via `"Panel Anchor"`. You can also change `"Events Panel Anchor"` for the events panel.

---

### Settings button does not appear

**Cause:** The settings button is disabled or the player does not have the required permission.

**Solution:** Make sure `"Settings Button" > "Enabled"` is set to `true`. Check the permission.
