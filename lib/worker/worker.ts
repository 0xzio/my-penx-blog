import { WorkerEvents } from '../constants'
import { pollingBackupToGoogle } from './pollingBackupToGoogle'

self.addEventListener('message', async (event) => {
  if (event.data === WorkerEvents.START_POLLING) {
    console.log('===========start polling......')
    pollingBackupToGoogle()
  }
})