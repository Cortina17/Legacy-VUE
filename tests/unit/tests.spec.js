import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Notes", () => {
  it("rendering component", () => {
    const wrapper = mount(Home);
    expect(wrapper.exists()).toBe(true);
  });
});
