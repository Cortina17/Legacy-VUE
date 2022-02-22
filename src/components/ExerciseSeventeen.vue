<template>
  <div>
    <h2>17.- ¿Mayor de edad?</h2>
    <input
      type="number"
      placeholder="Escriba la edad"
      id="numExerciseSeventeen"
      required
    />
    <button v-on:click="isAdult()">Aceptar</button>
    <div id="resultExerciseSeventeen"></div>
  </div>
</template>

<script>
export default {
  name: "ExerciseSeventeen",
  data: () => ({}),

  methods: {
    isAdult() {
      let num = parseInt(document.getElementById("numExerciseSeventeen").value);

      let printResult = document.getElementById("resultExerciseSeventeen");
      printResult.innerHTML = "<p>";

      if (num) {
        if (num >= 18) {
          printResult.innerHTML +=
            "Tiene " + num + " años, por lo que SI es mayor de edad";
          return;
        }

        printResult.innerHTML +=
          "Tiene " + num + " años, por lo que NO es mayor de edad";
        return;
      }

      printResult.innerHTML += "Es necesario introducir la edad";
    },
  },
};
</script>
