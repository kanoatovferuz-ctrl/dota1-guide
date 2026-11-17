const itemsData = [
    // --- РАСХОДНИКИ (Consumables) ---
    {
        name: "Town Portal Scroll",
        category: "Consumables",
        cost: 100,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tpscroll.png",
        desc: "Позволяет телепортироваться к любой союзной постройке.",
        recipeItems: []
    },
    {
        name: "Bottle",
        category: "Consumables",
        cost: 650,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bottle.png",
        desc: "Восстанавливает здоровье и ману за 3 глотка. Можно подбирать руны.",
        recipeItems: []
    },
    {
        name: "Observer Ward",
        category: "Consumables",
        cost: 0,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/observer_ward.png",
        desc: "Устанавливает невидимый глаз, дающий обзор на местности.",
        recipeItems: []
    },
    {
        name: "Sentry Ward",
        category: "Consumables",
        cost: 50,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sentry_ward.png",
        desc: "Дает истинный обзор (True Sight), позволяя видеть невидимых врагов и варды.",
        recipeItems: []
    },

    // --- ОБУВЬ (Boots) ---
    {
        name: "Power Treads",
        category: "Boots",
        cost: 1400,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png",
        desc: "Увеличивает скорость передвижения, атаку и позволяет переключать атрибуты (Сила, Ловкость, Интеллект).",
        recipeItems: [
            { name: "Boots of Speed", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/boots.png" },
            { name: "Gloves of Haste", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/gloves.png" },
            { name: "Band of Elvenskin", img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/elvenskin.png" },
    },
    // --- КОМПОНЕНТЫ И АТРИБУТЫ ---
    {
        name: "Iron Branch",
        category: "Components",
        cost: 50,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/branches.png",
        desc: "Увеличивает все атрибуты на 1. При посадке на землю вырастает дерево, которое можно съесть.",
        recipeItems: []
    },
    {
        name: "Gloves of Haste",
        category: "Components",
        cost: 450,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/gloves.png",
        desc: "Увеличивает скорость атаки на 20.",
        recipeItems: []
    },
    {
        name: "Slippers of Agility",
        category: "Components",
        cost: 145,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/slippers.png",
        desc: "Увеличивает ловкость на 3.",
        recipeItems: []
    },
    {
        name: "Mantle of Intelligence",
        category: "Components",
        cost: 145,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mantle.png",
        desc: "Увеличивает интеллект на 3.",
        recipeItems: []
    },
    {
        name: "Circlet",
        category: "Components",
        cost: 155,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/circlet.png",
        desc: "Увеличивает все атрибуты на 2.",
        recipeItems: []
    },
    {
        name: "Belt of Strength",
        category: "Components",
        cost: 450,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/belt_of_strength.png",
        desc: "Увеличивает силу на 6.",
        recipeItems: []
    },
    {
        name: "Band of Elvenskin",
        category: "Components",
        cost: 450,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/elvenskin.png",
        desc: "Увеличивает ловкость на 6.",
        recipeItems: []
    },
    {
        name: "Robe of the Magi",
        category: "Components",
        cost: 450,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/robe.png",
        desc: "Увеличивает интеллект на 6.",
        recipeItems: []
    },
    {
        name: "Crown",
        category: "Components",
        cost: 450,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/crown.png",
        desc: "Увеличивает все атрибуты на 4.",
        recipeItems: []
    },
    {
        name: "Quelling Blade",
        category: "Components",
        cost: 100,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/quelling_blade.png",
        desc: "Увеличивает урон по крипам и позволяет срубать деревья.",
        recipeItems: []
    },
    {
        name: "Blades of Attack",
        category: "Components",
        cost: 450,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blades_of_attack.png",
        desc: "Увеличивает урон от атак на 9.",
        recipeItems: []
    },
    {
        name: "Staff of Wizardry",
        category: "Components",
        cost: 1000,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/staff_of_wizardry.png",
        desc: "Увеличивает интеллект на 10.",
        recipeItems: []
    },
    {
        name: "Ogre Axe",
        category: "Components",
        cost: 1000,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ogre_axe.png",
        desc: "Увеличивает силу на 10.",
        recipeItems: []
    },
    {
        name: "Blade of Alacrity",
        category: "Components",
        cost: 1000,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blade_of_alacrity.png",
        desc: "Увеличивает ловкость на 10.",
        recipeItems: []
    },
    {
        name: "Diadem",
        category: "Components",
        cost: 1000,
        img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/diadem.png",
        desc: "Увеличивает все атрибуты на 6.",
        recipeItems: []
    }
];
