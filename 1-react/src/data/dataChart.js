/**
 * @type Array
 */
export const dataChart = [
  {
    prompt: "My issue was resolved in a timely manner",
    data: [1, 14, 24, 3, 4]
  },
  {
    prompt: "The representative understood me",
    data: [0, 3, 23, 15, 10]
  },
  {
    prompt: "I would recommend the service to others",
    data: [8, 7, 8, 9, 5]
  }
];

/**
 * @type Array
 */
export const titles = () => dataChart.map(data => data.prompt);

/**
 * @type Array
 */
export const values = () => dataChart.map(data => data.data);

/**
 * @type Array
 */
export const valuesByIndex = (index) => dataChart.find((data, key) => key === index);
