---
title: "Skills FAQ"
description: "Frequently asked questions about the Skills plugin"
sidebar_position: 5
---

# Frequently Asked Questions (FAQ)

## 1. Are skills preserved after a server wipe?

By default -- yes. Automatic wipe is disabled. If you want to reset skills on every wipe, enable `"Auto Wipe on New Save Settings" > "Enabled"` to `true`. You can separately configure what exactly gets reset: XP balance, skill levels, or the wipe protection counter.

---

## 2. How does the "Wipe Protection" skill work?

This special skill allows players to preserve part of their progress after a wipe. If the skill is leveled up and the `"Respect Wipe Protection"` parameter is enabled, the player's data will be partially or fully preserved during an automatic wipe.

---

## 3. Can skills be reset on player death?

Yes. Set `"Reset Skills on Death"` to `true`. After each death, all of the player's skills will be reset. This is suitable for hardcore servers.

---

## 4. How do I configure XP to not be awarded for teammate kills?

In the "XP Rewards Settings" section, set `"Count damage/kills to teammates"` to `false`. Similarly, you can disable XP for killing clan members and friends.

---

## 5. Can I use ServerRewards instead of XP?

Yes. In the "Custom Economy Settings" section, set `"Use Custom Economy"` to `true` and specify the plugin name (e.g., `"ServerRewards"`). After that, ServerRewards points will be used instead of XP.

---

## 6. How do I add a new skill category?

Open the configuration and add a new category object with a unique ID, name, and skill list to the `"Skill Categories"` array. Reload the plugin after making changes.

---

## 7. How do VIP XP multipliers work?

Players with the `skills.xprate.vip` permission receive x1.5 XP, and those with `skills.xprate.premium` receive x2 XP. These multipliers apply to all XP sources. You can add your own multipliers in the "XP Rate Multipliers by Permissions" section.

---

## 8. What is "XP Transfer on Kill"?

When this feature is enabled, killing another player awards the killer a portion of the victim's XP. By default -- 50%. VIP players can receive up to 100%. The victim loses the corresponding amount of XP.

---

## 9. Does the plugin support Carbon?

Yes. Skills is fully compatible with Carbon. Instead of ImageLibrary, the ImageDatabase module from Carbon is automatically used.

---

## 10. How do I set up the built-in interface editor?

Grant yourself the `skills.edit` permission, open the skills menu in-game (`/skills`) -- an edit button will appear in the interface. Through it, you can change element placement, colors, and other visual parameters in real time.
