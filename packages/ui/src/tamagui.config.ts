import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'

const tamaguiConfig = createTamagui(defaultConfig)

export default tamaguiConfig

export type AppConfig = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}
