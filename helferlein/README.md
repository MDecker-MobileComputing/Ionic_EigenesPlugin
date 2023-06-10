# helferlein

Beispiel für eigenes Ionic-Plugin

## Install

```bash
npm install helferlein
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`holeUptime()`](#holeuptime)
* [`loggeNachricht(...)`](#loggenachricht)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### holeUptime()

```typescript
holeUptime() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### loggeNachricht(...)

```typescript
loggeNachricht(options: { loglevel: string; nachricht: string; }) => void
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code>{ loglevel: string; nachricht: string; }</code> |

--------------------

</docgen-api>
