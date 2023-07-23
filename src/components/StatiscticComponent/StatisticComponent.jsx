import { useEffect, useState } from "react";

function StatisticComponent({ icon, title, value, table }) {
  const service = new ApiService(table);
  const [currValue, setCurrValue] = useState(value);

  useEffect(() => {
    async () => {
      service.Get().then((res) => {
        setCurrValue(res.length);
      });
    };
  });

  return (
    <>
      <div>
        <div className="icon">{icon}</div>
        <div className="valor">{currValue}</div>
        <div className="title">{title}</div>
      </div>
    </>
  );
}

export default StatisticComponent;
