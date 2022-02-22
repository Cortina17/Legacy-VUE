import { shallowMount } from "@vue/test-utils";
import ExerciseSeventeen from "@/components/ExerciseSeventeen.vue";

describe("ExerciseSeventeen.vue", () => {
  it("¿Carga la vista del componente ExerciseSeventeen", () => {
    const msg = "17.- ¿Mayor de edad?  Aceptar";
    const wrapper = shallowMount(ExerciseSeventeen, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);

    /* let result = isAdult(18);
    expect(isAdult(18)).toMatch(msg); */
  });
});
