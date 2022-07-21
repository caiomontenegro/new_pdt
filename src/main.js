import { createApp } from 'vue'

import './style/compiled.css'
import App from './App.vue'

//components
import RoundedButton from './components/UI/RoundedButton.vue'

const app = createApp(App)

app.component('rounded-button', RoundedButton)

app.mount('#app')
