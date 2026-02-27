---
title: "FAQ -- Daily Rewards"
description: "Frequently asked questions about the Daily Rewards plugin for Rust servers."
sidebar_position: 5
---

# Frequently Asked Questions (FAQ)

## 1. How do I reset all players' progress?

Run the following command in the server console:
```
dailyrewards.wipe
```
This will reset all players' progress. For automatic reset on wipe, enable the `"Wipe on new map save": true` parameter in the configuration.

---

## 2. How do I add a new day with a reward?

In the configuration, under the `"Daily awards"` section, add a new entry with the day number. Copy the structure of an existing day and modify the parameters:

```json
"8": {
 "Enabled": true,
 "Image": "https://example.com/day8.png",
 "Title": "BONUS",
 "Awards": [
 {
 "Type": "Item",
 "ShortName": "sulfur",
 "Amount": 5000,
 "Skin": 0
 }
 ],
 "IsSpecialDay": true
}
```

---

## 3. How do I set up currency distribution via command?

Use the "Command" reward type with `%steamid%` substitution:

```json
{
 "Type": "Command",
 "Command": "deposit %steamid% 100",
 "Amount": 1,
 "Image": "https://example.com/coins.png"
}
```

`%steamid%` is automatically replaced with the player's SteamID.

---

## 4. Can I change the cooldown time for VIP players?

Yes. In the `"Cooldown Settings"` section, add the desired permissions and their cooldowns:

```json
{
 "Cooldown Settings": {
 "DefaultCooldown": 3600,
 "Cooldowns": {
 "dailyrewards.vip": 1800,
 "dailyrewards.premium": 900
 }
 }
}
```

Then grant the corresponding permissions:
```
oxide.grant group vip dailyrewards.vip
```

---

## 5. A player cannot claim a reward. What is the reason?

Possible causes:
1. **Cooldown not completed** -- the player needs to spend more time on the server.
2. **Post-wipe block** -- if the `UseCooldownAfterWipe` option is enabled.
3. **Raid block / combat block** -- if the corresponding options are enabled in the inventory settings.
4. **Another player's cupboard zone** -- if the `UseBuildingBlocked` option is enabled.

---

## 6. How do I show the interface when logging into the server?

Enable the parameter in the configuration:
```json
"Show UI with rewards when player connects to server?": true
```

---

## 7. Can I edit rewards directly in-game?

Yes. Grant the `dailyrewards.edit` permission to an administrator:
```
oxide.grant user <steamid> dailyrewards.edit
```
After that, additional controls for adding and modifying rewards will appear in the rewards interface.

---

## 8. What timezone is used for day resets?

The default is `Europe/London`. Change the timezone in the configuration:
```json
"Daily reset settings": {
 "TimeZone": "Europe/Moscow",
 "Time": "05:00"
}
```

---

## 9. What happens to rewards on wipe?

This depends on the settings:
- If `"Wipe on new map save": true` -- progress is reset.
- If `"RetainItemsOnWipe": true` -- items in the inventory are preserved.
- You can also manually reset data with the `dailyrewards.wipe` command.

---

## 10. How do I switch the interface template?

Use the console command:
```
dailyrewards.template fullscreen 1
dailyrewards.template inmenu 2
```
This will switch the interface template between available options.
