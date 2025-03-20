# techdep-home-1 

## Верстка страницы Dashboar на ReactJS

Вам даны макеты ([Figma](https://www.figma.com/design/NUPc1Fsb4U8OO9Y9qnfpE7/Untitled?node-id=2124-109&t=PrzwAd7rQ5DGPJDv-0)) и json файлик из репозитория со списком обьектов типа Test:

```ts
type Status = 'DRAFT' | 'ONLINE' | 'PAUSED' | 'STOPPED'

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
- создать новое реакт приложение с помощью `npm create vite`
- разделить страницу на компоненты, чтобы как можно меньше дублировать код и чтобы любые файлики были не более 80-100 строк (на макетах есть некоторые из компоненты)
  - сверстать все компоненты
  - отобразить страницу
- табличка со списком обьектов
  - hover на обьект добавляет тень с помощью css
  - кнопка на обьекте пока ничего не делает

#### Дополнительно:
Поисковая строчка нужна для фильтрации обьектов, поэтому если туда что-то введено, то должны отображаться только те обьекты, которые содержат в названии (`Task['name']`) введеную строчку

_Подсказка_: компонент поисковой строчки и компонент списка обьектов напрямую не связаны, но у них есть общий родитель (например компонент таблицы). Поэтому стоит создавать состояние (`useState("")`) поисковой строки в таблице и передавать его как пропс в оба дочерних компонента. Эту структуру можно представить вот так:
```tsx
import { useState, ChangeEventHandler } from 'react';

const Table = () => {
    const [filterText, setFilterText] = useState('');

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
