export async function getCards() {
  return [
    {
      id: 1,
      number: "001",
      name: "Fire Mage",
      type: "Unit",
      cost: 2,
      pool: "public",
    },
    {
      id: 2,
      number: "002",
      name: "Ice Mage",
      type: "Unit",
      cost: 3,
      pool: "beta",
    },
    {
      id: 3,
      number: "003",
      name: "Lightning Bolt",
      type: "Spell",
      cost: 1,
      pool: "draft",
    },
  ];
}