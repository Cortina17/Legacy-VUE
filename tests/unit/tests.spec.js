import { mount, shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import ExerciseEighteen from "@/components/ExerciseEighteen.vue";

describe("Home", () => {
  it("rendering component inside home", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.attributes("class")).toBe("container");
    expect(wrapper.text()).toMatch("Boletín de notas");
  });
});

describe("Notes", () => {
  it("should render inputs in the component", () => {
    const wrapper = mount(ExerciseEighteen);
    const input = wrapper.get("input");
    expect(input.attributes("id")).toBe("alumName");
    // expect(input.attributes("id")).toBe("subjectName");
  });
});

describe("Results", () => {
  it("should render alumn names", async () => {
    const wrapper = mount(ExerciseEighteen);
    await wrapper.find("div").setValue("pipo");
    const result = wrapper.get("result");
    expect(result.html()).toContain("pipo");
  });
});
