# Lingui 

Use lingui for i18n in react native 

## Install 

### package.json

```json
{
  "name": "your-app",
  "main": "expo-router/entry",
  "version": "1.0.0",
  "scripts": {
    "lang:compile": "lingui compile --typescript",
    "lang:extract": "lingui extract",
    "lang:build": "npm run lang:extract && npm run lang:compile",
  },
  "dependencies": {
    "@lingui/core": "^5.3.1",
    "@lingui/react": "^5.3.1",
  }
}
```

### lingui.config.js

```js
import { defineConfig } from '@lingui/cli'

export default defineConfig({
  sourceLocale: 'vi',
  locales: ['vi', 'en'],
  catalogs: [
    {
      path: '<rootDir>/locales/{locale}/messages',
      include: ['src', 'modules'],
    },
  ],
  format: 'po',
})
```

## Setup 

### i18n.ts

```ts
import { i18n as i18nCore } from '@lingui/core'
import { messages as enMessages } from '@/locales/en/messages'
import { messages as viMessages } from '@/locales/vi/messages'

export const localeMessages = {
  [SupportedLocale.en]: enMessages,
  [SupportedLocale.vi]: viMessages,
}

// biome-ignore lint/complexity/noForEach: <explanation>
Object.values(SupportedLocale).forEach((locale) => {
  i18nCore.load(locale, localeMessages[locale])
})

export const i18n = i18nCore
```

### `app/_layout.tsx`


```tsx
import { i18n } from '@/i18n'
import { I18nProvider } from '@lingui/react'

export default function RootLayout() {
  const colorScheme = useColorScheme() ?? 'light'

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeColorProvider<ThemeToken, ColorSchemaName>
        colorScheme={colorScheme}
        themeModes={{
          light: lightTheme,
          dark: darkTheme,
        }}
      >
        {/* Wrap i18n provider */}
        <I18nProvider i18n={i18n} defaultComponent={Text}> 
          <SafeAreaProvider>
            <GestureHandlerRootView>
              <BottomSheetProvider>
                <RootSiblingParent>
                  <InternetConnectionBanner />
                  <InitLayout />
                </RootSiblingParent>
              </BottomSheetProvider>
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </I18nProvider>
      </ThemeColorProvider>
    </QueryClientProvider>
  )
}
```

## Usage

### Single text case

```tsx
import { useLingui } from '@lingui/react/macro'

function DiscountCode({ tierDiscount }: { tierDiscount: VffDiscountCode }) {
  const { t } = useLingui()
  
  return (
    <Text style={[a.text_sm, a.text_white, a.font_weight_700]}>
     {t`Mã giảm giá ${tierDiscount}`}
    </Text>
  )
}
```


### React nodes as children
```tsx
import { Trans } from '@lingui/react/macro'

function FooterNotes() {
  return (
    <Trans>
      <Text style={[a.text_xs]}>
        Lưu ý: <Text style={[a.text_xs, a.font_weight_700]}>Mã giảm giá</Text>{' '}
        sẽ được áp dụng tại <Text style={[a.text_xs, a.font_weight_700]}>trang thanh toán của Shop</Text>{' '}
        (khi bạn được chuyển hướng từ ứng dụng). Đừng quên sao chép mã này để không bỏ lỡ ưu đãi đặc biệt dành cho bạn.
      </Text>
    </Trans>
  )
}
```

## Dynamic loading

The idea is to fetch remote translations from API and load them into i18n core

```ts
import { i18n as i18nCore } from '@lingui/core'
import { get, map } from 'lodash'
import { useEffect, useMemo } from 'react'

import { useGetAppSetting } from '@/features/cms/hooks/useGetAppSettings'
import { safeCall } from '@/helpers'
import { cache } from '@/utils/cache'

type SupportedLocale = 'en' | 'vi'
type LangItemId = string // id after build

export type RemoteTranslations = Record<SupportedLocale, Record<LangItemId, string>>

function loadTranslations(translations: RemoteTranslations) {
  map(translations, (messsages, locale) => {
    i18nCore.load(locale, messsages)
  })
}

export function useRemoteTranslations() {
  const { data: setting } = useFetchRemoteLangItems()

  const apiTranslations = useMemo(() => {
    return get(setting, 'display_config.i18n') as unknown as RemoteTranslations | undefined
  }, [setting])

  // init if cached
  useEffect(() => {
    safeCall(() => {
      const cacheTranslations = cache('remote_translations')
      if (cacheTranslations) {
        loadTranslations(cacheTranslations)
      }
    })
  }, [])

  useEffect(() => {
    if (apiTranslations) {
      cache('remote_translations', apiTranslations)
      loadTranslations(apiTranslations)
    }
  }, [apiTranslations])
}

```