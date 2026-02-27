---
title: "ServerPanel"
description: "A fullscreen server info menu with categories, pages, economy display, and a built-in visual editor."
version: "2.0.0"
tags: [rust, plugin, menu, ui, server-info]
sidebar_position: 1
---

# ServerPanel

## What does this plugin do?

**ServerPanel** gives your server a good-looking fullscreen info menu that shows up when players join or type a command. You can put server rules, rate info, maps, admin contacts, Discord links, and anything else you want in there. Admins can edit everything right inside the game with the built-in visual editor -- no plugin reload needed.

## Key Features

- Players see a fullscreen menu with server info on join or via command
- Players can switch between categories and pages
- Players see their economy balance (Economics, ServerRewards, BankSystem, etc.) in the menu header
- Admins can edit the menu in-game (add text, images, buttons)
- Admins can create unlimited categories and pages
- Pop-up window support
- Localization support -- different languages for different players
- Built-in template installer for quick setup
- Menu blocking during raid block, build block, or combat block
- Auto-show menu when a player connects
- API for integration with other plugins

## Requirements

| Dependency | Required | Description |
|---|---|---|
| **ImageLibrary** | Required | For loading and displaying images in the UI |
| **ServerPanel Installer** | Recommended | Quick installation of ready-made menu templates |
| **ServerPanel PopUps** | Optional | Pop-up windows inside the menu |
| **ServerPanel Migrations** | Optional | Automatic data migration on updates |
| **Notify** / **UINotify** | Optional | For displaying notifications through the Notify system |
| **NoEscape** | Optional | Block the menu during raid block and combat block |
| Oxide / uMod / Carbon | Required | Compatible with Oxide, uMod, and Carbon |

## Quick Start

1. Install **ImageLibrary** on your server.
2. Copy `ServerPanel.cs` and additional files (`ServerPanelInstaller.cs`, `ServerPanelPopUps.cs`, `ServerPanelMigrations.cs`) into `oxide/plugins/`.
3. Restart the server.
4. Join the server and use the installer to pick a template:
 ```
 serverpanelinstaller.open
 ```
5. Choose a template you like and install it.
6. Set up open commands through category data.

:::tip Tip
For first-time setup, the built-in template installer is the easiest way to get started.
:::

## Permissions

| Permission | Who needs it | What it unlocks |
|---|---|---|
| `serverpanel.edit` | Admins | Access to the built-in visual editor. Lets you add, remove, and edit elements, categories, and pages in-game |
| `serverpanelinstaller.admin` | Admins | Access to the template installer |
| `serverpanelpopups.edit` | Admins | Editing pop-up windows |
| Category permissions (configurable) | Players | Access to specific menu categories (set per category) |

## Player Commands

Commands to open the menu are configured by the admin for each category. Default commands depend on how categories are set up.

| Command | Description | Example |
|---|---|---|
| `/(category command)` | Opens the menu on the specified category | `/menu`, `/info`, `/rules`, `/shop`, etc. |

:::info Note
The actual commands depend on how your admin configured the categories. Each category can have one or more commands assigned to it.
:::

## Admin Commands

| Command | Description | Example |
|---|---|---|
| `serverpanelinstaller.open` | Open the template installer (for initial setup) | `serverpanelinstaller.open` |
| `sp.migrations list` | View available data migrations | `sp.migrations list` |
| `sp.migrations run [name]` | Run a data migration | `sp.migrations run all` |

### Edit Mode

Players with the `serverpanel.edit` permission see special buttons in the UI to enter edit mode:

- **Page editing** -- add, delete, clone, and move pages
- **Element editing** -- add text, images, buttons to a page
- **Header editing** -- modify fields in the menu header
- **Category editing** -- create, delete, and configure categories

## Troubleshooting

### Menu doesn't open when typing a command

**Symptom:** Player types the command but the menu doesn't appear.

**Cause:** The command isn't linked to a category, or the player doesn't have permission.

**Fix:** Check that the command is set up in the category data. Make sure the category is enabled and the player has the required permission.

---

### "Plugin is not initialized" error

**Symptom:** Trying to open the menu shows an error message.

**Cause:** Plugin data isn't loaded. You probably need to install a template first.

**Fix:** Use the template installer: `serverpanelinstaller.open` (needs `serverpanelinstaller.admin` permission).

---

### Images aren't loading

**Symptom:** Blank areas appear where images should be.

**Cause:** ImageLibrary isn't installed or hasn't finished loading images.

**Fix:** Make sure ImageLibrary is installed and loaded. Reload ServerPanel. Check that image URLs are accessible.

---

### Menu opens but content is empty

**Symptom:** You see the menu background but no text or elements.

**Cause:** Data migration is needed after a plugin update.

**Fix:** Install `ServerPanelMigrations.cs` and wait for auto-migration, or run it manually: `sp.migrations run all`.

---

### Menu blocked by raid/build block

**Symptom:** Player gets a block message when trying to open the menu.

**Cause:** Menu blocking is enabled for building zones or raid block.

**Fix:** To disable these blocks, change the settings in the config under "Block Settings".

---

### Menu doesn't show on player connect

**Symptom:** Players don't see the menu when they join the server.

**Cause:** Auto-show is disabled or there are no available categories.

**Fix:** Make sure `"Show menu every time player connects to server?"` is set to `true`. Check that at least one category is enabled and visible.
