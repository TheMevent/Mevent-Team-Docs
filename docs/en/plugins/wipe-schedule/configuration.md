---
title: "Configuration - Wipe Schedule"
description: "Detailed description of all configuration parameters for the Wipe Schedule plugin"
sidebar_position: 3
---

# Wipe Schedule Configuration

The configuration file is located at: `oxide/config/WipeSchedule.json`

## Main Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Work with Notify? | boolean | `true` | Use Notify/UINotify for notifications |
| Commands to open the calendar | array | `["wipe", "wipedata"]` | Chat commands to open the calendar |
| Time Zone | number | `2` | Time zone (UTC offset in hours) |
| Start calendar week on Sunday | boolean | `false` | Start the week on Sunday (if `false` -- Monday) |
| ServerPanel Template (V1, V2) | string | `V1` | Template for server menu integration |

## Custom Translation Keys

The "Your keys in the translator" section allows you to add custom text for user-defined events.

Entry format:

```json
{
 "Custom Event": {
 "ru": "Событие сервера",
 "en": "Custom Event"
 },
 "Custom Event Description": {
 "ru": "Описание события сервера",
 "en": "Custom Event Description"
 }
}
```

Each key contains two fields:
- `ru` -- text in Russian
- `en` -- text in English

## Time Zone Configuration

The "Time Zone" parameter determines which time is used for event calculations. It is specified as an integer -- UTC offset.

Examples:
- UTC+0 (London): `0`
- UTC+1 (Berlin): `1`
- UTC+2 (Kyiv): `2`
- UTC+3 (Moscow, Minsk): `3`

## Event Configuration through the Interface

Event creation and editing is done through the in-game visual interface. The following settings are available for each event:

### General Settings

| Parameter | Description |
|---|---|
| Event Type | Global wipe, map wipe, wipe block, global event, custom event |
| Name | Displayed event name in the calendar |
| Description | Additional information about the event |
| Color | HEX color of the event marker in the calendar (with transparency support) |
| Icon | URL to a custom event icon image |

### Date Configuration

| Mode | Description |
|---|---|
| Once | A specific date and time are specified |
| Repeat | A repeat schedule is configured by days, weeks, months, or years |

### Repeat Configuration

When the "Repeat" mode is selected, the following options are available:

| Parameter | Description |
|---|---|
| Months | Selection of months in which the event occurs |
| Days of Month | Selection of specific dates |
| Days of Week | Selection of days of the week for repeat |
| Week Interval | Selection of the week number in the month (first, second, etc.) |
| Time | Hours and minutes of the event |

## Recommendations

- Always verify the time zone is correct so that calendar dates match the actual server time.
- Use custom events to announce raid nights, tournaments, and other server activities.
- For each event type, it is recommended to assign a unique color so players can easily distinguish them on the calendar.
