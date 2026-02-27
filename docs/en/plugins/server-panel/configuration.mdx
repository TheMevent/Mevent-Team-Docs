---
title: "ServerPanel Configuration"
description: "Full reference for all ServerPanel plugin configuration options."
sidebar_position: 3
---

# ServerPanel Configuration

Config file location: `oxide/config/ServerPanel.json`

## Main Settings

| Parameter | Default | Allowed Values | Description |
|---|---|---|---|
| Work with Notify? | `true` | `true` / `false` | Use Notify or UINotify for notifications. When disabled, notifications go to chat instead. |
| Enable Offline Image Mode | `false` | `true` / `false` | Load images from a local folder instead of URLs. Handy for servers without reliable internet. |
| Cooldown between actions (in seconds) | `0.2` | Number (seconds) | Minimum interval between player actions in the UI. Prevents click spam. |

:::tip Recommendation
A cooldown of 0.2 seconds works well for most servers. Only increase it if you're having performance issues.
:::

## Economy Header Fields

The `"Economy Header Fields"` section shows the player's balance at the top of the menu.

### Supported Economy Plugins

Three currencies are configured by default:

| Economy Plugin | Description |
|---|---|
| Economics | Standard currency ($) |
| ServerRewards | Reward points (RP) |
| BankSystem | Banking system ($) |

### Economy Field Parameters

| Parameter | Description | Recommendation |
|---|---|---|
| Enabled | Show this currency | Disable unused ones |
| Type (Plugin/Item) | Currency type: plugin or in-game item | `Plugin` in most cases |
| Plugin name | Name of the economy plugin | Must match the plugin name exactly |
| Balance show hook | Function name to get the balance | Depends on the plugin |
| Balance add hook | Function name to add balance | Depends on the plugin |
| Balance remove hook | Function name to remove balance | Depends on the plugin |
| ShortName | Item short name (for Item type) | e.g., `scrap` |
| Skin | Item skin ID (0 = any) | 0 for standard items |
| Lang Key (for Title) | Localization key for the currency name | Must be in the lang file |
| Lang Key (for Balance) | Localization key for showing the balance | Use `{0}` as a placeholder for the amount |
| Update key | Unique key for value updates | Must be unique |

### Adding a Custom Currency

To add support for a new economy plugin, add a new entry to the `"Economy Header Fields"` array:

```json
{
 "Enabled": true,
 "Economy Settings": {
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "PluginName",
 "Balance add hook": "AddFunction",
 "Balance remove hook": "RemoveFunction",
 "Balance show hook": "BalanceFunction",
 "ShortName": "",
 "Display Name (empty - default)": "",
 "Skin": 0,
 "Lang Key (for Title)": "Economy.Custom.Title",
 "Lang Key (for Balance)": "Economy.Custom.Balance"
 },
 "Update key (MUST BE UNIQUE)": "{economy_custom}"
}
```

:::warning Important
The Update key must be unique for each economy field. Duplicates will cause incorrect data updates.
:::

## Block Settings

The `"Block Settings"` section controls when players can't open the menu.

| Parameter | Default | Description |
|---|---|---|
| Block the opening during a building block? | `false` | Prevent opening when the player is in a building-blocked zone |
| Block the opening during a raid block? | `false` | Prevent opening during raid block (requires NoEscape) |
| Block the opening during a combat block? | `false` | Prevent opening during combat block (requires NoEscape) |

:::info Note
Raid block and combat block features require the **NoEscape** plugin to be installed.
:::

## Auto-Open Settings

The `"Auto-Open Settings"` section manages automatic menu display.

| Parameter | Default | Description |
|---|---|---|
| Show menu every time player connects to server? | `true` | Automatically show the menu each time a player joins the server. If `false`, the menu can only be opened by command. |

## Plugin Data

The actual menu content is stored in data files, not in the config:

| Data File | Description |
|---|---|
| `oxide/data/ServerPanel/Categories.json` | Menu categories (names, commands, permissions, visibility) |
| `oxide/data/ServerPanel/Template.json` | UI template (sizes, colors, positions) |
| `oxide/data/ServerPanel/Localization.json` | Localization settings |
| `oxide/data/ServerPanel/HeaderFields.json` | Menu header elements |
| `oxide/data/ServerPanel/Players.json` | Player data (opened menus) |

:::tip Tip
To back up or transfer your menu to another server, just copy the entire `oxide/data/ServerPanel/` folder along with the config file.
:::

<details>
<summary>Full default config</summary>

```json
{
 "Work with Notify?": true,
 "Enable Offline Image Mode": false,
 "Cooldown between actions (in seconds)": 0.2,
 "Economy Header Fields": [
 {
 "Enabled": true,
 "Economy Settings": {
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "Economics",
 "Balance add hook": "Deposit",
 "Balance remove hook": "Withdraw",
 "Balance show hook": "Balance",
 "ShortName": "",
 "Display Name (empty - default)": "",
 "Skin": 0,
 "Lang Key (for Title)": "Economy.Economics.Title",
 "Lang Key (for Balance)": "Economy.Economics.Balance"
 },
 "Update key (MUST BE UNIQUE)": "{economy_economics}"
 },
 {
 "Enabled": true,
 "Economy Settings": {
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "ServerRewards",
 "Balance add hook": "AddPoints",
 "Balance remove hook": "TakePoints",
 "Balance show hook": "CheckPoints",
 "ShortName": "",
 "Display Name (empty - default)": "",
 "Skin": 0,
 "Lang Key (for Title)": "Economy.ServerRewards.Title",
 "Lang Key (for Balance)": "Economy.ServerRewards.Balance"
 },
 "Update key (MUST BE UNIQUE)": "{economy_server_rewards}"
 },
 {
 "Enabled": true,
 "Economy Settings": {
 "Type (Plugin/Item)": "Plugin",
 "Plugin name": "BankSystem",
 "Balance add hook": "API_BankSystemDeposit",
 "Balance remove hook": "API_BankSystemWithdraw",
 "Balance show hook": "API_BankSystemBalance",
 "ShortName": "",
 "Display Name (empty - default)": "",
 "Skin": 0,
 "Lang Key (for Title)": "Economy.BankSystem.Title",
 "Lang Key (for Balance)": "Economy.BankSystem.Balance"
 },
 "Update key (MUST BE UNIQUE)": "{economy_bank_system}"
 }
 ],
 "Block Settings": {
 "Block the opening during a building block?": false,
 "Block the opening during a raid block?": false,
 "Block the opening during a combat block?": false
 },
 "Auto-Open Settings": {
 "Show menu every time player connects to server?": true
 }
}
```

</details>
