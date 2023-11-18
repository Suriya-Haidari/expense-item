import Chart from "./Chart";

export default function ExpensesChart(props) {
  const chartDataPoirts = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Agu", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expense of props.expenses) {
    const dateIndex = expense.date.getMonth(); //Jan ==> 0, Feb ==> 1
    chartDataPoirts[dateIndex].value += expense.amount;
  }
  return <Chart chartDataPoirts={chartDataPoirts}></Chart>;
}
