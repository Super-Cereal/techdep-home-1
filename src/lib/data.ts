type Status = "DRAFT" | "ONLINE" | "PAUSED" | "STOPPED";

interface Site {
  id: number;
  url: string;
}

export interface Task {
  id: number;
  name: string;
  status: Status;
  site: Site;
}

/** Список обьектов */
export const getList = (): Task[] => [
  {
    id: 1,
    name: "Prototype of the new map",
    status: "PAUSED",
    site: {
      id: 2,
      url: "Prototype.yandex.ru",
    },
  },
  {
    id: 2,
    name: "Dark theme test",
    status: "DRAFT",
    site: {
      id: 3,
      url: "Dark.yandex.ru",
    },
  },
  {
    id: 3,
    name: "New Year's Sale",
    status: "STOPPED",
    site: {
      id: 1,
      url: "New.yandex.ru",
    },
  },
  {
    id: 4,
    name: "Order basket redesing",
    status: "ONLINE",
    site: {
      id: 1,
      url: "Order.yandex.ru",
    },
  },
  {
    id: 5,
    name: "Spring promotion",
    status: "DRAFT",
    site: {
      id: 2,
      url: "Spring.yandex.ru",
    },
  },
  {
    id: 6,
    name: "Prototype of a new header",
    status: "ONLINE",
    site: {
      id: 3,
      url: "Prototype.yandex.ru",
    },
  },
  {
    id: 7,
    name: "New Year's Sale Copy 1",
    status: "DRAFT",
    site: {
      id: 1,
      url: "New.yandex.ru",
    },
  },
];
