import { createApp } from 'vue'
import App from './App.vue'

import './style/compiled.css'

//Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCaretDown, faCaretUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretDown, faCaretUp, faMagnifyingGlass)

//components
import RoundedButton from './components/UI/RoundedButton.vue'
import RectangularButton from './components/UI/RectangularButton.vue'
import LabelInput from './components/UI/LabelInput.vue'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('rounded-button', RoundedButton)
app.component('rectangular-button', RectangularButton)
app.component('label-input', LabelInput)
app.mount('#app')
