import { useInstall } from '@jw-plus/utils'
import Components from './component'
// import Plugins from './plugin'
const install = useInstall([...Components])

export default {
  install,
  version: "1.0.2"
}
