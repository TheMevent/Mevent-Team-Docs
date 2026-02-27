---
title: "Installation -- Cases"
description: "Step-by-step guide for installing and configuring the Cases plugin."
sidebar_position: 2
---

# Cases Installation

## Step 1: Install Dependencies

Required plugin:

- **ImageLibrary** -- required for displaying case and item images in the interface.

Optional plugins:

| Plugin | Purpose |
|---|---|
| PlaytimeTracker | Award cases based on time spent on the server |
| Notify / UINotify | Attractive pop-up notifications |
| ServerPanel | Server menu integration |
| Economics / ServerRewards | Economy for purchasing cases |

## Step 2: Download the Plugin

1. Copy the plugin file to the folder:
 - **Oxide**: `server/SERVER_NAME/oxide/plugins/`
 - **Carbon**: `server/SERVER_NAME/carbon/plugins/`

2. The plugin will load automatically. If the server is running:
 ```
 o.reload Cases
 ```

3. The configuration file will be created automatically:
 - `oxide/config/Cases.json`

## Step 3: Configure Cases

Open `Cases.json` and configure:

### Main Commands
```json
"Commands": ["cases", "opencase"]
```

### Economy
Choose the currency type and payment plugin:
```json
"Economy": {
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "Economics",
 "Balance add hook": "Deposit",
 "Balance remove hook": "Withdraw",
 "Balance show hook": "Balance"
}
```

### Cases
Each case contains:
- Unique ID
- Name and image
- Cost
- Access permission (optional)
- List of items with drop chances

## Step 4: Configure the Bonus Case

The bonus case allows players to open a case for free once per set period:

- `Enabled` -- enable/disable
- `CooldownTime` -- time between openings (in seconds, default 86400 = 24 hours)
- `Permission` -- access permission (empty string = available to everyone)

## Step 5: Configure Playtime Cases

If PlaytimeTracker is installed, set up automatic case awarding:

```json
"Playtime Tracker Settings": {
 "Enabled": true,
 "Cases": {
 "3600": 1,
 "14400": 2,
 "28800": 3,
 "86400": 4
 }
}
```

In this example: after 1 hour of play -- case ID 1, after 4 hours -- case ID 2, and so on.

## Step 6: Grant Permissions

```
oxide.grant group default Cases.edit
oxide.grant user <steamid> cases.vip
```

## Step 7: Verification

1. Join the game and type `/cases`
2. Verify that cases are displayed
3. Try opening a case
4. Check that the bonus case works

## Compatibility

| Platform | Support |
|---|---|
| Oxide (uMod) | Yes |
| Carbon | Yes |
