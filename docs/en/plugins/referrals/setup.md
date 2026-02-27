---
title: "Referrals Setup"
description: "Step-by-step guide to installing and configuring the Referrals plugin for your Rust server."
sidebar_position: 2
---

# Referrals Setup

This guide walks you through installing the referral system.

## Step 1: Install Dependencies

### ImageLibrary (required)

1. Download **ImageLibrary** from [umod.org](https://umod.org/plugins/image-library).
2. Place `ImageLibrary.cs` in your `oxide/plugins/` folder.
3. Make sure the plugin loads without errors.

### Optional Dependencies

- **Notify** -- for graphical notifications
- **NoEscape** -- for blocking rewards during raid/combat

## Step 2: Install the Plugin

1. Copy `Referrals.cs` into your server's `oxide/plugins/` folder.
2. The plugin will load automatically.
3. Check the console for any errors.

The config file will be created automatically at:
```
oxide/config/Referrals.json
```

## Step 3: Set Up Permissions (optional)

By default, the permission field is empty (`""`), which means everyone has access. If you want to restrict it:

```json
"Permission (example: referrals.use)": "referrals.use"
```

Then grant the permission:
```
oxide.grant group default referrals.use
```

## Step 4: Configure Rewards

Open `oxide/config/Referrals.json` and set up:

1. **Awards** -- rewards for the referrer based on invite count
2. **Award for the player who activates the promo code** -- rewards for the person using the code

## Step 5: Set Minimum Playtime

To protect against multi-accounts, configure the minimum playtime needed to activate a promo code:

```json
"Minimum play time (seconds)": 3600
```

Default: 3600 seconds (1 hour).

## Step 6: Test It Out

1. Join the server.
2. Type `/ref` in chat -- the UI with your promo code should open.
3. From another account, type `/promo <code>` to activate it.

## Step 7: Reload the Plugin

After changing the config:

```
oxide.reload Referrals
```

## Updating the Plugin

When updating:

1. Replace `Referrals.cs` with the new version.
2. The plugin will automatically update the config.
3. Reload the plugin.

:::note Note
Back up your config and data files before updating.
:::
