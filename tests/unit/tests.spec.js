import Vue from "vue";
import Vuetify from "vuetify";

import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import ExerciseEighteen from "@/components/ExerciseEighteen.vue";

Vue.use(Vuetify);
describe("Exercise Eighteen", () => {
  const LocalVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("should render the v-btn component", () => {
    const wrapper = mount(ExerciseEighteen, {
      LocalVue,
      vuetify,
    });
    const button = wrapper.find(".v-btn");
    expect(button.exists()).toBe(true);
  });
});

describe("Component", () => {
  it("rendering component", () => {
    const wrapper = mount(ExerciseEighteen);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.attributes("class")).toBe("container");
    expect(wrapper.text()).toMatch("Boletín de notas");
  });
});

describe("Notes", () => {
  it("should render alumn name input in the component", () => {
    const wrapper = mount(ExerciseEighteen);
    const input = wrapper.get("input");
    expect(input.attributes("id")).toBe("alumName");
  });
  it("should render subject name in the component", () => {
    const wrapper = mount(ExerciseEighteen);
    const input = wrapper.findAll("input").at(1);
    expect(input.attributes("id")).toBe("subjectName");
  });
});

describe("Results", () => {
  it("should render alumn names and grade in page", async () => {
    const wrapper = shallowMount(ExerciseEighteen);
    await wrapper.findAll("div").at(3);
    const result = wrapper.get("#result");
    expect(result.html()).toContain(
      "María, tu nota en Cono es: 5 - La calificación es SUFICIENTE."
    );
  });
});
