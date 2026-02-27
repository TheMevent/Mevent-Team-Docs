---
title: "Ultimate Trade Setup"
description: "Step-by-step guide for installing and configuring the Ultimate Trade plugin."
sidebar_position: 2
---

# Ultimate Trade Setup

## Prerequisites

Before installation, make sure you have:

- A Rust server with **Oxide** or **Carbon**
- Access to the server file system

:::info Information
Ultimate Trade does not require any mandatory dependencies. All optional plugins enhance the user experience but are not critical.
:::

## Step 1: Install the Plugin

1. Place the `UltimateTrade.cs` file in the `oxide/plugins` folder (for Oxide) or `carbon/plugins` (for Carbon).
2. Wait for the plugin to compile automatically.

## Step 2: Install Dependencies (optional)

- **Notify / UINotify** -- for visual notifications instead of chat. Install and enable `Work with Notify?` in the config.
- **Duel** -- if your server has duels, the plugin will automatically block trading during an active duel.
- **SkinBox** -- for correct handling of customized items.

## Step 3: Configure Permissions

By default, the `ultimatetrade.use` permission is required to use trading. Grant it to all players:

```
oxide.grant group default ultimatetrade.use
```

### Setting Up VIP Permissions

You can create additional permissions with extended capabilities:

```json
"Permission Settings": {
 "ultimatetrade.vip": {
 "Slot size for this permission": 12,
 "Cooldown after trade for this permission": 30
 },
 "ultimatetrade.premium": {
 "Slot size for this permission": 16,
 "Cooldown after trade for this permission": 10
 }
}
```

Then register and grant the permissions:

```
oxide.grant group vip ultimatetrade.vip
oxide.grant group premium ultimatetrade.premium
```

## Step 4: Main Configuration

Open the configuration file:
- **Oxide:** `oxide/config/UltimateTrade.json`
- **Carbon:** `carbon/configs/UltimateTrade.json`

### Trade Settings

```json
"Trade Settings": {
 "Time to answer trade requests (seconds)": 15,
 "Trade cooldown (Cooldown - seconds)": 60.0,
 "Allow trade if the distance between players is greater than the specified (-1 - disable)": 50.0,
 "Number of active slots for trade": 8,
 "Block trading with players if players are not in a team": false
}
```

:::tip Recommendation
- Set `Time to answer trade requests` to 20-30 seconds to give players enough time.
- A `Trade cooldown` value of 30-60 seconds prevents abuse.
- If you want to restrict trading to nearby players only, reduce the trade distance.
:::

### Restriction Settings

```json
"Restrictions Settings": {
 "Enabled": true,
 "Block accepting requests in BuildingBlock": true,
 "Block sending requests in BuildingBlock": true,
 "Block using trade in flight": true,
 "Block using trade in water": true,
 "Block using trade in dying state": true
}
```

## Step 5: Reload

```
o.reload UltimateTrade
```

:::tip Done!
Players can now use `/trade nickname` for secure item exchanges.
:::

## How Trading Works

1. **Player A** types `/trade PlayerBName`
2. **Player B** receives a notification and types `/trade accept`
3. A trade window interface opens for both players
4. Each player places items in their half of the window
5. Both players confirm the deal (lock their side)
6. Items are automatically exchanged
7. The window closes, and both receive a success notification

:::caution Warning
Items with nested contents (e.g., weapons with attachments) will be locked from modification during the trade for safety.
:::
