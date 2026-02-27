import { defineConfig } from 'vitepress'

function pluginSectionRu(name: string, slug: string) {
  return {
    text: name,
    collapsed: true,
    items: [
      { text: 'Обзор', link: `/plugins/${slug}/` },
      { text: 'Установка', link: `/plugins/${slug}/setup` },
      { text: 'Настройки', link: `/plugins/${slug}/configuration` },
      { text: 'Команды', link: `/plugins/${slug}/commands` },
      { text: 'FAQ', link: `/plugins/${slug}/faq` },
    ],
  }
}

function pluginSectionEn(name: string, slug: string) {
  return {
    text: name,
    collapsed: true,
    items: [
      { text: 'Overview', link: `/en/plugins/${slug}/` },
      { text: 'Setup', link: `/en/plugins/${slug}/setup` },
      { text: 'Configuration', link: `/en/plugins/${slug}/configuration` },
      { text: 'Commands', link: `/en/plugins/${slug}/commands` },
      { text: 'FAQ', link: `/en/plugins/${slug}/faq` },
    ],
  }
}

const ruSidebar = {
  '/plugins/': [
    {
      text: 'Каталог плагинов',
      link: '/plugins/',
    },

    // ── Инфраструктура ──────────────────────────────
    {
      text: 'Инфраструктура',
      collapsed: false,
      items: [
        pluginSectionRu('Notify', 'notify'),
        pluginSectionRu('Server Panel', 'server-panel'),
        pluginSectionRu('Panel System', 'panel-system'),
      ],
    },

    // ── Экономика и торговля ─────────────────────────
    {
      text: 'Экономика и торговля',
      collapsed: false,
      items: [
        pluginSectionRu('Bank System', 'bank-system'),
        pluginSectionRu('Shop', 'shop'),
        pluginSectionRu('Ultimate Trade', 'ultimate-trade'),
        pluginSectionRu('Coin Flipping', 'coin-flipping'),
      ],
    },

    // ── Прогрессия игроков ───────────────────────────
    {
      text: 'Прогрессия игроков',
      collapsed: false,
      items: [
        pluginSectionRu('Battlepass', 'battlepass'),
        pluginSectionRu('Skills', 'skills'),
        pluginSectionRu('Statistics', 'statistics'),
        pluginSectionRu('Ultimate Leaderboard', 'ultimate-leaderboard'),
        pluginSectionRu('Daily Rewards', 'daily-rewards'),
      ],
    },

    // ── Наборы и награды ─────────────────────────────
    {
      text: 'Наборы и награды',
      collapsed: false,
      items: [
        pluginSectionRu('Kits', 'kits'),
        pluginSectionRu('Cases', 'cases'),
        pluginSectionRu('Ultimate Cases', 'ultimate-cases'),
        pluginSectionRu('Referrals', 'referrals'),
        pluginSectionRu('Genie', 'genie'),
      ],
    },

    // ── Социальные системы ──────────────────────────
    {
      text: 'Социальные системы',
      collapsed: false,
      items: [
        pluginSectionRu('Clans', 'clans'),
        pluginSectionRu('Player List', 'player-list'),
        pluginSectionRu('Linking System', 'linking-system'),
        pluginSectionRu('Servers', 'servers'),
      ],
    },

    // ── Ивенты и активности ─────────────────────────
    {
      text: 'Ивенты и активности',
      collapsed: false,
      items: [
        pluginSectionRu('Events Manager', 'events-manager'),
        pluginSectionRu('Multi Events', 'multi-events'),
        pluginSectionRu('Capture Zone', 'capture-zone'),
        pluginSectionRu('Operation Fortress', 'operation-fortress'),
        pluginSectionRu('Skip Night', 'skip-night'),
      ],
    },

    // ── Режимы Multi Events ─────────────────────────
    {
      text: 'Режимы Multi Events',
      collapsed: true,
      items: [
        {
          text: 'Базовые режимы',
          collapsed: true,
          items: [
            pluginSectionRu('King of the Hill', 'multi-events-king-of-hill'),
            pluginSectionRu('Looking Loot', 'multi-events-looking-loot'),
            pluginSectionRu('Collection Resources', 'multi-events-collection-resources'),
            pluginSectionRu('Foundation Drop', 'multi-events-foundation-drop'),
            pluginSectionRu('Special Cargo', 'multi-events-special-cargo'),
            pluginSectionRu('Hunt Animal', 'multi-events-hunt-animal'),
            pluginSectionRu('Helicopter Pet', 'multi-events-helicopter-pet'),
          ],
        },
        {
          text: 'Набор расширений 1',
          collapsed: true,
          items: [
            pluginSectionRu('Barrel Event', 'multi-events-barrel-event'),
            pluginSectionRu('NPC Missile Silo', 'multi-events-npc-missile-silo'),
            pluginSectionRu('Player Battle', 'multi-events-player-battle'),
            pluginSectionRu('Vehicle Hunter', 'multi-events-vehicle-hunter'),
            pluginSectionRu('Pumpkin Picker', 'multi-events-pumpkin-picker'),
          ],
        },
        {
          text: 'Набор расширений 2',
          collapsed: true,
          items: [
            pluginSectionRu('Bot Purge', 'multi-events-bot-purge'),
            pluginSectionRu('NPC Excavator', 'multi-events-npc-excavator'),
            pluginSectionRu('Hemp Gather', 'multi-events-hemp-gather'),
            pluginSectionRu('Bow Master', 'multi-events-bow-master'),
            pluginSectionRu('Scavenger Hunt', 'multi-events-scavenger-hunt'),
          ],
        },
        {
          text: 'Набор расширений 3',
          collapsed: true,
          items: [
            pluginSectionRu('Corn Collector', 'multi-events-corn-collector'),
            pluginSectionRu('Mushroom Madness', 'multi-events-mushroom-madness'),
            pluginSectionRu('Gold Rush', 'multi-events-gold-rush'),
            pluginSectionRu('NPC Underwater Lab', 'multi-events-npc-underwater-lab'),
            pluginSectionRu('Patrol Helicopter Hit', 'multi-events-patrol-helicopter-hit'),
          ],
        },
      ],
    },

    // ── Транспорт и строительство ───────────────────
    {
      text: 'Транспорт и строительство',
      collapsed: false,
      items: [
        pluginSectionRu('Car Sharing', 'car-sharing'),
        pluginSectionRu('Vehicle Buy', 'vehicle-buy'),
        pluginSectionRu('Ultimate Cars', 'ultimate-cars'),
        pluginSectionRu('Crafts', 'crafts'),
        pluginSectionRu('Object Stacks', 'object-stacks'),
      ],
    },

    // ── Предметы и инвентарь ────────────────────────
    {
      text: 'Предметы и инвентарь',
      collapsed: false,
      items: [
        pluginSectionRu('Stacks', 'stacks'),
        pluginSectionRu('Auto Recycler', 'auto-recycler'),
        pluginSectionRu('Virtual Recycler', 'virtual-recycler'),
        pluginSectionRu('F1 Item Menu', 'f1-item-menu'),
        pluginSectionRu('Necronomicon', 'necronomicon'),
      ],
    },

    // ── Управление сервером ─────────────────────────
    {
      text: 'Управление сервером',
      collapsed: false,
      items: [
        pluginSectionRu('Wipe Block', 'wipe-block'),
        pluginSectionRu('Wipe Schedule', 'wipe-schedule'),
        pluginSectionRu('Helpful Supply', 'helpful-supply'),
        pluginSectionRu('Hit Markers', 'hit-markers'),
        pluginSectionRu('Quarry Levels', 'quarry-levels'),
        pluginSectionRu('Portal System', 'portal-system'),
      ],
    },
  ],
}

