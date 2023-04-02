import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://thumbnail0.baidupcs.com/thumbnail/e09e6f684p2e90aa8cdbfbe309d190dc?fid=422677245-250528-976771319875639&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-BpSFqGuBdYkJkovFEKqm6H%2b8lps%3d&expires=8h&chkbd=0&chkv=0&dp-logid=9048175788993167999&dp-callid=0&time=1680436800&size=c1999_u1999&quality=100&vuk=422677245&ft=image',
      name: 'bot',
      description: 'Star on <a href="https://github.com/Chanzhaoyu/chatgpt-bot" class="text-blue-500" target="_blank" >Github</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
