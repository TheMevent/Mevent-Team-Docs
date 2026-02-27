---
title: "Necronomicon"
description: "A blueprint book system that lets players learn recipes through the research table."
version: "1.0.12"
tags: [rust, plugin, blueprints, necronomicon, research]
sidebar_position: 1
---

# Necronomicon

## What does this plugin do?

**Necronomicon** adds a blueprint book system to your server. A player can create a book (Necronomicon) that records all their learned blueprints. That book can be passed to another player, who can then learn the blueprints it contains through the research table. This lets players share blueprints, sell them, or hand them off to teammates.

## Key Features

- Create a book containing all of a player's learned blueprints
- Learn blueprints from a book via the research table
- Configurable learning cost through economy (Economics, ServerRewards, or items)
- Visual interface for selecting blueprints
- Option to delete blueprints from the book creator
- Automatic data wipe on server wipe
- Notify integration for notifications

## Requirements

| Dependency | Required | Description |
|---|---|---|
| Oxide / uMod / Carbon | Yes | Compatible with Oxide, uMod, and Carbon |
| **Notify** | Optional | Visual notifications |
| Economy plugin | Optional | For blueprint learning costs |

## Quick Start

1. Copy `Necronomicon.cs` into the `oxide/plugins/` folder.
2. Restart the server or run `oxide.reload Necronomicon`.
3. Give a book to a player: `necronomicon.give nickname`.
4. The player places the book in a research table and learns blueprints.
