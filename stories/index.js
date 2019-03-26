import Vue from "vue"
import { storiesOf } from "@storybook/vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import Loading from "vue-spinner/src/PulseLoader.vue"
import SimpleButton from "./SimpleButton.vue"
import Card from "./Card.vue"
import {
  faUser,
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import PropsButton from "./PropsButton.vue"
import SlotButton from "./SlotButton.vue"
import SlotFallbackButton from "./SlotFallbackButton.vue"
import ScopedSlotButton from "./ScopedSlotButton.vue"
library.add(faUser, faArrowLeft, faArrowRight)

storiesOf("Button", module)
  .add("with some text", () => ({
    components: { SimpleButton },
    template: "<simple-button text='My text'/>"
  }))
  .add("with callback", () => ({
    components: { SimpleButton },
    methods: {
      sayHello() {
        alert("Hi!")
      }
    },
    template: '<simple-button v-on:button-clicked="sayHello" text="Click me" />'
  }))

storiesOf("Button with many props", module)
  .add("just some text", () => ({
    components: { PropsButton },
    template: "<props-button text='My text' />"
  }))
  .add("icon on the right", () => ({
    components: { PropsButton },
    template: "<props-button text='My text' iconRightName='arrow-right' />"
  }))
  .add("icon on the left and on the right", () => ({
    components: { PropsButton },
    template:
      "<props-button text='My text' iconRightName='arrow-right' iconLeftName='arrow-left' />"
  }))
  .add("with loading spinner as content", () => ({
    components: { PropsButton },
    template: "<props-button :isLoading='true' />"
  }))

storiesOf("Button with Slot", module)
  .add("just some text", () => ({
    components: { SlotButton },
    template: "<slot-button>My text</slot-button>"
  }))
  .add("icon on the right", () => ({
    components: { SlotButton, FontAwesomeIcon },
    template: `
    <slot-button>
      MyText
      <font-awesome-icon icon="arrow-right" />
    </slot-button>
    `
  }))
  .add("icon on the left and on the right", () => ({
    components: { SlotButton, FontAwesomeIcon },
    template: `
    <slot-button>
      <font-awesome-icon icon="arrow-left" />
      MyText
      <font-awesome-icon icon="arrow-right" />
    </slot-button>
    `
  }))
  .add("with loading spinner as content", () => ({
    components: { SlotButton, FontAwesomeIcon, Loading },
    template: `
    <slot-button>
      <loading color="#fff" size="12px" />
    </slot-button>
    `
  }))

storiesOf("Button with Slot and Fallback", module)
  .add("just default text", () => ({
    components: { SlotFallbackButton },
    template: "<slot-fallback-button />"
  }))
  .add("icon on the right", () => ({
    components: { SlotButton, FontAwesomeIcon },
    template: `
    <slot-button>
      MyText
      <font-awesome-icon icon="arrow-right" />
    </slot-button>
    `
  }))
  .add("custom text from parent", () => ({
    components: { SlotFallbackButton },
    template: `
    <slot-fallback-button>
      my custom text
    </slot-fallback-button>
    `
  }))

storiesOf("Button with Scoped Slot", module)
  .add("just some text", () => ({
    components: { ScopedSlotButton },
    template: "<scoped-slot-button text='my text' />"
  }))
  .add("using the scoped slot", () => ({
    components: { ScopedSlotButton },
    template: `
<scoped-slot-button text='my text'>
  <template v-slot:default="slotProps">
    the text is: {{ slotProps.text }}
  </template>
</scoped-slot-button>`
  }))

storiesOf("Card with named slots", module).add("example", () => ({
  components: { Card },
  template: `
<card>
  <template v-slot:header>
    <h3 style="font-Size:24px;margin:0">My card title</h3>
  </template>

  <p>Some content for the default slot.</p>
  <p>Even more content....</p>

  <template v-slot:footer>
    <p>Maybe some actions?</p>
  </template>
</card>
`
}))
