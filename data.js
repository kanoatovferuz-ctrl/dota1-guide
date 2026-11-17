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
