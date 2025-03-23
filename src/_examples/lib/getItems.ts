export interface Item {
  id: number;
  name: string;
}

const items: Item[] = [
  { id: 1, name: "Dan" },
  { id: 2, name: "Art" },
  { id: 3, name: "Man" },
];

/** Через 3 секунды вернет список айтемов */
export const getItems = (): Promise<Item[]> =>
  new Promise((res) => {
    setTimeout(() => {
      res(items);
    }, 3000);
  });

export interface ItemWithDescription extends Item {
  description: string;
}

const descriptions = [
  "long long long description",
  "short description",
  "medium medium description",
];
const itemsWithDescription: ItemWithDescription[] = items.map((item, idx) => ({
  ...item,
  description: descriptions[idx],
}));

/** Через 1.5 секунды вернет айтем с описанием */
export const getItemWithDescription = (
  id: Item["id"]
): Promise<ItemWithDescription> =>
  new Promise((res) => {
    setTimeout(() => {
      res(itemsWithDescription.find((item) => item.id === id)!);
    }, 1500);
  });
