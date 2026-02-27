---
title: "AutoRecycler Commands"
description: "Full list of commands and permissions for the AutoRecycler plugin"
sidebar_position: 4
---

# Commands and Permissions

## Permissions

| Permission | Description |
| ---------------------------------- | ----------------------------------------------------------- |
| `autorecycler.admin` | Full access to all plugin features |
| `autorecycler.autorec` | Access to the auto-recycling settings interface |
| `autorecycler.recvirtual` | Access to the virtual recycler via command |
| `autorecycler.recyclercratetest` | Access to recycler crate testing |
| `autorecycler.characteristics` | Access to toggle item recycling on/off (admin) |
| `autorecycler.recboxbuy` | Permission to purchase a recycler crate |

### Granting Permissions

For a specific player:
```
oxide.grant user <steamid> autorecycler.recvirtual
oxide.grant user <steamid> autorecycler.autorec
```

For a group:
```
oxide.grant group default autorecycler.recvirtual
oxide.grant group default autorecycler.autorec
oxide.grant group vip autorecycler.recboxbuy
oxide.grant group admin autorecycler.admin
```

## Player Chat Commands

### Virtual Recycler

```
/vrec
/virtualrec
/recvirtual
```

Opens the virtual recycler. Works just like a regular recycler but can be accessed from anywhere. Requires `autorecycler.recvirtual`.

### Auto-Recycling Interface

```
/autorec
/ar
/autorecycler
```

Opens a graphical panel where you can select which items to auto-recycle. Requires `autorecycler.autorec`.

**How to use it:**
1. Open the panel with `/autorec`.
2. Items are grouped by category (on the right).
3. Click an item to toggle its auto-recycling.
4. Green highlight = auto-recycling enabled, red = disabled.

### Toggle Auto-Recycling

```
/autorectoggle
```

Quickly enables or disables all auto-recycling. The status is shown in chat: green for enabled, red for disabled.

### Recycler Crate Info

```
/recbox
```

Shows the current cost of buying a recycler crate.

### Buy a Recycler Crate

```
/recboxbuy
```

Purchases a recycler crate for the resources specified in the config. Requires `autorecycler.recboxbuy`.

## Admin Commands

### Chat Commands

| Command | Description |
| --------------- | ----------------------------------------------------- |
| `/recboxtest` | Gives you 1000 recycler crates (admins only) |

### Console Commands

| Command | Description |
| ------------------------------------- | ----------------------------------------------- |
| `recyclercrate.give` | Gives yourself a crate (if run from in-game) |
| `recyclercrate.give [player_name]` | Gives a recycler crate to the specified player |

**Examples:**

```
recyclercrate.give
recyclercrate.give PlayerName
recyclercrate.give 76561198012345678
```

## Auto-Recycling Interface Guide

### Navigation

- **Categories** (right panel): switch between item categories (All, Weapons, Clothing, Resources, etc.)
- **Pages** (bottom panel): navigate through pages of items
- **Search**: search button for quickly finding items

### Managing Items

- Click an item to toggle its auto-recycling state
- Green background with a checkmark -- auto-recycling is on
- Red background with an X -- auto-recycling is off

### Admin Features

Admins with `autorecycler.characteristics` see an extra "ENABLED/DISABLED" button to globally enable or disable recycling for a specific item across all players.
