<template>
  <div class="container">
    <div>
      <h2>Boletín de notas</h2>
    </div>
    <div>
      <form @submit.prevent="onSubmit()">
        <input type="text" placeholder="Nombre" id="alumName" required />

        <input type="text" placeholder="Materia" id="subjectName" required />

        <input
          type="number"
          placeholder="Escriba nota entre 0 y 10"
          id="numExerciseEighteen"
          required
        />

        <button type="submit" v-on:click="examGrade()">Aceptar</button>
      </form>
    </div>
    <div id="resultExerciseEighteen"></div>
  </div>
</template>

<script>
export default {
  name: "ExerciseEighteen",
  data() {
    return {
      GradesList: [""],
    };
  },

  methods: {
    examGrade() {
      let name = document.getElementById("alumName").value;
      let subject = document.getElementById("subjectName").value;
      let num = parseInt(document.getElementById("numExerciseEighteen").value);

      let printResult = document.getElementById("resultExerciseEighteen");
      // printResult.innerHTML = "<p>";
      // printResult.push(this.GradesList);
      this.GradesList.innerHTML = "<p>";

      if (num) {
        if (num < 3) {
          printResult.innerHTML +=
            name +
            ", tu nota en " +
            subject +
            " es: " +
            num +
            " - La calificación es MUY DEFICIENTE <br>";
          return;
        }
        if (num < 5) {
          printResult.innerHTML +=
            name +
            ", tu nota en " +
            subject +
            " es: " +
            num +
            " - La calificación es INSUFICIENTE <br>";
          return;
        }
        if (num < 6) {
          printResult.innerHTML +=
            name +
            ", tu nota en " +
            subject +
            " es: " +
            num +
            " - La calificación es SUFICIENTE <br>";
          return;
        }
        if (num < 7) {
          printResult.innerHTML +=
            name +
            ", tu nota en " +
            subject +
            " es: " +
            num +
            " - La calificación es BIEN <br>";
          return;
        }
        if (num < 9) {
          printResult.innerHTML +=
            name +
            ", tu nota en " +
            subject +
            " es: " +
            num +
            " - La calificación es NOTABLE <br>";
          return;
        }
        if (num <= 10) {
          printResult.innerHTML +=
            name +
            ", tu nota en " +
            subject +
            " es: " +
            +num +
            " - La calificación es SOBRESALIENTE <br>";
          return;
        }
      }
      printResult.innerHTML += "Introduzca una nota entre 0 y 10";
    },
    addTo() {
      this.GradesList.push();
    },
  },
};
</script>
<style>
#resultExerciseEighteen {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}
</style>
