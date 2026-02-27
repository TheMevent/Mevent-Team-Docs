---
title: "Setup -- King Of Hill"
description: "Installation guide for the King Of Hill mode for Multi Events"
sidebar_position: 2
---

# Setup

## Requirements

Before installing, make sure you have:

| Component | Required | Description |
|---|---|---|
| Multi Events | Required | Core events plugin |
| Image Library | Recommended | Image loading and caching for the UI |
| Notify / UINotify | Optional | Pop-up notifications for players |
| Multi Events Inventory | Optional | Event inventory reward delivery |
| Multi Events Leaderboard | Optional | Global event stats |

## Step-by-Step Installation

### Step 1. Download the Plugin File

Download the mode file and place it in your server's plugin folder:

- **Oxide**: `oxide/plugins/`
- **Carbon**: `carbon/plugins/`

### Step 2. Load the Plugin

Restart the server or load the plugin via the server console. The config file is created automatically on first load.

### Step 3. Configure

The config file is created automatically on first launch. See [Configuration](./configuration) for details.

### Step 4. Test It

Run `kingofhill.start` in the server console to manually start the event and verify everything works.

## Updating

When updating, just replace the file in the plugins folder. The config updates automatically and keeps your settings.

## Load Order

The plugin auto-registers with Multi Events on load. If Multi Events loads later, registration happens automatically.
