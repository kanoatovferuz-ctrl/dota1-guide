//ХРАНИЛИЩЕ ДАННЫХ «ПРОЕКТ X» — DOTA 1 / DOTA 2 GUIDE

const itemsData = [
  // РАСХОДНИКИ И БАЗОВЫЕ
  {
    name: "Tango", cost: "Цена: 90 золота",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png",
    desc: "Поедает выбранное дерево, постепенно восстанавливая 115 HP за 16 секунд.",
    recipeItems: [], heroes: "Все герои на стадии лайнинга.", counters: "Быстрый размен на линии."
  },
  {
    name: "Healing Salve", cost: "Цена: 100 золота",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png",
    desc: "Восстанавливает 400 HP цели за 10 секунд. Сбивается уроном вражеских героев.",
    recipeItems: [], heroes: "Лейнеры и саппорты.", counters: "Быстрый отхил после драки."
  },
  {
    name: "Quelling Blade", cost: "Цена: 100 золота",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png",
    desc: "Дает +8 урона по крипам для героев ближнего боя. Позволяет срубать деревья.",
    recipeItems: [], heroes: "Керри ближнего боя (Sven, PA, AM, Juggernaut).", counters: "Против Sprout у Nature's Prophet."
  },
  {
    name: "Iron Branch", cost: "Цена: 50 золота",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png",
    desc: "Дает +1 ко всем атрибутам. Можно посадить дерево, съев его Танго.",
    recipeItems: [], heroes: "Все герои для старта.", counters: "Универсальный начальный предмет."
  },
  {
    name: "Magic Wand", cost: "Цена: 450 золота",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png",
    desc: "Накапливает заряды, когда враги используют заклинания. Восстанавливает здоровье и ману.",
    recipeItems: [
      { name: "Magic Stick", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_stick.png" },
      { name: "Iron Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
      { name: "Iron Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
      { name: "Recipe", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/recipe.png" }
    ],
    heroes: "Все герои на линии.", counters: "Против спамеров заклинаниями."
  },
  {
    name: "Power Treads", cost: "Цена: 1400 золота",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png",
    desc: "Дает скорость атаки, передвижения и переключаемый бонус к атрибуту.",
    recipeItems: [
      { name: "Boots of Speed", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/boots.png" },
      { name: "Gloves of Haste", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/gloves.png" },
      { name: "Band of Elvenskin", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/boots_of_elves.png" }
    ],
    heroes: "Большинство керри и универсалов.", counters: "Для мобильности и статов."
  },
  {
    name: "Blink Dagger", cost: "Цена: 2250 золота",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png",
    desc: "Телепортирует на расстояние до 1200 единиц. Сбивается при получении урона от героев на 3 сек.",
    recipeItems: [], heroes: "Axe, Sven, Tiny, Centaur, Sand King, Tidehunter.", counters: "Для мгновенной инициации."
  },
  {
    name: "Shadow Blade", cost: "Цена: 3000 золота",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/invis_sword.png",
    desc: "Делает невидимым на 14 секунд (+20% скорости). Первая атака наносит +175 доп. урона.",
    recipeItems: [
      { name: "Shadow Amulet", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shadow_amulet.png" },
      { name: "Claymore", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/claymore.png" }
    ],
    heroes: "Sniper, Shadow Fiend, Slark, Dragon Knight, Drow Ranger.", counters: "Для внезапных нападений."
  },
  {
    name: "Black King Bar", cost: "Цена: 4050 золота",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png",
    desc: "Дает невосприимчивость к магии (Avatar) и 100% сопротивление магическому урону.",
    recipeItems: [
      { name: "Ogre Axe", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ogre_axe.png" },
      { name: "Mithril Hammer", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mithril_hammer.png" },
      { name: "Recipe", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/recipe.png" }
    ],
    heroes: "Sven, PA, Juggernaut, SF, Ursa, Gyrocopter.", counters: "Контрит магов и контролеров."
  },
  {
    name: "Daedalus", cost: "Цена: 5100 золота",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png",
    desc: "Дает +88 к урону и 30% шанс нанести критический удар в размере 225%.",
    recipeItems: [
      { name: "Crystalys", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/lesser_crit.png" },
      { name: "Demon Edge", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/demon_edge.png" },
      { name: "Recipe", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/recipe.png" }
    ],
    heroes: "Sven, Kunkka, Sniper, PA, Drow Ranger.", counters: "Против плотных танков с огромным HP."
  },
  {
    name: "Manta Style", cost: "Цена: 4600 золота",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png",
    desc: "Призывает 2 иллюзии и сбрасывает негативные эффекты (сайленс, замедление).",
    recipeItems: [
      { name: "Yasha", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/yasha.png" },
      { name: "Ultimate Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_orb.png" },
      { name: "Recipe", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/recipe.png" }
    ],
    heroes: "Anti-Mage, Terrorblade, Luna, Phantom Lancer, Medusa.", counters: "Сбрасывает сайленс и дебафы."
  },
  {
    name: "Satanic", cost: "Цена: 5050 золота",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png",
    desc: "Дает +38 урона, +25 силы и 30% вампиризма. Активация увеличивает вампиризм до 175% на 6 сек.",
    recipeItems: [
      { name: "Morbid Mask", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/lifesteal.png" },
      { name: "Blade of Alacrity", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blade_of_alacrity.png" },
      { name: "Reaver", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/reaver.png" }
    ],
    heroes: "Sven, Ursa, Gyrocopter, Luna, PA.", counters: "Выживаемость под плотным фокусом."
  },
  {
    name: "Heart of Tarrasque", cost: "Цена: 5000 золота",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png",
    desc: "Дает +40 к силе, +250 к HP и восстановление 1.6% от максимального здоровья в секунду вне боя.",
    recipeItems: [
      { name: "Vitality Booster", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/vitality_booster.png" },
      { name: "Energy Booster", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/energy_booster.png" },
      { name: "Reaver", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/reaver.png" },
      { name: "Recipe", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/recipe.png" }
    ],
    heroes: "Pudge, Centaur, Axe, Bristleback, Spectre.", counters: "Против затяжных атак."
  },
  {
    name: "Desolator", cost: "Цена: 3500 золота",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/desolator.png",
    desc: "Атаки уменьшают бронь цели на 6 единиц и наносят дополнительный урон.",
    recipeItems: [
      { name: "Mithril Hammer", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mithril_hammer.png" },
      { name: "Mithril Hammer", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mithril_hammer.png" },
      { name: "Blades of Attack", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blades_of_attack.png" }
    ],
    heroes: "Phantom Assassin, Clinkz, TA, Weaver.", counters: "Снос брони и зданий."
  },
  {
    name: "Glimmer Cape", cost: "Цена: 1950 золота",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/glimmer_cape.png",
    desc: "Накладывает невидимость и щит с защитой от магии на себя или союзника.",
    recipeItems: [
      { name: "Shadow Amulet", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shadow_amulet.png" },
      { name: "Cloak", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/cloak.png" }
    ],
    heroes: "Crystal Maiden, Lion, Support heroes.", counters: "Спасение от магии."
  },
  {
    name: "Aghanim's Scepter", cost: "Цена: 4200 золота",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png",
    desc: "Улучшает ультимативную способность героя или дает новую способность.",
    recipeItems: [
      { name: "Point Booster", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/point_booster.png" },
      { name: "Staff of Wizardry", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/staff_of_wizardry.png" },
      { name: "Ogre Axe", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ogre_axe.png" },
      { name: "Blade of Alacrity", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blade_of_alacrity.png" }
    ],
    heroes: "Lion, Pudge, Lina, Invoker.", counters: "Усиление потенциала героя."
  }
];

const heroesData = [
  // --- СИЛА (STRENGTH) — SENTINEL ---
  {
    name: "Sven", dota1: "Rogue Knight", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sven.png",
    bio: "<p>Сын изгоя-паладина и эльфийки, Свен прошел суровую школу и поклялся следовать непреклонному кодексу мстителя.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Echo Sabre", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/echo_sabre.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Mask of Madness", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mask_of_madness.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Moon Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/moon_shard.png" }
      ]
    },
    countersInfo: "<b>Силен с:</b> Crystal Maiden, Lion.<br><b>Контрят:</b> Bane, Ghost Scepter.",
    skills: [
      {
        name: "Storm Bolt", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/sven_storm_bolt.png",
        desc: "Бросает магический молот, наносящий урон и оглушающий всех врагов вокруг цели.", isPassive: false,
        levels: [
          { lvl: 1, mana: "110 МАНА", cd: "18 СЕК", effect: "110 урона, стан 1.4 сек" },
          { lvl: 2, mana: "120 МАНА", cd: "16 СЕК", effect: "160 урона, стан 1.6 сек" },
          { lvl: 3, mana: "130 МАНА", cd: "14 СЕК", effect: "210 урона, стан 1.8 сек" },
          { lvl: 4, mana: "140 МАНА", cd: "12 СЕК", effect: "260 урона, стан 2.0 сек" }
        ]
      },
      {
        name: "Great Cleave", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/sven_great_cleave.png",
        desc: "Пассивно наносит сплеш-урон всем стоящим рядом врагам при атаке.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "30% сплеш-урона" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "45% сплеш-урона" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "60% сплеш-урона" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "75% сплеш-урона" }
        ]
      },
      {
        name: "Warcry", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/sven_warcry.png",
        desc: "Воодушевляет союзников, давая им дополнительную броню и скорость передвижения.", isPassive: false,
        levels: [
          { lvl: 1, mana: "40 МАНА", cd: "32 СЕК", effect: "+6 брони, +10% скорости на 8 сек" },
          { lvl: 2, mana: "40 МАНА", cd: "26 СЕК", effect: "+10 брони, +14% скорости на 9 сек" },
          { lvl: 3, mana: "40 МАНА", cd: "20 СЕК", effect: "+14 брони, +18% скорости на 10 сек" },
          { lvl: 4, mana: "40 МАНА", cd: "14 СЕК", effect: "+18 брони, +22% скорости на 11 сек" }
        ]
      },
      {
        name: "God's Strength", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/sven_gods_strength.png",
        desc: "Увеличивает базовый урон от атак Свена на 25 секунд.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "100 СЕК", effect: "+120% базового урона" },
          { lvl: 2, mana: "150 МАНА", cd: "100 СЕК", effect: "+160% базового урона" },
          { lvl: 3, mana: "200 МАНА", cd: "100 СЕК", effect: "+200% базового урона" }
        ]
      }
    ]
  },
  {
    name: "Centaur Warrunner", dota1: "Bradwarden", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/centaur.png",
    bio: "<p>Непобедимый гладиатор арены Кентавров, чье тело покрыто шрамами от сотен турнирных побед.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Bracer", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bracer.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Hood of Defiance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/hood_of_defiance.png" },
        { name: "Vanguard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/vanguard.png" },
        { name: "Blade Mail", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blade_mail.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Blade Mail", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blade_mail.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Pipe of Insight", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/pipe.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Физических керри.<br><b>Контрят:</b> Lifestealer.",
    skills: [
      {
        name: "Hoof Stomp", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/centaur_hoof_stomp.png",
        desc: "Топает копытом по земле, оглушая врагов и нанося урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "15 СЕК", effect: "120 урона, стан 1.6 сек" },
          { lvl: 2, mana: "110 МАНА", cd: "14 СЕК", effect: "180 урона, стан 1.9 сек" },
          { lvl: 3, mana: "120 МАНА", cd: "13 СЕК", effect: "240 урона, стан 2.2 сек" },
          { lvl: 4, mana: "130 МАНА", cd: "12 СЕК", effect: "300 урона, стан 2.5 сек" }
        ]
      },
      {
        name: "Double Edge", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/centaur_double_edge.png",
        desc: "Наносит мощный урон цели и самому Кентавру.", isPassive: false,
        levels: [
          { lvl: 1, mana: "0 МАНА", cd: "3.5 СЕК", effect: "150 урона" },
          { lvl: 2, mana: "0 МАНА", cd: "3.5 СЕК", effect: "250 урона" },
          { lvl: 3, mana: "0 МАНА", cd: "3.5 СЕК", effect: "350 урона" },
          { lvl: 4, mana: "0 МАНА", cd: "3.5 СЕК", effect: "450 урона" }
        ]
      },
      {
        name: "Retaliate", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/centaur_retaliate.png",
        desc: "Пассивно возвращает урон нападающим врагам.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "16+12% от силы урона" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "20+16% от силы урона" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "24+20% от силы урона" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "28+24% от силы урона" }
        ]
      },
      {
        name: "Stampede", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/centaur_stampede.png",
        desc: "Кентавр ведет союзников в атаку, увеличивая их скорость и топча врагов.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "100 СЕК", effect: "Макс. скорость, урон 150" },
          { lvl: 2, mana: "100 МАНА", cd: "80 СЕК", effect: "Макс. скорость, урон 250" },
          { lvl: 3, mana: "100 МАНА", cd: "60 СЕК", effect: "Макс. скорость, урон 350" }
        ]
      }
    ]
  },
// --- ДОПОЛНЕНИЕ: СИЛА (STRENGTH) — SENTINEL ---
  {
    name: "Tiny", dota1: "Stone Giant", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png",
    bio: "<p>Огромный каменный гигант, способный врываться в толпу врагов, подбрасывать их и сносить здания с пары ударов.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Gauntlets", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/gauntlets.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Bottle", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bottle.png" }
      ],
      mid: [
        { name: "Arcane Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Echo Sabre", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/echo_sabre.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Silver Edge", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/silver_edge.png" }
      ],
      late: [
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен с:</b> Centaur, Magnus.<br><b>Контрят:</b> Lifestealer, Viper.",
    skills: [
      {
        name: "Avalanche", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/tiny_avalanche.png",
        desc: "Обрушивает лавину камней на область, оглушая и нанося урон врагам.", isPassive: false,
        levels: [
          { lvl: 1, mana: "120 МАНА", cd: "20 СЕК", effect: "100 урона, стан 1.0 сек" },
          { lvl: 2, mana: "130 МАНА", cd: "19 СЕК", effect: "180 урона, стан 1.2 сек" },
          { lvl: 3, mana: "140 МАНА", cd: "18 СЕК", effect: "260 урона, стан 1.4 сек" },
          { lvl: 4, mana: "150 МАНА", cd: "17 СЕК", effect: "340 урона, стан 1.6 сек" }
        ]
      },
      {
        name: "Toss", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/tiny_toss.png",
        desc: "Бросает случайное существо в выбранную точку, нанося урон по приземлении.", isPassive: false,
        levels: [
          { lvl: 1, mana: "120 МАНА", cd: "17 СЕК", effect: "90 урона" },
          { lvl: 2, mana: "120 МАНА", cd: "15 СЕК", effect: "180 урона" },
          { lvl: 3, mana: "120 МАНА", cd: "13 СЕК", effect: "270 урона" },
          { lvl: 4, mana: "120 МАНА", cd: "11 СЕК", effect: "360 урона" }
        ]
      },
      {
        name: "Tree Grab", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/tiny_tree_grab.png",
        desc: "Вырывает дерево с корнем, получая бонус к урону и дальности атак сплешем.", isPassive: false,
        levels: [
          { lvl: 1, mana: "25 МАНА", cd: "18 СЕК", effect: "+25% урона, 5 атак" },
          { lvl: 2, mana: "25 МАНА", cd: "16 СЕК", effect: "+30% урона, 6 атак" },
          { lvl: 3, mana: "25 МАНА", cd: "14 СЕК", effect: "+35% урона, 7 атак" },
          { lvl: 4, mana: "25 МАНА", cd: "12 СЕК", effect: "+40% урона, 8 атак" }
        ]
      },
      {
        name: "Grow", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/tiny_grow.png",
        desc: "Увеличивает размеры Tiny, повышая базовый урон и дальность броска.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+50 к урону, -15% скорости атаки" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+100 к урону, -15% скорости атаки" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+150 к урону, -15% скорости атаки" }
        ]
      }
    ]
  },
  {
    name: "Axe", dota1: "Mogul Khan", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png",
    bio: "<p>Яростный военачальник орков, который бросает вызов врагам и крушит их своим тяжелым топором.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Stout Shield", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/stout_shield.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Ring of Health", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ring_of_health.png" }
      ],
      mid: [
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Vanguard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/vanguard.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Blade Mail", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blade_mail.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Eternal Shroud", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/eternal_shroud.png" }
      ],
      late: [
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Blade Mail", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blade_mail.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Overwhelming Blink", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/overwhelming_blink.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Melee керри (PA, Troll).<br><b>Контрят:</b> Viper, Venomancer.",
    skills: [
      {
        name: "Berserker's Call", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_berserkers_call.png",
        desc: "Заставляет врагов вокруг атаковать Акса, давая ему бонус к броне.", isPassive: false,
        levels: [
          { lvl: 1, mana: "80 МАНА", cd: "18 СЕК", effect: "+15 брони, длительность 2.0 сек" },
          { lvl: 2, mana: "90 МАНА", cd: "16 СЕК", effect: "+20 брони, длительность 2.4 сек" },
          { lvl: 3, mana: "100 МАНА", cd: "14 СЕК", effect: "+25 брони, длительность 2.8 сек" },
          { lvl: 4, mana: "110 МАНА", cd: "12 СЕК", effect: "+30 брони, длительность 3.2 сек" }
        ]
      },
      {
        name: "Battle Hunger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_battle_hunger.png",
        desc: "Вводит врага в ярость, замедляя его и нанося урон, пока он не убьет крипа.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "20 СЕК", effect: "15 урона в сек, замедление 11%" },
          { lvl: 2, mana: "60 МАНА", cd: "15 СЕК", effect: "25 урона в сек, замедление 19%" },
          { lvl: 3, mana: "70 МАНА", cd: "10 СЕК", effect: "35 урона в сек, замедление 27%" },
          { lvl: 4, mana: "80 МАНА", cd: "5 СЕК", effect: "45 урона в сек, замедление 35%" }
        ]
      },
      {
        name: "Counter Helix", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_counter_helix.png",
        desc: "Шанс при получении атаки совершить круговой удар, наносящий чистый урон.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0.3 СЕК", effect: "18% шанс, 90 чистого урона" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0.3 СЕК", effect: "18% шанс, 120 чистого урона" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0.3 СЕК", effect: "18% шанс, 150 чистого урона" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0.3 СЕК", effect: "18% шанс, 180 чистого урона" }
        ]
      },
      {
        name: "Culling Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_culling_blade.png",
        desc: "Низвергает удар топора. Если у цели здоровье ниже порога, она мгновенно погибает.", isPassive: false,
        levels: [
          { lvl: 1, mana: "125 МАНА", cd: "75 СЕК", effect: "Убийство ниже 250 HP" },
          { lvl: 2, mana: "175 МАНА", cd: "65 СЕК", effect: "Убийство ниже 325 HP" },
          { lvl: 3, mana: "225 МАНА", cd: "55 СЕК", effect: "Убийство ниже 400 HP" }
        ]
      }
    ]
  },
  {
    name: "Dragon Knight", dota1: "Sir Davion", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dragon_knight.png",
    bio: "<p>Рыцарь, принявший кровь древнего дракона. В бою превращается в огнедышащего крылатого монстра.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Bracer", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bracer.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Armlet", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/armlet.png" },
        { name: "Shadow Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/invis_sword.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен с:</b> Io, Crystal Maiden.<br><b>Контрят:</b> OD, Viper.",
    skills: [
      {
        name: "Breathe Fire", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dragon_knight_breathe_fire.png",
        desc: "Выдыхает пламя по конусу, нанося урон и снижая атаку врагов.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "14 СЕК", effect: "90 урона, -20% атаки" },
          { lvl: 2, mana: "110 МАНА", cd: "12 СЕК", effect: "170 урона, -25% атаки" },
          { lvl: 3, mana: "120 МАНА", cd: "10 СЕК", effect: "250 урона, -30% атаки" },
          { lvl: 4, mana: "130 МАНА", cd: "8 СЕК", effect: "330 урона, -35% атаки" }
        ]
      },
      {
        name: "Dragon Tail", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dragon_knight_dragon_tail.png",
        desc: "Бьет щитом врага вблизи, оглушая его (в форме дракона дальность увеличивается).", isPassive: false,
        levels: [
          { lvl: 1, mana: "70 МАНА", cd: "16 СЕК", effect: "70 урона, стан 2.0 сек" },
          { lvl: 2, mana: "80 МАНА", cd: "14 СЕК", effect: "120 урона, стан 2.2 сек" },
          { lvl: 3, mana: "90 МАНА", cd: "12 СЕК", effect: "170 урона, стан 2.4 сек" },
          { lvl: 4, mana: "100 МАНА", cd: "10 СЕК", effect: "220 урона, стан 2.6 сек" }
        ]
      },
      {
        name: "Dragon Blood", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dragon_knight_dragon_blood.png",
        desc: "Пассивно укрепляет чешую рыцаря, давая регенерацию здоровья и броню.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+3 брони, +2.5 HP/сек" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+6 брони, +5.0 HP/сек" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+9 брони, +7.5 HP/сек" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+12 брони, +10.0 HP/сек" }
        ]
      },
      {
        name: "Elder Dragon Form", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dragon_knight_elder_dragon_form.png",
        desc: "Превращается в дракона с дальностью атаки, уроном по области и эффектами от яда/мороза.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "115 СЕК", effect: "Зеленый дракон (яд)" },
          { lvl: 2, mana: "50 МАНА", cd: "115 СЕК", effect: "Красный дракон (сплеш)" },
          { lvl: 3, mana: "50 МАНА", cd: "115 СЕК", effect: "Синий дракон (мороз и сплеш)" }
        ]
      }
    ]
  },
  {
    name: "Omniknight", dota1: "Purist Thunderwrath", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/omniknight.png",
    bio: "<p>Преданный паладин Всевышнего, защищающий союзников святой силой и оберегающий их от магии.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Ward", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ward_observer.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Ring of Basilius", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ring_of_basilius.png" }
      ],
      mid: [
        { name: "Soul Ring", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/soul_ring.png" },
        { name: "Arcane Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png" },
        { name: "Aether Lens", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aether_lens.png" },
        { name: "Force Staff", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Lotus Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/lotus_orb.png" }
      ],
      late: [
        { name: "Guardian Greaves", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/guardian_greaves.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Octarine Core", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен с:</b> Carry ближнего боя (Sven, PA).<br><b>Контрят:</b> Invoker, Diffusal Blade.",
    skills: [
      {
        name: "Purification", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/omniknight_purification.png",
        desc: "Исцеляет союзника и наносит чистый урон врагам вокруг него.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "18 СЕК", effect: "90 лечения и урона" },
          { lvl: 2, mana: "110 МАНА", cd: "16 СЕК", effect: "160 лечения и урона" },
          { lvl: 3, mana: "120 МАНА", cd: "14 СЕК", effect: "230 лечения и урона" },
          { lvl: 4, mana: "130 МАНА", cd: "12 СЕК", effect: "300 лечения и урона" }
        ]
      },
      {
        name: "Repel", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/omniknight_repel.png",
        desc: "Накладывает на союзника щит, дающий иммунитет к магии и бонус к силе.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "35 СЕК", effect: "Длительность 6 сек" },
          { lvl: 2, mana: "75 МАНА", cd: "28 СЕК", effect: "Длительность 7 сек" },
          { lvl: 3, mana: "75 МАНА", cd: "21 СЕК", effect: "Длительность 8 сек" },
          { lvl: 4, mana: "75 МАНА", cd: "14 СЕК", effect: "Длительность 9 сек" }
        ]
      },
      {
        name: "Hammer of Purity", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/omniknight_hammer_of_purity.png",
        desc: "Усиливает следующую атаку чистым уроном и замедляет врага.", isPassive: false,
        levels: [
          { lvl: 1, mana: "55 МАНА", cd: "10 СЕК", effect: "+50 чистого урона" },
          { lvl: 2, mana: "60 МАНА", cd: "9 СЕК", effect: "+75 чистого урона" },
          { lvl: 3, mana: "65 МАНА", cd: "8 СЕК", effect: "+100 чистого урона" },
          { lvl: 4, mana: "70 МАНА", cd: "7 СЕК", effect: "+125 чистого урона" }
        ]
      },
      {
        name: "Guardian Angel", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/omniknight_guardian_angel.png",
        desc: "Призывает ангела, дающего союзникам по всей карте неуязвимость к физическому урону.", isPassive: false,
        levels: [
          { lvl: 1, mana: "125 МАНА", cd: "140 СЕК", effect: "Длительность 6.0 сек" },
          { lvl: 2, mana: "175 МАНА", cd: "120 СЕК", effect: "Длительность 7.5 сек" },
          { lvl: 3, mana: "250 МАНА", cd: "100 СЕК", effect: "Длительность 9.0 сек" }
        ]
      }
    ]
  },
  {
    name: "Sand King", dota1: "Crixalis", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sand_king.png",
    bio: "<p>Грозный скорпион из пустынь Калреха, способный скрываться в песчаной буре и вызывать разрушительное землетрясение.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Ring of Basilius", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ring_of_basilius.png" },
        { name: "Bottle", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bottle.png" }
      ],
      mid: [
        { name: "Arcane Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Veil of Discord", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/veil_of_discord.png" },
        { name: "Eul's Scepter", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/cyclone.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" }
      ],
      late: [
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Octarine Core", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен с:</b> Lina, Lion.<br><b>Контрят:</b> Gem, Dust, Zeus.",
    skills: [
      {
        name: "Burrowstrike", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/sandking_burrowstrike.png",
        desc: "Зарывается под землю и выныривает в указанной точке, оглушая и нанося урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "110 МАНА", cd: "14 СЕК", effect: "100 урона, стан 1.9 сек" },
          { lvl: 2, mana: "120 МАНА", cd: "13 СЕК", effect: "180 урона, стан 2.2 сек" },
          { lvl: 3, mana: "130 МАНА", cd: "12 СЕК", effect: "260 урона, стан 2.5 сек" },
          { lvl: 4, mana: "140 МАНА", cd: "11 СЕК", effect: "340 урона, стан 2.8 сек" }
        ]
      },
      {
        name: "Sand Storm", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/sandking_sand_storm.png",
        desc: "Создает песчаную бурю, скрывающую героя в невидимости и наносящую урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "40 СЕК", effect: "25 урона в сек" },
          { lvl: 2, mana: "75 МАНА", cd: "34 СЕК", effect: "50 урона в сек" },
          { lvl: 3, mana: "75 МАНА", cd: "28 СЕК", effect: "75 урона в сек" },
          { lvl: 4, mana: "75 МАНА", cd: "22 СЕК", effect: "100 урона в сек" }
        ]
      },
      {
        name: "Caustic Finale", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/sandking_caustic_finale.png",
        desc: "Отравляет жертву. При её смерти или окончании эффекта происходит взрыв.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Взрыв наносит 10% от макс. HP" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Взрыв наносит 14% от макс. HP" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Взрыв наносит 18% от макс. HP" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Взрыв наносит 22% от макс. HP" }
        ]
      },
      {
        name: "Epicenter", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/sandking_epicenter.png",
        desc: "Вызывает подземные толчки, создающие серию разрушительных волн вокруг героя.", isPassive: false,
        levels: [
          { lvl: 1, mana: "175 МАНА", cd: "120 СЕК", effect: "6 волн, 110 урона за волну" },
          { lvl: 2, mana: "250 МАНА", cd: "110 СЕК", effect: "8 волн, 130 урона за волну" },
          { lvl: 3, mana: "325 МАНА", cd: "100 СЕК", effect: "10 волн, 150 урона за волну" }
        ]
      }
    ]
  },
  // --- СИЛА (STRENGTH) — SCOURGE ---
  {
    name: "Pudge", dota1: "Butcher", attr: "Strength", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png",
    bio: "<p>Жуткий мясник с полей вечной резни, утягивающий жертв окровавленным хуком.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Bracer", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bracer.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Hood of Defiance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/hood_of_defiance.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Blade Mail", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blade_mail.png" },
        { name: "Eternal Shroud", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/eternal_shroud.png" }
      ],
      late: [
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Pipe of Insight", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/pipe.png" },
        { name: "Radiance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/radiance.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" },
        { name: "Moon Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/moon_shard.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Хилых магов.<br><b>Контрят:</b> Lifestealer, Ursa.",
    skills: [
      {
        name: "Meat Hook", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/pudge_meat_hook.png",
        desc: "Бросает стальной крюк, притягивающий попавшегося юнита к Пуджу.", isPassive: false,
        levels: [
          { lvl: 1, mana: "110 МАНА", cd: "18 СЕК", effect: "150 чистого урона" },
          { lvl: 2, mana: "120 МАНА", cd: "16 СЕК", effect: "220 чистого урона" },
          { lvl: 3, mana: "130 МАНА", cd: "14 СЕК", effect: "290 чистого урона" },
          { lvl: 4, mana: "140 МАНА", cd: "12 СЕК", effect: "360 чистого урона" }
        ]
      },
      {
        name: "Rot", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/pudge_rot.png",
        desc: "Токсичное облако замедляет врагов и наносит урон всем вокруг, включая самого Пуджа.", isPassive: false,
        levels: [
          { lvl: 1, mana: "0 МАНА", cd: "0 СЕК", effect: "30 урона/сек, замедление 11%" },
          { lvl: 2, mana: "0 МАНА", cd: "0 СЕК", effect: "60 урона/сек, замедление 18%" },
          { lvl: 3, mana: "0 МАНА", cd: "0 СЕК", effect: "90 урона/сек, замедление 25%" },
          { lvl: 4, mana: "0 МАНА", cd: "0 СЕК", effect: "120 урона/сек, замедление 32%" }
        ]
      },
      {
        name: "Flesh Heap", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/pudge_flesh_heap.png",
        desc: "Пассивно дает защиту от магии и накапливает силу за убийства.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+1.5 силы за жертву, 12% маг. резиста" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+2.0 силы за жертву, 14% маг. резиста" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+2.5 силы за жертву, 16% маг. резиста" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+3.0 силы за жертву, 18% маг. резиста" }
        ]
      },
      {
        name: "Dismember", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/pudge_dismember.png",
        desc: "Пожирает врага, оглушая его и нанося урон в секунду, исцеляя Пуджа.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "60 СЕК", effect: "60 урона в сек + сила" },
          { lvl: 2, mana: "130 МАНА", cd: "50 СЕК", effect: "90 урона в сек + сила" },
          { lvl: 3, mana: "170 МАНА", cd: "40 СЕК", effect: "120 урона в сек + сила" }
        ]
      }
    ]
  },

  // --- ЛОВКОСТЬ (AGILITY) — SENTINEL ---
  {
    name: "Phantom Assassin", dota1: "Mortred", attr: "Agility", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png",
    bio: "<p>Мортред — неуловимый убийца из ордена Сестер Вуали, наносящая смертельные критические удары.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Desolator", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/desolator.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Battle Fury", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bfury.png" },
        { name: "Basher", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/basher.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" }
      ],
      late: [
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Monkey King Bar", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/monkey_king_bar.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Хилых героев.<br><b>Контрят:</b> MKB, Razor.",
    skills: [
      {
        name: "Stifling Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_assassin_stifling_dagger.png",
        desc: "Бросает кинжал, замедляющий цель и наносящий урон от атаки.", isPassive: false,
        levels: [
          { lvl: 1, mana: "30 МАНА", cd: "6 СЕК", effect: "65+60% урона, замедление 50%" },
          { lvl: 2, mana: "30 МАНА", cd: "6 СЕК", effect: "65+70% урона, замедление 50%" },
          { lvl: 3, mana: "30 МАНА", cd: "6 СЕК", effect: "65+80% урона, замедление 50%" },
          { lvl: 4, mana: "30 МАНА", cd: "6 СЕК", effect: "65+90% урона, замедление 50%" }
        ]
      },
      {
        name: "Phantom Strike", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_assassin_phantom_strike.png",
        desc: "Мгновенно перемещается к существу и увеличивает скорость атаки.", isPassive: false,
        levels: [
          { lvl: 1, mana: "35 МАНА", cd: "11 СЕК", effect: "+100 скорости атаки на 4 удара" },
          { lvl: 2, mana: "35 МАНА", cd: "9 СЕК", effect: "+125 скорости атаки на 4 удара" },
          { lvl: 3, mana: "35 МАНА", cd: "7 СЕК", effect: "+150 скорости атаки на 4 удара" },
          { lvl: 4, mana: "35 МАНА", cd: "5 СЕК", effect: "+175 скорости атаки на 4 удара" }
        ]
      },
      {
        name: "Blur", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_assassin_blur.png",
        desc: "Дает пассивное уклонение от физических атак.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "20% уклонения" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "30% уклонения" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "40% уклонения" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "50% уклонения" }
        ]
      },
      {
        name: "Coup de Grace", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_assassin_coup_de_grace.png",
        desc: "Шанс нанести смертельный критический удар.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "15% шанс крита x2.3" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "15% шанс крита x3.4" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "15% шанс крита x4.5" }
        ]
      }
    ]
  },

  // --- ЛОВКОСТЬ (AGILITY) — SCOURGE ---
  {
    name: "Shadow Fiend", dota1: "Nevermore", attr: "Agility", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nevermore.png",
    bio: "<p>Невермор поглощает души поверженных врагов, высвобождая их в разрушительном разгроме.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Wraith Band", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wraith_band.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Shadow Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/invis_sword.png" },
        { name: "Dragon Lance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/dragon_lance.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Manta Style", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" }
      ],
      late: [
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Silver Edge", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/silver_edge.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Героев без блинка.<br><b>Контрят:</b> Templar Assassin.",
    skills: [
      {
        name: "Shadowraze (Short)", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/nevermore_shadowraze1.png",
        desc: "Взрывает землю на близкой дистанции.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "10 СЕК", effect: "90 урона" },
          { lvl: 2, mana: "75 МАНА", cd: "10 СЕК", effect: "160 урона" },
          { lvl: 3, mana: "75 МАНА", cd: "10 СЕК", effect: "230 урона" },
          { lvl: 4, mana: "75 МАНА", cd: "10 СЕК", effect: "300 урона" }
        ]
      },
      {
        name: "Shadowraze (Medium)", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/nevermore_shadowraze2.png",
        desc: "Взрывает землю на средней дистанции.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "10 СЕК", effect: "90 урона" },
          { lvl: 2, mana: "75 МАНА", cd: "10 СЕК", effect: "160 урона" },
          { lvl: 3, mana: "75 МАНА", cd: "10 СЕК", effect: "230 урона" },
          { lvl: 4, mana: "75 МАНА", cd: "10 СЕК", effect: "300 урона" }
        ]
      },
      {
        name: "Necromastery", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/nevermore_necromastery.png",
        desc: "Крадет души убитых врагов, увеличивая урон от атак.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Максимум 12 душ (+2 урона за душу)" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Максимум 22 душ (+2 урона за душу)" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Максимум 32 душ (+2 урона за душу)" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Максимум 42 душ (+2 урона за душу)" }
        ]
      },
      {
        name: "Requiem of Souls", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/nevermore_requiem.png",
        desc: "Высвобождает собранные души в виде разрушительной волны.", isPassive: false,
        levels: [
          { lvl: 1, mana: "150 МАНА", cd: "120 СЕК", effect: "Урон за каждую душу: 80" },
          { lvl: 2, mana: "175 МАНА", cd: "110 СЕК", effect: "Урон за каждую душу: 120" },
          { lvl: 3, mana: "200 МАНА", cd: "100 СЕК", effect: "Урон за каждую душу: 160" }
        ]
      }
    ]
  },

  // --- ИНТЕЛЛЕКТ (INTELLIGENCE) — SENTINEL ---
  {
    name: "Crystal Maiden", dota1: "Rylai", attr: "Intelligence", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png",
    bio: "<p>Маг льда, снабжающая команду маной и замораживающая врагов ледяными заклинаниями.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Ward", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ward_observer.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Null Talisman", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/null_talisman.png" }
      ],
      mid: [
        { name: "Arcane Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png" },
        { name: "Glimmer Cape", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/glimmer_cape.png" },
        { name: "Force Staff", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Ghost Scepter", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ghost.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Octarine Core", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" },
        { name: "Aeon Disk", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aeon_disk.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен с:</b> Sven.<br><b>Контрят:</b> BKB, Clockwerk.",
    skills: [
      {
        name: "Crystal Nova", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/crystal_maiden_crystal_nova.png",
        desc: "Создает ледяной взрыв, наносящий урон и замедляющий врагов.", isPassive: false,
        levels: [
          { lvl: 1, mana: "115 МАНА", cd: "12 СЕК", effect: "130 урона, замедление 20%" },
          { lvl: 2, mana: "130 МАНА", cd: "11 СЕК", effect: "180 урона, замедление 30%" },
          { lvl: 3, mana: "145 МАНА", cd: "10 СЕК", effect: "240 урона, замедление 40%" },
          { lvl: 4, mana: "160 МАНА", cd: "9 СЕК", effect: "300 урона, замедление 50%" }
        ]
      },
      {
        name: "Frostbite", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/crystal_maiden_frostbite.png",
        desc: "Замораживает противника на месте, нанося урон каждую секунду.", isPassive: false,
        levels: [
          { lvl: 1, mana: "125 МАНА", cd: "9 СЕК", effect: "Урон 100, длительность 1.5 сек" },
          { lvl: 2, mana: "135 МАНА", cd: "8 СЕК", effect: "Урон 150, длительность 2.0 сек" },
          { lvl: 3, mana: "145 МАНА", cd: "7 СЕК", effect: "Урон 200, длительность 2.5 сек" },
          { lvl: 4, mana: "155 МАНА", cd: "6 СЕК", effect: "Урон 250, длительность 3.0 сек" }
        ]
      },
      {
        name: "Arcane Aura", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/crystal_maiden_brilliance_aura.png",
        desc: "Глобальная пассивная аура, восстанавливающая ману всем союзникам.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+1.0 маны в сек" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+1.5 маны в сек" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+2.0 маны в сек" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+2.5 маны в сек" }
        ]
      },
      {
        name: "Freezing Field", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/crystal_maiden_freezing_field.png",
        desc: "Окружает героиню ледяными взрывами, наносящими огромный урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "150 МАНА", cd: "110 СЕК", effect: "105 урона за взрыв на 10 сек" },
          { lvl: 2, mana: "200 МАНА", cd: "100 СЕК", effect: "170 урона за взрыв на 10 сек" },
          { lvl: 3, mana: "250 МАНА", cd: "90 СЕК", effect: "250 урона за взрыв на 10 сек" }
        ]
      }
    ]
  },

  // --- ИНТЕЛЛЕКТ (INTELLIGENCE) — SCOURGE ---
  {
    name: "Lion", dota1: "Demon Witch", attr: "Intelligence", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png",
    bio: "<p>Демонический маг с мощнейшим одиночным контролем и возможностью стирать врагов ультимейтом.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Ward", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ward_observer.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Null Talisman", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/null_talisman.png" }
      ],
      mid: [
        { name: "Tranquil Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tranquil_boots.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Force Staff", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png" },
        { name: "Glimmer Cape", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/glimmer_cape.png" },
        { name: "Ghost Scepter", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ghost.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Octarine Core", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" },
        { name: "Aeon Disk", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aeon_disk.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Инициаторов без BKB.<br><b>Контрят:</b> Rubick.",
    skills: [
      {
        name: "Earthspike", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/lion_impale.png",
        desc: "Пробивает шипами землю по линии, оглушая врагов.", isPassive: false,
        levels: [
          { lvl: 1, mana: "85 МАНА", cd: "12 СЕК", effect: "95 урона, стан 1.4 сек" },
          { lvl: 2, mana: "100 МАНА", cd: "12 СЕК", effect: "160 урона, стан 1.8 сек" },
          { lvl: 3, mana: "115 МАНА", cd: "12 СЕК", effect: "225 урона, стан 2.2 сек" },
          { lvl: 4, mana: "130 МАНА", cd: "12 СЕК", effect: "290 урона, стан 2.6 сек" }
        ]
      },
      {
        name: "Hex", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/lion_voodoo.png",
        desc: "Превращает врага в безобидное животное.", isPassive: false,
        levels: [
          { lvl: 1, mana: "125 МАНА", cd: "30 СЕК", effect: "Длительность 2.5 сек" },
          { lvl: 2, mana: "150 МАНА", cd: "24 СЕК", effect: "Длительность 3.0 сек" },
          { lvl: 3, mana: "175 МАНА", cd: "18 СЕК", effect: "Длительность 3.5 сек" },
          { lvl: 4, mana: "200 МАНА", cd: "12 СЕК", effect: "Длительность 4.0 сек" }
        ]
      },
      {
        name: "Mana Drain", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/lion_mana_drain.png",
        desc: "Вытягивает ману из противника, восстанавливая её себе.", isPassive: false,
        levels: [
          { lvl: 1, mana: "10 МАНА", cd: "20 СЕК", effect: "По 20 маны в сек" },
          { lvl: 2, mana: "10 МАНА", cd: "15 СЕК", effect: "По 40 маны в сек" },
          { lvl: 3, mana: "10 МАНА", cd: "10 СЕК", effect: "По 60 маны в сек" },
          { lvl: 4, mana: "10 МАНА", cd: "5 СЕК", effect: "По 80 маны в сек" }
        ]
      },
      {
        name: "Finger of Death", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/lion_finger_of_death.png",
        desc: "Наносит смертельный магический урон одной выбранной цели.", isPassive: false,
        levels: [
          { lvl: 1, mana: "200 МАНА", cd: "160 СЕК", effect: "600 урона" },
          { lvl: 2, mana: "420 МАНА", cd: "100 СЕК", effect: "725 урона" },
          { lvl: 3, mana: "650 МАНА", cd: "40 СЕК", effect: "850 урона" }
        ]
      }
    ]
  }
];
