import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Notes", () => {
  it("rendering component", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.exists()).toBe(true);
  });
});
