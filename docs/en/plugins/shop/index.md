---
title: "Shop"
description: "A full-featured shop for Rust servers with buying, selling, transfers, NPC vendors, vending machines, and multi-currency support."
version: "2.4.12"
tags: [rust, plugin, shop, economy]
sidebar_position: 1
---

# Shop

## What does this plugin do?

**Shop** adds a full in-game store with a clean UI where players buy and sell items for in-game currency. It supports item categories, NPC vendors, vending machine integration, a discount system, shopping cart, favorites, purchase limits, multiple currencies, and money transfers between players.

## Key Features

- Players can buy and sell items through a graphical UI
- Players can transfer money to each other
- Players can add items to favorites and use repeat purchases
- Admins can configure categories, prices, and limits in-game
- Admins can bind the shop to NPCs and vending machines
- Multiple simultaneous currencies (Economics, ServerRewards, items)
- Permission-based discount system
- Shop blocking after wipe, respawn, or during duels
- Purchase/sale logging to file, console, and Discord
- Shop design templates with one-command installation

## Requirements

- **Oxide** or **Carbon** (latest version)
- **ImageLibrary** -- required for the UI
- **Notify** or **UINotify** -- recommended for notifications (optional)
- **Economics** or another economy plugin -- for the main currency (optional, you can use items instead)
- **LangAPI** -- for multi-language support (optional)

## Quick Start

1. Install **ImageLibrary** on your server.
2. Place `Shop.cs` in your `oxide/plugins` folder.
3. Restart the server or run `o.reload Shop`.
4. Run `/shop.install` in chat (with admin rights) to install a shop template.
5. Configure the settings and shop items.
6. Players can use `/shop` to open the store.

## Permissions

| Permission | Who needs it | What it unlocks |
|---|---|---|
| `shop.use` (configurable) | Players | Access to the shop UI (if set in config) |
| `shop.admin` | Admins | Full shop editing access, template installation |
| `shop.free` | Special players | Free purchases (bypasses prices) |
| `shop.setvm` | Admins | Bind the shop to vending machines |
| `shop.setnpc` | Admins | Bind the shop to NPCs |
| `shop.bypass.dlc` | Players | Bypass DLC item restrictions |
| `shop.default` | Regular players | 0% discount (configurable) |
| `shop.vip` | VIP players | 10% discount (configurable) |
| `shop.buyagain` (configurable) | Players | Access to repeat purchase feature |
| `shop.usenpc` (configurable) | Players | Access to specific NPC shops |

## Player Commands

| Command | Description | Example |
|---|---|---|
| `/shop` | Open the shop UI | `/shop` |
| `/shops` | Alternative command to open the shop | `/shops` |

:::tip Note
Commands are set in the config. By default, `/shop` and `/shops` are available.
:::

## Admin Commands

| Command | Description | Example |
|---|---|---|
| `/shop.install` | Install a shop template | `/shop.install` |
| `/shop.setvm` | Bind the shop to a vending machine (look at it) | `/shop.setvm` |
| `/shop.setnpc` | Bind the shop to an NPC (look at it) | `/shop.setnpc` |

## Troubleshooting

### Shop won't open
**Symptom:** The `/shop` command does nothing.
**Cause:** ImageLibrary isn't installed or the shop template hasn't been initialized.
**Fix:** Install ImageLibrary and run `/shop.install` with admin rights.

### "Shop is initializing" message
**Symptom:** A message about initialization appears when trying to open the shop.
**Cause:** The plugin is still loading item images.
**Fix:** Wait for loading to finish (usually 1-3 minutes after server start).

### Player can't buy a DLC item
**Symptom:** An error appears when purchasing a DLC item.
**Cause:** The player doesn't own the DLC.
**Fix:** Grant the player `shop.bypass.dlc` or remove DLC items from the shop.

### Wrong prices after update
**Symptom:** Prices display incorrectly or got reset.
**Cause:** The plugin update changed the data structure.
**Fix:** Check the shop data and recreate if needed with `/shop.install`.

### Money transfers aren't working
**Symptom:** Players can't send money to each other.
**Cause:** Transfers are disabled in the config.
**Fix:** Set `Enable money transfers between players?` to `true`.

### Shop blocked after respawn
**Symptom:** Player can't open the shop right after dying.
**Cause:** Respawn block is enabled.
**Fix:** This is expected behavior. Wait the configured time (default: 60 seconds) or disable `Respawn Block` in the config.
