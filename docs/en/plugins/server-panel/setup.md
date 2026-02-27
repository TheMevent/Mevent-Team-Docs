---
title: "ServerPanel Setup"
description: "Step-by-step guide to installing and configuring the ServerPanel plugin."
sidebar_position: 2
---

# ServerPanel Setup

This guide walks you through the full installation of the server info menu.

## Step 1: Install Dependencies

### ImageLibrary (required)

1. Download **ImageLibrary** from [umod.org](https://umod.org/plugins/image-library).
2. Place `ImageLibrary.cs` in your `oxide/plugins/` folder.
3. Wait for the plugin to load.

:::warning Important
ServerPanel **won't work properly** without ImageLibrary. All images in the menu are loaded through this library.
:::

### Additional Dependencies (recommended)

| Plugin | File | Purpose |
|---|---|---|
| ServerPanel Installer | `ServerPanelInstaller.cs` | Install ready-made menu templates |
| ServerPanel PopUps | `ServerPanelPopUps.cs` | Pop-up windows in the menu |
| ServerPanel Migrations | `ServerPanelMigrations.cs` | Data migration on updates |
| Notify | `Notify.cs` | Better notifications instead of chat |
| NoEscape | -- | Block menu during raid block |

## Step 2: Install the Main Plugin

1. Copy these files into `oxide/plugins/`:
 - `ServerPanel.cs` (main plugin)
 - `ServerPanelInstaller.cs` (template installer)
 - `ServerPanelPopUps.cs` (pop-ups)
 - `ServerPanelMigrations.cs` (migrations)

2. Wait for all plugins to load.

:::info Load Order
Extension plugins (Installer, PopUps, Migrations) depend on the main ServerPanel and will load automatically after it.
:::

## Step 3: Initial Setup with the Installer

1. Join the server as an admin.
2. Grant yourself the installer permission:
 ```
 oxide.grant user YourSteamID serverpanelinstaller.admin
 ```
3. Open the installer:
 ```
 serverpanelinstaller.open
 ```
4. Pick one of the available menu templates.
5. Click "Install".

:::tip Tip
The template creates the initial menu structure with categories, pages, and UI elements. You can fully customize it for your server using the built-in visual editor.
:::

## Step 4: Set Up Permissions

### Menu editing permission
```
oxide.grant user YourSteamID serverpanel.edit
```

### Pop-up editing permission
```
oxide.grant user YourSteamID serverpanelpopups.edit
```

:::warning Warning
Only grant edit permissions to trusted admins. The editor gives full control over the menu's content and structure.
:::

## Step 5: Configure Open Commands

Commands to open the menu are set per category. The template already includes default commands (e.g., `/menu`). To change or add commands:

1. Enter edit mode (button in the UI).
2. Open the settings for the category you want.
3. Change the commands.
4. Save your changes.

## Step 6: Configure the Plugin

Config file location: `oxide/config/ServerPanel.json`

Key settings to configure:
- **Notify integration** -- whether to use graphical notifications
- **Auto-open** -- show menu when a player joins
- **Blocking** -- block opening during raid block, build block, combat block
- **Economy in header** -- show Economics, ServerRewards, BankSystem balance

See the [Configuration](./configuration) section for more details.

## Step 7: Set Up Menu Content

Enter edit mode on the server:

1. Open the menu.
2. Click the edit button at the top.
3. Add elements: text, images, buttons.
4. Adjust position, size, font, and color for each element.
5. Create new pages and categories.

:::info Note
All changes made through the editor are saved automatically. No plugin reload needed.
:::

## Updating the Plugin

When updating:

1. Replace all plugin files with the new versions.
2. If you see a migration prompt, install `ServerPanelMigrations.cs`.
3. Migration will run automatically, or you can trigger it manually:
 ```
 sp.migrations run all
 ```

:::warning Warning
Always back up the `oxide/data/ServerPanel/` folder before updating. It stores all your menu data: categories, templates, elements, and localization.
:::

## Data Structure

After installation, the plugin creates these data files:

```
oxide/data/ServerPanel/
 Categories.json -- menu categories
 Template.json -- UI template
 Localization.json -- localization settings
 HeaderFields.json -- menu header fields
 Players.json -- player data
```

Config:
```
oxide/config/ServerPanel.json
```
