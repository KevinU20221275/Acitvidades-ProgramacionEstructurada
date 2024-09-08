// Kevin Antonio Montano Aquino U20221275

/*
Ejercicio 1: "Cálculo de presupuesto familiar"
Crea un programa que ayude a calcular el presupuesto mensual de una familia. El programa debe
solicitar una lista de los gastos mensuales en categorías como vivienda, alimentos, transporte, y
entretenimiento. Dependiendo del total de gastos y del ingreso mensual de la familia, el programa
debe calcular si el presupuesto está equilibrado, excedido, o si hay ahorro disponible.
*/

// Crea un array con al menos 4 elementos, cada uno representando una categoría de gasto y su valor.
const monthlyExpenses = [
  { category: "Vivienda", value: 1000 },
  { category: "Alimentos", value: 700 },
  { category: "Transporte", value: 300 },
  { category: "Entretenimiento", value: 500 }
];

// 2. Define una variable para el ingreso mensual total de la familia, esto es el ingreso de los
// sueldos de los integrantes de la familia.
const monthlyIncome = 1000;

// 3. Calcula el gasto total de los gastos sumando cada categoría.
const totalExpenses = monthlyExpenses.reduce((acc, { value }) => acc + value, 0);


/*
4. Utiliza sentencias if, else if y else para calcular:
• Si los gastos son menores al ingreso mensual, se debe mostrar cuánto dinero queda
disponible como ahorro.
• Si los gastos son iguales al ingreso, el presupuesto está equilibrado.
• Si los gastos exceden el ingreso, se debe mostrar cuánto dinero falta para cubrir los
gastos.
*/
console.log("========== CALCULO DE PRESUPUESTO FAMILIAR ==========")
console.log(`Tu presupuesto mensual es: ${monthlyIncome}`)
console.log(`Total de tus gastos mensuales: ${totalExpenses}`)
if (totalExpenses < monthlyIncome) {
  const remainingAmount = monthlyIncome - totalExpenses;
  console.log(`El presupuesto está equilibrado y tienes un ahorro de:: $${remainingAmount}`);
} else if (totalExpenses === monthlyIncome) {
  console.log("El presupuesto está equilibrado y no tienes ahorros");
} else {
  const deficit = totalExpenses - monthlyIncome;
  console.log(`El presupuesto está excedido. Te faltan ${deficit} para cubrir los gastos.`);
}