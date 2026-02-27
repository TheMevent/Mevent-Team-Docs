---
title: "Referrals"
description: "A referral system for Rust servers with promo codes, invite rewards, and a sleek UI."
version: "1.3.4"
tags: [rust, plugin, referrals, promo, rewards]
sidebar_position: 1
---

# Referrals

## What does this plugin do?

**Referrals** is a referral system that lets players invite others to your server using promo codes. Every player gets a unique promo code they can share. When someone activates a code, both players get rewards. The more players you invite, the more rewards you earn.

## Key Features

- Automatic unique promo code generation for every player
- Configurable rewards for reaching invite milestones (1, 2, 5, 7, 10...)
- Optional rewards for the player who activates the promo code
- Visual UI showing your promo code, invited players, and reward progress
- Promo code activation via chat or the UI
- Minimum playtime required before activating a code (multi-account protection)
- Reward blocking after wipe, during raids, and during combat
- Optional automatic data wipe
- Multi-language support (EN, RU)
- Integration with Notify, NoEscape

## Requirements

| Dependency | Required | Description |
|---|---|---|
| **ImageLibrary** | Required | Needed to load images in the UI |
| Notify | Optional | For graphical notifications |
| NoEscape | Optional | For blocking rewards during raid/combat |
| Oxide / uMod / Carbon | Required | Compatible with Oxide, uMod, and Carbon |

## Quick Start

1. Install **ImageLibrary** if you haven't already.
2. Copy `Referrals.cs` into your server's `oxide/plugins/` folder.
3. Restart the server or run `oxide.reload Referrals`.
4. Join the server and type `/ref` in chat to open the UI.
5. Copy your promo code and share it with friends.
6. Another player can activate the code with `/promo <code>`.
