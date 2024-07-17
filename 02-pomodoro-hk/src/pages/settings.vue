<template>
  <v-container>
  <v-row justify="center">
    <v-col cols="12">
      <h1 class="text-center">Setting Music</h1>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col cols="12">
      <v-data-table>
        <thead style="background-color: lightgrey; color: white;">
          <tr>
            <td>Name</td>
            <td>Demo</td>
            <td>Selection</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="alarm in alarms" :key="alarm.id">
            <td>{{ alarm.name }}</td>
            <td>
              <audio :src="alarm.file" controls></audio>
            </td>
            <td>
              <v-radio-group v-model="selectedAlarm">
                <v-radio :value="alarm.id"></v-radio>
              </v-radio-group>
            </td>
          </tr>
        </tbody>
      </v-data-table>
    </v-col>
  </v-row>
</v-container>
</template>

<script setup>
import { definePage } from 'vue-router/auto'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

definePage({
  meta: {
    title: 'Pomodoro | Setting'
  }
})

const settings = useSettingsStore()
const { alarms, selectedAlarm } = storeToRefs(settings)
</script>

<style scoped lang="scss">
// v-input__details 沒有深層監聽抓不到
:deep(.v-input__details) {
  display: none;
}

// 找出深層元件並關閉
:deep(.v-selection-control) {
    display: block;
}

thead tr {
    text-align: center;
}

tbody td{
    text-align: center;
}

</style>
