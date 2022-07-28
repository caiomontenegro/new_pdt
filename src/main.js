import { createApp } from 'vue'

import './style/compiled.css'
import App from './App.vue'

//components
import RoundedButton from './components/UI/RoundedButton.vue'
import RectangularButton from './components/UI/RectangularButton.vue'

const app = createApp(App)

app.component('rounded-button', RoundedButton)
app.component('rectangular-button', RectangularButton)

app.mount('#app')
