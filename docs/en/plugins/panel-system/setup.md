---
title: "Panel System Installation"
description: "Step-by-step guide for installing and configuring the Panel System plugin for a Rust server."
sidebar_position: 2
---

# Panel System Installation

This guide will walk you through the process of installing the information panel on your server.

## Step 1: Install Dependencies

### ImageLibrary (required)

1. Download **ImageLibrary** from [umod.org](https://umod.org/plugins/image-library).
2. Place the `ImageLibrary.cs` file in the `oxide/plugins/` folder.
3. Make sure the plugin loaded without errors.

:::warning Important
Without ImageLibrary, the Panel System plugin **will not work**. The console will display an error: `IMAGE LIBRARY IS NOT INSTALLED.`
:::

### Additional Dependencies (optional)

| Plugin | Purpose |
|---|---|
| **Notify** | Beautiful notifications instead of chat messages |
| **UINotify** | Alternative to Notify |
| **WipeBlock** | Displaying wipe block status on the events panel |
| **Economics** | Displaying currency balance on the panel |
| **ServerRewards** | Displaying reward points balance |

## Step 2: Install the Plugin

1. Copy the `PanelSystem.cs` file into the `oxide/plugins/` folder.
2. The plugin will load automatically.
3. Check the console for errors.

The configuration file will be created automatically:
```
oxide/config/PanelSystem.json
```

The data file will be created at:
```
oxide/data/PanelSystem/Main.json
```

## Step 3: Verify Operation

1. Join the server.
2. You should see the information panel in the upper right corner of the screen.
3. The panel should display:
 - Number of online players
 - Current in-game time
 - Event indicators (if configured)

:::info Note
On first launch, default settings are used. By default, the following are enabled: online count, time, helicopter, tank, airdrop, and CH47.
:::

## Step 4: Configure Panel Elements

Open the configuration file `oxide/config/PanelSystem.json`.

### Enabling/disabling elements

Each panel element has an `"Enabled"` parameter:

- **Online panel** -- "Players Settings" section
- **Sleepers panel** -- "Sleepers Settings" section (disabled by default)
- **Time panel** -- "Time Settings" section
- **Buttons** -- "Buttons Setting" section
- **Logo** -- "Logotype" section
- **Settings button** -- "Settings Button" section
- **Events** -- each event in the "Events" array
- **Economy** -- each currency in the "Economics" array

### Example: enable the sleepers panel

In the "Sleepers Settings" section, change:
```json
"Enabled": true
```

## Step 5: Configure Quick Buttons

Quick buttons allow players to execute commands with a single click. Configure them in the "Buttons Setting" section:

```json
"Buttons": [
 {
 "Enabled": true,
 "Image": "https://link-to-icon.png",
 "Permission": "",
 "Lang Key (oxide/lang/**/PanelSystem.json)": "BtnShop",
 "Command": "chat.say /shop"
 }
]
```

- **Image** -- Button icon URL
- **Permission** -- Permission for visibility (empty -- for everyone)
- **Lang Key** -- Key in the language file for the button text
- **Command** -- Command executed when clicked

:::tip Tip
To execute a chat command, use the format `chat.say /command`. For a console command, simply specify its name.
:::

## Step 6: Configure Events

Each event in the "Events" array can be enabled or disabled:

```json
{
 "Enabled": true,
 "Image": "https://link-to-icon.png",
 "Permission": "",
 "Type": "Helicopter",
 ...
}
```

The event indicator automatically changes color when an object appears/disappears on the map.

## Step 7: Configure the Hide Feature (optional)

To allow players to completely hide the panel, enable the feature in the "Hide Settings" section:

```json
"Hide Settings": {
 "Enabled": true,
 "Command": "panel",
 "Show Logo?": true
}
```

After this, players can use:
- `/panel hide` -- hide the panel
- `/panel show` -- show the panel

## Step 8: Reload the Plugin

After changing the configuration:
```
oxide.reload PanelSystem
```

## Updating the Plugin

When updating:

1. Replace the `PanelSystem.cs` file with the new version.
2. The plugin will automatically update the configuration.
3. The console will display messages:
 ```
 Config update detected! Updating config values...
 Config update completed!
 ```
4. New events and settings will be added automatically.

:::note Note
The plugin preserves your custom settings during updates. New parameters are added with default values.
:::
