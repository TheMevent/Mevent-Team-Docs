---
title: "FAQ -- Kits"
description: "Frequently asked questions about the Kits plugin."
sidebar_position: 5
---

# Frequently Asked Questions -- Kits

### 1. How do I create a new kit?

Join the game with administrator privileges and type the `/editkit` command. The visual editor will open, where you can create a new kit, add items, configure cooldown, price, and access permissions. All changes are saved automatically.

### 2. How do I make a kit available only to VIP players?

When creating a kit in the editor, specify an access permission, for example `kits.vip`. Then grant this permission to the desired group:
```
oxide.grant group vip kits.vip
```

### 3. How do I set up a paid kit?

In the kit editor, specify the kit's price. The currency is configured in the plugin configuration -- you can use Economics, ServerRewards, or in-game items (scrap, wood, etc.).

### 4. Can I give kits to offline players?

Yes, use the `kits.givekit <steamid> <name> [amount]` command. This will grant kit uses to the player, and they can claim it from the kit menu on their next login.

### 5. How do I set up an auto-kit on server join?

Add the kit name to the auto-kits list in the configuration:
```json
"Auto Kits": ["autokit", "autokit_vip", "autokit_premium"]
```
Kits are checked from bottom to top -- the player receives the first kit they have permission for.

### 6. Is kit data reset on wipe?

By default, data is not reset. To enable automatic reset, set in the configuration:
```json
"Automatic wipe on wipe": true
```
You can also reset data manually with the `kits.reset data all` command.

### 7. How do I link kits to NPCs on the map?

In the configuration, add the NPC ID and kit list:
```json
"NPC Kits": {
 "YOUR_NPC_ID": {
 "Description": "Free kits",
 "Kits": ["starter", "daily"]
 }
}
```
When interacting with the NPC, the player will see the linked kits.

### 8. How do I allow claiming certain kits during raid block?

Add kit names to the NoEscape whitelist in the configuration:
```json
"Whitelist for NoEscape": ["medical_kit", "emergency_kit"]
```

### 9. How do I change the interface appearance?

Run the `kits.template` command from the server console to view available templates. For example:
```
kits.template fullscreen rust content
```
Fullscreen and embedded menu templates are available in various styles.

### 10. Is the plugin compatible with Carbon?

Yes, the Kits plugin is fully compatible with both Oxide (uMod) and Carbon. No additional configuration is required for Carbon.

### 11. How do I enable Discord logging?

In the configuration, find the "Discord Logging Settings" section and configure:
1. Set `Enabled: true` for the desired type (claiming/granting)
2. Specify the Discord webhook URL
3. Configure the message format

### 12. How do I delete all kits and start from scratch?

Run the `kits.reset kits` command from the server console. This will delete all created kits. Player data will be preserved -- use `kits.reset data all` to reset it.
