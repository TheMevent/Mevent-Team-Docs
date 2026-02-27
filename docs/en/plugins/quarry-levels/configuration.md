---
title: "Quarry Levels Configuration"
description: "Complete configuration reference for the Quarry Levels plugin."
sidebar_position: 4
---

# Quarry Levels Configuration

The configuration file is located at: `oxide/config/QuarryLevels.json`

## Server Settings

| Parameter | Default | Description |
|---|---|---|
| Chat icon ID | `0` | Avatar ID for chat messages |

## Quarry Level Settings

| Parameter | Default | Description |
|---|---|---|
| Quarry max level | `5` | Maximum quarry level |
| Pumpjack max level | `5` | Maximum pumpjack level |
| Quarry capacity per level | `5` | Hopper slot increase per level |
| Pumpjack capacity per level | `5` | Slot increase per level (pumpjack) |
| Enable Economics? | `false` | Use Economics for payment |
| Economics cost | `5000` | Upgrade cost (Economics) |
| Economics currency | `credits` | Economics currency |
| Enable ServerRewards? | `false` | Use ServerRewards for payment |
| ServerRewards cost | `5000` | Upgrade cost (ServerRewards) |
| ServerRewards currency | `RP` | ServerRewards currency |

## Deposit Settings

| Parameter | Default | Description |
|---|---|---|
| Metal ore unlock at | `3` | Level to unlock metal ore |
| Sulfure ore unlock at | `4` | Level to unlock sulfur ore |
| HQM ore unlock at | `5` | Level to unlock HQM ore |

## Quarry Production Settings

| Parameter | Description |
|---|---|
| Stones Production | Stone production rate |
| Metal Production | Metal ore production rate |
| Sulfur Production | Sulfur ore production rate |
| HQM Production | HQM ore production rate |
| Oil Production | Oil production rate (pumpjack) |

## Quarry Options (Fuel Settings)

| Parameter | Description |
|---|---|
| ProcessRateDissel | Processing speed with diesel |
| WorkPointDissel | Work points with diesel |
| ProcessRateFuel | Processing speed with Low Grade Fuel |
| WorkPointFuel | Work points with Low Grade Fuel |

## Player Settings

| Parameter | Default | Description |
|---|---|---|
| Can an unauthorized player toggling? | `false` | Prevent unauthorized players from toggling the quarry |
| Can an unauthorized player looting? | `false` | Prevent unauthorized players from opening the hopper |

## Survey Settings

| Parameter | Default | Description |
|---|---|---|
| Enable oil craters? | `false` | Enable oil craters from Survey Charge |
| Oil craters chance | `10` | Chance of oil crater appearance (%) |

## UI Settings

### Button Settings

| Parameter | Description |
|---|---|
| ButtonColor | Button color (HEX) |
| ButtonOpacity | Button opacity |
| ButtonFontColor | Button text color |

### Panel Settings

| Parameter | Description |
|---|---|
| PanelColor | Panel background color |
| PanelOpacity | Panel opacity |
| PanelFontColor | Panel text color |
