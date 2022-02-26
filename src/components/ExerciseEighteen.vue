<template>
  <div class="container">
    <div class="d-flex justify-center">
      <h1>Boletín de notas</h1>
    </div>
    <div>
      <form @submit.prevent>
        <input
          class="me-3"
          type="text"
          placeholder="Nombre"
          id="alumName"
          required
        />

        <input
          type="text"
          class="ms-3 me-3"
          placeholder="Materia"
          id="subjectName"
          required
        />

        <input
          class="mt-3 ms-3 me-3"
          type="text"
          placeholder="Nota entre 0 y 10"
          id="numExerciseEighteen"
          required
        />

        <v-btn
          type="submit"
          v-on:click="examGrade()"
          color="warning"
          class="btn ms-3"
          name="validate_button"
          rounded
        >
          Aceptar
        </v-btn>
      </form>
    </div>
    <div id="result">pipo</div>
  </div>
</template>

<script>
export default {
  name: "ExerciseEighteen",

  data: () => ({}),

  methods: {
    examGrade() {
      let name = document.getElementById("alumName").value;
      let subject = document.getElementById("subjectName").value;
      let number = document.getElementById("numExerciseEighteen").value;
      let num = Math.round(number);

      let printResult = document.getElementById("result");

      if (num < 3) {
        printResult.innerHTML +=
          name +
          ", tu nota en " +
          subject +
          " es: " +
          num +
          " - La calificación es MUY DEFICIENTE. <br>";
        return;
      }
      if (num < 5) {
        printResult.innerHTML +=
          name +
          ", tu nota en " +
          subject +
          " es: " +
          num +
          " - La calificación es INSUFICIENTE. <br>";
        return;
      }
      if (num < 6) {
        printResult.innerHTML +=
          name +
          ", tu nota en " +
          subject +
          " es: " +
          num +
          " - La calificación es SUFICIENTE. <br>";
        return;
      }
      if (num < 7) {
        printResult.innerHTML +=
          name +
          ", tu nota en " +
          subject +
          " es: " +
          num +
          " - La calificación es BIEN. <br>";
        return;
      }
      if (num < 9) {
        printResult.innerHTML +=
          name +
          ", tu nota en " +
          subject +
          " es: " +
          num +
          " - La calificación es NOTABLE. <br>";
        return;
      }
      if (num <= 10) {
        printResult.innerHTML +=
          name +
          ", tu nota en " +
          subject +
          " es: " +
          +num +
          " - La calificación es SOBRESALIENTE. <br>";
        return;
      }
      printResult.innerHTML += "Introduzca una nota entre 0 y 10";
    },
  },
};
</script>

<style>
#result {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}
</style>