const enSidebar = {
  '/en/plugins/': [
    {
      text: 'Plugin Catalog',
      link: '/en/plugins/',
    },

    // ── Infrastructure ──────────────────────────────
    {
      text: 'Infrastructure',
      collapsed: false,
      items: [
        pluginSectionEn('Notify', 'notify'),
        pluginSectionEn('Server Panel', 'server-panel'),
        pluginSectionEn('Panel System', 'panel-system'),
      ],
    },

    // ── Economy & Trading ─────────────────────────
    {
      text: 'Economy & Trading',
      collapsed: false,
      items: [
        pluginSectionEn('Bank System', 'bank-system'),
        pluginSectionEn('Shop', 'shop'),
        pluginSectionEn('Ultimate Trade', 'ultimate-trade'),
        pluginSectionEn('Coin Flipping', 'coin-flipping'),
      ],
    },

    // ── Player Progression ───────────────────────────
    {
      text: 'Player Progression',
      collapsed: false,
      items: [
        pluginSectionEn('Battlepass', 'battlepass'),
        pluginSectionEn('Skills', 'skills'),
        pluginSectionEn('Statistics', 'statistics'),
        pluginSectionEn('Ultimate Leaderboard', 'ultimate-leaderboard'),
        pluginSectionEn('Daily Rewards', 'daily-rewards'),
      ],
    },

    // ── Kits & Rewards ─────────────────────────────
    {
      text: 'Kits & Rewards',
      collapsed: false,
      items: [
        pluginSectionEn('Kits', 'kits'),
        pluginSectionEn('Cases', 'cases'),
        pluginSectionEn('Ultimate Cases', 'ultimate-cases'),
        pluginSectionEn('Referrals', 'referrals'),
        pluginSectionEn('Genie', 'genie'),
      ],
    },

    // ── Social ──────────────────────────────────────
    {
      text: 'Social',
      collapsed: false,
      items: [
        pluginSectionEn('Clans', 'clans'),
        pluginSectionEn('Player List', 'player-list'),
        pluginSectionEn('Linking System', 'linking-system'),
        pluginSectionEn('Servers', 'servers'),
      ],
    },

    // ── Events ──────────────────────────────────────
    {
      text: 'Events',
      collapsed: false,
      items: [
        pluginSectionEn('Events Manager', 'events-manager'),
        pluginSectionEn('Multi Events', 'multi-events'),
        pluginSectionEn('Capture Zone', 'capture-zone'),
        pluginSectionEn('Operation Fortress', 'operation-fortress'),
        pluginSectionEn('Skip Night', 'skip-night'),
      ],
    },

    // ── Multi Events Modes ──────────────────────────
    {
      text: 'Multi Events Modes',
      collapsed: true,
      items: [
        {
          text: 'Built-in Modes',
          collapsed: true,
          items: [
            pluginSectionEn('King of the Hill', 'multi-events-king-of-hill'),
            pluginSectionEn('Looking Loot', 'multi-events-looking-loot'),
            pluginSectionEn('Collection Resources', 'multi-events-collection-resources'),
            pluginSectionEn('Foundation Drop', 'multi-events-foundation-drop'),
            pluginSectionEn('Special Cargo', 'multi-events-special-cargo'),
            pluginSectionEn('Hunt Animal', 'multi-events-hunt-animal'),
            pluginSectionEn('Helicopter Pet', 'multi-events-helicopter-pet'),
          ],
        },
        {
          text: 'Expansion Pack 1',
          collapsed: true,
          items: [
            pluginSectionEn('Barrel Event', 'multi-events-barrel-event'),
            pluginSectionEn('NPC Missile Silo', 'multi-events-npc-missile-silo'),
            pluginSectionEn('Player Battle', 'multi-events-player-battle'),
            pluginSectionEn('Vehicle Hunter', 'multi-events-vehicle-hunter'),
            pluginSectionEn('Pumpkin Picker', 'multi-events-pumpkin-picker'),
          ],
        },
        {
          text: 'Expansion Pack 2',
          collapsed: true,
          items: [
            pluginSectionEn('Bot Purge', 'multi-events-bot-purge'),
            pluginSectionEn('NPC Excavator', 'multi-events-npc-excavator'),
            pluginSectionEn('Hemp Gather', 'multi-events-hemp-gather'),
            pluginSectionEn('Bow Master', 'multi-events-bow-master'),
            pluginSectionEn('Scavenger Hunt', 'multi-events-scavenger-hunt'),
          ],
        },
        {
          text: 'Expansion Pack 3',
          collapsed: true,
          items: [
            pluginSectionEn('Corn Collector', 'multi-events-corn-collector'),
            pluginSectionEn('Mushroom Madness', 'multi-events-mushroom-madness'),
            pluginSectionEn('Gold Rush', 'multi-events-gold-rush'),
            pluginSectionEn('NPC Underwater Lab', 'multi-events-npc-underwater-lab'),
            pluginSectionEn('Patrol Helicopter Hit', 'multi-events-patrol-helicopter-hit'),
          ],
        },
      ],
    },

    // ── Vehicles & Building ─────────────────────────
    {
      text: 'Vehicles & Building',
      collapsed: false,
      items: [
        pluginSectionEn('Car Sharing', 'car-sharing'),
        pluginSectionEn('Vehicle Buy', 'vehicle-buy'),
        pluginSectionEn('Ultimate Cars', 'ultimate-cars'),
        pluginSectionEn('Crafts', 'crafts'),
        pluginSectionEn('Object Stacks', 'object-stacks'),
      ],
    },

    // ── Items & Inventory ───────────────────────────
    {
      text: 'Items & Inventory',
      collapsed: false,
      items: [
        pluginSectionEn('Stacks', 'stacks'),
        pluginSectionEn('Auto Recycler', 'auto-recycler'),
        pluginSectionEn('Virtual Recycler', 'virtual-recycler'),
        pluginSectionEn('F1 Item Menu', 'f1-item-menu'),
        pluginSectionEn('Necronomicon', 'necronomicon'),
      ],
    },

    // ── Server Management ───────────────────────────
    {
      text: 'Server Management',
      collapsed: false,
      items: [
        pluginSectionEn('Wipe Block', 'wipe-block'),
        pluginSectionEn('Wipe Schedule', 'wipe-schedule'),
        pluginSectionEn('Helpful Supply', 'helpful-supply'),
        pluginSectionEn('Hit Markers', 'hit-markers'),
        pluginSectionEn('Quarry Levels', 'quarry-levels'),
        pluginSectionEn('Portal System', 'portal-system'),
      ],
    },
  ],
}

