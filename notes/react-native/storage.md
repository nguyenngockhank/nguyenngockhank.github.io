# Storage

## Overview
| Storage Option        | Type            | Performance | Security  | Best For | Offline Sync | Complexity |
|------------------------|----------------|-------------|-----------|----------|--------------|------------|
| **AsyncStorage**      | Key-Value       | ⚡ Low       | ❌ No     | Small data, flags, prefs | ❌ No | Easy |
| **MMKV**              | Key-Value       | ⚡⚡⚡ Very High | ✅ Optional | Fast key-value storage | ❌ No | Easy |
| **SecureStore / Keychain** | Key-Value (Secure) | ⚡ Medium  | ✅ Encrypted | Tokens, passwords | ❌ No | Easy |
| **SQLite**            | Relational DB   | ⚡⚡ Medium   | ❌ Not by default | Structured data, queries | ❌ No | Medium |
| **Realm**             | Object DB       | ⚡⚡ High     | ✅ Encrypted option | Complex data models, offline apps | ✅ Yes | Medium |
| **WatermelonDB**      | ORM on SQLite   | ⚡⚡ High     | ❌ Not built-in | Large offline-first apps | ✅ Yes | Hard |

**👉 Quick Recommendations:**
- Store **user prefs, tokens** → AsyncStorage or SecureStore.
- Need **fast storage with encryption** → MMKV.
- Need **relational data (tables, queries)** → SQLite.
- Need **complex offline-first app with sync** → Realm or WatermelonDB.

**Recommended for Access Tokens**

Storage Option	| Security	| Notes
------------------------|----------------|-------------
SecureStore (Expo)	|✅ Encrypted	| Uses iOS Keychain & Android Keystore. Easiest if you’re in Expo ecosystem.
react-native-keychain	 | ✅ Encrypted	 | Community package, works in bare RN. Stores tokens in Keychain/Keystore.
MMKV (Encrypted mode)	|⚠️ Medium |	MMKV supports encryption, but it’s still app-managed. Safer than plain AsyncStorage, but weaker than OS-managed keystore.
AsyncStorage	| ❌ Insecure| 	Data is stored in plaintext on device, not safe for tokens.

## MMKV + React Query for Offline data

`gamesCacheManager.ts`
```ts
import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()

export const gamesCacheManager = {
  getCachedItem: (locale: string) => {
    const value = storage.getString(`games_${locale}`)
    return value ? JSON.parse(value) : null
  },

  storeItem: (locale: string, games: any[]) => {
    storage.set(`games_${locale}`, JSON.stringify(games))
  },

  clearItem: (locale: string) => {
    storage.delete(`games_${locale}`)
  }
}
```

`useAllGameQuery.ts`

```ts
export function useAllGameQuery() {
  const { i18n } = useLingui()

  return useSuspenseQuery({
    queryKey: ['games', i18n.locale],
    initialData: () => {
      // Load from MMKV first
      return gamesCacheManager.getCachedItem(i18n.locale) || undefined
    },
    queryFn: async () => {
      const games = await getGames()
    gamesCacheManager.storeItem(i18n.locale, games)
      return games
    },
  })
}
```

**Benefits of This Setup**
- **Cold start** = instant data → MMKV gives you the previous snapshot.
- **React Query still does refetching** → so the cache stays fresh.
- **Minimal complexity** → just JSON stringify/parse around MMKV.
- **Locale-aware** → since you’re keying by i18n.locale.