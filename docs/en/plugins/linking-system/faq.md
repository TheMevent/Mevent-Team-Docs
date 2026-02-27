---
title: "FAQ -- Linking System"
description: "Frequently asked questions about the Linking System plugin for Rust servers."
sidebar_position: 5
---

# Frequently Asked Questions (FAQ)

## 1. The bot won't connect. What do I do?

Check the following:
1. The Discord bot (LinkBot) is configured and running.
2. The bot has access to your server's RCON.
3. RCON is enabled in your server settings.
4. There are no connection errors in the server console.

When the bot connects successfully, you'll see: `LinkBot is connected`.

---

## 2. How do I change the group for linked players?

Change this value in the config:
```json
"What group for linked players": "discord_vip"
```

Create the group and set up its privileges:
```
oxide.group add discord_vip
```

---

## 3. The code is generated but linking doesn't confirm. Why?

Possible reasons:
1. **Bot isn't active** -- check the bot status with `/link status`.
2. **Wrong channel** -- the player is entering the code in the wrong Discord channel.
3. **Code expired** -- generate a new code.
4. **RCON error** -- check the bot's RCON connection.

---

## 4. How often can a new code be generated?

The default cooldown is 60 seconds. Change it in the config:
```json
"Code generation delay (sec.)": 30
```

---

## 5. Can I disable the UI and just use commands?

Yes. Set this in the config:
```json
"Use UI ?": false
```

Players will then manage linking through commands:
- `/link status` -- check status
- `/link code` -- get a code
- `/link remove` -- remove the link

---

## 6. How do I set up bonuses for linking?

Bonuses are configured through an Oxide group. Create the group:
```
oxide.group add discord
```

Then set up whatever privileges you want for that group through other plugins. The `"Rewards UI elements"` section only controls what's displayed in the UI.

---

## 7. A player wants to link a different Discord account. How?

1. First unlink the current account: `/link remove` or through the UI.
2. Then generate a new code and link the other account.

---

## 8. How do I show an item as a reward in the UI?

Use the `"Element itemId"` parameter with the item ID:

```json
{
 "Element image (assets or url)": "",
 "Element itemId": -852563019,
 "Element skinId": 0,
 "Element text": "",
 "Element text Anchor": "LowerRight"
}
```

If `itemId` is set, the item image will be displayed automatically.

---

## 9. Does the plugin support multiple servers?

The plugin runs independently on each server. If you have multiple servers, install the plugin and bot on each one. Linking works independently per server.

---

## 10. How do I check if a specific player's account is linked?

Players can check their own status with:
```
/link status
```

Admins can check link data through the plugin's data files in the `oxide/data/LinkingSystem/` folder.
