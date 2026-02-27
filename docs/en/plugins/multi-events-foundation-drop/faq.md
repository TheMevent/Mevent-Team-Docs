---
title: "FAQ and Troubleshooting"
description: "Frequently asked questions and troubleshooting for the Foundation Drop plugin."
sidebar_position: 5
---

# FAQ and Troubleshooting

## Common Questions

### 1. How does the event work?

Players register through voting, then get teleported to a foundation arena (NxN grid). Foundations start crumbling one by one. Players have to jump between remaining blocks to avoid falling. Last one standing wins.

---

### 2. What happens in the final phase?

When one foundation remains, the final battle begins: radiation turns on (if configured), and each surviving player gets a weapon (salvaged sword by default) or a kit. Players fight to the death.

---

### 3. What's the minimum player count?

2 players by default. You can change it in the config (`"Minimal players to start event"`), but it can't go below 2.

---

### 4. Can multiple players win?

Yes. If `"Give out a reward to all players who stayed on 1 block"` is enabled, all players left on the last foundation get a reward. The `"Maximum number of winners"` parameter caps how many can win.

---

### 5. Which commands can be used during the event?

All commands are blocked during the event except those listed in `"Allowed commands on event"`. The defaults are `cmd1`, `cmd2`, `cmd3` -- replace them with whatever you need.

---

### 6. What if a player disconnects during the event?

The player automatically leaves the event. If remaining players drop below the minimum, the event may end.

---

## Troubleshooting

### Event gets canceled due to not enough players

**Symptoms:** Message appears saying the event was canceled due to insufficient players.

**Cause:** Not enough players signed up during voting.

**Fix:** Lower the `"Minimal players to start event"` value or increase the voting time (`"Voting"`) to give players more time to register.

---

### Foundations crumble too fast or too slow

**Symptoms:** The game ends too quickly or drags on.

**Cause:** The destruction delay is set too low or too high.

**Fix:** Change the `"Delay"` value in `"Block Degrade Settings"`. Higher = slower destruction, lower = faster.

---

### Players can't join

**Symptoms:** The vote button doesn't work or doesn't show.

**Cause:** The event is already in progress (voting phase is over) or there's a UI issue.

**Fix:** Make sure players click the vote button during the registration phase, not after the game starts.

---

### Radiation doesn't work in the final phase

**Symptoms:** The final battle starts but there's no radiation.

**Cause:** The `"Radiation"` setting is disabled.

**Fix:** Set `"Radiation": true` in the `"Last Battle Settings"` section.
