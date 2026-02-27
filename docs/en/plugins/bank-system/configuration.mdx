---
title: "Bank System Configuration"
description: "Full reference for all Bank System configuration settings"
sidebar_position: 3
---

# Bank System Configuration

The config file is located at:
- **Oxide:** `oxide/config/BankSystem.json`
- **Carbon:** `carbon/configs/BankSystem.json`

## General Settings

| Parameter | Default | Allowed Values | Description |
|---|---|---|---|
| Work with LangAPI? | `true` | `true` / `false` | Enable multi-language support via LangAPI |
| Work with Notify? | `true` | `true` / `false` | Use the Notify plugin for notifications |
| Enable Offline Image Mode | `false` | `true` / `false` | Offline image mode (if the server has no internet access) |
| Commands | `["bank"]` | Array of strings | Chat commands for opening the bank interface |
| Permission | `""` (empty) | String | Permission required to use the bank. If empty, everyone has access |
| Starting balance | `100` | Integer >= 0 | Starting balance when a bank card is created |
| Card auto-creation | `false` | `true` / `false` | Automatically create a card on first connection |
| Use card expiration date? | `true` | `true` / `false` | Enable bank card expiration |
| Card expiry date (in days) | `7` | Integer > 0 | Card validity period in days |

:::tip Recommendation
Set `Card auto-creation` to `true` so new players get a card right away and can use ATMs without extra steps.
:::

## Currency Settings

