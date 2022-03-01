import { mount } from "@vue/test-utils";
import ExerciseEighteen from "@/components/ExerciseEighteen.vue";

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
  it("should render alumn names", async () => {
    const wrapper = mount(ExerciseEighteen);
    await wrapper.find("result").setValue("pipo");
    const result = wrapper.get("result");
    expect(result.html()).toContain("pipo");
  });
});
