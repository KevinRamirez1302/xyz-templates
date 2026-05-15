# XYZ Templates

Monorepo de templates web construido con **pnpm workspaces**.

## Estructura

```
.
├── apps/
│   └── dashboard/               # Vite + React + TypeScript
├── packages/
│   └── ui-components/           # Componentes compartidos (WIP)
├── docs/
├── pnpm-workspace.yaml
└── package.json
```

## Uso

### Instalar dependencias
```bash
pnpm install
```

### Desarrollo
```bash
pnpm dev
```

### Build
```bash
pnpm build
```

## Agregar un nuevo template

1. Crea una carpeta en `apps/`:
```bash
mkdir apps/mi-nuevo-template
cd apps/mi-nuevo-template
```

2. Inicializa el proyecto:
```bash
pnpm init
```

3. Instala las dependencias que necesites:
```bash
pnpm add <dependencias>
pnpm add -D <dev-dependencias>
```

4. Agrega scripts en el root `package.json`:
```json
{
  "scripts": {
    "dev:mi-template": "pnpm --filter mi-nuevo-template dev",
    "build:mi-template": "pnpm --filter mi-nuevo-template build"
  }
}
```