| Parameter | Default | Description |
|---|---|---|
| Enable item split control? | `true` | Controls item splitting. Disable if you get errors with stacking plugins |
| Display Name | `"RUSTNote"` | Currency name in-game |
| Short Name | `"sticks"` | Base Rust item used for the currency |
| Skin | `2536195910` | Item skin (determines the banknote's appearance) |

:::danger Important
Don't change `Short Name` and `Skin` after launching the server with active players. Existing currency will stop being recognized.
:::

## ATM Settings

| Parameter | Default | Description |
|---|---|---|
| Minimum deposit (amount) | `1` | Minimum deposit amount |
| Minimum withdrawal (amount) | `1` | Minimum withdrawal amount |
| Enable Deposit fee? | `true` | Enable deposit fees |
| Minimum deposit fee | `0` | Minimum deposit fee (%) |
| Maximum deposit fee | `10` | Maximum deposit fee (%) |
| Default deposit fee | `1` | Default deposit fee (%) |
| Step deposit fee | `0.1` | Deposit fee adjustment step |
| Enable Withdrawal fee? | `true` | Enable withdrawal fees |
| Minimum withdrawal fee | `0` | Minimum withdrawal fee (%) |
| Maximum withdrawal fee | `10` | Maximum withdrawal fee (%) |
| Default withdrawal fee | `1` | Default withdrawal fee (%) |
| Step withdrawal fee | `0.1` | Withdrawal fee adjustment step |
| Enable breakage? | `true` | Enable ATM degradation from use |
| Default breakage percentage | `1` | Degradation percentage per operation |
| Display Name | `"ATM"` | ATM display name |
| Skin | `2551771822` | Skin for the ATM (a vending machine with this skin = ATM) |
| Shop Name | `"ATM #{id}"` | Map name. Variables: `{id}`, `{owner}` |
| Commands to open ATM menu | `["secret.open.atm"]` | Commands to open the ATM menu |
| Permission to open ATM menu via command | `"banksystem.openatm"` | Permission for opening the ATM via command |
| Disable the close button in the ATM header | `false` | Hide the close button in the ATM header |

### Degradation by Permission

```json
"Breakage percentage during operation": {
 "banksystem.vip": 0.7,
 "banksystem.premium": 0.5
}
```

Players with these permissions cause less ATM degradation.

### Repair Settings

```json
"Repair Settings": {
 "Items (for 1%)": [
 { "Short Name": "scrap", "Amount": 2, "Skin": 0, "Title": "" },
 { "Short Name": "metalpipe", "Amount": 1, "Skin": 0, "Title": "" },
 { "Short Name": "metal.fragments", "Amount": 15, "Skin": 0, "Title": "" }
 ]
}
```

Resource amounts are per 1% of repair. If an ATM degraded by 30%, you'll need 30x these resources.

### Monument Spawns

```json
"Spawn Settings": {
 "Monuments": {
 "compound": {
 "Enabled": true,
 "Display Name": "ATM",
 "Position": { "x": -3.5, "y": 1.15, "z": 2.7 },
 "Rotation": -90.0,
 "Deposit Fee": 0.0,
 "Withdraw Fee": 0.0
 },
 "bandit": {
 "Enabled": true,
 "Display Name": "ATM",
 "Position": { "x": 34.2, "y": 2.35, "z": -24.7 },
 "Rotation": 135.0,
 "Deposit Fee": 0.0,
 "Withdraw Fee": 0.0
 }
 }
}
```

## Tracking Settings

| Parameter | Default | Description |
|---|---|---|
| Handing out an award? | `false` | Give currency directly to inventory (instead of depositing to account) |
| Cost Table | see below | Payout rates for mining and looting |
| Collectible Items Cost Table | see below | Payout rates for picking up ground items |

```json
"Cost Table (shortname - cost)": {
 "sulfur.ore": 5.0,
 "metal.ore": 5.0,
 "hq.metal.ore": 5.0,
 "stone.ore": 5.0,
 "crate_elite": 10.0,
 "crate_normal": 7.0,
 "crate_normal_2": 4.0
},
"Collectible Items Cost Table (shortname - cost)": {
 "sulfur.ore": 0.5,
 "metal.ore": 0.5,
 "hq.metal.ore": 0.5,
 "stones": 0.5
}
```

## Economy Settings

| Parameter | Default | Description |
|---|---|---|
| Use own economic system? | `true` | Use the plugin's built-in economy |
| Plugin name | `"Economics"` | External economy plugin name |
| Balance add hook | `"Deposit"` | Hook for adding funds |
| Balance remove hook | `"Withdraw"` | Hook for removing funds |
| Balance show hook | `"Balance"` | Hook for checking balance |

## Drop Settings

```json
"Drop Settings": [
 {
 "Enabled": true,
 "Prefab": "assets/bundled/prefabs/radtown/crate_normal.prefab",
 "Chance": 50,
 "Min Amount": 2,
 "Max Amount": 5
 },
 {
 "Enabled": true,
 "Prefab": "assets/bundled/prefabs/radtown/loot_barrel_2.prefab",
 "Chance": 5,
 "Min Amount": 2,
 "Max Amount": 5
 }
]
```

| Parameter | Description |
|---|---|
| Enabled | Enable drops for this container |
| Prefab | Container prefab (crate, barrel, etc.) |
| Chance | Drop chance (0-100) |
| Min Amount | Minimum currency amount |
| Max Amount | Maximum currency amount |

## NPC Settings

```json
"NPC Settings": {
 "NPCs": ["1234567", "7654321"]
}
```

List of NPC Steam IDs that open the bank interface when interacted with.

## Wipe Settings

| Parameter | Default | Description |
|---|---|---|
| Wipe Players? | `false` | Clear player data on wipe |
| Wipe Logs? | `true` | Clear logs on wipe |
| Wipe ATMs? | `true` | Clear ATM data on wipe |

## Log Settings

| Parameter | Default | Description |
|---|---|---|
| Collect Gather logs? | `true` | Log resource gathering |
| Collect Transfers logs? | `true` | Log transfers |

## UI Settings

| Parameter | Default | Description |
|---|---|---|
| Bank \| Width | `900` | Bank window width |
| Bank \| Height | `595` | Bank window height |
| Show Transactions history? | `true` | Show transaction history |
| Show Gather history? | `true` | Show gathering history |
| Show card? | `true` | Show the bank card in the interface |
| Show Transfers? | `true` | Show the transfers section |

## Color Settings

All colors use HEX format with opacity (0-100):

```json
"Colors": {
 "First color": { "HEX": "#0E0E10", "Opacity (0 - 100)": 100 },
 "Second color": { "HEX": "#161617", "Opacity (0 - 100)": 100 },
 "Third color": { "HEX": "#4B68FF", "Opacity (0 - 100)": 100 }
}
```

## Images

| Parameter | Description |
|---|---|
| Card Image | URL of the bank card image |
| Transit Image | URL of the deposit button image |
| Withdraw Image | URL of the withdrawal button image |
| Transfer Image | URL of the transfer button image |
| Exit Image | URL of the exit button image |

<details>
<summary>Full default configuration</summary>

```json
{
 "Work with LangAPI?": true,
 "Work with Notify?": true,
 "Enable Offline Image Mode": false,
 "Commands": ["bank"],
 "Permission (example: banksystem.use)": "",
 "Starting balance": 100,
 "Card Image": "https://gitlab.com/TheMevent/PluginsStorage/raw/main/Images/BankSystem/card.png",
 "Transit Image": "https://gitlab.com/TheMevent/PluginsStorage/raw/main/Images/BankSystem/deposit.png",
 "Withdraw Image": "https://gitlab.com/TheMevent/PluginsStorage/raw/main/Images/BankSystem/withdraw.png",
 "Transfer Image": "https://gitlab.com/TheMevent/PluginsStorage/raw/main/Images/BankSystem/transfer.png",
 "Exit Image": "https://gitlab.com/TheMevent/PluginsStorage/raw/main/Images/BankSystem/exit.png",
 "Disable the close button in the ATM header": false,
 "Currency Settings": {
 "Enable item split control?": true,
 "Display Name": "RUSTNote",
 "Short Name": "sticks",
 "Skin": 2536195910
 },
 "Card auto-creation": false,
 "Use card expiration date?": true,
 "Card expiry date (in days)": 7,
 "ATM Settings": {
 "Minimum deposit (amount)": 1.0,
 "Minimum withdrawal (amount)": 1.0,
 "Enable Deposit fee?": true,
 "Default deposit fee": 1.0,
 "Enable Withdrawal fee?": true,
 "Default withdrawal fee": 1.0,
 "Enable breakage?": true,
 "Default breakage percentage during operation": 1.0,
 "Display Name": "ATM",
 "Skin": 2551771822,
 "Shop Name ({id} {owner})": "ATM #{id}"
 },
 "Economy Settings": {
 "Use own economic system?": true,
 "Plugin name": "Economics",
 "Balance add hook": "Deposit",
 "Balance remove hook": "Withdraw",
 "Balance show hook": "Balance"
 },
 "Wipe Settings": {
 "Wipe Players?": false,
 "Wipe Logs?": true,
 "Wipe ATMs?": true
 }
}
```

</details>
