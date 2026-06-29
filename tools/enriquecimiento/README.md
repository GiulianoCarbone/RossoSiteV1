# Enriquecimiento de descripciones (herramienta interna)

Genera **borradores** de descripciones de producto con IA para el catálogo de
Rosso. Pensado para correrlo desde tu compu (no es parte del sitio publicado).

> **Seguridad:** este repo es **público**. La carpeta `out/`, el archivo `.env`
> y cualquier `service-account*.json` están en `.gitignore` y **no se suben**.
> Nunca pongas tu clave de IA dentro del código.

## Qué hace (Fase 1)

1. Lee la colección `catalogo` de Firestore (lectura pública, igual que el sitio).
2. Detecta los productos **sin descripción real** (vacíos + los que tienen datos
   de empaque "1 caja rinde X m²" en lugar de descripción).
3. Genera un borrador con IA para cada uno.
4. Guarda todo en `out/` para que lo revises. **No escribe nada en Firestore.**

## Requisitos

- **Node.js 18 o superior** (`node --version`).
- Una **clave de API** de un proveedor de IA. Por defecto **DeepSeek**
  (barato y compatible con OpenAI) — sacala en https://platform.deepseek.com/api_keys.
  También soporta `gemini`, `openai` y `anthropic` (cambiá `LLM_PROVIDER` en `.env`).

## Pasos

```bash
cd tools/enriquecimiento

# 1. Configurar tu clave
cp .env.example .env        # en Windows PowerShell: copy .env.example .env
#   editá .env y poné LLM_PROVIDER y LLM_API_KEY

# 2. Prueba barata (8 productos) para ver el tono
npm run generar
#   → revisá out/borradores.md

# 3. Si te gusta, generá todos
npm run generar:todos
#   o: node generar-descripciones.mjs --limit 30
```

## Salidas (carpeta `out/`)

| Archivo | Para qué |
|---|---|
| `borradores.md` | Lectura humana — revisá el tono y la precisión |
| `borradores.json` | Datos estructurados — se usan en la Fase 2 (escribir a Firestore) |
| `duplicados-a-revisar.json` | Descripciones repetidas entre productos (posibles copy-paste mal hechos) |

## Costo

Modelo barato (DeepSeek-chat / Gemini Flash / GPT-4o-mini / Claude Haiku) ×
~304 productos = **centavos de dólar** (DeepSeek es de los más baratos).
La prueba de 8 productos es prácticamente gratis.

## Fase 2 (después de tu OK)

Cuando apruebes los borradores, el siguiente paso escribe cada texto a Firestore
en un campo **`descripcionBorrador`** (sin tocar la `descripcion` que ve el
cliente) para que lo apruebes uno por uno desde `admin/panel-catalogo.html`.
Esa fase sí necesita credenciales de admin (service account) y se documenta aparte.
