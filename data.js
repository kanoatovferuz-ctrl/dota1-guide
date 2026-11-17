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
    name: "Mars", dota1: "Mars", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mars.png",
    bio: "<p>Перворожденный бог войны пантеона, сокрушающий врагов огромным щитом и копьем под знаменами Света.</p>",
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
        { name: "Soul Ring", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/soul_ring.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Desolator", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/desolator.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен с:</b> Skywrath Mage, Lina.<br><b>Контрят:</b> Lifestealer, Ursa.",
    skills: [
      {
        name: "Spear of Mars", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/mars_spear.png",
        desc: "Бросает копье, пронзая врага и прижимая его к стене или строению, оглушая цели.", isPassive: false,
        levels: [
          { lvl: 1, mana: "110 МАНА", cd: "14 СЕК", effect: "75 урона, стан 1.6 сек" },
          { lvl: 2, mana: "120 МАНА", cd: "13 СЕК", effect: "150 урона, стан 2.0 сек" },
          { lvl: 3, mana: "130 МАНА", cd: "12 СЕК", effect: "225 урона, стан 2.4 сек" },
          { lvl: 4, mana: "140 МАНА", cd: "11 СЕК", effect: "300 урона, стан 2.8 сек" }
        ]
      },
      {
        name: "God's Rebuke", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/mars_gods_rebuke.png",
        desc: "Бьет щитом перед собой, отталкивая врагов и нанося критический урон на основе атаки.", isPassive: false,
        levels: [
          { lvl: 1, mana: "70 МАНА", cd: "16 СЕК", effect: "+20 к урону, замедление" },
          { lvl: 2, mana: "70 МАНА", cd: "14 СЕК", effect: "+40 к урону, замедление" },
          { lvl: 3, mana: "70 МАНА", cd: "12 СЕК", effect: "+60 к урону, замедление" },
          { lvl: 4, mana: "70 МАНА", cd: "10 СЕК", effect: "+80 к урону, замедление" }
        ]
      },
      {
        name: "Bulwark", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/mars_bulwark.png",
        desc: "Пассивно блокирует часть физического урона спереди и по бокам с помощью щита.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Блокирует 40% урона спереди" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Блокирует 50% урона спереди" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Блокирует 60% урона спереди" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Блокирует 70% урона спереди" }
        ]
      },
      {
        name: "Arena of Blood", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/mars_arena_of_blood.png",
        desc: "Призывает арену из копьеносцев, которые преграждают путь и бьют врагов внутри кольца.", isPassive: false,
        levels: [
          { lvl: 1, mana: "150 МАНА", cd: "90 СЕК", effect: "Длительность 5 сек" },
          { lvl: 2, mana: "175 МАНА", cd: "75 СЕК", effect: "Длительность 6 сек" },
          { lvl: 3, mana: "200 МАНА", cd: "60 СЕК", effect: "Длительность 7 сек" }
        ]
      }
    ]
  },
  {
    name: "Pit Lord", dota1: "Azgalor", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/underlord.png",
    bio: "<p>Повелитель бездны, управляющий пространством и порталами для мгновенного перемещения армии.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Ring of Basilius", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ring_of_basilius.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Magic Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Arcane Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png" },
        { name: "Mekansm", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mekansm.png" },
        { name: "Pipe of Insight", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/pipe.png" },
        { name: "Crimson Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/crimson_guard.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" }
      ],
      late: [
        { name: "Guardian Greaves", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/guardian_greaves.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Octarine Core", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Крипов и пушащих героев.<br><b>Контрят:</b> Silencer, Anti-Mage.",
    skills: [
      {
        name: "Firestorm", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abyssal_underlord_firestorm.png",
        desc: "Вызывает волны огня в указанной области, нанося урон со временем.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "14 СЕК", effect: "Урон в % от здоровья цели" },
          { lvl: 2, mana: "110 МАНА", cd: "13 СЕК", effect: "Урон в % от здоровья цели" },
          { lvl: 3, mana: "120 МАНА", cd: "12 СЕК", effect: "Урон в % от здоровья цели" },
          { lvl: 4, mana: "130 МАНА", cd: "11 СЕК", effect: "Урон в % от здоровья цели" }
        ]
      },
      {
        name: "Pit of Malice", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abyssal_underlord_pit_of_malice.png",
        desc: "Создает смертоносную яму, которая ловит и удерживает наступающих на нее врагов.", isPassive: false,
        levels: [
          { lvl: 1, mana: "80 МАНА", cd: "30 СЕК", effect: "Удержание 1.2 сек" },
          { lvl: 2, mana: "90 МАНА", cd: "26 СЕК", effect: "Удержание 1.4 сек" },
          { lvl: 3, mana: "100 МАНА", cd: "22 СЕК", effect: "Удержание 1.6 сек" },
          { lvl: 4, mana: "110 МАНА", cd: "18 СЕК", effect: "Удержание 1.8 сек" }
        ]
      },
      {
        name: "Atrophy Aura", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abyssal_underlord_atrophy_aura.png",
        desc: "Пассивно уменьшает урон врагов поблизости и временно повышает урон самого героя за смерть юнитов.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "-7% урона врагов" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "-14% урона врагов" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "-21% урона врагов" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "-28% урона врагов" }
        ]
      },
      {
        name: "Fiend's Gate", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abyssal_underlord_warp_rift.png",
        desc: "Открывает врата для перемещения себя и союзников в указанную точку карты.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "50 СЕК", effect: "Создание портала" },
          { lvl: 2, mana: "50 МАНА", cd: "40 СЕК", effect: "Создание портала" },
          { lvl: 3, mana: "50 МАНА", cd: "30 СЕК", effect: "Создание портала" }
        ]
      }
    ]
  },
  {
    name: "Treant Protector", dota1: "Rooftree", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/treant.png",
    bio: "<p>Древний лесной страж, защищающий природу и способный срастаться с деревьями ради маскировки.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Wind Lace", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wind_lace.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Meteor Hammer", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/meteor_hammer.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" },
        { name: "Solar Crest", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/solar_crest.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" }
      ],
      late: [
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Octarine Core", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен с:</b> Глобальными героями (Spectre, Zeus).<br><b>Контрят:</b> Quelling Blade, Tango, Seer.",
    skills: [
      {
        name: "Nature's Grasp", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/treant_natures_grasp.png",
        desc: "Создает лозы от деревьев, замедляющие врагов и наносящие урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "70 МАНА", cd: "20 СЕК", effect: "Замедление 25%, урон" },
          { lvl: 2, mana: "80 МАНА", cd: "19 СЕК", effect: "Замедление 30%, урон" },
          { lvl: 3, mana: "90 МАНА", cd: "18 СЕК", effect: "Замедление 35%, урон" },
          { lvl: 4, mana: "100 МАНА", cd: "17 СЕК", effect: "Замедление 40%, урон" }
        ]
      },
      {
        name: "Leech Seed", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/treant_leech_seed.png",
        desc: "Сажает семечко в цель, замедляя ее и вытягивая здоровье в пользу союзников.", isPassive: false,
        levels: [
          { lvl: 1, mana: "80 МАНА", cd: "16 СЕК", effect: "Лечение 24 в сек" },
          { lvl: 2, mana: "90 МАНА", cd: "14 СЕК", effect: "Лечение 36 в сек" },
          { lvl: 3, mana: "100 МАНА", cd: "12 СЕК", effect: "Лечение 48 в сек" },
          { lvl: 4, mana: "110 МАНА", cd: "10 СЕК", effect: "Лечение 60 в сек" }
        ]
      },
      {
        name: "Living Armor", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/treant_living_armor.png",
        desc: "Накладывает защитный баузер на союзника или башню, восстанавливая здоровье и давая броню.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "30 СЕК", effect: "+7 брони, хил 60" },
          { lvl: 2, mana: "50 МАНА", cd: "26 СЕК", effect: "+10 брони, хил 120" },
          { lvl: 3, mana: "50 МАНА", cd: "22 СЕК", effect: "+13 брони, хил 180" },
          { lvl: 4, mana: "50 МАНА", cd: "18 СЕК", effect: "+16 брони, хил 240" }
        ]
      },
      {
        name: "Overgrowth", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/treant_overgrowth.png",
        desc: "Опутывает корнями всех врагов на карте вокруг дерева, обездвиживая и нанося урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "150 МАНА", cd: "100 СЕК", effect: "Обездвиживание 3.0 сек" },
          { lvl: 2, mana: "175 МАНА", cd: "85 СЕК", effect: "Обездвиживание 4.0 сек" },
          { lvl: 3, mana: "200 МАНА", cd: "70 СЕК", effect: "Обездвиживание 5.0 сек" }
        ]
      }
    ]
  },
  {
    name: "Tusk", dota1: "Ymir", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tusk.png",
    bio: "<p>Непобедимый боец из Холодных Земель, мастер кулачного боя и ледяных стен.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Blades of Attack", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blades_of_attack.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Drum of Endurance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/drum.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Desolator", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/desolator.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен с:</b> Героями с масс-ульями (Enigma, Tidehunter).<br><b>Контрят:</b> Lifestealer, Slark.",
    skills: [
      {
        name: "Ice Shards", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/tusk_ice_shards.png",
        desc: "Запускает ледяные осколки, преграждающие путь врагам и наносящие урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "23 СЕК", effect: "70 урона, преграда 4 сек" },
          { lvl: 2, mana: "100 МАНА", cd: "20 СЕК", effect: "140 урона, преграда 4 сек" },
          { lvl: 3, mana: "100 МАНА", cd: "17 СЕК", effect: "210 урона, преграда 4 сек" },
          { lvl: 4, mana: "100 МАНА", cd: "14 СЕК", effect: "280 урона, преграда 4 сек" }
        ]
      },
      {
        name: "Snowball", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/tusk_snowball.png",
        desc: "Катит снежный ком, собирая союзников по пути и оглушая врагов при столкновении.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "21 СЕК", effect: "80 урона, стан 0.8 сек" },
          { lvl: 2, mana: "75 МАНА", cd: "18 СЕК", effect: "160 урона, стан 1.1 сек" },
          { lvl: 3, mana: "75 МАНА", cd: "15 СЕК", effect: "240 урона, стан 1.4 сек" },
          { lvl: 4, mana: "75 МАНА", cd: "12 СЕК", effect: "320 урона, стан 1.7 сек" }
        ]
      },
      {
        name: "Tag Team", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/tusk_tag_team.png",
        desc: "Призывает метку, замедляющую врагов вокруг и усиливающую атаки по ним.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "24 СЕК", effect: "-25% замедление, +25 урона" },
          { lvl: 2, mana: "60 МАНА", cd: "20 СЕК", effect: "-35% замедление, +50 урона" },
          { lvl: 3, mana: "70 МАНА", cd: "16 СЕК", effect: "-45% замедление, +75 урона" },
          { lvl: 4, mana: "80 МАНА", cd: "12 СЕК", effect: "-55% замедление, +100 урона" }
        ]
      },
      {
        name: "Walrus PUNCH!", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/tusk_walrus_punch.png",
        desc: "Наносит сокрушительный апперкот, подбрасывая цель в воздух и критически раня ее.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "20 СЕК", effect: "Крит 300%, подброс" },
          { lvl: 2, mana: "100 МАНА", cd: "16 СЕК", effect: "Крит 350%, подброс" },
          { lvl: 3, mana: "100 МАНА", cd: "12 СЕК", effect: "Крит 400%, подброс" }
        ]
      }
    ]
  },
  {
    name: "Phoenix", dota1: "Icarus", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phoenix.png",
    bio: "<p>Звездное создание чистой плазмы, управляющее силой солнца и возрождающееся из пепла.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Clarity", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/clarity.png" },
        { name: "Headdress", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/headdress.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Magic Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Tranq Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tranquil_boots.png" },
        { name: "Urn of Shadows", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/urn.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Radiance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/radiance.png" }
      ],
      late: [
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Octarine Core", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Героев без высокой скорости атаки.<br><b>Контрят:</b> Ursa, Troll Warlock, Sniper, Silencer.",
    skills: [
      {
        name: "Icarus Dive", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/phoenix_icarus_dive.png",
        desc: "Совершает огненный полет по дуге, замедляя врагов и оставляя за собой пламя.", isPassive: false,
        levels: [
          { lvl: 1, mana: "0 МАНА", cd: "36 СЕК", effect: "100 урона, замедление" },
          { lvl: 2, mana: "0 МАНА", cd: "34 СЕК", effect: "140 урона, замедление" },
          { lvl: 3, mana: "0 МАНА", cd: "32 СЕК", effect: "180 урона, замедление" },
          { lvl: 4, mana: "0 МАНА", cd: "30 СЕК", effect: "220 урона, замедление" }
        ]
      },
      {
        name: "Fire Spirits", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/phoenix_fire_spirits.png",
        desc: "Призывает духов огня, которые могут поджигать врагов или лечить союзников.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100/110/120/130", cd: "20 СЕК", effect: "Урон 20 за духа" },
          { lvl: 2, mana: "100/110/120/130", cd: "20 СЕК", effect: "Урон 40 за духа" },
          { lvl: 3, mana: "100/110/120/130", cd: "20 СЕК", effect: "Урон 60 за духа" },
          { lvl: 4, mana: "100/110/120/130", cd: "20 СЕК", effect: "Урон 80 за духа" }
        ]
      },
      {
        name: "Sun Ray", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/phoenix_sun_ray.png",
        desc: "Испускает мощный луч света, который наносит урон врагам и исцеляет союзников пропорционально здоровью.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "20 СЕК", effect: "Урон/хил в % от здоровья" },
          { lvl: 2, mana: "100 МАНА", cd: "20 СЕК", effect: "Урон/хил в % от здоровья" },
          { lvl: 3, mana: "100 МАНА", cd: "20 СЕК", effect: "Урон/хил в % от здоровья" },
          { lvl: 4, mana: "100 МАНА", cd: "20 СЕК", effect: "Урон/хил в % от здоровья" }
        ]
      },
      {
        name: "Supernova", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/phoenix_supernova.png",
        desc: "Превращается в солнце, оглушая врагов вокруг. Если солнце не уничтожить атаками, Феникс возродится с полной силой.", isPassive: false,
        levels: [
          { lvl: 1, mana: "200 МАНА", cd: "110 СЕК", effect: "Атак для разрушения: 5" },
          { lvl: 2, mana: "200 МАНА", cd: "100 СЕК", effect: "Атак для разрушения: 7" },
          { lvl: 3, mana: "200 МАНА", cd: "90 СЕК", effect: "Атак для разрушения: 10" }
        ]
      }
    ]
  },
  {
    name: "Earth Spirit", dota1: "Kaolin", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earth_spirit.png",
    bio: "<p>Каменный дух, управляющий каменными изваяниями для контроля поля боя, стремительных рывков и спасения союзников.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Clarity", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/clarity.png" },
        { name: "Urns", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/urn.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Magic Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Arcane Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Spirit Vessel", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/vessel.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Force Staff", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png" }
      ],
      late: [
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Octarine Core", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" },
        { name: "Scythe of Vyse", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sheepstick.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Тонких магов и саппортов.<br><b>Контрят:</b> Silencer, Doom, BKB.",
    skills: [
      {
        name: "Boulder Smash", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/earth_spirit_boulder_smash.png",
        desc: "Бьет существо или каменную копию, отправляя её в полет и нанося урон врагам на пути.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "13 СЕК", effect: "105 урона, отталкивание" },
          { lvl: 2, mana: "100 МАНА", cd: "11 СЕК", effect: "170 урона, отталкивание" },
          { lvl: 3, mana: "100 МАНА", cd: "9 СЕК", effect: "235 урона, отталкивание" },
          { lvl: 4, mana: "100 МАНА", cd: "7 СЕК", effect: "300 урона, отталкивание" }
        ]
      },
      {
        name: "Rolling Boulder", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/earth_spirit_rolling_boulder.png",
        desc: "Превращается в валун и катится вперед, нанося урон и замедляя врагов (ускоряется через камень).", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "16 СЕК", effect: "90 урона, замедление" },
          { lvl: 2, mana: "50 МАНА", cd: "12 СЕК", effect: "120 урона, замедление" },
          { lvl: 3, mana: "50 МАНА", cd: "8 СЕК", effect: "150 урона, замедление" },
          { lvl: 4, mana: "50 МАНА", cd: "4 СЕК", effect: "180 урона, замедление" }
        ]
      },
      {
        name: "Geomagnetic Grip", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/earth_spirit_geomagnetic_grip.png",
        desc: "Притягивает каменную копию к себе, нанося урон врагам на линии и безмолвствуя их.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "13 СЕК", effect: "Сайленс 2.0 сек" },
          { lvl: 2, mana: "75 МАНА", cd: "11 СЕК", effect: "Сайленс 2.5 сек" },
          { lvl: 3, mana: "75 МАНА", cd: "9 СЕК", effect: "Сайленс 3.0 сек" },
          { lvl: 4, mana: "75 МАНА", cd: "7 СЕК", effect: "Сайленс 3.5 сек" }
        ]
      },
      {
        name: "Magnetize", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/earth_spirit_magnetize.png",
        desc: "Намагничивает врагов поблизости, нанося урон со временем. Рядом стоящие камни обновляют эффект.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "80 СЕК", effect: "Урон 40 в сек" },
          { lvl: 2, mana: "100 МАНА", cd: "65 СЕК", effect: "Урон 80 в сек" },
          { lvl: 3, mana: "100 МАНА", cd: "50 СЕК", effect: "Урон 120 в сек" }
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
    name: "Beastmaster", dota1: "Rexxar", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/beastmaster.png",
    bio: "<p>Повелитель зверей из рода Мок'Натал, сражающийся бок о бок с дикими животными и метательными топорами.</p>",
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
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Helm of the Dominator", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/helm_of_the_dominator.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Vladmir's Offering", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/vladmir.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "Helm of the Overlord", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/helm_of_the_overlord.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Scythe of Vyse", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sheepstick.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Мобильных героев (Anti-Mage, Storm Spirit) за счет ульты сквозь BKB.<br><b>Контрят:</b> Enchantress, Chen, героев с быстрой зачисткой саммонов.",
    skills: [
      {
        name: "Wild Axes", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/beastmaster_wild_axes.png",
        desc: "Метает два топора, которые описывают дугу и возвращаются, рубя деревья и нанося урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "65 МАНА", cd: "8 СЕК", effect: "40 урона за топор" },
          { lvl: 2, mana: "70 МАНА", cd: "8 СЕК", effect: "70 урона за топор" },
          { lvl: 3, mana: "75 МАНА", cd: "8 СЕК", effect: "100 урона за топор" },
          { lvl: 4, mana: "80 МАНА", cd: "8 СЕК", effect: "130 урона за топор" }
        ]
      },
      {
        name: "Call of the Wild", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/beastmaster_call_of_the_wild_boar.png",
        desc: "Призывает ястреба для разведки карты и вепря, замедляющего врагов ядом.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "40 СЕК", effect: "Вепрь 1 ур. + Ястреб" },
          { lvl: 2, mana: "60 МАНА", cd: "36 СЕК", effect: "Вепрь 2 ур. + Ястреб" },
          { lvl: 3, mana: "70 МАНА", cd: "32 СЕК", effect: "Вепрь 3 ур. + Ястреб" },
          { lvl: 4, mana: "80 МАНА", cd: "28 СЕК", effect: "Вепрь 4 ур. + Ястреб" }
        ]
      },
      {
        name: "Inner Beast", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/beastmaster_inner_beast.png",
        desc: "Пассивная аура, увеличивающая скорость атаки союзников и подконтрольных существ.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+15 к скорости атаки" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+25 к скорости атаки" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+35 к скорости атаки" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+45 к скорости атаки" }
        ]
      },
      {
        name: "Primal Roar", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/beastmaster_primal_roar.png",
        desc: "Оглушительный рев, станящий главную цель сквозь BKB и расталкивающий остальных врагов.", isPassive: false,
        levels: [
          { lvl: 1, mana: "150 МАНА", cd: "90 СЕК", effect: "150 урона, стан 3.0 сек" },
          { lvl: 2, mana: "175 МАНА", cd: "75 СЕК", effect: "225 урона, стан 3.5 сек" },
          { lvl: 3, mana: "200 МАНА", cd: "60 СЕК", effect: "300 урона, стан 4.0 сек" }
        ]
      }
    ]
  },
  {
    name: "Alchemist", dota1: "Razzil Darkbrew", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png",
    bio: "<p>Гоблин-алхимик верхом на огромном мутанте, способный превращать золото в силу и сокрушать врагов химическими снадобьями.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Stout Shield", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/stout_shield.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Bottle", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bottle.png" }
      ],
      mid: [
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Radiance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/radiance.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Manta Style", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Moon Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/moon_shard.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен с:</b> Support-героями для фарма (Io, Shadow Demon).<br><b>Контрят:</b> Ancient Apparition, Doom, Ursa.",
    skills: [
      {
        name: "Acid Spray", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_acid_spray.png",
        desc: "Орошает область кислотой, нанося урон врагам и уменьшая их броню.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "22 СЕК", effect: "20 урона/сек, -3 брони" },
          { lvl: 2, mana: "120 МАНА", cd: "22 СЕК", effect: "25 урона/сек, -4 брони" },
          { lvl: 3, mana: "140 МАНА", cd: "22 СЕК", effect: "30 урона/сек, -5 брони" },
          { lvl: 4, mana: "160 МАНА", cd: "22 СЕК", effect: "35 урона/сек, -6 брони" }
        ]
      },
      {
        name: "Unstable Concoction", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_unstable_concoction.png",
        desc: "Алхимик варит бомбу, увеличивая ее урон и стан с течением времени, но рискуя взорвать ее в руках.", isPassive: false,
        levels: [
          { lvl: 1, mana: "120 МАНА", cd: "15 СЕК", effect: "Макс. стан 1.6 сек, урон 150" },
          { lvl: 2, mana: "120 МАНА", cd: "15 СЕК", effect: "Макс. стан 2.2 сек, урон 220" },
          { lvl: 3, mana: "120 МАНА", cd: "15 СЕК", effect: "Макс. стан 2.8 сек, урон 290" },
          { lvl: 4, mana: "120 МАНА", cd: "15 СЕК", effect: "Макс. стан 3.4 сек, урон 360" }
        ]
      },
      {
        name: "Greevil's Greed", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_greevils_greed.png",
        desc: "Пассивно увеличивает количество золота за убийство крипов и дает бонус за серии убийств.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Базовое золото +3, макс бонус 3" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Базовое золото +3, макс бонус 6" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Базовое золото +3, макс бонус 9" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Базовое золото +3, макс бонус 12" }
        ]
      },
      {
        name: "Chemical Rage", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_chemical_rage.png",
        desc: "Впадает в ярость, радикально ускоряя регенерацию здоровья и маны, а также увеличивая скорость атаки.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "45 СЕК", effect: "+50 HP/сек, +3 маны/сек, +30 атк" },
          { lvl: 2, mana: "50 МАНА", cd: "45 СЕК", effect: "+75 HP/сек, +5 маны/сек, +60 атк" },
          { lvl: 3, mana: "50 МАНА", cd: "45 СЕК", effect: "+100 HP/сек, +7 маны/сек, +90 атк" }
        ]
      }
    ]
  },
  {
    name: "Clockwerk", dota1: "Rattletrap", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rattletrap.png",
    bio: "<p>Изобретатель из подземного Кэз Модана, облаченный в тяжелые механические доспехи с реактивным ранцем.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Stout Shield", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/stout_shield.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Bottle", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bottle.png" }
      ],
      mid: [
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Blade Mail", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blade_mail.png" },
        { name: "Force Staff", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" }
      ],
      late: [
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Одиночных целей и магов (Sniper, Zeus).<br><b>Контрят:</b> Force Staff, Queen of Pain, Anti-Mage.",
    skills: [
      {
        name: "Battery Assault", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/rattletrap_battery_assault.png",
        desc: "Выстреливает электрическими зарядами по случайным врагам вокруг, мини-станя и раня их.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "18 СЕК", effect: "25 урона и стан 0.1 сек" },
          { lvl: 2, mana: "75 МАНА", cd: "16 СЕК", effect: "45 урона и стан 0.1 сек" },
          { lvl: 3, mana: "75 МАНА", cd: "14 СЕК", effect: "65 урона и стан 0.1 сек" },
          { lvl: 4, mana: "75 МАНА", cd: "12 СЕК", effect: "85 урона и стан 0.1 сек" }
        ]
      },
      {
        name: "Power Cogs", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/rattletrap_power_cogs.png",
        desc: "Создает электрическое кольцо шестеренок вокруг героя, отталкивая и сжигая энергию у нарушителей.", isPassive: false,
        levels: [
          { lvl: 1, mana: "80 МАНА", cd: "15 СЕК", effect: "80 урона/маны, 5 сек" },
          { lvl: 2, mana: "80 МАНА", cd: "15 СЕК", effect: "120 урона/маны, 6 сек" },
          { lvl: 3, mana: "80 МАНА", cd: "15 СЕК", effect: "160 урона/маны, 7 сек" },
          { lvl: 4, mana: "80 МАНА", cd: "15 СЕК", effect: "200 урона/маны, 8 сек" }
        ]
      },
      {
        name: "Rocket Flare", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/rattletrap_rocket_flare.png",
        desc: "Запускает осветительную ракету в любую точку карты, давая обзор и нанося урон по площади.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "20 СЕК", effect: "80 урона" },
          { lvl: 2, mana: "60 МАНА", cd: "15 СЕК", effect: "140 урона" },
          { lvl: 3, mana: "70 МАНА", cd: "10 СЕК", effect: "200 урона" },
          { lvl: 4, mana: "80 МАНА", cd: "5 СЕК", effect: "260 урона" }
        ]
      },
      {
        name: "Hookshot", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/rattletrap_hookshot.png",
        desc: "Выстреливает крюк, притягивая Clockwerk к первому попавшемуся существу и оглушая его.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "70 СЕК", effect: "100 урона, стан 1.2 сек" },
          { lvl: 2, mana: "100 МАНА", cd: "55 СЕК", effect: "200 урона, стан 1.6 сек" },
          { lvl: 3, mana: "100 МАНА", cd: "40 СЕК", effect: "300 урона, стан 2.0 сек" }
        ]
      }
    ]
  },
  {
    name: "Huskar", dota1: "Sacred Warrior", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/huskar.png",
    bio: "<p>Воин троллей-звероловов, который черпает силу и скорость атаки из собственных ран и боли.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Bracer", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bracer.png" },
        { name: "Gauntlets", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/gauntlets.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Headdress", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/headdress.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Armlet", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/armlet.png" },
        { name: "Halberd", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heavens_halberd.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" }
      ],
      late: [
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Monkey King Bar", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/monkey_king_bar.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Героев без физ. урона (Storm, Lina).<br><b>Контрят:</b> Phantom Assassin, Ursa, Axe.",
    skills: [
      {
        name: "Inner Fire", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/huskar_inner_fire.png",
        desc: "Высвобождает пламя, отталкивая и разоружая врагов вокруг себя, а также нанося им урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "14 СЕК", effect: "Disarm 1.2 сек, 75 урона" },
          { lvl: 2, mana: "75 МАНА", cd: "14 СЕК", effect: "Disarm 1.6 сек, 150 урона" },
          { lvl: 3, mana: "75 МАНА", cd: "14 СЕК", effect: "Disarm 2.0 сек, 225 урона" },
          { lvl: 4, mana: "75 МАНА", cd: "14 СЕК", effect: "Disarm 2.4 сек, 300 урона" }
        ]
      },
      {
        name: "Burning Spears", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/huskar_burning_spears.png",
        desc: "Поджигает копья ценой собственного здоровья, нанося врагам возрастающий урон от огня.", isPassive: false,
        levels: [
          { lvl: 1, mana: "0 МАНА", cd: "0 СЕК", effect: "15 урона в сек (расход 3% HP)" },
          { lvl: 2, mana: "0 МАНА", cd: "0 СЕК", effect: "30 урона в сек (расход 3% HP)" },
          { lvl: 3, mana: "0 МАНА", cd: "0 СЕК", effect: "45 урона в сек (расход 3% HP)" },
          { lvl: 4, mana: "0 МАНА", cd: "0 СЕК", effect: "60 урона в сек (расход 3% HP)" }
        ]
      },
      {
        name: "Berserker's Blood", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/huskar_berserkers_blood.png",
        desc: "Пассивно увеличивает скорость атаки и регенерацию здоровья по мере падения уровня HP героя.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+14% скорости атаки за 7% HP" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+18% скорости атаки за 7% HP" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+22% скорости атаки за 7% HP" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+26% скорости атаки за 7% HP" }
        ]
      },
      {
        name: "Life Break", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/huskar_life_break.png",
        desc: "Прыгает на врага, жертвуя частью своего здоровья и нанося урон в процентах от максимального HP цели.", isPassive: false,
        levels: [
          { lvl: 1, mana: "0 МАНА", cd: "16 СЕК", effect: "Урон 30%, замедление 40%" },
          { lvl: 2, mana: "0 МАНА", cd: "12 СЕК", effect: "Урон 40%, замедление 50%" },
          { lvl: 3, mana: "0 МАНА", cd: "8 СЕК", effect: "Урон 50%, замедление 60%" }
        ]
      }
    ]
  },
  {
    name: "Bristleback", dota1: "Rigwarl", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bristleback.png",
    bio: "<p>Грозный боец из кабаньего рода, чья спина покрыта непробиваемыми иглами, а в крови кипит неукротимая ярость.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Stout Shield", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/stout_shield.png" },
        { name: "Ring of Health", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ring_of_health.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Magic Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Vanguard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/vanguard.png" },
        { name: "Hood of Defiance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/hood_of_defiance.png" },
        { name: "Solar Crest", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/solar_crest.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" }
      ],
      late: [
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Octarine Core", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен с:</b> Io, Omniknight, Dazzle.<br><b>Контрят:</b> Silver Edge, Viper, Silencer.",
    skills: [
      {
        name: "Viscous Nasal Goo", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/bristleback_viscous_nasal_goo.png",
        desc: "Плевает вязкой слизью во врага, уменьшая его броню и замедляя передвижение. Эффект суммируется.", isPassive: false,
        levels: [
          { lvl: 1, mana: "12 МАНА", cd: "1.5 СЕК", effect: "-2 брони, -10% скорости (до 4 раз)" },
          { lvl: 2, mana: "12 МАНА", cd: "1.5 СЕК", effect: "-2 брони, -13% скорости (до 4 раз)" },
          { lvl: 3, mana: "12 МАНА", cd: "1.5 СЕК", effect: "-2 брони, -16% скорости (до 4 раз)" },
          { lvl: 4, mana: "12 МАНА", cd: "1.5 СЕК", effect: "-2 брони, -19% скорости (до 4 раз)" }
        ]
      },
      {
        name: "Quill Spray", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/bristleback_quill_spray.png",
        desc: "Разбрызгивает иглы вокруг себя, нанося урон. Каждое попадание иглы увеличивает урон от последующих.", isPassive: false,
        levels: [
          { lvl: 1, mana: "35 МАНА", cd: "3.0 СЕК", effect: "25 урона + 30 за стек игл" },
          { lvl: 2, mana: "35 МАНА", cd: "3.0 СЕК", effect: "50 урона + 30 за стек игл" },
          { lvl: 3, mana: "35 МАНА", cd: "3.0 СЕК", effect: "75 урона + 30 за стек игл" },
          { lvl: 4, mana: "35 МАНА", cd: "3.0 СЕК", effect: "100 урона + 30 за стек игл" }
        ]
      },
      {
        name: "Bristleback", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/bristleback_bristleback.png",
        desc: "Пассивно уменьшает урон, если удары приходятся в спину или бок героя. При накоплении урона выпускает иглы.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Снижение урона со спины 40%" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Снижение урона со спины 50%" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Снижение урона со спины 60%" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Снижение урона со спины 70%" }
        ]
      },
      {
        name: "Warpath", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/bristleback_warpath.png",
        desc: "Каждое применение заклинания вводит героя в ярость, повышая его скорость передвижения и урон.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+20 урона и +3% скорости за стек" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+25 урона и +4% скорости за стек" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+30 урона и +5% скорости за стек" }
        ]
      }
    ]
  },
  {
    name: "Earthshaker", dota1: "Raigor Stonehoof", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earthshaker.png",
    bio: "<p>Шаман-таурен, единый с самой землей. Одним ударом тотема способен расколоть почву и разнести толпу врагов.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Clarity", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/clarity.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/boots.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Arcane Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Force Staff", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png" },
        { name: "Eul's Scepter", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/cyclone.png" },
        { name: "Shadow Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/invis_sword.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Octarine Core", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Иллюзионистов и саммонеров (Phantom Lancer, Naga, Broodmother).<br><b>Контрят:</b> Clockwerk, Zeus, Silencer.",
    skills: [
      {
        name: "Fissure", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/earthshaker_fissure.png",
        desc: "Бьет тотемом по земле, создавая непроходимую каменную борозду и оглушая врагов.", isPassive: false,
        levels: [
          { lvl: 1, mana: "110 МАНА", cd: "18 СЕК", effect: "110 урона, стан 1.0 сек" },
          { lvl: 2, mana: "130 МАНА", cd: "17 СЕК", effect: "160 урона, стан 1.25 сек" },
          { lvl: 3, mana: "150 МАНА", cd: "16 СЕК", effect: "210 урона, стан 1.5 сек" },
          { lvl: 4, mana: "170 МАНА", cd: "15 СЕК", effect: "260 урона, стан 1.75 сек" }
        ]
      },
      {
        name: "Enchant Totem", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/earthshaker_enchant_totem.png",
        desc: "Заряжает тотем энергией, многократно усиливая следующую атаку.", isPassive: false,
        levels: [
          { lvl: 1, mana: "35 МАНА", cd: "5 СЕК", effect: "+100% базового урона" },
          { lvl: 2, mana: "40 МАНА", cd: "5 СЕК", effect: "+200% базового урона" },
          { lvl: 3, mana: "45 МАНА", cd: "5 СЕК", effect: "+300% базового урона" },
          { lvl: 4, mana: "50 МАНА", cd: "5 СЕК", effect: "+400% базового урона" }
        ]
      },
      {
        name: "Aftershock", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/earthshaker_aftershock.png",
        desc: "Каждое применение способности сотрясает землю вокруг героя, оглушая и раня врагов.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "75 урона, стан 0.6 сек" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "100 урона, стан 0.9 сек" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "125 урона, стан 1.2 сек" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "150 урона, стан 1.5 сек" }
        ]
      },
      {
        name: "Echo Slam", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/earthshaker_echo_slam.png",
        desc: "Ударная волна разлетается по земле, отскакивая от каждого врага и нанося тем больше урона, чем больше целей рядом.", isPassive: false,
        levels: [
          { lvl: 1, mana: "145 МАНА", cd: "150 СЕК", effect: "100 + 70 урона за эхо" },
          { lvl: 2, mana: "205 МАНА", cd: "130 СЕК", effect: "140 + 90 урона за эхо" },
          { lvl: 3, mana: "265 МАНА", cd: "110 СЕК", effect: "180 + 110 урона за эхо" }
        ]
      }
    ]
  },
  {
    name: "Omniknight", dota1: "Purist Thunderwrath", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/omniknight.png",
    bio: "<p>Бывший рыцарь Серебряной Длани, обратившийся к самой Всезнающей силе ради защиты союзников в бою.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Soul Ring", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/soul_ring.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Arcane Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png" },
        { name: "Mekansm", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mekansm.png" },
        { name: "Aether Lens", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aether_lens.png" },
        { name: "Glimmer Cape", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/glimmer_cape.png" },
        { name: "Force Staff", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "Guardian Greaves", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/guardian_greaves.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Lotus Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/lotus_orb.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Octarine Core", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" }
      ]
    },
    countersInfo: "<b>Силен с:</b> PA, Sven, Juggernaut.<br><b>Контрят:</b> Shadow Demon, Oracle, Invoker (Tornado).",
    skills: [
      {
        name: "Purification", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/omniknight_purification.png",
        desc: "Мгновенно исцеляет союзника и наносит чистый урон всем врагам вокруг него.", isPassive: false,
        levels: [
          { lvl: 1, mana: "85 МАНА", cd: "14 СЕК", effect: "90 лечения и чистого урона" },
          { lvl: 2, mana: "100 МАНА", cd: "13 СЕК", effect: "160 лечения и чистого урона" },
          { lvl: 3, mana: "115 МАНА", cd: "12 СЕК", effect: "230 лечения и чистого урона" },
          { lvl: 4, mana: "130 МАНА", cd: "11 СЕК", effect: "300 лечения и чистого урона" }
        ]
      },
      {
        name: "Repel", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/omniknight_repel.png",
        desc: "Окружает союзника божественным барьером, дающим сопротивление магии и бонус к силе.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "24 СЕК", effect: "Длительность 6 сек, +60% сопр. магии" },
          { lvl: 2, mana: "80 МАНА", cd: "22 СЕК", effect: "Длительность 8 сек, +60% сопр. магии" },
          { lvl: 3, mana: "85 МАНА", cd: "20 СЕК", effect: "Длительность 10 сек, +60% сопр. магии" },
          { lvl: 4, mana: "90 МАНА", cd: "18 СЕК", effect: "Длительность 12 сек, +60% сопр. магии" }
        ]
      },
      {
        name: "Degen Aura", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/omniknight_degen_aura.png",
        desc: "Пассивно замедляет передвижение и атаку врагов, подошедших слишком близко.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "-10% скорости передвижения" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "-18% скорости передвижения" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "-26% скорости передвижения" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "-34% скорости передвижения" }
        ]
      },
      {
        name: "Guardian Angel", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/omniknight_guardian_angel.png",
        desc: "Призывает ангелов-хранителей, даруя союзникам полную неуязвимость к физическому урону.", isPassive: false,
        levels: [
          { lvl: 1, mana: "125 МАНА", cd: "160 СЕК", effect: "Неуязвимость к физ. урону 5 сек" },
          { lvl: 2, mana: "175 МАНА", cd: "140 СЕК", effect: "Неуязвимость к физ. урону 6 сек" },
          { lvl: 3, mana: "250 МАНА", cd: "120 СЕК", effect: "Неуязвимость к физ. урону 7 сек" }
        ]
      }
    ]
  },
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
    name: "Dragon Knight", dota1: "Sir Davion", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dragon_knight.png",
    bio: "<p>Рыцарь, принявший кровь древнего дракона. В бою превращается в огнедышащего крылатого монстра.</p>",
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
        { name: "Armlet", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/armlet.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Shadow Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/invis_sword.png" },
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
    countersInfo: "<b>Силен с:</b> Crystal Maiden, Vengeful Spirit.<br><b>Контрят:</b> Viper, OD.",
    skills: [
      {
        name: "Breathe Fire", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dragon_knight_breathe_fire.png",
        desc: "Выдыхает огонь перед собой, нанося урон и снижая атаку врагов.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "16 СЕК", effect: "90 урона, -20% атаки" },
          { lvl: 2, mana: "110 МАНА", cd: "16 СЕК", effect: "170 урона, -25% атаки" },
          { lvl: 3, mana: "120 МАНА", cd: "16 СЕК", effect: "250 урона, -30% атаки" },
          { lvl: 4, mana: "130 МАНА", cd: "16 СЕК", effect: "330 урона, -35% атаки" }
        ]
      },
      {
        name: "Dragon Tail", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dragon_knight_dragon_tail.png",
        desc: "Бьет врага щитом вплотную, оглушая его и нанося урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "70 МАНА", cd: "16 СЕК", effect: "70 урона, стан 2.25 сек" },
          { lvl: 2, mana: "80 МАНА", cd: "14 СЕК", effect: "100 урона, стан 2.5 сек" },
          { lvl: 3, mana: "90 МАНА", cd: "12 СЕК", effect: "130 урона, стан 2.75 сек" },
          { lvl: 4, mana: "100 МАНА", cd: "10 СЕК", effect: "160 урона, стан 3.0 сек" }
        ]
      },
      {
        name: "Dragon Blood", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dragon_knight_dragon_blood.png",
        desc: "Пассивно увеличивает броню и регенерацию здоровья рыцаря.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+3 брони, +2.5 HP/сек" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+6 брони, +5.0 HP/сек" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+9 брони, +7.5 HP/сек" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+12 брони, +10.0 HP/сек" }
        ]
      },
      {
        name: "Elder Dragon Form", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dragon_knight_elder_dragon_form.png",
        desc: "Превращает героя в могучего дракона с дальнобойной атакой и эффектами от стихий.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "115 СЕК", effect: "Зеленый дракон (яд)" },
          { lvl: 2, mana: "50 МАНА", cd: "115 СЕК", effect: "Красный дракон (сплеш)" },
          { lvl: 3, mana: "50 МАНА", cd: "115 СЕК", effect: "Синий дракон (мороз и стан)" }
        ]
      }
    ]
  },
  {
    name: "Kunkka", dota1: "Admiral", attr: "Strength", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/kunkka.png",
    bio: "<p>Легендарный адмирал флота людей, владеющий мистической силой приливов и призрачного корабля.</p>",
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
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Drum of Endurance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/drum.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Crystalys", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/lesser_crit.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Divine Rapier", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/rapier.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Групп врагов (сплеш с Tidebringer).<br><b>Контрят:</b> Линка, BKB.",
    skills: [
      {
        name: "Torrent", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/kunkka_torrent.png",
        desc: "Создает гейзер в указанной точке, который взрывается через задержку, подбрасывая врагов.", isPassive: false,
        levels: [
          { lvl: 1, mana: "90 МАНА", cd: "16 СЕК", effect: "75 урона, стан 1.6 сек" },
          { lvl: 2, mana: "100 МАНА", cd: "14 СЕК", effect: "150 урона, стан 2.0 сек" },
          { lvl: 3, mana: "110 МАНА", cd: "12 СЕК", effect: "225 урона, стан 2.4 сек" },
          { lvl: 4, mana: "120 МАНА", cd: "10 СЕК", effect: "300 урона, стан 2.8 сек" }
        ]
      },
      {
        name: "Tidebringer", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/kunkka_tidebringer.png",
        desc: "Заряжает меч силой океана, увеличивая урон по площади при следующей атаке.", isPassive: false,
        levels: [
          { lvl: 1, mana: "0 МАНА", cd: "13 СЕК", effect: "+25 урона, сплеш" },
          { lvl: 2, mana: "0 МАНА", cd: "10 СЕК", effect: "+50 урона, сплеш" },
          { lvl: 3, mana: "0 МАНА", cd: "7 СЕК", effect: "+75 урона, сплеш" },
          { lvl: 4, mana: "0 МАНА", cd: "4 СЕК", effect: "+100 урона, сплеш" }
        ]
      },
      {
        name: "X Marks the Spot", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/kunkka_x_marks_the_spot.png",
        desc: "Отмечает точку на земле под целью. Через время цель возвращается обратно.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "26 СЕК", effect: "Длительность 4 сек" },
          { lvl: 2, mana: "50 МАНА", cd: "22 СЕК", effect: "Длительность 6 сек" },
          { lvl: 3, mana: "50 МАНА", cd: "18 СЕК", effect: "Длительность 8 сек" },
          { lvl: 4, mana: "50 МАНА", cd: "14 СЕК", effect: "Длительность 10 сек" }
        ]
      },
      {
        name: "Ghost Ship", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/kunkka_ghost_ship.png",
        desc: "Призывает призрачный корабль, который врезается в землю, оглушая врагов и бафая союзников.", isPassive: false,
        levels: [
          { lvl: 1, mana: "150 МАНА", cd: "80 СЕК", effect: "400 урона, ром баф" },
          { lvl: 2, mana: "200 МАНА", cd: "60 СЕК", effect: "500 урона, ром баф" },
          { lvl: 3, mana: "250 МАНА", cd: "40 СЕК", effect: "600 урона, ром баф" }
        ]
      }
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
  {
    name: "Undying", dota1: "Dirge", attr: "Strength", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/undying.png",
    bio: "<p>Некромант-пожиратель душ, способный призывать гниющие зомби-томбы и превращаться в жуткого монстра.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Soul Ring", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/soul_ring.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Magic Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Arcane Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png" },
        { name: "Hand of Midas", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/hand_of_midas.png" },
        { name: "Pipe of Insight", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/pipe.png" },
        { name: "Crimson Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/crimson_guard.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" }
      ],
      late: [
        { name: "Guardian Greaves", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/guardian_greaves.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Octarine Core", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Героев ближнего боя на линии (Axe, Centaur).<br><b>Контрят:</b> Gyrocopter, Medusa, Luna, Quelling Blade (на могилу).",
    skills: [
      {
        name: "Decay", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/undying_decay.png",
        desc: "Вытягивает силу у врагов в указанной области, нанося урон и временно забирая их очки силы.", isPassive: false,
        levels: [
          { lvl: 1, mana: "85 МАНА", cd: "10 СЕК", effect: "Крадет 4 силы, урон 80" },
          { lvl: 2, mana: "90 МАНА", cd: "8 СЕК", effect: "Крадет 4 силы, урон 140" },
          { lvl: 3, mana: "95 МАНА", cd: "6 СЕК", effect: "Крадет 4 силы, урон 200" },
          { lvl: 4, mana: "100 МАНА", cd: "4 СЕК", effect: "Крадет 4 силы, урон 260" }
        ]
      },
      {
        name: "Soul Rip", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/undying_soul_rip.png",
        desc: "Вырывает духов из юнитов поблизости, нанося урон врагам или исцеляя союзников в зависимости от числа юнитов.", isPassive: false,
        levels: [
          { lvl: 1, mana: "80 МАНА", cd: "19 СЕК", effect: "Урон/хил 25 за юнита" },
          { lvl: 2, mana: "90 МАНА", cd: "16 СЕК", effect: "Урон/хил 35 за юнита" },
          { lvl: 3, mana: "100 МАНА", cd: "13 СЕК", effect: "Урон/хил 45 за юнита" },
          { lvl: 4, mana: "110 МАНА", cd: "10 СЕК", effect: "Урон/хил 55 за юнита" }
        ]
      },
      {
        name: "Tombstone", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/undying_tombstone.png",
        desc: "Призывает надгробный камень, который создает зомби возле каждого врага с пониженным здоровьем.", isPassive: false,
        levels: [
          { lvl: 1, mana: "120 МАНА", cd: "85 СЕК", effect: "Зомби замедляют атаку" },
          { lvl: 2, mana: "130 МАНА", cd: "80 СЕК", effect: "Зомби замедляют атаку" },
          { lvl: 3, mana: "140 МАНА", cd: "75 СЕК", effect: "Зомби замедляют атаку" },
          { lvl: 4, mana: "150 МАНА", cd: "70 СЕК", effect: "Зомби замедляют атаку" }
        ]
      },
      {
        name: "Flesh Golem", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/undying_flesh_golem.png",
        desc: "Превращает героя в чудовищного голема, увеличивая здоровье и распространяя чуму вокруг.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "120 СЕК", effect: "+400 HP, вампиризм от атак" },
          { lvl: 2, mana: "150 МАНА", cd: "110 СЕК", effect: "+700 HP, вампиризм от атак" },
          { lvl: 3, mana: "200 МАНА", cd: "100 СЕК", effect: "+1000 HP, вампиризм от атак" }
        ]
      }
    ]
  },
  {
    name: "Skeleton King", dota1: "Leoric", attr: "Strength", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/wraith_king.png",
    bio: "<p>Бессмертный монарх Тьмы, который после гибели всегда восстает из пепла благодаря силе реинкарнации.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Bracer", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bracer.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Armlet", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/armlet.png" },
        { name: "Echo Sabre", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/echo_sabre.png" },
        { name: "Radiance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/radiance.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен с:</b> Омега-керри за счет вампиризма и станов.<br><b>Контрят:</b> Diffusal Blade, Invoker, Anti-Mage (сжигание маны).",
    skills: [
      {
        name: "Wraithfire Blast", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/skeleton_king_hellfire_blast.png",
        desc: "Выпускает сгусток адского пламени, оглушающий цель и наносящий урон со временем.", isPassive: false,
        levels: [
          { lvl: 1, mana: "95 МАНА", cd: "14 СЕК", effect: "70 урона, стан 1.1 сек" },
          { lvl: 2, mana: "110 МАНА", cd: "12 СЕК", effect: "140 урона, стан 1.4 сек" },
          { lvl: 3, mana: "125 МАНА", cd: "10 СЕК", effect: "210 урона, стан 1.7 сек" },
          { lvl: 4, mana: "140 МАНА", cd: "8 СЕК", effect: "280 урона, стан 2.0 сек" }
        ]
      },
      {
        name: "Vampiric Spirit", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/skeleton_king_vampiric_aura.png",
        desc: "Пассивно дает вампиризм атакам и накапливает заряды скелетов для призыва в бой.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "15% вампиризма, макс 2 скелета" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "20% вампиризма, макс 4 скелета" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "25% вампиризма, макс 6 скелетов" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "30% вампиризма, макс 8 скелетов" }
        ]
      },
      {
        name: "Mortal Strike", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/skeleton_king_mortal_strike.png",
        desc: "Шанс нанести сокрушительный критический удар по врагам.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "4.0 СЕК", effect: "Крит 150%" },
          { lvl: 2, mana: "ПАССИВНО", cd: "3.5 СЕК", effect: "Крит 190%" },
          { lvl: 3, mana: "ПАССИВНО", cd: "3.0 СЕК", effect: "Крит 230%" },
          { lvl: 4, mana: "ПАССИВНО", cd: "2.5 СЕК", effect: "Крит 270%" }
        ]
      },
      {
        name: "Reincarnation", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/skeleton_king_reincarnation.png",
        desc: "При смерти героя автоматически возвращает его к жизни на том же месте при наличии маны.", isPassive: false,
        levels: [
          { lvl: 1, mana: "160 МАНА", cd: "200 СЕК", effect: "Возрождение через 5.0 сек" },
          { lvl: 2, mana: "160 МАНА", cd: "140 СЕК", effect: "Возрождение через 5.0 сек" },
          { lvl: 3, mana: "160 МАНА", cd: "80 СЕК", effect: "Возрождение через 5.0 сек" }
        ]
      }
    ]
  },
  {
    name: "Slardar", dota1: "Slithereen Guard", attr: "Strength", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slardar.png",
    bio: "<p>Чешуйчатый страж океанских глубин, способный оглушать врагов ударами хвоста и лишать их брони.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Bracer", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bracer.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Echo Sabre", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/echo_sabre.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Невидимок и героев с низкой броней (Riki, Bounty Hunter).<br><b>Контрят:</b> Lifestealer, Ursa, Slark.",
    skills: [
      {
        name: "Sprint", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/slardar_sprint.png",
        desc: "Значительно увеличивает скорость передвижения и позволяет проходить сквозь юнитов.", isPassive: false,
        levels: [
          { lvl: 1, mana: "25 МАНА", cd: "23 СЕК", effect: "+17% скорости на 20 сек" },
          { lvl: 2, mana: "25 МАНА", cd: "21 СЕК", effect: "+23% скорости на 20 сек" },
          { lvl: 3, mana: "25 МАНА", cd: "19 СЕК", effect: "+29% скорости на 20 сек" },
          { lvl: 4, mana: "25 МАНА", cd: "17 СЕК", effect: "+35% скорости на 20 сек" }
        ]
      },
      {
        name: "Slithereen Crush", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/slardar_slithereen_crush.png",
        desc: "Бьет хвостом по земле, оглушая и замедляя всех врагов поблизости.", isPassive: false,
        levels: [
          { lvl: 1, mana: "80 МАНА", cd: "8 СЕК", effect: "70 урона, стан 1.0 сек" },
          { lvl: 2, mana: "90 МАНА", cd: "8 СЕК", effect: "130 урона, стан 1.3 сек" },
          { lvl: 3, mana: "100 МАНА", cd: "8 СЕК", effect: "190 урона, стан 1.6 сек" },
          { lvl: 4, mana: "110 МАНА", cd: "8 СЕК", effect: "250 урона, стан 1.9 сек" }
        ]
      },
      {
        name: "Bash of the Deep", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/slardar_bash_of_the_deep.png",
        desc: "Каждая четвертая атака наносит дополнительный урон и оглушает цель.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "60 урона, стан 1.0 сек" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "80 урона, стан 1.1 сек" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "100 урона, стан 1.2 сек" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "120 урона, стан 1.3 сек" }
        ]
      },
      {
        name: "Corrosive Haze", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/slardar_amplify_damage.png",
        desc: "Освещает цель, лишая ее брони и раскрывая невидимость.", isPassive: false,
        levels: [
          { lvl: 1, mana: "25 МАНА", cd: "5 СЕК", effect: "-10 брони" },
          { lvl: 2, mana: "25 МАНА", cd: "5 СЕК", effect: "-15 брони" },
          { lvl: 3, mana: "25 МАНА", cd: "5 СЕК", effect: "-20 брони" }
        ]
      }
    ]
  },
  {
    name: "Spirit Breaker", dota1: "Bara", attr: "Strength", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spirit_breaker.png",
    bio: "<p>Грозный космический баратрум, способный мчаться сквозь всю карту и сносить врагов сокрушительным ударом.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Urn", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/urn.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Drum of Endurance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/drum.png" },
        { name: "Shadow Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/invis_sword.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Harpoon", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/harpoon.png" }
      ],
      late: [
        { name: "Silver Edge", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/silver_edge.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Monkey King Bar", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/monkey_king_bar.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Одиночных целей и сплитпушеров (Sniper, Tinker).<br><b>Контрят:</b> Linken's Sphere, Windwaker, Counter Helix.",
    skills: [
      {
        name: "Charge of Darkness", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/spirit_breaker_charge_of_darkness.png",
        desc: "Набирает скорость, устремляясь сквозь всю карту к выбранному врагу для оглушения.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "17 СЕК", effect: "Стан 1.2 сек" },
          { lvl: 2, mana: "100 МАНА", cd: "15 СЕК", effect: "Стан 1.6 сек" },
          { lvl: 3, mana: "100 МАНА", cd: "13 СЕК", effect: "Стан 2.0 сек" },
          { lvl: 4, mana: "100 МАНА", cd: "11 СЕК", effect: "Стан 2.4 сек" }
        ]
      },
      {
        name: "Empowering Haste", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/spirit_breaker_empowering_haste.png",
        desc: "Пассивно увеличивает скорость передвижения героя и дает бонус союзникам.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+6% скорости передвижения" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+10% скорости передвижения" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+14% скорости передвижения" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+18% скорости передвижения" }
        ]
      },
      {
        name: "Greater Bash", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/spirit_breaker_greater_bash.png",
        desc: "Шанс при атаке нанести дополнительный урон от скорости и отбросить врага назад.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "1.5 СЕК", effect: "17% шанс, урон от скорости 15%" },
          { lvl: 2, mana: "ПАССИВНО", cd: "1.5 СЕК", effect: "17% шанс, урон от скорости 20%" },
          { lvl: 3, mana: "ПАССИВНО", cd: "1.5 СЕК", effect: "17% шанс, урон от скорости 25%" },
          { lvl: 4, mana: "ПАССИВНО", cd: "1.5 СЕК", effect: "17% шанс, урон от скорости 30%" }
        ]
      },
      {
        name: "Nether Strike", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/spirit_breaker_nether_strike.png",
        desc: "Телепортируется за спину врага вблых из пустоты, нанося сокрушительный бафнутый баш.", isPassive: false,
        levels: [
          { lvl: 1, mana: "125 МАНА", cd: "100 СЕК", effect: "150 урона" },
          { lvl: 2, mana: "175 МАНА", cd: "80 СЕК", effect: "250 урона" },
          { lvl: 3, mana: "225 МАНА", cd: "60 СЕК", effect: "350 урона" }
        ]
      }
    ]
  },
  {
    name: "Tidehunter", dota1: "Leviathan", attr: "Strength", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tidehunter.png",
    bio: "<p>Левиафан из темных глубин океана, способный вызывать разрушительные цунами и сбрасывать негативные эффекты.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Stout Shield", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/stout_shield.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Magic Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Arcane Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Pipe of Insight", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/pipe.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Octarine Core", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Физических керри (PA, Troll Warlord).<br><b>Контрят:</b> Rubick, Silencer, BKB.",
    skills: [
      {
        name: "Gush", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/tidehunter_gush.png",
        desc: "Выпускает струю воды во врага, снижая его броню и скорость передвижения.", isPassive: false,
        levels: [
          { lvl: 1, mana: "90 МАНА", cd: "12 СЕК", effect: "110 урона, -3 брони" },
          { lvl: 2, mana: "100 МАНА", cd: "10 СЕК", effect: "160 урона, -4 брони" },
          { lvl: 3, mana: "110 МАНА", cd: "8 СЕК", effect: "210 урона, -5 брони" },
          { lvl: 4, mana: "120 МАНА", cd: "6 СЕК", effect: "260 урона, -6 брони" }
        ]
      },
      {
        name: "Kraken Shell", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/tidehunter_kraken_shell.png",
        desc: "Пассивно блокирует урон от атак и автоматически сбрасывает негативные эффекты при накоплении урона.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Блокирует 12 урона" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Блокирует 24 урона" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Блокирует 36 урона" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Блокирует 48 урона" }
        ]
      },
      {
        name: "Anchor Smash", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/tidehunter_anchor_smash.png",
        desc: "Размахивает тяжелым якорем, нанося урон всем врагам вокруг и снижая их атаку.", isPassive: false,
        levels: [
          { lvl: 1, mana: "30 МАНА", cd: "7 СЕК", effect: "85 урона, -30% атаки" },
          { lvl: 2, mana: "40 МАНА", cd: "6 СЕК", effect: "140 урона, -40% атаки" },
          { lvl: 3, mana: "50 МАНА", cd: "5 СЕК", effect: "195 урона, -50% атаки" },
          { lvl: 4, mana: "60 МАНА", cd: "4 СЕК", effect: "250 урона, -60% атаки" }
        ]
      },
      {
        name: "Ravage", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/tidehunter_ravage.png",
        desc: "Бьет щупальцами из-под земли во все стороны, оглушая всех врагов вокруг.", isPassive: false,
        levels: [
          { lvl: 1, mana: "150 МАНА", cd: "150 СЕК", effect: "200 урона, стан 2.0 сек" },
          { lvl: 2, mana: "225 МАНА", cd: "130 СЕК", effect: "300 урона, стан 2.4 сек" },
          { lvl: 3, mana: "300 МАНА", cd: "110 СЕК", effect: "400 урона, стан 2.8 сек" }
        ]
      }
    ]
  },
  {
    name: "Timbersaw", dota1: "Rizzrak", attr: "Strength", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shredder.png",
    bio: "<p>Одержимый гоблин в механическом костюме с пилами и огнеметами, ненавидящий лес и деревья.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Soul Ring", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/soul_ring.png" },
        { name: "Stout Shield", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/stout_shield.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Bottle", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bottle.png" }
      ],
      mid: [
        { name: "Arcane Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png" },
        { name: "Kaya and Sange", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/kaya_and_sange.png" },
        { name: "Eul's Scepter", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/cyclone.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" }
      ],
      late: [
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Octarine Core", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Сильных физ-керри с броней (Sven, Phantom Assassin).<br><b>Контрят:</b> Silencer, Doom, Anti-Mage.",
    skills: [
      {
        name: "Whirling Death", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/shredder_whirling_death.png",
        desc: "Кружится в вихре лезвий, нанося урон врагам и срезая их основной атрибут (если рядом есть дерево — рубит его).", isPassive: false,
        levels: [
          { lvl: 1, mana: "80 МАНА", cd: "6 СЕК", effect: "100 урона, -15% атрибута" },
          { lvl: 2, mana: "90 МАНА", cd: "6 СЕК", effect: "150 урона, -15% атрибута" },
          { lvl: 3, mana: "100 МАНА", cd: "6 СЕК", effect: "200 урона, -15% атрибута" },
          { lvl: 4, mana: "110 МАНА", cd: "6 СЕК", effect: "250 урона, -15% атрибута" }
        ]
      },
      {
        name: "Timber Chain", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/shredder_timber_chain.png",
        desc: "Запускает цепь в дерево, притягивая к нему гоблина и нанося урон на пути.", isPassive: false,
        levels: [
          { lvl: 1, mana: "60 МАНА", cd: "4.0 СЕК", effect: "60 урона" },
          { lvl: 2, mana: "70 МАНА", cd: "4.0 СЕК", effect: "120 урона" },
          { lvl: 3, mana: "80 МАНА", cd: "4.0 СЕК", effect: "180 урона" },
          { lvl: 4, mana: "90 МАНА", cd: "4.0 СЕК", effect: "240 урона" }
        ]
      },
      {
        name: "Reactive Armor", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/shredder_reactive_armor.png",
        desc: "Пассивно увеличивает регенерацию здоровья и броню при получении атак от врагов.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+1 брони и +0.5 HP за стек" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+1 брони и +0.75 HP за стек" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+1 брони и +1.0 HP за стек" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+1 брони и +1.25 HP за стек" }
        ]
      },
      {
        name: "Chakram", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/shredder_chakram.png",
        desc: "Запускает циркулярную пилу в указанную точку, которая режет врагов и замедляет их за счет маны.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "8 СЕК", effect: "100 урона в сек" },
          { lvl: 2, mana: "150 МАНА", cd: "7 СЕК", effect: "140 урона в сек" },
          { lvl: 3, mana: "200 МАНА", cd: "6 СЕК", effect: "180 урона в сек" }
        ]
      }
    ]
  },
  {
    name: "Chaos Knight", dota1: "Nessaj", attr: "Strength", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chaos_knight.png",
    bio: "<p>Древний всадник хаоса, чьи удары непредсказуемы, а армия иллюзий способна стереть любого врага за секунду.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Bracer", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bracer.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Armlet", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/armlet.png" },
        { name: "Echo Sabre", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/echo_sabre.png" },
        { name: "Manta Style", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Bloodthorn", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bloodthorn.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Одиночных целей (Sniper, Drow Ranger).<br><b>Контрят:</b> Earthshaker, Sven, Tidehunter.",
    skills: [
      {
        name: "Chaos Bolt", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/chaos_knight_chaos_bolt.png",
        desc: "Бросает сгусток энергии со случайным уроном и длительностью оглушения.", isPassive: false,
        levels: [
          { lvl: 1, mana: "110 МАНА", cd: "13 СЕК", effect: "Урон 90–150, стан 1.25–1.75 сек" },
          { lvl: 2, mana: "120 МАНА", cd: "12 СЕК", effect: "Урон 110–210, стан 1.50–2.25 сек" },
          { lvl: 3, mana: "130 МАНА", cd: "11 СЕК", effect: "Урон 130–270, стан 1.75–2.75 сек" },
          { lvl: 4, mana: "140 МАНА", cd: "10 СЕК", effect: "Урон 150–330, стан 2.00–3.25 сек" }
        ]
      },
      {
        name: "Reality Rift", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/chaos_knight_reality_rift.png",
        desc: "Телепортирует себя, иллюзии и цель в случайную точку между ними, снижая броню врага.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "15 СЕК", effect: "-3 брони" },
          { lvl: 2, mana: "50 МАНА", cd: "12 СЕК", effect: "-4 брони" },
          { lvl: 3, mana: "50 МАНА", cd: "9 СЕК", effect: "-5 брони" },
          { lvl: 4, mana: "50 МАНА", cd: "6 СЕК", effect: "-6 брони" }
        ]
      },
      {
        name: "Chaos Strike", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/chaos_knight_chaos_strike.png",
        desc: "Пассивный шанс нанести критический удар с вампиризмом.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Крит 120–160%, вампиризм 24%" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Крит 120–190%, вампиризм 36%" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Крит 120–220%, вампиризм 48%" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Крит 120–250%, вампиризм 60%" }
        ]
      },
      {
        name: "Phantasm", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/chaos_knight_phantasm.png",
        desc: "Призывает несколько полнокровных копий героя, наносящих 100% урона.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "75 СЕК", effect: "1 иллюзия (100% урона)" },
          { lvl: 2, mana: "125 МАНА", cd: "75 СЕК", effect: "2 иллюзии (100% урона)" },
          { lvl: 3, mana: "175 МАНА", cd: "75 СЕК", effect: "3 иллюзии (100% урона)" }
        ]
      }
    ]
  },
  {
    name: "Dawnbreaker", dota1: "Valora", attr: "Strength", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dawnbreaker.png",
    bio: "<p>Небесная воительница с боевым молотом, способная обрушиться с неба в любую точку сражения.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Soul Ring", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/soul_ring.png" },
        { name: "Bracer", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bracer.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Echo Sabre", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/echo_sabre.png" },
        { name: "Desolator", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/desolator.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Harpoon", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/harpoon.png" }
      ],
      late: [
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Сильна с:</b> Инициаторами (Axe, Spirit Breaker).<br><b>Контрят:</b> Silencer, Nyx Assassin, Eul's Scepter.",
    skills: [
      {
        name: "Starbreaker", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dawnbreaker_fire_wreath.png",
        desc: "Совершает серию из трех взмахов молотом, завершая комбо ударом по земле со станом.", isPassive: false,
        levels: [
          { lvl: 1, mana: "80 МАНА", cd: "17 СЕК", effect: "+25 урона за удар, стан 0.8 сек" },
          { lvl: 2, mana: "80 МАНА", cd: "15 СЕК", effect: "+35 урона за удар, стан 1.0 сек" },
          { lvl: 3, mana: "80 МАНА", cd: "13 СЕК", effect: "+45 урона за удар, стан 1.2 сек" },
          { lvl: 4, mana: "80 МАНА", cd: "11 СЕК", effect: "+55 урона за удар, стан 1.4 сек" }
        ]
      },
      {
        name: "Celestial Hammer", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dawnbreaker_celestial_hammer.png",
        desc: "Бросает молот, оставляя огненный след, и может притянуться к нему навстречу.", isPassive: false,
        levels: [
          { lvl: 1, mana: "110 МАНА", cd: "18 СЕК", effect: "60 урона, замедление 24%" },
          { lvl: 2, mana: "120 МАНА", cd: "16 СЕК", effect: "90 урона, замедление 28%" },
          { lvl: 3, mana: "130 МАНА", cd: "14 СЕК", effect: "120 урона, замедление 32%" },
          { lvl: 4, mana: "140 МАНА", cd: "12 СЕК", effect: "150 урона, замедление 36%" }
        ]
      },
      {
        name: "Luminosity", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dawnbreaker_luminosity.png",
        desc: "Каждая четвертая атака наносит критический удар и исцеляет союзников поблизости.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Крит 125%, лечение 30% от урона" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Крит 150%, лечение 40% от урона" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Крит 175%, лечение 50% от урона" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Крит 200%, лечение 60% от урона" }
        ]
      },
      {
        name: "Solar Guardian", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/dawnbreaker_solar_guardian.png",
        desc: "Приземляется рядом с любым союзником на карте, исцеляя друзей и оглушая врагов.", isPassive: false,
        levels: [
          { lvl: 1, mana: "150 МАНА", cd: "120 СЕК", effect: "300 урона при падении, стан 1.5 сек" },
          { lvl: 2, mana: "200 МАНА", cd: "110 СЕК", effect: "450 урона при падении, стан 1.75 сек" },
          { lvl: 3, mana: "250 МАНА", cd: "100 СЕК", effect: "600 урона при падении, стан 2.0 сек" }
        ]
      }
    ]
  },
  {
    name: "Doom", dota1: "Lucifer", attr: "Strength", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/doom_bringer.png",
    bio: "<p>Падший повелитель демонов, способный пожирать существ ради их сил и накладывать вечное проклятие молчания.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Ring of Protection", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ring_of_protection.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Hand of Midas", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/hand_of_midas.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Octarine Core", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Любого ключевого героя (Storm, Weaver, Ember).<br><b>Контрят:</b> Linken's Sphere, Lotus Orb, Medusa.",
    skills: [
      {
        name: "Devour", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/doom_bringer_devour.png",
        desc: "Пожирает крипа, получая дополнительное золото и забирая его активные и пассивные способности.", isPassive: false,
        levels: [
          { lvl: 1, mana: "40 МАНА", cd: "70 СЕК", effect: "+40 бонусного золота" },
          { lvl: 2, mana: "50 МАНА", cd: "65 СЕК", effect: "+80 бонусного золота" },
          { lvl: 3, mana: "60 МАНА", cd: "60 СЕК", effect: "+120 бонусного золота" },
          { lvl: 4, mana: "70 МАНА", cd: "55 СЕК", effect: "+160 бонусного золота" }
        ]
      },
      {
        name: "Scorched Earth", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/doom_bringer_scorched_earth.png",
        desc: "Поджигает землю вокруг героя, нанося урон врагам и ускоряя передвижение.", isPassive: false,
        levels: [
          { lvl: 1, mana: "60 МАНА", cd: "35 СЕК", effect: "20 урона/сек, +10% скорости" },
          { lvl: 2, mana: "70 МАНА", cd: "35 СЕК", effect: "35 урона/сек, +12% скорости" },
          { lvl: 3, mana: "80 МАНА", cd: "35 СЕК", effect: "50 урона/сек, +14% скорости" },
          { lvl: 4, mana: "90 МАНА", cd: "35 СЕК", effect: "65 урона/сек, +16% скорости" }
        ]
      },
      {
        name: "Infernal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/doom_bringer_infernal_blade.png",
        desc: "Огненный удар мечом, оглушающий цель и сжигающий процент от ее максимального здоровья.", isPassive: false,
        levels: [
          { lvl: 1, mana: "40 МАНА", cd: "16 СЕК", effect: "Мини-стан, 1% макс. HP/сек" },
          { lvl: 2, mana: "40 МАНА", cd: "12 СЕК", effect: "Мини-стан, 2% макс. HP/сек" },
          { lvl: 3, mana: "40 МАНА", cd: "8 СЕК", effect: "Мини-стан, 3% макс. HP/сек" },
          { lvl: 4, mana: "40 МАНА", cd: "4 СЕК", effect: "Мини-стан, 4% макс. HP/сек" }
        ]
      },
      {
        name: "Doom", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/doom_bringer_doom.png",
        desc: "Накладывает проклятие, запрещающее цели использовать способности и предметы, и наносит чистый урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "150 МАНА", cd: "140 СЕК", effect: "30 чистого урона/сек, 16 сек" },
          { lvl: 2, mana: "200 МАНА", cd: "140 СЕК", effect: "50 чистого урона/сек, 16 сек" },
          { lvl: 3, mana: "250 МАНА", cd: "140 СЕК", effect: "70 чистого урона/сек, 16 сек" }
        ]
      }
    ]
  },
  {
    name: "Lifestealer", dota1: "N'aix", attr: "Strength", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/life_stealer.png",
    bio: "<p>Безумный гуль-пожиратель жизни, способный проникать внутрь других существ и рвать плоть врагов.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Orb of Venom", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/orb_of_venom.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Armlet", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/armlet.png" },
        { name: "Desolator", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/desolator.png" },
        { name: "Radiance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/radiance.png" },
        { name: "Sange and Yasha", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sange_and_yasha.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Monkey King Bar", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/monkey_king_bar.png" },
        { name: "Nullifier", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Жирных танков (Centaur, Pudge, Tidehunter).<br><b>Контрят:</b> Razor, Ursa, Slark, Force Staff.",
    skills: [
      {
        name: "Rage", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/life_stealer_rage.png",
        desc: "Впадает в безумие, получая невосприимчивость к магии и бонус к скорости атаки.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "18 СЕК", effect: "Длительность 3.5 сек, +50 скорости атаки" },
          { lvl: 2, mana: "75 МАНА", cd: "17 СЕК", effect: "Длительность 4.25 сек, +60 скорости атаки" },
          { lvl: 3, mana: "75 МАНА", cd: "16 СЕК", effect: "Длительность 5.0 сек, +70 скорости атаки" },
          { lvl: 4, mana: "75 МАНА", cd: "15 СЕК", effect: "Длительность 5.75 сек, +80 скорости атаки" }
        ]
      },
      {
        name: "Feast", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/life_stealer_feast.png",
        desc: "Пассивно наносит дополнительный урон и исцеляется в процентах от максимального здоровья цели.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Вампиризм и урон 1.6% макс. HP" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Вампиризм и урон 2.2% макс. HP" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Вампиризм и урон 2.8% макс. HP" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Вампиризм и урон 3.4% макс. HP" }
        ]
      },
      {
        name: "Ghoul Frenzy", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/life_stealer_ghoul_frenzy.png",
        desc: "Пассивно увеличивает скорость передвижения героя и замедляет врагов при каждой атаке.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Замедление 10%, +3% скорости" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Замедление 15%, +5% скорости" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Замедление 20%, +7% скорости" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Замедление 25%, +9% скорости" }
        ]
      },
      {
        name: "Infest", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/life_stealer_infest.png",
        desc: "Залезает внутрь крипа или союзного героя, восстанавливая здоровье и нанося урон при выходе наружу.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "80 СЕК", effect: "150 урона при выходе" },
          { lvl: 2, mana: "150 МАНА", cd: "65 СЕК", effect: "275 урона при выходе" },
          { lvl: 3, mana: "200 МАНА", cd: "50 СЕК", effect: "400 урона при выходе" }
        ]
      }
    ]
  },
  {
    name: "Lycan", dota1: "Banehallow", attr: "Strength", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lycan.png",
    bio: "<p>Проклятый аристократ-оборотень, командующий стаей диких волков и сносящий вражеские базы за считанные секунды.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Ring of Basilius", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ring_of_basilius.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Helm of the Dominator", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/helm_of_the_dominator.png" },
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Vladmir's Offering", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/vladmir.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Desolator", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/desolator.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "Helm of the Overlord", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/helm_of_the_overlord.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Nullifier", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Тонких саппортов и слабых защитников вышек.<br><b>Контрят:</b> Axe, Sven, Winter Wyvern, Bristleback.",
    skills: [
      {
        name: "Summon Wolves", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/lycan_summon_wolves.png",
        desc: "Призывает двух преданных волков, которые на высоких уровнях получают невидимость и криты.", isPassive: false,
        levels: [
          { lvl: 1, mana: "115 МАНА", cd: "30 СЕК", effect: "Волки 1 ур. (300 HP)" },
          { lvl: 2, mana: "120 МАНА", cd: "30 СЕК", effect: "Волки 2 ур. + калечащий укус" },
          { lvl: 3, mana: "125 МАНА", cd: "30 СЕК", effect: "Волки 3 ур. + невидимость" },
          { lvl: 4, mana: "130 МАНА", cd: "30 СЕК", effect: "Волки 4 ур. + регенерация" }
        ]
      },
      {
        name: "Howl", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/lycan_howl.png",
        desc: "Грозный вой снижает броню и урон от атак всех врагов поблизости (ночью действует на всю карту).", isPassive: false,
        levels: [
          { lvl: 1, mana: "35 МАНА", cd: "22 СЕК", effect: "-4 брони, -25% базового урона" },
          { lvl: 2, mana: "40 МАНА", cd: "20 СЕК", effect: "-5 брони, -30% базового урона" },
          { lvl: 3, mana: "45 МАНА", cd: "18 СЕК", effect: "-6 брони, -35% базового урона" },
          { lvl: 4, mana: "50 МАНА", cd: "16 СЕК", effect: "-7 брони, -40% базового урона" }
        ]
      },
      {
        name: "Feral Impulse", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/lycan_feral_impulse.png",
        desc: "Пассивная аура, повышающая урон и восстановление здоровья героя и всех его подконтрольных существ.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+14% урона, +2 HP/сек" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+26% урона, +4 HP/сек" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+38% урона, +6 HP/сек" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+50% урона, +8 HP/сек" }
        ]
      },
      {
        name: "Shapeshift", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/lycan_shapeshift.png",
        desc: "Обращается в свирепого оборотня, даруя себе и всем своим существам максимальную скорость и критические удары.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "110 СЕК", effect: "Крит 160%, макс. скорость" },
          { lvl: 2, mana: "100 МАНА", cd: "95 СЕК", effect: "Крит 190%, макс. скорость" },
          { lvl: 3, mana: "100 МАНА", cd: "80 СЕК", effect: "Крит 220%, макс. скорость" }
        ]
      }
    ]
  },
  {
    name: "Night Stalker", dota1: "Balanar", attr: "Strength", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/night_stalker.png",
    bio: "<p>Повелитель ужаса и ночи, который с наступлением темноты превращается в неуловимого и смертоносного охотника.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Bracer", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bracer.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Echo Sabre", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/echo_sabre.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Nullifier", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png" }
      ],
      late: [
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Магов и саппортов ночью (Crystal Maiden, Puck, Tinker).<br><b>Контрят:</b> Terrorblade, Troll Warlord, Chaos Knight.",
    skills: [
      {
        name: "Void", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/night_stalker_void.png",
        desc: "Создает сгусток тьмы, наносящий урон и замедляющий цель (ночью также ненадолго оглушает).", isPassive: false,
        levels: [
          { lvl: 1, mana: "80 МАНА", cd: "11 СЕК", effect: "80 урона, замедление 50%" },
          { lvl: 2, mana: "90 МАНА", cd: "10 СЕК", effect: "160 урона, замедление 50%" },
          { lvl: 3, mana: "100 МАНА", cd: "9 СЕК", effect: "240 урона, замедление 50%" },
          { lvl: 4, mana: "110 МАНА", cd: "8 СЕК", effect: "320 урона, замедление 50%" }
        ]
      },
      {
        name: "Crippling Fear", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/night_stalker_crippling_fear.png",
        desc: "Накладывает ауру безмолвия вокруг героя, не давая врагам применять заклинания.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "30 СЕК", effect: "Безмолвие 3.0 сек (ночью 4.5)" },
          { lvl: 2, mana: "50 МАНА", cd: "25 СЕК", effect: "Безмолвие 3.5 сек (ночью 5.0)" },
          { lvl: 3, mana: "50 МАНА", cd: "20 СЕК", effect: "Безмолвие 4.0 сек (ночью 5.5)" },
          { lvl: 4, mana: "50 МАНА", cd: "15 СЕК", effect: "Безмолвие 4.5 сек (ночью 6.0)" }
        ]
      },
      {
        name: "Hunter in the Night", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/night_stalker_hunter_in_the_night.png",
        desc: "Пассивно многократно увеличивает скорость передвижения и атаки в ночное время.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Ночью: +22% скорости бега, +30 атаки" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Ночью: +28% скорости бега, +50 атаки" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Ночью: +34% скорости бега, +70 атаки" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Ночью: +40% скорости бега, +90 атаки" }
        ]
      },
      {
        name: "Dark Ascension", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/night_stalker_dark_ascension.png",
        desc: "Погружает мир во тьму, даруя герою свободный полет над препятствиями, обзор и бонус к урону.", isPassive: false,
        levels: [
          { lvl: 1, mana: "125 МАНА", cd: "140 СЕК", effect: "+50 урона, полет на 30 сек" },
          { lvl: 2, mana: "175 МАНА", cd: "130 СЕК", effect: "+100 урона, полет на 30 сек" },
          { lvl: 3, mana: "225 МАНА", cd: "120 СЕК", effect: "+150 урона, полет на 30 сек" }
        ]
      }
    ]
  },

  // --- ЛОВКОСТЬ (AGILITY) — SENTINEL ---
  
  {
    name: "Juggernaut", dota1: "Yurnero", attr: "Agility", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png",
    bio: "<p>Мастер меча с острова Маскар, неуловимый вихрь смерти, способный разрезать противников на куски.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Wraith Band", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wraith_band.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Battle Fury", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bfury.png" },
        { name: "Manta Style", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png" },
        { name: "Diffusal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/diffusal_blade.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" }
      ],
      late: [
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Nullifier", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Магов без контроля сквозь BKB.<br><b>Контрят:</b> Axe, Ursa, Ghost Scepter, Eul's Scepter.",
    skills: [
      {
        name: "Blade Fury", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/juggernaut_blade_fury.png",
        desc: "Закручивается в вихре клинков, становясь невосприимчивым к магии и нанося урон всем вокруг.", isPassive: false,
        levels: [
          { lvl: 1, mana: "110 МАНА", cd: "30 СЕК", effect: "90 урона в сек" },
          { lvl: 2, mana: "110 МАНА", cd: "26 СЕК", effect: "115 урона в сек" },
          { lvl: 3, mana: "110 МАНА", cd: "22 СЕК", effect: "140 урона в сек" },
          { lvl: 4, mana: "110 МАНА", cd: "18 СЕК", effect: "165 урона в сек" }
        ]
      },
      {
        name: "Healing Ward", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/juggernaut_healing_ward.png",
        desc: "Призывает подвижный тотем, восстанавливающий здоровье всем союзникам в процентах от максимума.", isPassive: false,
        levels: [
          { lvl: 1, mana: "140 МАНА", cd: "60 СЕК", effect: "2% макс. HP в сек" },
          { lvl: 2, mana: "140 МАНА", cd: "60 СЕК", effect: "3% макс. HP в сек" },
          { lvl: 3, mana: "140 МАНА", cd: "60 СЕК", effect: "4% макс. HP в сек" },
          { lvl: 4, mana: "140 МАНА", cd: "60 СЕК", effect: "5% макс. HP в сек" }
        ]
      },
      {
        name: "Blade Dance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/juggernaut_blade_dance.png",
        desc: "Пассивный шанс нанести критический урон при каждой атаке.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "20% шанс, крит 190%" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "25% шанс, крит 190%" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "30% шанс, крит 190%" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "35% шанс, крит 190%" }
        ]
      },
      {
        name: "Omnislash", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/juggernaut_omni_slash.png",
        desc: "Прыгает по врагам в неуязвимости, нанося серию молниеносных ударов.", isPassive: false,
        levels: [
          { lvl: 1, mana: "200 МАНА", cd: "130 СЕК", effect: "Длительность 3.0 сек" },
          { lvl: 2, mana: "275 МАНА", cd: "130 СЕК", effect: "Длительность 3.25 сек" },
          { lvl: 3, mana: "350 МАНА", cd: "130 СЕК", effect: "Длительность 3.5 сек" }
        ]
      }
    ]
  },
  {
    name: "Bounty Hunter", dota1: "Gondar", attr: "Agility", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bounty_hunter.png",
    bio: "<p>Величайший наемный убийца и следопыт, который крадет золото у врагов с помощью смертельных сюрикенов и невидимости.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Orb of Venom", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/orb_of_venom.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Drum of Endurance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/drum.png" },
        { name: "Desolator", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/desolator.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" }
      ],
      late: [
        { name: "Bloodthorn", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bloodthorn.png" },
        { name: "Nullifier", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Тонких саппортов и фармящих лесных героев.<br><b>Контрят:</b> Slardar, Sentry Wards, Gem of True Sight.",
    skills: [
      {
        name: "Shuriken Toss", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/bounty_hunter_shuriken_toss.png",
        desc: "Бросает смертоносный сюрикен, наносящий урон и рикошетящий во все цели под Track.", isPassive: false,
        levels: [
          { lvl: 1, mana: "80 МАНА", cd: "13 СЕК", effect: "100 урона" },
          { lvl: 2, mana: "90 МАНА", cd: "11 СЕК", effect: "150 урона" },
          { lvl: 3, mana: "100 МАНА", cd: "9 СЕК", effect: "200 урона" },
          { lvl: 4, mana: "110 МАНА", cd: "7 СЕК", effect: "250 урона" }
        ]
      },
      {
        name: "Jinada", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/bounty_hunter_jinada.png",
        desc: "Пассивное умение: каждая атака наносит бонусный урон и отбирает немного ненадежного золота у врага.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "6.0 СЕК", effect: "+80 урона, кража 12 золота" },
          { lvl: 2, mana: "ПАССИВНО", cd: "5.0 СЕК", effect: "+110 урона, кража 20 золота" },
          { lvl: 3, mana: "ПАССИВНО", cd: "4.0 СЕК", effect: "+140 урона, кража 28 золота" },
          { lvl: 4, mana: "ПАССИВНО", cd: "3.0 СЕК", effect: "+170 урона, кража 36 золота" }
        ]
      },
      {
        name: "Shadow Walk", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/bounty_hunter_wind_walk.png",
        desc: "Уходит в невидимость, позволяя проходить сквозь юнитов и наносить бонусный урон при выходе.", isPassive: false,
        levels: [
          { lvl: 1, mana: "65 МАНА", cd: "18 СЕК", effect: "Урон 25, длительность 20 сек" },
          { lvl: 2, mana: "65 МАНА", cd: "14 СЕК", effect: "Урон 50, длительность 25 сек" },
          { lvl: 3, mana: "65 МАНА", cd: "10 СЕК", effect: "Урон 75, длительность 30 сек" },
          { lvl: 4, mana: "65 МАНА", cd: "6 СЕК", effect: "Урон 100, длительность 35 сек" }
        ]
      },
      {
        name: "Track", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/bounty_hunter_track.png",
        desc: "Меткой отмечает вражеского героя, раскрывая его невидимость и принося дополнительное золото команде при убийстве.", isPassive: false,
        levels: [
          { lvl: 1, mana: "60 МАНА", cd: "4.0 СЕК", effect: "Бонус золота 130/30" },
          { lvl: 2, mana: "60 МАНА", cd: "4.0 СЕК", effect: "Бонус золота 225/45" },
          { lvl: 3, mana: "60 МАНА", cd: "4.0 СЕК", effect: "Бонус золота 320/60" }
        ]
      }
    ]
  },
  {
    name: "Ursa", dota1: "Ulfsaar", attr: "Agility", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ursa.png",
    bio: "<p>Свирепый медведь-воин, наносящий лавину яростных ударов по единой цели и в одиночку забирающий Рошана.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Stout Shield", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/stout_shield.png" },
        { name: "Orb of Venom", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/orb_of_venom.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Morbid Mask", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/lifesteal.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" }
      ],
      late: [
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Одиночных плотных героев (Centaur, Pudge, Roshan).<br><b>Контрят:</b> Phantom Assassin, Razor, Windranger, Bane.",
    skills: [
      {
        name: "Earthshock", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/ursa_earthshock.png",
        desc: "Прыгает вперед и бьет о землю, нанося урон и замедляя врагов вокруг себя.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "9 СЕК", effect: "90 урона, замедление 25%" },
          { lvl: 2, mana: "75 МАНА", cd: "8 СЕК", effect: "150 урона, замедление 30%" },
          { lvl: 3, mana: "75 МАНА", cd: "7 СЕК", effect: "210 урона, замедление 35%" },
          { lvl: 4, mana: "75 МАНА", cd: "6 СЕК", effect: "270 урона, замедление 40%" }
        ]
      },
      {
        name: "Overpower", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/ursa_overpower.png",
        desc: "Впадает в ярость, получая максимальную скорость атаки на следующие несколько ударов.", isPassive: false,
        levels: [
          { lvl: 1, mana: "45 МАНА", cd: "12 СЕК", effect: "3 атаки с макс. скоростью" },
          { lvl: 2, mana: "55 МАНА", cd: "10 СЕК", effect: "4 атаки с макс. скоростью" },
          { lvl: 3, mana: "65 МАНА", cd: "8 СЕК", effect: "5 атак с макс. скоростью" },
          { lvl: 4, mana: "75 МАНА", cd: "6 СЕК", effect: "6 атак с макс. скоростью" }
        ]
      },
      {
        name: "Fury Swipes", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/ursa_fury_swipes.png",
        desc: "Каждая последующая атака по той же цели наносит все больше и больше дополнительного урона.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+9 доп. урона за удар" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+18 доп. урона за удар" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+27 доп. урона за удар" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+36 доп. урона за удар" }
        ]
      },
      {
        name: "Enrage", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/ursa_enrage.png",
        desc: "Впадает в дикую ярость, многократно снижая получаемый урон и усиливая Fury Swipes.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "30 СЕК", effect: "Снижение урона 80%, длительность 4 сек" },
          { lvl: 2, mana: "50 МАНА", cd: "25 СЕК", effect: "Снижение урона 80%, длительность 4.5 сек" },
          { lvl: 3, mana: "50 МАНА", cd: "20 СЕК", effect: "Снижение урона 80%, длительность 5 сек" }
        ]
      }
    ]
  },
  {
    name: "Troll Warlord", dota1: "Jah'rakal", attr: "Agility", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/troll_warlord.png",
    bio: "<p>Воин-тролль, способный мгновенно переключаться между ближним и дальним боем, устраивая безумный шквал атак.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Wraith Band", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wraith_band.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Maelstrom", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/maelstrom.png" },
        { name: "Sange and Yasha", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sange_and_yasha.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" },
        { name: "Basher", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/basher.png" }
      ],
      late: [
        { name: "Mjollnir", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mjollnir.png" },
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Одиночных целей и Рошана.<br><b>Контрят:</b> Axe, Ghost Scepter, Windranger, Blade Mail.",
    skills: [
      {
        name: "Berserker's Rage", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/troll_warlord_berserkers_rage.png",
        desc: "Переключает героя между ближним и дальним боем, меняя свойства атак и скорость.", isPassive: false,
        levels: [
          { lvl: 1, mana: "0 МАНА", cd: "0 СЕК", effect: "Смена режима боя" },
          { lvl: 2, mana: "0 МАНА", cd: "0 СЕК", effect: "Смена режима боя" },
          { lvl: 3, mana: "0 МАНА", cd: "0 СЕК", effect: "Смена режима боя" },
          { lvl: 4, mana: "0 МАНА", cd: "0 СЕК", effect: "Смена режима боя" }
        ]
      },
      {
        name: "Whirling Axes", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/troll_warlord_whirling_axes_ranged.png",
        desc: "Метает топоры (в дальнем бою замедляет, в ближнем — ослепляет, заставляя мазать по целям).", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "20 СЕК", effect: "Урон и эффект в зависимости от формы" },
          { lvl: 2, mana: "60 МАНА", cd: "19 СЕК", effect: "Урон и эффект в зависимости от формы" },
          { lvl: 3, mana: "70 МАНА", cd: "18 СЕК", effect: "Урон и эффект в зависимости от формы" },
          { lvl: 4, mana: "80 МАНА", cd: "17 СЕК", effect: "Урон и эффект в зависимости от формы" }
        ]
      },
      {
        name: "Fervor", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/troll_warlord_fervor.png",
        desc: "Каждая атака по одной и той же цели увеличивает скорость атаки героя (суммируется).", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+15 скорости атаки за удар (макс. 4)" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+20 скорости атаки за удар (макс. 5)" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+25 скорости атаки за удар (макс. 6)" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+30 скорости атаки за удар (макс. 7)" }
        ]
      },
      {
        name: "Battle Trance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/troll_warlord_battle_trance.png",
        desc: "Вводит в боевой транс себя или союзника: цель получает бешеную скорость атаки и не может умереть во время эффекта.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "90 СЕК", effect: "Длительность 6.5 сек" },
          { lvl: 2, mana: "100 МАНА", cd: "80 СЕК", effect: "Длительность 7.0 сек" },
          { lvl: 3, mana: "125 МАНА", cd: "70 СЕК", effect: "Длительность 7.5 сек" }
        ]
      }
    ]
  },
  {
    name: "Medusa", dota1: "Gorgon", attr: "Agility", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/medusa.png",
    bio: "<p>Грозная горгона, способная превращать врагов в камень своим взглядом и защищаться магическим щитом из энергии.</p>",
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
        { name: "Manta Style", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png" },
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" }
      ],
      late: [
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Групп врагов, иллюзионистов и призывателей.<br><b>Контрят:</b> Anti-Mage, Diffusal Blade, Invoker, Lion.",
    skills: [
      {
        name: "Split Shot", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/medusa_split_shot.png",
        desc: "Разделяет выстрел героя на несколько дополнительных стрел по целям вокруг.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "2 дополнительных выстрела" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "3 дополнительных выстрела" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "4 дополнительных выстрела" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "5 дополнительных выстрелов" }
        ]
      },
      {
        name: "Mystic Snake", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/medusa_mystic_snake.png",
        desc: "Выпускает энергетическую змею, которая прыгает по врагам, нанося урон и воруя ману.", isPassive: false,
        levels: [
          { lvl: 1, mana: "140 МАНА", cd: "18 СЕК", effect: "160 урона, кража маны" },
          { lvl: 2, mana: "150 МАНА", cd: "16 СЕК", effect: "220 урона, кража маны" },
          { lvl: 3, mana: "160 МАНА", cd: "14 СЕК", effect: "280 урона, кража маны" },
          { lvl: 4, mana: "170 МАНА", cd: "12 СЕК", effect: "340 урона, кража маны" }
        ]
      },
      {
        name: "Mana Shield", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/medusa_mana_shield.png",
        desc: "Пассивно поглощает входящий урон за счет маны героя.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Поглощение 2.0 урона за 1 маны" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Поглощение 2.3 урона за 1 маны" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Поглощение 2.6 урона за 1 маны" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Поглощение 2.9 урона за 1 маны" }
        ]
      },
      {
        name: "Stone Gaze", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/medusa_stone_gaze.png",
        desc: "Взгляд горгоны: враги, смотрящие на нее, замедляются, а со временем каменеют и получают больше урона.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "90 СЕК", effect: "Замедление, окаменение 2.0 сек" },
          { lvl: 2, mana: "100 МАНА", cd: "80 СЕК", effect: "Замедление, окаменение 2.4 сек" },
          { lvl: 3, mana: "100 МАНА", cd: "70 СЕК", effect: "Замедление, окаменение 2.8 сек" }
        ]
      }
    ]
  },
  {
    name: "Gyrocopter", dota1: "Aurel Vlaikov", attr: "Agility", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/gyrocopter.png",
    bio: "<p>Гоблинский пилот на боевом летательном аппарате, поливающий врагов шквалом ракет и пулеметным огнем.</p>",
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
        { name: "Maelstrom", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/maelstrom.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" }
      ],
      late: [
        { name: "Mjollnir", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mjollnir.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Divine Rapier", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/rapier.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Групп врагов и иллюзионистов.<br><b>Контрят:</b> Sniper, Nyx Assassin, Doom.",
    skills: [
      {
        name: "Rocket Barrage", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/gyrocopter_rocket_barrage.png",
        desc: "Выпускает град мини-ракет во всех врагов вокруг гирокоптера в течение 3 секунд.", isPassive: false,
        levels: [
          { lvl: 1, mana: "90 МАНА", cd: "7 СЕК", effect: "8 урона за ракету" },
          { lvl: 2, mana: "90 МАНА", cd: "6 СЕК", effect: "13 урона за ракету" },
          { lvl: 3, mana: "90 МАНА", cd: "5 СЕК", effect: "18 урона за ракету" },
          { lvl: 4, mana: "90 МАНА", cd: "4 СЕК", effect: "23 урона за ракету" }
        ]
      },
      {
        name: "Homing Missile", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/gyrocopter_homing_missile.png",
        desc: "Запускает самонаводящуюся ракету, которая преследует цель и оглушает ее при ударе.", isPassive: false,
        levels: [
          { lvl: 1, mana: "125 МАНА", cd: "26 СЕК", effect: "Урон до 125, стан 1.2 сек" },
          { lvl: 2, mana: "125 МАНА", cd: "21 СЕК", effect: "Урон до 250, стан 1.6 сек" },
          { lvl: 3, mana: "125 МАНА", cd: "16 СЕК", effect: "Урон до 375, стан 2.0 сек" },
          { lvl: 4, mana: "125 МАНА", cd: "11 СЕК", effect: "Урон до 500, стан 2.4 сек" }
        ]
      },
      {
        name: "Flak Cannon", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/gyrocopter_flak_cannon.png",
        desc: "Позволяет атакам героя выпускать снаряды по всем врагам в огромном радиусе вокруг.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "20 СЕК", effect: "4 атаки по области" },
          { lvl: 2, mana: "50 МАНА", cd: "18 СЕК", effect: "6 атак по области" },
          { lvl: 3, mana: "50 МАНА", cd: "16 СЕК", effect: "8 атак по области" },
          { lvl: 4, mana: "50 МАНА", cd: "14 СЕК", effect: "10 атак по области" }
        ]
      },
      {
        name: "Call Down", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/gyrocopter_calldown.png",
        desc: "Называет две ракетные бомбардировки в указанную область с замедлением и огромным уроном.", isPassive: false,
        levels: [
          { lvl: 1, mana: "125 МАНА", cd: "55 СЕК", effect: "2 ракеты (урон 250/250)" },
          { lvl: 2, mana: "125 МАНА", cd: "45 СЕК", effect: "2 ракеты (урон 375/375)" },
          { lvl: 3, mana: "125 МАНА", cd: "35 СЕК", effect: "2 ракеты (урон 500/500)" }
        ]
      }
    ]
  },
  {
    name: "Lone Druid", dota1: "Syllabear", attr: "Agility", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lone_druid.png",
    bio: "<p>Лесной отшельник, сражающийся бок о бок с верным боевым медведем и способный сам обращаться в зверя.</p>",
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
        { name: "Radiance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/radiance.png" },
        { name: "Demolisher", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/demolisher.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Mask of Madness", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mask_of_madness.png" }
      ],
      late: [
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "MKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/monkey_king_bar.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Moon Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/moon_shard.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Медленных героев и зданий (быстрый пуш).<br><b>Контрят:</b> Winter Wyvern, Sven, Phantom Lancer.",
    skills: [
      {
        name: "Summon Spirit Bear", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/lone_druid_spirit_bear.png",
        desc: "Призывает могучего духа-медведя, который может носить предметы и сражаться вместе с героем.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "120 СЕК", effect: "Медведь 1 ур. (1100 HP)" },
          { lvl: 2, mana: "75 МАНА", cd: "120 СЕК", effect: "Медведь 2 ур. (1400 HP)" },
          { lvl: 3, mana: "75 МАНА", cd: "120 СЕК", effect: "Медведь 3 ур. (1700 HP)" },
          { lvl: 4, mana: "75 МАНА", cd: "120 СЕК", effect: "Медведь 4 ур. (2000 HP)" }
        ]
      },
      {
        name: "Savage Roar", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/lone_druid_savage_roar.png",
        desc: "Дикий рев заставляет всех врагов вокруг бежать в панике к своей базе.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "22 СЕК", effect: "Длительность 1.2 сек" },
          { lvl: 2, mana: "50 МАНА", cd: "19 СЕК", effect: "Длительность 1.5 сек" },
          { lvl: 3, mana: "50 МАНА", cd: "16 СЕК", effect: "Длительность 1.8 сек" },
          { lvl: 4, mana: "50 МАНА", cd: "13 СЕК", effect: "Длительность 2.1 сек" }
        ]
      },
      {
        name: "True Form", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/lone_druid_true_form.png",
        desc: "Превращает друида в свирепого медведя-оборотня, повышая его броню и здоровье.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "80 СЕК", effect: "+200 HP, +8 брони" },
          { lvl: 2, mana: "100 МАНА", cd: "60 СЕК", effect: "+400 HP, +12 брони" },
          { lvl: 3, mana: "100 МАНА", cd: "40 СЕК", effect: "+600 HP, +16 брони" }
        ]
      }
    ]
  },
  {
    name: "Naga Siren", dota1: "Slithice", attr: "Agility", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/naga_siren.png",
    bio: "<p>Морская сирена, способная усыплять всю карту своей песней и создавать армию зеркальных иллюзий.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Wraith Band", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wraith_band.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Diffusal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/diffusal_blade.png" },
        { name: "Manta Style", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" }
      ],
      late: [
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" },
        { name: "Bloodthorn", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bloodthorn.png" },
        { name: "Disperser", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/disperser.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Одиночных героев и медленных поворотливых танков.<br><b>Контрят:</b> Earthshaker, Sven, Sand King, Leshrac.",
    skills: [
      {
        name: "Mirror Image", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/naga_siren_mirror_image.png",
        desc: "Создает несколько иллюзий героя, которые могут атаковать врагов и пушить линии.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "26 СЕК", effect: "3 иллюзии (наносят 25% урона)" },
          { lvl: 2, mana: "100 МАНА", cd: "22 СЕК", effect: "3 иллюзии (наносят 30% урона)" },
          { lvl: 3, mana: "125 МАНА", cd: "18 СЕК", effect: "3 иллюзии (наносят 35% урона)" },
          { lvl: 4, mana: "150 МАНА", cd: "14 СЕК", effect: "3 иллюзии (наносят 40% урона)" }
        ]
      },
      {
        name: "Ensnare", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/naga_siren_ensnare.png",
        desc: "Опутывает сетью вражеского юнита, не позволяя ему двигаться и используя способности передвижения.", isPassive: false,
        levels: [
          { lvl: 1, mana: "70 МАНА", cd: "14 СЕК", effect: "Обездвиживание 2.0 сек" },
          { lvl: 2, mana: "80 МАНА", cd: "13 СЕК", effect: "Обездвиживание 2.5 сек" },
          { lvl: 3, mana: "90 МАНА", cd: "12 СЕК", effect: "Обездвиживание 3.0 сек" },
          { lvl: 4, mana: "100 МАНА", cd: "11 СЕК", effect: "Обездвиживание 3.5 сек" }
        ]
      },
      {
        name: "Rip Tide", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/naga_siren_rip_tide.png",
        desc: "Волна воды наносит урон всем врагам вокруг Наги и ее иллюзий, а также снижает их броню.", isPassive: false,
        levels: [
          { lvl: 1, mana: "80 МАНА", cd: "10 СЕК", effect: "30 урона, -2 брони" },
          { lvl: 2, mana: "80 МАНА", cd: "10 СЕК", effect: "50 урона, -3 брони" },
          { lvl: 3, mana: "80 МАНА", cd: "10 СЕК", effect: "70 урона, -4 брони" },
          { lvl: 4, mana: "80 МАНА", cd: "10 СЕК", effect: "90 урона, -5 брони" }
        ]
      },
      {
        name: "Song of the Siren", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/naga_siren_song_of_the_siren.png",
        desc: "Затягивает песней всех врагов вокруг в глубокий сон, во время которого они неуязвимы к урону.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "160 СЕК", effect: "Сон 4.0 сек" },
          { lvl: 2, mana: "100 МАНА", cd: "130 СЕК", effect: "5.0 сек" },
          { lvl: 3, mana: "100 МАНА", cd: "100 СЕК", effect: "6.0 сек" }
        ]
      }
    ]
  },
  {
    name: "Vengeful Spirit", dota1: "Shendelzare", attr: "Agility", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/vengefulspirit.png",
    bio: "<p>Преданная сестра короля, превратившаяся в дух отмщения и способная менять местами врагов и союзников на поле боя.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Magic Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wind Lace", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wind_lace.png" }
      ],
      mid: [
        { name: "Arcane Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png" },
        { name: "Force Staff", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png" },
        { name: "Solar Crest", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/solar_crest.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" }
      ],
      late: [
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен с:</b> Физическими керри (Sven, PA, Ursa).<br><b>Контрят:</b> Linken's Sphere, Silencer, Rubick.",
    skills: [
      {
        name: "Magic Missile", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/vengefulspirit_magic_missile.png",
        desc: "Бросает магический снаряд, оглушающий цель и наносящий урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "13 СЕК", effect: "90 урона, стан 1.2 сек" },
          { lvl: 2, mana: "110 МАНА", cd: "12 СЕК", effect: "160 урона, стан 1.4 сек" },
          { lvl: 3, mana: "120 МАНА", cd: "11 СЕК", effect: "230 урона, стан 1.6 сек" },
          { lvl: 4, mana: "130 МАНА", cd: "10 СЕК", effect: "300 урона, стан 1.8 сек" }
        ]
      },
      {
        name: "Wave of Terror", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/vengefulspirit_wave_of_terror.png",
        desc: "Пускает устрашающую волну, которая дает обзор перед собой, снижает броню врагов и урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "40 МАНА", cd: "15 СЕК", effect: "60 урона, -3 брони" },
          { lvl: 2, mana: "40 МАНА", cd: "14 СЕК", effect: "85 урона, -4 брони" },
          { lvl: 3, mana: "40 МАНА", cd: "13 СЕК", effect: "110 урона, -5 брони" },
          { lvl: 4, mana: "40 МАНА", cd: "12 СЕК", effect: "135 урона, -6 брони" }
        ]
      },
      {
        name: "Vengeance Aura", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/vengefulspirit_command_aura.png",
        desc: "Пассивно увеличивает базовый урон всех союзников неподалеку.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+12% базового урона" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+16% базового урона" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+20% базового урона" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+24% базового урона" }
        ]
      },
      {
        name: "Nether Swap", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/vengefulspirit_nether_swap.png",
        desc: "Мгновенно меняет местами положение Vengeful Spirit и выбранного союзника или врага.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "60 СЕК", effect: "Дальность 900" },
          { lvl: 2, mana: "150 МАНА", cd: "45 СЕК", effect: "Дальность 900" },
          { lvl: 3, mana: "200 МАНА", cd: "30 СЕК", effect: "Дальность 900" }
        ]
      }
    ]
  },
  {
    name: "Riki", dota1: "Riki Maru", attr: "Agility", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/riki.png",
    bio: "<p>Неуловимый стелс-ассасин, наносящий смертельные удары со спины и запирающий врагов в облаке дыма.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Wraith Band", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wraith_band.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Diffusal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/diffusal_blade.png" },
        { name: "Manta Style", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Basher", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/basher.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" }
      ],
      late: [
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "Nullifier", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Одиночных магов и саппортов (Sniper, Crystal Maiden).<br><b>Контрят:</b> Gem of True Sight, Sentry Wards, Slardar, Bounty Hunter.",
    skills: [
      {
        name: "Smoke Screen", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/riki_smoke_screen.png",
        desc: "Бросает дымовую завесу, накладывая безмолвие, замедление и шанс промаха по атакам.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "11 СЕК", effect: "Промах 40%, замедление 25%" },
          { lvl: 2, mana: "80 МАНА", cd: "10 СЕК", effect: "Промах 50%, замедление 30%" },
          { lvl: 3, mana: "85 МАНА", cd: "9 СЕК", effect: "Промах 60%, замедление 35%" },
          { lvl: 4, mana: "90 МАНА", cd: "8 СЕК", effect: "Промах 70%, замедление 40%" }
        ]
      },
      {
        name: "Blink Strike", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/riki_blink_strike.png",
        desc: "Телепортируется за спину цели, нанося дополнительный урон (если это враг).", isPassive: false,
        levels: [
          { lvl: 1, mana: "40 МАНА", cd: "6.0 СЕК", effect: "+40 доп. урона" },
          { lvl: 2, mana: "40 МАНА", cd: "5.0 СЕК", effect: "+70 доп. урона" },
          { lvl: 3, mana: "40 МАНА", cd: "4.0 СЕК", effect: "+100 доп. урона" },
          { lvl: 4, mana: "40 МАНА", cd: "3.0 СЕК", effect: "+130 доп. урона" }
        ]
      },
      {
        name: "Backstab", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/riki_backstab.png",
        desc: "Пассивно наносит дополнительный чистый урон при атаке со спины, пропорциональный ловкости.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Урон = 0.8x ловкости" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "1.0x ловкости" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "1.2x ловкости" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "1.4x ловкости" }
        ]
      },
      {
        name: "Tricks of the Trade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/riki_tricks_of_the_trade.png",
        desc: "Исчезает из виду, нанося серию быстрых атак по всем врагам в выбранной области из невидимости.", isPassive: false,
        levels: [
          { lvl: 1, mana: "85 МАНА", cd: "21 СЕК", effect: "Длительность 4 сек" },
          { lvl: 2, mana: "100 МАНА", cd: "18 СЕК", effect: "Длительность 4 сек" },
          { lvl: 3, mana: "115 МАНА", cd: "15 СЕК", effect: "Длительность 4 сек" }
        ]
      }
    ]
  },
  {
    name: "Sniper", dota1: "Kardel Sharpeye", attr: "Agility", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sniper.png",
    bio: "<p>Гениальный стрелок из Кэз Модана с самой большой дальностью стрельбы в игре, разносящий врагов из снайперской винтовки.</p>",
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
        { name: "Dragon Lance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/dragon_lance.png" },
        { name: "Maelstrom", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/maelstrom.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Manta Style", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" }
      ],
      late: [
        { name: "Mjollnir", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mjollnir.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "Hurricane Pike", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/hurricane_pike.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Медленных героев ближнего боя.<br><b>Контрят:</b> Clockwerk, Spirit Breaker, Phantom Assassin, Riki.",
    skills: [
      {
        name: "Shrapnel", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/sniper_shrapnel.png",
        desc: "Запускает снаряд шрапнели, поливая область искрами, замедляя врагов и нанося им урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "80 МАНА", cd: "35 СЕК", effect: "15 урона в сек, замедление 15%" },
          { lvl: 2, mana: "90 МАНА", cd: "35 СЕК", effect: "30 урона в сек, замедление 20%" },
          { lvl: 3, mana: "100 МАНА", cd: "35 СЕК", effect: "45 урона в сек, замедление 25%" },
          { lvl: 4, mana: "110 МАНА", cd: "35 СЕК", effect: "60 урона в сек, замедление 30%" }
        ]
      },
      {
        name: "Headshot", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/sniper_headshot.png",
        desc: "Пассивный шанс нанести дополнительный урон и мини-стан при атаке.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "40% шанс, +30 урона, мини-стан" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "40% шанс, +70 урона, мини-стан" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "40% шанс, +110 урона, мини-стан" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "40% шанс, +150 урона, мини-стан" }
        ]
      },
      {
        name: "Take Aim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/sniper_take_aim.png",
        desc: "Увеличивает дальность атаки героя (активная способность дает огромный бонус на короткое время).", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "25 СЕК", effect: "+100 дальности атак" },
          { lvl: 2, mana: "50 МАНА", cd: "22 СЕК", effect: "+200 дальности атак" },
          { lvl: 3, mana: "50 МАНА", cd: "19 СЕК", effect: "+300 дальности атак" },
          { lvl: 4, mana: "50 МАНА", cd: "16 СЕК", effect: "+400 дальности атак" }
        ]
      },
      {
        name: "Assassinate", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/sniper_assassinate.png",
        desc: "Целится из винтовки с огромного расстояния и производит смертельный выстрел по выбранной цели.", isPassive: false,
        levels: [
          { lvl: 1, mana: "175 МАНА", cd: "20 СЕК", effect: "320 урона" },
          { lvl: 2, mana: "275 МАНА", cd: "15 СЕК", effect: "450 урона" },
          { lvl: 3, mana: "375 МАНА", cd: "10 СЕК", effect: "580 урона" }
        ]
      }
    ]
  },
  {
    name: "Templar Assassin", dota1: "Lanaya", attr: "Agility", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/templar_assassin.png",
    bio: "<p>Адепт Тайного Храма, использующая психические клинки и защитные преломления для неуязвимости.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Blight Stone", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blight_stone.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Desolator", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/desolator.png" },
        { name: "Dragon Lance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/dragon_lance.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Meld", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" }
      ],
      late: [
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Nullifier", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Одиночных героев с сильными единичными атаками.<br><b>Контрят:</b> Viper, Venomancer, Batrider, Radiance-носители.",
    skills: [
      {
        name: "Refraction", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/templar_assassin_refraction.png",
        desc: "Создает защитные щиты, полностью поглощающие урон от атак и заклинаний, и повышающие урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "85 МАНА", cd: "17 СЕК", effect: "3 заряда щита, +20 урона" },
          { lvl: 2, mana: "85 МАНА", cd: "17 СЕК", effect: "4 заряда щита, +40 урона" },
          { lvl: 3, mana: "85 МАНА", cd: "17 СЕК", effect: "5 зарядов щита, +60 урона" },
          { lvl: 4, mana: "85 МАНА", cd: "17 СЕК", effect: "6 зарядов щита, +80 урона" }
        ]
      },
      {
        name: "Meld", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/templar_assassin_meld.png",
        desc: "Уходит в невидимость на месте. Следующая атака из невидимости наносит бонусный урон и снижает броню.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "5.0 СЕК", effect: "+80 урона, -2 брони" },
          { lvl: 2, mana: "50 МАНА", cd: "5.0 СЕК", effect: "+140 урона, -4 брони" },
          { lvl: 3, mana: "50 МАНА", cd: "5.0 СЕК", effect: "+200 урона, -6 брони" },
          { lvl: 4, mana: "50 МАНА", cd: "5.0 СЕК", effect: "+260 урона, -8 брони" }
        ]
      },
      {
        name: "Psi Blades", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/templar_assassin_psi_blades.png",
        desc: "Увеличивает дальность атаки и пробивает психической энергией врагов позади основной цели.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+60 дальности атаки" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+140 дальности атаки" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+220 дальности атаки" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+300 дальности атаки" }
        ]
      },
      {
        name: "Psionic Trap", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/templar_assassin_psionic_trap.png",
        desc: "Устанавливает невидимые ловушки, которые дают обзор и замедляют врагов при активации.", isPassive: false,
        levels: [
          { lvl: 1, mana: "15 МАНА", cd: "11 СЕК", effect: "Замедление до 30%" },
          { lvl: 2, mana: "15 МАНА", cd: "8 СЕК", effect: "Замедление до 45%" },
          { lvl: 3, mana: "15 МАНА", cd: "5 СЕК", effect: "Замедление до 60%" }
        ]
      }
    ]
  },
  {
    name: "Luna", dota1: "Moon Rider", attr: "Agility", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/luna.png",
    bio: "<p>Бывшая предводительница Темного Оружия, нашедшая свет луны и карающая врагов палящими глефами.</p>",
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
        { name: "Manta Style", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png" },
        { name: "Helm of the Dominator", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/helm_of_the_dominator.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" }
      ],
      late: [
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Иллюзионистов и крипов (быстрый пуш).<br><b>Контрят:</b> Nyx Assassin, Phantom Assassin, Faceless Void.",
    skills: [
      {
        name: "Lucent Beam", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/luna_lucent_beam.png",
        desc: "Обрушивает лунный луч на врага, оглушая его и нанося магический урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "90 МАНА", cd: "6 СЕК", effect: "75 урона, стан 0.8 сек" },
          { lvl: 2, mana: "100 МАНА", cd: "6 СЕК", effect: "150 урона, стан 0.8 сек" },
          { lvl: 3, mana: "110 МАНА", cd: "6 СЕК", effect: "225 урона, стан 0.8 сек" },
          { lvl: 4, mana: "120 МАНА", cd: "6 СЕК", effect: "300 урона, стан 0.8 сек" }
        ]
      },
      {
        name: "Moon Glaives", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/luna_moon_glaive.png",
        desc: "Атаки героя метают глефы, которые рикошетят во врагов поблизости.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "1 рикошет (урон снижен)" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "2 рикошета (урон снижен)" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "3 рикошета (урон снижен)" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "4 рикошета (урон снижен)" }
        ]
      },
      {
        name: "Lunar Blessing", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/luna_lunar_blessing.png",
        desc: "Пассивно увеличивает урон союзников и дает им дополнительный ночной обзор.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+15 урона" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+20 урона" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+25 урона" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+30 урона" }
        ]
      },
      {
        name: "Eclipse", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/luna_eclipse.png",
        desc: "Вызывает шквал лунных лучей по случайным врагам вокруг Луны.", isPassive: false,
        levels: [
          { lvl: 1, mana: "150 МАНА", cd: "140 СЕК", effect: "4 луча" },
          { lvl: 2, mana: "200 МАНА", cd: "130 СЕК", effect: "7 лучей" },
          { lvl: 3, mana: "250 МАНА", cd: "120 СЕК", effect: "10 лучей" }
        ]
      }
    ]
  },
  {
    name: "Mirana", dota1: "Priestess of the Moon", attr: "Agility", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mirana.png",
    bio: "<p>Жрица Луны, верхом на гигантском белом тигре поражающая врагов издалека священными стрелами и звездопадом.</p>",
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
        { name: "Maelstrom", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/maelstrom.png" },
        { name: "Dragon Lance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/dragon_lance.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Manta Style", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png" }
      ],
      late: [
        { name: "Gleipnir", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/gungir.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Сильна с:</b> Героями с длительным контролем (Bane, Shadow Demon).<br><b>Контрят:</b> Slardar, Bounty Hunter, Zeus, Puck.",
    skills: [
      {
        name: "Starstorm", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/mirana_starfall.png",
        desc: "Обрушивает звездный дождь на врагов вокруг; ближайшая цель получает второй удар метеора.", isPassive: false,
        levels: [
          { lvl: 1, mana: "80 МАНА", cd: "12 СЕК", effect: "75 урона (+75% второму удару)" },
          { lvl: 2, mana: "95 МАНА", cd: "12 СЕК", effect: "150 урона (+75% второму удару)" },
          { lvl: 3, mana: "110 МАНА", cd: "12 СЕК", effect: "225 урона (+75% второму удару)" },
          { lvl: 4, mana: "125 МАНА", cd: "12 СЕК", effect: "300 урона (+75% второму удару)" }
        ]
      },
      {
        name: "Sacred Arrow", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/mirana_arrow.png",
        desc: "Выпускает дальнобойную стрелу: чем дальше пролетела стрела, тем дольше стан и выше урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "18 СЕК", effect: "80 урона, стан до 3.2 сек" },
          { lvl: 2, mana: "100 МАНА", cd: "17 СЕК", effect: "160 урона, стан до 3.8 сек" },
          { lvl: 3, mana: "100 МАНА", cd: "16 СЕК", effect: "240 урона, стан до 4.4 сек" },
          { lvl: 4, mana: "100 МАНА", cd: "15 СЕК", effect: "320 урона, стан до 5.0 сек" }
        ]
      },
      {
        name: "Leap", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/mirana_leap.png",
        desc: "Совершает стремительный прыжок вперед, даруя бонус к скорости атаки и передвижения после приземления.", isPassive: false,
        levels: [
          { lvl: 1, mana: "40 МАНА", cd: "30 СЕК", effect: "+8% скорости, +25 скорости атаки" },
          { lvl: 2, mana: "40 МАНА", cd: "26 СЕК", effect: "+12% скорости, +50 скорости атаки" },
          { lvl: 3, mana: "40 МАНА", cd: "22 СЕК", effect: "+16% скорости, +75 скорости атаки" },
          { lvl: 4, mana: "40 МАНА", cd: "18 СЕК", effect: "+20% скорости, +100 скорости атаки" }
        ]
      },
      {
        name: "Moonlight Shadow", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/mirana_invis.png",
        desc: "Делает всех союзных героев на карте невидимыми и ускоряет их передвижение.", isPassive: false,
        levels: [
          { lvl: 1, mana: "125 МАНА", cd: "140 СЕК", effect: "Невидимость 18 сек, +9% скорости" },
          { lvl: 2, mana: "125 МАНА", cd: "120 СЕК", effect: "Невидимость 18 сек, +12% скорости" },
          { lvl: 3, mana: "125 МАНА", cd: "100 СЕК", effect: "Невидимость 18 сек, +15% скорости" }
        ]
      }
    ]
  },
  {
    name: "Morphling", dota1: "Morphling", attr: "Agility", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/morphling.png",
    bio: "<p>Живая стихия воды, способная мгновенно перекачивать силу в ловкость и копировать облик вражеских героев.</p>",
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
        { name: "Morbid Mask", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/lifesteal.png" },
        { name: "Manta Style", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png" },
        { name: "Khanda", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/khanda.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" }
      ],
      late: [
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Физических керри и героев с сильными не-ульт скиллами (Earthshaker, Gyrocopter).<br><b>Контрят:</b> Ancient Apparition, Spirit Vessel, Lion, Anti-Mage.",
    skills: [
      {
        name: "Waveform", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/morphling_waveform.png",
        desc: "Превращается в волну и устремляется вперед в неуязвимости, нанося урон всем на пути.", isPassive: false,
        levels: [
          { lvl: 1, mana: "130 МАНА", cd: "21 СЕК", effect: "75 урона" },
          { lvl: 2, mana: "130 МАНА", cd: "18 СЕК", effect: "150 урона" },
          { lvl: 3, mana: "130 МАНА", cd: "15 СЕК", effect: "225 урона" },
          { lvl: 4, mana: "130 МАНА", cd: "12 СЕК", effect: "300 урона" }
        ]
      },
      {
        name: "Adaptive Strike", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/morphling_adaptive_strike_agi.png",
        desc: "Выпускает водный заряд, наносящий урон пропорционально ловкости героя (или оглушающий при высокой силе).", isPassive: false,
        levels: [
          { lvl: 1, mana: "40 МАНА", cd: "10 СЕК", effect: "Урон до 1.0x ловкости" },
          { lvl: 2, mana: "50 МАНА", cd: "10 СЕК", effect: "Урон до 1.5x ловкости" },
          { lvl: 3, mana: "60 МАНА", cd: "10 СЕК", effect: "Урон до 2.0x ловкости" },
          { lvl: 4, mana: "70 МАНА", cd: "10 СЕК", effect: "Урон до 2.5x ловкости" }
        ]
      },
      {
        name: "Attribute Shift", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/morphling_morph_agi.png",
        desc: "Перекачивает единицы силы в ловкость или обратно в любой момент.", isPassive: false,
        levels: [
          { lvl: 1, mana: "0 МАНА", cd: "0 СЕК", effect: "Перекачка 5 ед./сек, +3 ловк./силы" },
          { lvl: 2, mana: "0 МАНА", cd: "0 СЕК", effect: "Перекачка 10 ед./сек, +5 ловк./силы" },
          { lvl: 3, mana: "0 МАНА", cd: "0 СЕК", effect: "Перекачка 15 ед./сек, +7 ловк./силы" },
          { lvl: 4, mana: "0 МАНА", cd: "0 СЕК", effect: "Перекачка 20 ед./сек, +9 ловк./силы" }
        ]
      },
      {
        name: "Morph", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/morphling_replicate.png",
        desc: "Превращается в выбранного вражеского героя, получая доступ ко всем его базовым способностям.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "140 СЕК", effect: "Длительность 20 сек" },
          { lvl: 2, mana: "50 МАНА", cd: "100 СЕК", effect: "Длительность 20 сек" },
          { lvl: 3, mana: "50 МАНА", cd: "60 СЕК", effect: "Длительность 20 сек" }
        ]
      }
    ]
  },
  {
    name: "Phantom Lancer", dota1: "Azwraith", attr: "Agility", faction: "Sentinel",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_lancer.png",
    bio: "<p>Копейщик-фантом, который при каждом ударе плодит армию собственных копий, заполоняя весь экран.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Wraith Band", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wraith_band.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Diffusal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/diffusal_blade.png" },
        { name: "Manta Style", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" }
      ],
      late: [
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" },
        { name: "Bloodthorn", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bloodthorn.png" },
        { name: "Disperser", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/disperser.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Героев без сплеш-урона (Wraith King, Lifestealer, Troll Warlord).<br><b>Контрят:</b> Earthshaker, Sven, Leshrac, Axe.",
    skills: [
      {
        name: "Spirit Lance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_lancer_spirit_lance.png",
        desc: "Бросает магическое копье во врага, замедляя его и создавая иллюзию для атаки цели.", isPassive: false,
        levels: [
          { lvl: 1, mana: "110 МАНА", cd: "7 СЕК", effect: "100 урона, замедление 14%" },
          { lvl: 2, mana: "115 МАНА", cd: "7 СЕК", effect: "150 урона, замедление 21%" },
          { lvl: 3, mana: "120 МАНА", cd: "7 СЕК", effect: "200 урона, замедление 28%" },
          { lvl: 4, mana: "125 МАНА", cd: "7 СЕК", effect: "250 урона, замедление 35%" }
        ]
      },
      {
        name: "Doppelganger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_lancer_doppelwalk.png",
        desc: "Исчезает с поля боя на 1 секунду, сбрасывая дебаффы и возвращаясь с двумя иллюзиями.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "22 СЕК", effect: "2 иллюзии" },
          { lvl: 2, mana: "50 МАНА", cd: "18 СЕК", effect: "2 иллюзии" },
          { lvl: 3, mana: "50 МАНА", cd: "14 СЕК", effect: "2 иллюзии" },
          { lvl: 4, mana: "50 МАНА", cd: "10 СЕК", effect: "2 иллюзии" }
        ]
      },
      {
        name: "Phantom Rush", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_lancer_phantom_edge.png",
        desc: "Позволяет герою и его копиям стремительно налететь на выбранного врага, временно повышая ловкость.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "13 СЕК", effect: "+11 ловкости при рывке" },
          { lvl: 2, mana: "ПАССИВНО", cd: "10 СЕК", effect: "+22 ловкости при рывке" },
          { lvl: 3, mana: "ПАССИВНО", cd: "7 СЕК", effect: "+33 ловкости при рывке" },
          { lvl: 4, mana: "ПАССИВНО", cd: "4 СЕК", effect: "+44 ловкости при рывке" }
        ]
      },
      {
        name: "Juxtapose", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_lancer_juxtapose.png",
        desc: "Пассивный шанс при каждой атаке героя или его иллюзии создать новую копию (до 9 иллюзий).", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Макс. 5 иллюзий" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Макс. 7 иллюзий" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Макс. 9 иллюзий" }
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
  {
    name: "Meepo", dota1: "The Geomancer", attr: "Agility", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/meepo.png",
    bio: "<p>Геомант из подземных тоннелей, разделяющий свою душу на несколько точных копий для совместной охоты.</p>",
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
        { name: "Ethereal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ethereal_blade.png" },
        { name: "Dragon Lance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/dragon_lance.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" }
      ],
      late: [
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" },
        { name: "Scythe of Vyse", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sheepstick.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Одиночных целей и героев без массового урона.<br><b>Контрят:</b> Earthshaker, Sven, Lina, Lion, Axe.",
    skills: [
      {
        name: "Earthbind", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/meepo_earthbind.png",
        desc: "Бросает сетку в указанную точку, привязывая врагов к земле и прерывая их невидимость/телепортацию.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "20 СЕК", effect: "Сетка на 2.0 сек" },
          { lvl: 2, mana: "100 МАНА", cd: "16 СЕК", effect: "Сетка на 2.5 сек" },
          { lvl: 3, mana: "100 МАНА", cd: "12 СЕК", effect: "Сетка на 3.0 сек" },
          { lvl: 4, mana: "100 МАНА", cd: "8 СЕК", effect: "Сетка на 3.5 сек" }
        ]
      },
      {
        name: "Poof", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/meepo_poof.png",
        desc: "Телепортирует Meepo к любому другому своему клону или самому себе, нанося урон в точке отправки и прибытия.", isPassive: false,
        levels: [
          { lvl: 1, mana: "80 МАНА", cd: "12 СЕК", effect: "40 урона" },
          { lvl: 2, mana: "100 МАНА", cd: "10 СЕК", effect: "80 урона" },
          { lvl: 3, mana: "120 МАНА", cd: "8 СЕК", effect: "120 урона" },
          { lvl: 4, mana: "140 МАНА", cd: "6 СЕК", effect: "160 урона" }
        ]
      },
      {
        name: "Megadesigns", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/meepo_ransack.png",
        desc: "Пассивно крадет здоровье у врагов при каждой атаке героя или его клонов.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Вампиризм 8 HP за удар" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Вампиризм 14 HP за удар" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Вампиризм 20 HP за удар" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Вампиризм 26 HP за удар" }
        ]
      },
      {
        name: "Divided We Stand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/meepo_divided_we stand.png",
        desc: "Позволяет призывать дополнительных полнофункциональных клонов Meepo (если умирает один — умирают все).", isPassive: false,
        levels: [
          { lvl: 1, mana: "0 МАНА", cd: "0 СЕК", effect: "+1 клон" },
          { lvl: 2, mana: "0 МАНА", cd: "0 СЕК", effect: "+2 клона" },
          { lvl: 3, mana: "0 МАНА", cd: "0 СЕК", effect: "+3 клона" }
        ]
      }
    ]
  },
  {
    name: "Terrorblade", dota1: "Soul Keeper", attr: "Agility", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/terrorblade.png",
    bio: "<p>Демон-изгнанник, способный создавать армию смертоносных иллюзий и менять уровень здоровья местами с врагами.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Wraith Band", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wraith_band.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Manta Style", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png" },
        { name: "Dragon Lance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/dragon_lance.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" }
      ],
      late: [
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Физических керри и башен (быстрый снос).<br><b>Контрят:</b> Earthshaker, Leshrac, Lina, Lion.",
    skills: [
      {
        name: "Reflection", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/terrorblade_reflection.png",
        desc: "Создает темные отражения вражеских героев, которые атакуют их самих и замедляют.", isPassive: false,
        levels: [
          { lvl: 1, mana: "35 МАНА", cd: "22 СЕК", effect: "Замедление 25%, отражение 5 сек" },
          { lvl: 2, mana: "35 МАНА", cd: "19 СЕК", effect: "Замедление 30%, отражение 5.5 сек" },
          { lvl: 3, mana: "35 МАНА", cd: "16 СЕК", effect: "Замедление 35%, отражение 6 сек" },
          { lvl: 4, mana: "35 МАНА", cd: "13 СЕК", effect: "Замедление 40%, отражение 6.5 сек" }
        ]
      },
      {
        name: "Conjure Image", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/terrorblade_conjure_image.png",
        desc: "Создает мощную иллюзию героя, наносящую значительный урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "70 МАНА", cd: "16 СЕК", effect: "Иллюзия (наносит 30% урона)" },
          { lvl: 2, mana: "70 МАНА", cd: "14 СЕК", effect: "Иллюзия (наносит 40% урона)" },
          { lvl: 3, mana: "70 МАНА", cd: "12 СЕК", effect: "Иллюзия (наносит 50% урона)" },
          { lvl: 4, mana: "70 МАНА", cd: "10 СЕК", effect: "Иллюзия (наносит 60% урона)" }
        ]
      },
      {
        name: "Metamorphosis", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/terrorblade_metamorphosis.png",
        desc: "Превращает Terrorblade в могущественного демона дальнего боя с огромным уроном.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "140 СЕК", effect: "+20 бонус урона, трансформация 50 сек" },
          { lvl: 2, mana: "50 МАНА", cd: "140 СЕК", effect: "+40 бонус урона, трансформация 50 сек" },
          { lvl: 3, mana: "50 МАНА", cd: "140 СЕК", effect: "+60 бонус урона, трансформация 50 сек" },
          { lvl: 4, mana: "50 МАНА", cd: "140 СЕК", effect: "+80 бонус урона, трансформация 50 сек" }
        ]
      },
      {
        name: "Sunder", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/terrorblade_sunde.png",
        desc: "Меняет уровень здоровья Terrorblade местами с уровнем здоровья выбранного героя.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "90 СЕК", effect: "Обмен жизнями (мин. 25% HP цели)" },
          { lvl: 2, mana: "75 МАНА", cd: "75 СЕК", effect: "Обмен жизнями (мин. 20% HP цели)" },
          { lvl: 3, mana: "75 МАНА", cd: "60 СЕК", effect: "Обмен жизнями (мин. 15% HP цели)" }
        ]
      }
    ]
  },
  {
    name: "Nyx Assassin", dota1: "Nerubian Assassin", attr: "Agility", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nyx_assassin.png",
    bio: "<p>Жук-убийца паучьего роя, сжигающий ману магов и наносящий сокрушительный урон из скрытности.</p>",
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
        { name: "Arcane Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png" },
        { name: "Aether Lens", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aether_lens.png" },
        { name: "Blink Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Dagon", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/dagon.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" }
      ],
      late: [
        { name: "Dagon 5", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/dagon_5.png" },
        { name: "Octarine Core", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Магов с огромным запасом разума и интеллекта (Invoker, Storm, Lina).<br><b>Контрят:</b> Sentry Wards, Gem of True Sight, Slardar.",
    skills: [
      {
        name: "Impale", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/nyx_assassin_impale.png",
        desc: "Пронзает землю шипами по линии, подбрасывая врагов в воздух и оглушая их.", isPassive: false,
        levels: [
          { lvl: 1, mana: "95 МАНА", cd: "14 СЕК", effect: "100 урона, стан 1.2 сек" },
          { lvl: 2, mana: "105 МАНА", cd: "13 СЕК", effect: "160 урона, стан 1.6 сек" },
          { lvl: 3, mana: "115 МАНА", cd: "12 СЕК", effect: "220 урона, стан 2.0 сек" },
          { lvl: 4, mana: "125 МАНА", cd: "11 СЕК", effect: "280 урона, стан 2.4 сек" }
        ]
      },
      {
        name: "Mind Flare", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/nyx_assassin_mana_burn.png",
        desc: "Наносит урон врагу пропорционально его максимальному запасу интеллекта.", isPassive: false,
        levels: [
          { lvl: 1, mana: "90 МАНА", cd: "16 СЕК", effect: "Базовый урон + множитель от интеллекта" },
          { lvl: 2, mana: "100 МАНА", cd: "13 СЕК", effect: "Базовый урон + множитель от интеллекта" },
          { lvl: 3, mana: "110 МАНА", cd: "10 СЕК", effect: "Базовый урон + множитель от интеллекта" },
          { lvl: 4, mana: "120 МАНА", cd: "7 СЕК", effect: "Базовый урон + множитель от интеллекта" }
        ]
      },
      {
        name: "Spiked Carapace", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/nyx_assassin_spiked_carapace.png",
        desc: "Отражает весь входящий урон обратно в обидчика и оглушает его при получении урона.", isPassive: false,
        levels: [
          { lvl: 1, mana: "40 МАНА", cd: "22 СЕК", effect: "Стан 1.2 сек" },
          { lvl: 2, mana: "40 МАНА", cd: "18 СЕК", effect: "1.6 сек" },
          { lvl: 3, mana: "40 МАНА", cd: "14 СЕК", effect: "2.0 сек" },
          { lvl: 4, mana: "40 МАНА", cd: "10 СЕК", effect: "2.4 сек" }
        ]
      },
      {
        name: "Vendetta", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/nyx_assassin_vendetta.png",
        desc: "Уходит в невидимость со значительным ускорением; первая атака из невидимости наносит огромный критический урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "160 МАНА", cd: "90 СЕК", effect: "Крит 250 урона" },
          { lvl: 2, mana: "210 МАНА", cd: "75 СЕК", effect: "Крит 400 урона" },
          { lvl: 3, mana: "260 МАНА", cd: "60 СЕК", effect: "Крит 550 урона" }
        ]
      }
    ]
  },
  {
    name: "Slark", dota1: "Murloc Nightcrawler", attr: "Agility", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slark.png",
    bio: "<p>Мурлок-беглец из тюрьмы подводной крепости, ворующий характеристики у врагов своими кинжалами.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Wraith Band", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wraith_band.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Diffusal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/diffusal_blade.png" },
        { name: "Echo Sabre", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/echo_sabre.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" },
        { name: "Silver Edge", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/invis_sword.png" }
      ],
      late: [
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" },
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Одиночных героев и целей с пассивками.<br><b>Контрят:</b> Bloodseeker, Doom, Disruptor, Gem of True Sight.",
    skills: [
      {
        name: "Dark Pact", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/slark_dark_pact.png",
        desc: "Жертвует частью своего здоровья через задержку, чтобы снять с себя негативные эффекты и нанести урон вокруг.", isPassive: false,
        levels: [
          { lvl: 1, mana: "55 МАНА", cd: "6.0 СЕК", effect: "75 урона" },
          { lvl: 2, mana: "50 МАНА", cd: "5.5 СЕК", effect: "150 урона" },
          { lvl: 3, mana: "45 МАНА", cd: "5.0 СЕК", effect: "225 урона" },
          { lvl: 4, mana: "40 МАНА", cd: "4.5 СЕК", effect: "300 урона" }
        ]
      },
      {
        name: "Pounce", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/slark_pounce.png",
        desc: "Совершает прыжок вперед; первый задетый враг привязывается к точке падения на короткое время.", isPassive: false,
        levels: [
          { lvl: 1, mana: "40 МАНА", cd: "22 СЕК", effect: "Привязка 1.6 сек" },
          { lvl: 2, mana: "40 МАНА", cd: "19 СЕК", effect: "Привязка 1.9 сек" },
          { lvl: 3, mana: "40 МАНА", cd: "16 СЕК", effect: "Привязка 2.2 сек" },
          { lvl: 4, mana: "40 МАНА", cd: "13 СЕК", effect: "Привязка 2.5 сек" }
        ]
      },
      {
        name: "Essence Shift", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/slark_essence_shift.png",
        desc: "Каждая успешная атака по вражескому герою ворует у него по 1 ед. всех атрибутов и дает Slark дополнительную ловкость.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Кража 1 ед. атрибута, +3 ловкости" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Кража 1 ед. атрибута, +4 ловкости" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Кража 1 ед. атрибута, +5 ловкости" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Кража 1 ед. атрибута, +6 ловкости" }
        ]
      },
      {
        name: "Shadow Dance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/slark_shadow_dance.png",
        desc: "Прячется в темном облаке, становясь невидимым (не раскрывается дастом или сентрями) и получая мощную регенерацию здоровья.", isPassive: false,
        levels: [
          { lvl: 1, mana: "120 МАНА", cd: "80 СЕК", effect: "Регенерация 30% HP в сек, 4.5 сек" },
          { lvl: 2, mana: "120 МАНА", cd: "70 СЕК", effect: "Регенерация 40% HP в сек, 5.0 сек" },
          { lvl: 3, mana: "120 МАНА", cd: "60 СЕК", effect: "Регенерация 50% HP в сек, 5.5 сек" }
        ]
      }
    ]
  },
  {
    name: "Razor", dota1: "Lightning Revenant", attr: "Agility", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/razor.png",
    bio: "<p>Грозовой ревенант, управляющий энергией молний и вытягивающий атаку из врагов.</p>",
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
        { name: "Phase Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png" },
        { name: "Sange and Yasha", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sange_and_yasha.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" }
      ],
      late: [
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Assault Cuirass", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Физических керри ближнего боя (Sven, PA, Ursa, Lifestealer).<br><b>Контрят:</b> Sniper, Drow Ranger, OD, Outworld Destroyer.",
    skills: [
      {
        name: "Plasma Field", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/razor_plasma_field.png",
        desc: "Выпускает кольцо плазмы, расширяющееся от героя и наносящее тем больше урона, чем дальше оно отлетело.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "16 СЕК", effect: "Урон от 30 до 110" },
          { lvl: 2, mana: "105 МАНА", cd: "14 СЕК", effect: "Урон от 50 до 190" },
          { lvl: 3, mana: "110 МАНА", cd: "12 СЕК", effect: "Урон от 70 до 270" },
          { lvl: 4, mana: "115 МАНА", cd: "10 СЕК", effect: "Урон от 90 до 350" }
        ]
      },
      {
        name: "Static Link", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/razor_static_link.png",
        desc: "Создает молниеносную связь с вражеским героем, постепенно забирая у него урон и передавая Razor.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "32 СЕК", effect: "Кража до 14 урона" },
          { lvl: 2, mana: "50 МАНА", cd: "28 СЕК", effect: "Кража до 22 урона" },
          { lvl: 3, mana: "50 МАНА", cd: "24 СЕК", effect: "Кража до 30 урона" },
          { lvl: 4, mana: "50 МАНА", cd: "20 СЕК", effect: "Кража до 38 урона" }
        ]
      },
      {
        name: "Storm Surge", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/razor_storm_surge.png",
        desc: "Пассивно увеличивает скорость передвижения и бьет молнией атакующих врагов.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+6% скорости, урон молнией 60" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+10% скорости, урон молнией 90" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+14% скорости, урон молнией 120" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+18% скорости, урон молнией 150" }
        ]
      },
      {
        name: "Eye of the Storm", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/razor_eye_of_the_storm.png",
        desc: "Грозовая туча поражает молниями врагов с наименьшим здоровьем и снижает их броню.", isPassive: false,
        levels: [
          { lvl: 1, mana: "125 МАНА", cd: "80 СЕК", effect: "Урон за удар 40, -1 брони" },
          { lvl: 2, mana: "150 МАНА", cd: "70 СЕК", effect: "Урон за удар 55, -1.5 брони" },
          { lvl: 3, mana: "175 МАНА", cd: "60 СЕК", effect: "Урон за удар 70, -2 брони" }
        ]
      }
    ]
  },
  {
    name: "Venomancer", dota1: "Lesale Deathbringer", attr: "Agility", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/venomancer.png",
    bio: "<p>Ядовитое чудовище из топей Куретала, сеющее хаос с помощью чумных змей и смертоносных ядов.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Wind Lace", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wind_lace.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Arcane Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png" },
        { name: "Veil of Discord", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/veil_of_discord.png" },
        { name: "Force Staff", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" }
      ],
      late: [
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Octarine Core", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Shiva's Guard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Героев ближнего боя на линии и пушеров.<br><b>Контрят:</b> BKB, Lifestealer, Juggernaut, Oracle.",
    skills: [
      {
        name: "Venomous Gale", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/venomancer_venomous_gale.png",
        desc: "Выпускает ядовитую волну, которая наносит периодический урон и сильно замедляет врагов.", isPassive: false,
        levels: [
          { lvl: 1, mana: "80 МАНА", cd: "22 СЕК", effect: "Урон 25/сек, замедление 50%" },
          { lvl: 2, mana: "90 МАНА", cd: "20 СЕК", effect: "Урон 50/сек, замедление 50%" },
          { lvl: 3, mana: "100 МАНА", cd: "18 СЕК", effect: "Урон 75/сек, замедление 50%" },
          { lvl: 4, mana: "110 МАНА", cd: "16 СЕК", effect: "Урон 100/сек, замедление 50%" }
        ]
      },
      {
        name: "Poison Sting", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/venomancer_poison_sting.png",
        desc: "Пассивно добавляет яд к атакам героя и его змей, замедляя врагов и нанося урон со временем.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "6 урона/сек, замедление 11%" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "12 урона/сек, замедление 13%" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "18 урона/сек, замедление 15%" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "24 урона/сек, замедление 17%" }
        ]
      },
      {
        name: "Plague Ward", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/venomancer_plague_ward.png",
        desc: "Призывает чумную змейку для разведки и обстрела врагов ядовитыми атаками.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "5 СЕК", effect: "Змейка 1 ур. (100 HP)" },
          { lvl: 2, mana: "60 МАНА", cd: "5 СЕК", effect: "Змейка 2 ур. (200 HP)" },
          { lvl: 3, mana: "70 МАНА", cd: "5 СЕК", effect: "Змейка 3 ур. (300 HP)" },
          { lvl: 4, mana: "80 МАНА", cd: "5 СЕК", effect: "Змейка 4 ур. (400 HP)" }
        ]
      },
      {
        name: "Poison Nova", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/venomancer_poison_nova.png",
        desc: "Высвобождает кольцо ядовитого газа вокруг себя, нанося колоссальный урон всем врагам поблизости (не может убить ниже 1 HP).", isPassive: false,
        levels: [
          { lvl: 1, mana: "150 МАНА", cd: "140 СЕК", effect: "300 суммарного урона" },
          { lvl: 2, mana: "225 МАНА", cd: "120 СЕК", effect: "550 суммарного урона" },
          { lvl: 3, mana: "275 МАНА", cd: "100 СЕК", effect: "800 суммарного урона" }
        ]
      }
    ]
  },
  {
    name: "Faceless Void", dota1: "Darkterror", attr: "Agility", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/faceless_void.png",
    bio: "<p>Гость из иного измерения, способный искажать время, уворачиваться от атак и запирать врагов в куполе замороженного времени.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Wraith Band", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wraith_band.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Maelstrom", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/maelstrom.png" },
        { name: "Manta Style", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" }
      ],
      late: [
        { name: "Mjollnir", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mjollnir.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Refresher Orb", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен с:</b> Героями с глобальным уроном в купол (Invoker, Witch Doctor, Lina).<br><b>Контрят:</b> Shadow Demon, Omniknight, Silencer, Eul's Scepter.",
    skills: [
      {
        name: "Time Walk", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/faceless_void_time_walk.png",
        desc: "Совершает прыжок сквозь время, восстанавливая весь урон, полученный за последние 2 секунды.", isPassive: false,
        levels: [
          { lvl: 1, mana: "40 МАНА", cd: "24 СЕК", effect: "Дальность 550" },
          { lvl: 2, mana: "40 МАНА", cd: "19 СЕК", effect: "Дальность 700" },
          { lvl: 3, mana: "40 МАНА", cd: "14 СЕК", effect: "Дальность 850" },
          { lvl: 4, mana: "40 МАНА", cd: "9 СЕК", effect: "Дальность 1000" }
        ]
      },
      {
        name: "Time Dilation", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/faceless_void_time_dilation.png",
        desc: "Замедляет время для врагов вокруг, увеличивая перезарядку их способностей и замедляя их.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "12 СЕК", effect: "+1 сек к перезарядке за способность" },
          { lvl: 2, mana: "60 МАНА", cd: "12 СЕК", effect: "+2 сек к перезарядке за способность" },
          { lvl: 3, mana: "70 МАНА", cd: "12 СЕК", effect: "+3 сек к перезарядке за способность" },
          { lvl: 4, mana: "80 МАНА", cd: "12 СЕК", effect: "+4 сек к перезарядке за способность" }
        ]
      },
      {
        name: "Time Lock", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/faceless_void_time_lock.png",
        desc: "Шанс нанести дополнительный урон и запереть цель во времени, оглушив ее.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "16% шанс, 20 урона, стан 0.4 сек" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "18% шанс, 30 урона, стан 0.5 сек" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "20% шанс, 40 урона, стан 0.6 сек" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "22% шанс, 50 урона, стан 0.7 сек" }
        ]
      },
      {
        name: "Chronosphere", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/faceless_void_chronosphere.png",
        desc: "Создает пузырь искривленного времени, в котором замирают абсолютно все юниты, кроме Faceless Void.", isPassive: false,
        levels: [
          { lvl: 1, mana: "150 МАНА", cd: "160 СЕК", effect: "Длительность 4.5 сек" },
          { lvl: 2, mana: "175 МАНА", cd: "145 СЕК", effect: "Длительность 5.0 сек" },
          { lvl: 3, mana: "200 МАНА", cd: "130 СЕК", effect: "5.5 сек" }
        ]
      }
    ]
  },
  {
    name: "Phantom Assassin", dota1: "Mortred", attr: "Agility", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png",
    bio: "<p>Безжалостная наемница ордена Вультуры, обладающая смертоносными критическими ударами и неуловимым уклонением.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Wraith Band", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wraith_band.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Battle Fury", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bfury.png" },
        { name: "Desolator", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/desolator.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" },
        { name: "Basher", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/basher.png" }
      ],
      late: [
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Nullifier", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Героев без защиты от физ-урона.<br><b>Контрят:</b> MKB (Monkey King Bar), Silver Edge, Blade Mail, Axe.",
    skills: [
      {
        name: "Stifling Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_assassin_stifling_dagger.png",
        desc: "Бросает отравленный кинжал, наносящий урон от атаки героя и замедляющий цель.", isPassive: false,
        levels: [
          { lvl: 1, mana: "30 МАНА", cd: "15 СЕК", effect: "Урон 30% от атак, замедление 15%" },
          { lvl: 2, mana: "30 МАНА", cd: "12 СЕК", effect: "Урон 45% от атак, замедление 20%" },
          { lvl: 3, mana: "30 МАНА", cd: "9 СЕК", effect: "Урон 60% от атак, замедление 25%" },
          { lvl: 4, mana: "30 МАНА", cd: "6 СЕК", effect: "Урон 75% от атак, замедление 30%" }
        ]
      },
      {
        name: "Phantom Strike", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_assassin_phantom_strike.png",
        desc: "Телепортируется к юниту (союзнику или врагу), получая огромный бонус к скорости атаки.", isPassive: false,
        levels: [
          { lvl: 1, mana: "35 МАНА", cd: "11 СЕК", effect: "+100 скорости атаки на 5 ударов" },
          { lvl: 2, mana: "35 МАНА", cd: "9 СЕК", effect: "+125 скорости атаки на 5 ударов" },
          { lvl: 3, mana: "35 МАНА", cd: "7 СЕК", effect: "+150 скорости атаки на 5 ударов" },
          { lvl: 4, mana: "35 МАНА", cd: "5 СЕК", effect: "+175 скорости атаки на 5 ударов" }
        ]
      },
      {
        name: "Blur", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_assassin_blur.png",
        desc: "Пассивно дает уклонение от физических атак. При активации растворяет героиню в тумане войны.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "45 СЕК", effect: "Уклонение 20%, туман войны" },
          { lvl: 2, mana: "50 МАНА", cd: "40 СЕК", effect: "Уклонение 30%, туман войны" },
          { lvl: 3, mana: "50 МАНА", cd: "35 СЕК", effect: "Уклонение 40%, туман войны" },
          { lvl: 4, mana: "50 МАНА", cd: "30 СЕК", effect: "Уклонение 50%, туман войны" }
        ]
      },
      {
        name: "Coup de Grâce", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/phantom_assassin_coup_de_grace.png",
        desc: "Пассивный шанс нанести сокрушительный критический удар с четырехкратным уроном.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "15% шанс, крит 200%" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "17.5% шанс, крит 320%" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "20% шанс, крит 450%" }
        ]
      }
    ]
  },
  {
    name: "Viper", dota1: "Netherdrake", attr: "Agility", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/viper.png",
    bio: "<p>Ядовитый дракон из Пустоты, способный растворять броню врагов и замедлять их своими едкими кислотами.</p>",
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
        { name: "Dragon Lance", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/dragon_lance.png" },
        { name: "Maelstrom", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/maelstrom.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" }
      ],
      late: [
        { name: "Mjollnir", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mjollnir.png" },
        { name: "Hurricane Pike", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/hurricane_pike.png" },
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Героев ближнего боя на лайне (Ursa, PA, Slark).<br><b>Контрят:</b> Sniper, OD, Medusa, Anti-Mage.",
    skills: [
      {
        name: "Poison Attack", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/viper_poison_attack.png",
        desc: "Ядовитые атаки наносят урон со временем и замедляют передвижение и атаку цели (суммируется).", isPassive: false,
        levels: [
          { lvl: 1, mana: "20 МАНА", cd: "0 СЕК", effect: "Урон 10/сек, замедление 10%" },
          { lvl: 2, mana: "20 МАНА", cd: "0 СЕК", effect: "Урон 15/сек, замедление 20%" },
          { lvl: 3, mana: "20 МАНА", cd: "0 СЕК", effect: "Урон 20/сек, замедление 30%" },
          { lvl: 4, mana: "20 МАНА", cd: "0 СЕК", effect: "Урон 25/сек, замедление 40%" }
        ]
      },
      {
        name: "Nethertoxin", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/viper_nethertoxin.png",
        desc: "Создает ядовитую лужу, которая наносит урон и отключает пассивные способности врагов внутри.", isPassive: false,
        levels: [
          { lvl: 1, mana: "75 МАНА", cd: "14 СЕК", effect: "25 урона в сек" },
          { lvl: 2, mana: "75 МАНА", cd: "12 СЕК", effect: "40 урона в сек" },
          { lvl: 3, mana: "75 МАНА", cd: "10 СЕК", effect: "55 урона в сек" },
          { lvl: 4, mana: "75 МАНА", cd: "8 СЕК", effect: "70 урона в сек" }
        ]
      },
      {
        name: "Corrosive Skin", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/viper_corrosive_skin.png",
        desc: "Пассивно дает сопротивление магии и наносит урон кислотой атакующим врагам.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+10% сопр. магии, 10 урона/сек" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+15% сопр. магии, 15 урона/сек" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+20% сопр. магии, 20 урона/сек" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "+25% сопр. магии, 25 урона/сек" }
        ]
      },
      {
        name: "Viper Strike", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/viper_viper_strike.png",
        desc: "Запускает ядовитый снаряд, наносящий колоссальный урон со временем и сильно замедляющий жертву.", isPassive: false,
        levels: [
          { lvl: 1, mana: "125 МАНА", cd: "40 СЕК", effect: "Урон 60/сек, замедление 40%" },
          { lvl: 2, mana: "175 МАНА", cd: "30 СЕК", effect: "Урон 100/сек, замедление 50%" },
          { lvl: 3, mana: "250 МАНА", cd: "20 СЕК", effect: "Урон 140/сек, замедление 60%" }
        ]
      }
    ]
  },
  {
    name: "Clinkz", dota1: "Bone Fletcher", attr: "Agility", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/clinkz.png",
    bio: "<p>Огненный скелет-лучник, способный сжигать врагов шквалом стрел и молниеносно перемещаться по невидимости.</p>",
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
        { name: "Orchid Malevolence", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/orchid.png" },
        { name: "Desolator", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/desolator.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/lesser_crit.png" }
      ],
      late: [
        { name: "Bloodthorn", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bloodthorn.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "Nullifier", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Одиночных героев и саппортов.<br><b>Контрят:</b> Dust of Appearance, Gem of True Sight, Slardar, Doom.",
    skills: [
      {
        name: "Strafe", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/clinkz_strafe.png",
        desc: "Увеличивает скорость атаки героя и создает вокруг него горящих скелетов-лучников.", isPassive: false,
        levels: [
          { lvl: 1, mana: "40 МАНА", cd: "30 СЕК", effect: "+60 скорости атаки" },
          { lvl: 2, mana: "45 МАНА", cd: "25 СЕК", effect: "+100 скорости атаки" },
          { lvl: 3, mana: "50 МАНА", cd: "20 СЕК", effect: "+140 скорости атаки" },
          { lvl: 4, mana: "55 МАНА", cd: "15 СЕК", effect: "+180 скорости атаки" }
        ]
      },
      {
        name: "Searing Arrows", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/clinkz_searing_arrows.png",
        desc: "Поджигает стрелы, нанося дополнительный физический урон при каждой атаке.", isPassive: false,
        levels: [
          { lvl: 1, mana: "9 МАНА", cd: "0 СЕК", effect: "+30 доп. урона" },
          { lvl: 2, mana: "9 МАНА", cd: "0 СЕК", effect: "+40 доп. урона" },
          { lvl: 3, mana: "9 МАНА", cd: "0 СЕК", effect: "+50 доп. урона" },
          { lvl: 4, mana: "90 МАНА", cd: "0 СЕК", effect: "+60 доп. урона" }
        ]
      },
      {
        name: "Skeleton Walk", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/clinkz_wind_walk.png",
        desc: "Уходит в невидимость, получая бонус к скорости передвижения.", isPassive: false,
        levels: [
          { lvl: 1, mana: "45 МАНА", cd: "20 СЕК", effect: "+15% скорости, 35 сек" },
          { lvl: 2, mana: "45 МАНА", cd: "18 СЕК", effect: "+25% скорости, 40 сек" },
          { lvl: 3, mana: "45 МАНА", cd: "16 СЕК", effect: "+35% скорости, 45 сек" },
          { lvl: 4, mana: "45 МАНА", cd: "14 СЕК", effect: "+45% скорости, 50 сек" }
        ]
      },
      {
        name: "Death Pact", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/clinkz_death_pact.png",
        desc: "Поглощает целевого крипа, получая бонус к здоровью и урону от атаки.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "80 СЕК", effect: "Бонус 10% HP и урона" },
          { lvl: 2, mana: "100 МАНА", cd: "65 СЕК", effect: "Бонус 14% HP и урона" },
          { lvl: 3, mana: "100 МАНА", cd: "50 СЕК", effect: "Бонус 18% HP и урона" }
        ]
      }
    ]
  },
  {
    name: "Broodmother", dota1: "Black Arachnia", attr: "Agility", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/broodmother.png",
    bio: "<p>Королева пауков из подземных пещер, плетущая сети по всей карте и выпускающая армию паучков на врагов.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Wraith Band", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/wraith_band.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Orchid Malevolence", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/orchid.png" },
        { name: "Diffusal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/diffusal_blade.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" },
        { name: "Satanic", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png" }
      ],
      late: [
        { name: "Bloodthorn", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bloodthorn.png" },
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "Nullifier", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Одиночных героев на линии без массового урона.<br><b>Контрят:</b> Earthshaker, Axe, Sand King, Legion Commander.",
    skills: [
      {
        name: "Sticky Snare", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/broodmother_silken_bola.png",
        desc: "Бросает паутину, замедляющую врага и наносящую урон.", isPassive: false,
        levels: [
          { lvl: 1, mana: "80 МАНА", cd: "14 СЕК", effect: "Урон 80, замедление 25%" },
          { lvl: 2, mana: "85 МАНА", cd: "13 СЕК", effect: "Урон 140, замедление 35%" },
          { lvl: 3, mana: "90 МАНА", cd: "12 СЕК", effect: "Урон 200, замедление 45%" },
          { lvl: 4, mana: "95 МАНА", cd: "11 СЕК", effect: "Урон 260, замедление 55%" }
        ]
      },
      {
        name: "Spin Web", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/broodmother_spin_web.png",
        desc: "Плетет паутину, дающую невидимость, ускорение передвижения и регенерацию здоровья внутри нее.", isPassive: false,
        levels: [
          { lvl: 1, mana: "50 МАНА", cd: "20 СЕК", effect: "До 5 павутин одновременно" },
          { lvl: 2, mana: "50 МАНА", cd: "20 СЕК", effect: "До 7 павутин одновременно" },
          { lvl: 3, mana: "50 МАНА", cd: "20 СЕК", effect: "До 9 павутин одновременно" },
          { lvl: 4, mana: "50 МАНА", cd: "20 СЕК", effect: "До 11 павутин одновременно" }
        ]
      },
      {
        name: "Spawn Spiderlings", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/broodmother_spawn_spiderlings.png",
        desc: "Инъецирует яд в цель, нанося урон. Если цель погибает под действием яда, из нее появляются паучки.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "30 СЕК", effect: "180 урона, паучки" },
          { lvl: 2, mana: "110 МАНА", cd: "27 СЕК", effect: "270 урона, паучки" },
          { lvl: 3, mana: "120 МАНА", cd: "24 СЕК", effect: "360 урона, паучки" },
          { lvl: 4, mana: "130 МАНА", cd: "21 СЕК", effect: "450 урона, паучки" }
        ]
      },
      {
        name: "Insatiable Hunger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/broodmother_insatiable_hunger.png",
        desc: "Впадает в кровавый голод, получая огромный бонус к урону от атак и колоссальный вампиризм.", isPassive: false,
        levels: [
          { lvl: 1, mana: "100 МАНА", cd: "45 СЕК", effect: "+60 урона, вампиризм 60%" },
          { lvl: 2, mana: "100 МАНА", cd: "40 СЕК", effect: "+100 урона, вампиризм 90%" },
          { lvl: 3, mana: "100 МАНА", cd: "35 СЕК", effect: "+140 урона, вампиризм 120%" }
        ]
      }
    ]
  },
  {
    name: "Weaver", dota1: "Anub'seran", attr: "Agility", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/weaver.png",
    bio: "<p>Ткач времени из стаи небьющихся паукообразных, способный переписывать саму реальность и наносить двойные атаки.</p>",
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
        { name: "Maelstrom", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/maelstrom.png" },
        { name: "Desolator", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/desolator.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" },
        { name: "Manta Style", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png" }
      ],
      late: [
        { name: "Mjollnir", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mjollnir.png" },
        { name: "Daedalus", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Медленных героев без контроля.<br><b>Контрят:</b> Bloodseeker, Doom, Silencer, Slardar, Lion.",
    skills: [
      {
        name: "The Swarm", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/weaver_the_swarm.png",
        desc: "Запускает рой жуков, которые цепляются за врагов, нанося урон и пожирая их броню.", isPassive: false,
        levels: [
          { lvl: 1, mana: "110 МАНА", cd: "35 СЕК", effect: "Жуки нападают на цель" },
          { lvl: 2, mana: "110 МАНА", cd: "30 СЕК", effect: "Жуки нападают на цель" },
          { lvl: 3, mana: "110 МАНА", cd: "25 СЕК", effect: "Жуки нападают на цель" },
          { lvl: 4, mana: "110 МАНА", cd: "20 СЕК", effect: "Жуки нападают на цель" }
        ]
      },
      {
        name: "Shukuchi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/weaver_shukuchi.png",
        desc: "Становится невидимым, ускоряется до максимума и наносит урон всем врагам, сквозь которых пробегает.", isPassive: false,
        levels: [
          { lvl: 1, mana: "60 МАНА", cd: "12 СЕК", effect: "90 урона, скорость бега" },
          { lvl: 2, mana: "60 МАНА", cd: "10 СЕК", effect: "110 урона, скорость бега" },
          { lvl: 3, mana: "60 МАНА", cd: "8 СЕК", effect: "130 урона, скорость бега" },
          { lvl: 4, mana: "60 МАНА", cd: "6 СЕК", effect: "150 урона, скорость бега" }
        ]
      },
      {
        name: "Geminate Attack", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/weaver_geminate_attack.png",
        desc: "Пассивно позволяет атаковать двойным выстрелом при каждой обычной атаке.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "6.0 СЕК", effect: "Двойная атака" },
          { lvl: 2, mana: "ПАССИВНО", cd: "5.0 СЕК", effect: "Двойная атака" },
          { lvl: 3, mana: "ПАССИВНО", cd: "4.0 СЕК", effect: "Двойная атака" },
          { lvl: 4, mana: "ПАССИВНО", cd: "3.0 СЕК", effect: "Двойная атака" }
        ]
      },
      {
        name: "Time Lapse", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/weaver_time_lapse.png",
        desc: "Возвращает Weaver в ту точку пространства и времени, где он находился 5 секунд назад (восстанавливая здоровье и ману).", isPassive: false,
        levels: [
          { lvl: 1, mana: "150 МАНА", cd: "60 СЕК", effect: "Возврат в прошлое" },
          { lvl: 2, mana: "75 МАНА", cd: "50 СЕК", effect: "Возврат в прошлое" },
          { lvl: 3, mana: "0 МАНА", cd: "40 СЕК", effect: "Возврат в прошлое" }
        ]
      }
    ]
  },
  {
    name: "Spectre", dota1: "Mercurial", attr: "Agility", faction: "Scourge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spectre.png",
    bio: "<p>Мрачный дух мести из иного мира, рассеивающий свой темный образ по всей карте для нападения на одиноких врагов.</p>",
    itemsBuild: {
      early: [
        { name: "Tango", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tango.png" },
        { name: "Salve", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/flask.png" },
        { name: "Quelling", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png" },
        { name: "Ring of Health", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ring_of_health.png" },
        { name: "Branch", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png" },
        { name: "Wand", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/magic_wand.png" }
      ],
      mid: [
        { name: "Power Treads", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png" },
        { name: "Blade Mail", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blade_mail.png" },
        { name: "Manta Style", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png" },
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Aghanim's Shard", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aghanims_shard.png" }
      ],
      late: [
        { name: "Heart", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png" },
        { name: "Butterfly", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png" },
        { name: "Skadi", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png" },
        { name: "Abyssal Blade", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png" },
        { name: "BKB", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png" },
        { name: "Travel Boots", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png" }
      ]
    },
    countersInfo: "<b>Силен против:</b> Тонких саппортов и сплитпушеров в лейте.<br><b>Контрят:</b> Viper, Necrophos, Anti-Mage, Chaos Knight.",
    skills: [
      {
        name: "Spectral Dagger", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/spectre_spectral_dagger.png",
        desc: "Бросает теневой кинжал, создавая путь, сквозь который Spectre может ходить сквозь деревья и текстуры.", isPassive: false,
        levels: [
          { lvl: 1, mana: "130 МАНА", cd: "22 СЕК", effect: "75 урона, след из тени" },
          { lvl: 2, mana: "140 МАНА", cd: "20 СЕК", effect: "150 урона, след из тени" },
          { lvl: 3, mana: "150 МАНА", cd: "18 СЕК", effect: "225 урона, след из тени" },
          { lvl: 4, mana: "160 МАНА", cd: "16 СЕК", effect: "300 урона, след из тени" }
        ]
      },
      {
        name: "Desolate", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/spectre_desolate.png",
        desc: "Пассивно наносит чистый урон сквозь броню, если у врага рядом нет союзников.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "25 чистого урона" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "40 чистого урона" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "55 чистого урона" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "70 чистого урона" }
        ]
      },
      {
        name: "Dispersion", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/spectre_dispersion.png",
        desc: "Пассивно рассеивает часть получаемого урона, отражая его обратно на всех врагов вокруг.", isPassive: true,
        levels: [
          { lvl: 1, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Отражение 10%" },
          { lvl: 2, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Отражение 14%" },
          { lvl: 3, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Отражение 18%" },
          { lvl: 4, mana: "ПАССИВНО", cd: "0 СЕК", effect: "Отражение 22%" }
        ]
      },
      {
        name: "Haunt", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/spectre_haunt.png",
        desc: "Создает иллюзии каждого вражеского героя на карте, позволяя Spectre в любой момент переместиться к любой из них.", isPassive: false,
        levels: [
          { lvl: 1, mana: "150 МАНА", cd: "180 СЕК", effect: "Иллюзии на 5 сек" },
          { lvl: 2, mana: "200 МАНА", cd: "150 СЕК", effect: "Иллюзии на 6 сек" },
          { lvl: 3, mana: "250 МАНА", cd: "120 СЕК", effect: "Иллюзии на 7 сек" }
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
