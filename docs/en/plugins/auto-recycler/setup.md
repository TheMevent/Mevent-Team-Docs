---
title: "AutoRecycler Setup"
description: "Step-by-step guide for installing and configuring the AutoRecycler plugin"
sidebar_position: 2
---

# Setup and Installation

## System Requirements

- Rust server with Oxide/uMod
- No required dependencies

## Step-by-Step Installation

### Step 1: Install the Plugin

Place the plugin file in the `oxide/plugins` folder on your server.

### Step 2: Restart or Reload

Restart the server or run this command in the console:

```
oxide.reload AutoRecycler
```

### Step 3: Set Up Permissions

Grant players the permissions they need based on which features you want available:

```
oxide.grant group default autorecycler.autorec
oxide.grant group default autorecycler.recvirtual
oxide.grant group vip autorecycler.recboxbuy
oxide.grant group admin autorecycler.admin
```

### Step 4: Configure the Plugin

Open `oxide/config/AutoRecycler.json` and adjust the commands, recycler crate cost, and recycling settings.

### Step 5: Verify Everything Works

1. Join the server and type `/vrec` to test the virtual recycler.
2. Type `/autorec` to test the auto-recycling interface.
3. Type `/recbox` to check recycler crate info.

## Recycler Crate Setup

The recycler crate is a special item (a large wooden box with a unique skin) that automatically recycles any items placed inside it.

### Giving Crates to Players

1. Via console: `recyclercrate.give <player_name>`
2. Via purchase: a player with `autorecycler.recboxbuy` types `/recboxbuy`
3. For testing (admins only): `/recboxtest`

### Using the Crate

1. Place the recycler crate on the ground like a regular box.
2. Put items inside -- they'll be recycled automatically.
3. Recycling results will appear in the crate.

## Verification Checklist

| Feature | Command to Test | Expected Result |
| ------- | -------------------- | ------------------- |
| Virtual recycler | `/vrec` | Recycler interface opens |
| Auto-recycling | `/autorec` | Item selection panel opens |
| Toggle auto-recycling | `/autorectoggle` | On/off confirmation message |
| Crate info | `/recbox` | Purchase cost is displayed |
