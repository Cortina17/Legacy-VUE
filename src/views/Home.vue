<template>
  <v-main>
    <exercise-seventeen />
    <exercise-eighteen />
  </v-main>
</template>

<script>
import ExerciseSeventeen from "../components/ExerciseSeventeen";
import ExerciseEighteen from "../components/ExerciseEighteen";

export default {
  name: "Home",

  components: {
    ExerciseSeventeen,
    ExerciseEighteen,
  },
};
</script>
