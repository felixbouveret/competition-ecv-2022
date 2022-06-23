export default function useProfileChart(rgb: string) {
  const getColor = (opacity: string) => `rgba(${rgb}, ${opacity})`;
  const getOptions = () => ({
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      r: {
        max: 10,
        angleLines: {
          borderDash: [5, 6],
          lineWidth: 2,
        },
        grid: {
          borderDash: [5, 6],
        },
        ticks: {
          display: false,
          count: 2,
        },
        pointLabels: {
          borderRadius: 4,
          backdropPadding: 4,
          backdropColor: getColor("0.1"),
          color: getColor("1"),
          font: {
            size: 12,
          },
        },
      },
    },
  });
  const getDatas = (datas: { label: string; value: number }[]) => {
    const labels = datas.map((data) => data.label);
    const values = datas.map((data) => data.value);
    return {
      labels,
      datasets: [
        {
          label: "",
          data: values,
          backgroundColor: getColor("0.1"),
          borderColor: getColor("1"),
          borderDash: [0],
          borderWidth: 2,
          pointBackgroundColor: getColor("1"),
        },
      ],
    };
  };
  return {
    getOptions,
    getDatas,
  };
}