export default defineConfig({
  title: 'Mevent Plugins',
  description: 'Plugin documentation for Mevent Team — Rust server plugins (Oxide / Carbon)',

  locales: {
    root: {
      label: 'Русский',
      lang: 'ru-RU',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/' },
          { text: 'Каталог плагинов', link: '/plugins/' },
        ],
        sidebar: ruSidebar,
        outline: {
          label: 'На этой странице',
          level: [2, 3],
        },
        docFooter: {
          prev: 'Предыдущая',
          next: 'Следующая',
        },
        lastUpdated: {
          text: 'Обновлено',
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Plugin Catalog', link: '/en/plugins/' },
        ],
        sidebar: enSidebar,
        outline: {
          label: 'On this page',
          level: [2, 3],
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next',
        },
        lastUpdated: {
          text: 'Last updated',
        },
      },
    },
  },

  themeConfig: {
    logo: undefined,
    siteTitle: 'Mevent Plugins',

    search: {
      provider: 'local',
    },

    socialLinks: [
      {
        icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>' },
        link: 'https://codefling.com/mevent',
        ariaLabel: 'Codefling',
      },
      {
        icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>' },
        link: 'https://plugify.ru/members/mevent.3/',
        ariaLabel: 'Plugify',
      },
    ],
  },
})
