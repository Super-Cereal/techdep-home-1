# API for the Dashboard

### How to work

Install dependencies
```bash
npm install
```

Run server
```bash
npm start
```

### API

```
GET     /tests                Get a list of tests
GET     /tests/[id]           Get a test by id
```

### Data types

```typescript
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
