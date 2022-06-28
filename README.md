# WoM Damage Calculator

Page link: https://djlixo00.github.io/wom-fan-tools/

## About

This is a fan-made tool for the Roblox game World of Magic (WoM). This tool includes a gear stats calculator and a spell/weapon damage calculator. 

## How to Use

### Gear stats calculator

- To select gears to equip/remove, click on one of the boxes on the left labeled `Click to Toggle`. Click on the box again to cancel.
- To select enchantments, click on the corresponding icon above the gear selection. Click on the highlighted icon again to select clean (unenchanted) gear.
- The numbers in brackets below equipment are their stats.
    - For example: `[0,108,0,0,0,0,0,0]` means 0 `power`, 108 `defense`, 0 `agility`, 0 `strength`, 0 `casting speed`, 0 `magic speed`, 0 `magic size`, and 0 `knockback`.

### Damage calculator 

- To select spells and weapons use the drop down list.
- To select/deselect status click on the corresponding button.
- Click on `Calculate` to get the results. 
    - Note: the `Calculate` button will not be clickable until you select a spell/weapon type

## Limitations

### Gear stats calculator limitations

- Does not support gear levels. All gears are assumed to be fully upgraded.
- WoM has gear equip restrictions (e.g. cannot equip 2 of the same item), however this feature is not accounted for in this calculator.

### Damage calculator limitations

- Does not support levels. 
    - Assumes the player is at level 90.
    - Assumes the weapons are fully upgraded.
- Total DoT damage are not be accurate for multiblast spells.
- Weapon damage may not be accurate.
    - The formula for weapon damage is derived from in-game experiments, however the calculations for "strong" enchanted weapons may still be inaccurate.

### Others

- This site may not function properly on some browers due to certain CSS properties not being supported.
- Does not support mobile devices.

## References / Acknowledgement

The data on magics and damage calculations is taken from the fandom wiki.

Spell damage calculation:
- https://roblox-world-of-magic-wiki.fandom.com/wiki/Damage_Calculation

Magic status interactions:
- https://roblox-world-of-magic-wiki.fandom.com/wiki/Status_Effects

Magic properties:
- https://roblox-world-of-magic-wiki.fandom.com/wiki/Magics

Background images and icons are screenshots taken in-game and modified.

Gear data were collected from in-game.

## Contact Info

Discord: BaseCase #4511

Acrane Odyssey Forum: Thats_myBaseCase

<br>
<br>
<br>
<br>
<br>

# Updates

## 6/28/2022
- Slightly modified CSS to make the layout look more functional for people with a wider screen.
    - Some elements' font-size is changed from px to vh.
    - Icon images now scales with the window size.
    - This probably doesn't fix the issues on mobile devices.
- Added a space between melee weapon name and weapon skill name.