---
title: "BattlePass Setup"
description: "Step-by-step guide for installing and configuring the BattlePass plugin"
sidebar_position: 2
---

# BattlePass Setup

## Step 1: Install Dependencies

Install **ImageLibrary** -- it's required for the interface to work.

Optional plugins for extra features:

| Plugin | Purpose |
|---|---|
| Notify / UINotify | Visual notifications instead of chat messages |
| NoEscape | Block battle pass during raids/combat |
| Economics / ServerRewards | External economy for immediate rewards |

## Step 2: Install the Plugin

1. Place the plugin file in `oxide/plugins`.
2. Restart the server or run `o.reload BattlePass`.
3. The config file will be created at `oxide/config/BattlePass.json`.

## Step 3: Set Up Permissions

```
o.grant group default battlepass.use
o.grant group vip battlepass.vip
o.grant group premium battlepass.premium
```

## Step 4: Configure Economy

Open `oxide/config/BattlePass.json` and set up the two currency types. Each currency has its own name, image, and earning rates.

## Step 5: Configure Missions

Missions are defined in the config with these properties:
- Mission type (kill, gather, craft, loot, etc.)
- Required amount to complete
- Currency rewards (first and second)
- Refresh interval

## Step 6: Configure Cases

Each case has:
- A cost in first or second currency
- A list of possible rewards with drop chances
- Permission requirements (optional)

## Step 7: Verify

1. Join the server and type `/pass`.
2. Complete a mission and confirm currency is earned.
3. Open a case and verify the reward system works.

## Integration Table

| Plugin | How it's used |
|---|---|
| ImageLibrary | Required -- UI images |
| Notify | Optional -- visual notifications |
| NoEscape | Optional -- blocks rewards during raid/combat |
| Economics | Optional -- external economy for some reward types |
