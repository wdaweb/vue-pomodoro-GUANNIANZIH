import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    alarms: [
      { id: 1, name: 'music01', file: new URL('/src/assets/music (1).mp3', import.meta.url).href },
      { id: 2, name: 'music02', file: new URL('/src/assets/music (2).mp3', import.meta.url).href },
      { id: 3, name: 'music03', file: new URL('/src/assets/music (3).mp3', import.meta.url).href },
      { id: 4, name: 'music04', file: new URL('/src/assets/music (4).mp3', import.meta.url).href },
      { id: 5, name: 'music05', file: new URL('/src/assets/music (5).mp3', import.meta.url).href },
      { id: 6, name: 'music06', file: new URL('/src/assets/music (6).mp3', import.meta.url).href },
      { id: 7, name: 'music07', file: new URL('/src/assets/music (7).mp3', import.meta.url).href },
      { id: 8, name: 'music08', file: new URL('/src/assets/music (8).mp3', import.meta.url).href },
      { id: 9, name: 'music09', file: new URL('/src/assets/music (9).mp3', import.meta.url).href },
      { id: 10, name: 'music10', file: new URL('/src/assets/music (10).mp3', import.meta.url).href },
      { id: 11, name: 'music11', file: new URL('/src/assets/music (11).mp3', import.meta.url).href },
      { id: 12, name: 'music12', file: new URL('/src/assets/music (12).mp3', import.meta.url).href },
      { id: 13, name: 'music13', file: new URL('/src/assets/music (13).mp3', import.meta.url).href },
      { id: 14, name: 'music14', file: new URL('/src/assets/music (14).mp3', import.meta.url).href }
    ],
    selectedAlarm: 1
  }),
  getters: {
    selectedAlarmFile () {
      const i = this.alarms.findIndex(alarm => alarm.id === this.selectedAlarm)
      return this.alarms[i].file
    }
  },
  persist: {
    key: 'pomodoro-settings',
    paths: ['selectedAlarm']
  }
})
