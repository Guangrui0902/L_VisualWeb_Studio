/** Verified Unsplash (HTTP 200) — vertical-appropriate editorial frames */
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=88`;

export const demoImages = {
  cleaning: u("1584622650111-993a426fbf0a"),
  beauty: u("1604654894610-df63bc536371"),
  dessert: u("1578985545062-69928b1d9587"),
  photographer: u("1519741497674-611481863552"),
} as const;
