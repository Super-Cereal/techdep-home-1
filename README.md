# techdep-home-1

## Верстка страницы Dashboar на ReactJS

Вам даны макеты ([Figma](https://www.figma.com/design/NUPc1Fsb4U8OO9Y9qnfpE7/Untitled?node-id=2124-109&t=PrzwAd7rQ5DGPJDv-0)) и обьект данных со списком обьектов () типа Test:

```ts
type Status = "DRAFT" | "ONLINE" | "PAUSED" | "STOPPED";

interface Site {
  id: number;
  url: string;
}

interface Task {
  id: number;
  name: string;
  status: Status;
  site: Site;
}
```

### Нужно сделать:

- Клонировать этот репозиторий `git clone https://github.com/Super-Cereal/techdep-home-1`
  - установить зависимости `npm install`
  - запустить приложение `npm run dev` и посмотреть сайт
  - изучить приложение:
    - src/main.tsx
    - src/index.css
    - index.html
    - src/components/app
    - src/components/header
- Разделить визуально страницу с [макета](https://www.figma.com/design/NUPc1Fsb4U8OO9Y9qnfpE7/Untitled?node-id=2124-109&t=PrzwAd7rQ5DGPJDv-0) на компоненты так, чтобы как можно меньше дублировать код и чтобы любые файлики были не больше 50-100 строк (на макетах есть некоторые из компонентов)
  - сверстать все компоненты (пиксель перфект не надо, быстрее будет чисто на глаз)
- Табличка со списком обьектов
  - hover на обьект добавляет тень с помощью css
  - кнопка на обьекте пока ничего не делает

**Что хочется от этого задания:**

Мы научились:
- визуально делить макет на компоненты
- создавать компонеты с помощью `React`, таким образом обособляя и декомпозируя сайт
- использовать компоненты внутри друг друга
- передавать данные от родительского компонента к ребенку с помощью `props`
- составлять страницу из готовых компонентов

Мы узнали:
- как выглядит структура React приложения

В дополнительном задании мы научимся:
- использовать `React.useState()`
- полностью контролировать состояние html тега `<input />`
- фильтровать данные в зависимости от состояния, которое вернул `useState`

#### Дополнительное задание:

Поисковая строчка нужна для фильтрации обьектов, поэтому если туда что-то введено, то должны отображаться только те обьекты, которые содержат в названии (`Task['name']`) введеную строчку

_Подсказка_: компонент поисковой строчки и компонент списка обьектов напрямую не связаны, но у них есть общий родитель (например компонент таблицы). Поэтому стоит создавать состояние (`useState("")`) поисковой строки в таблице и передавать его как пропс в оба дочерних компонента. Эту структуру можно представить вот так:

```tsx
import { useState, ChangeEventHandler } from "react";

const Table = () => {
  const [filterText, setFilterText] = useState("");

  return (
    <div className="table">
      <SearchLine value={filterText} onChange={setFilterText} />
      <CardsList filterText={filterText} />
    </div>
  );
};

interface SearchLineProps {
  value: string;
  onChange: (newValue: string) => void;
}

export const SearchLine = ({ value, onChange }: SearchLineProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value);
  };

  return <input className="input" value={value} onChange={handleChange} />;
};
```
