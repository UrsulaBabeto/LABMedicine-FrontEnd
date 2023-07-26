import ToolbarComponent from "../../components/ToolbarComponent/ToolbarComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import { ToolbarContext } from "../../contexts/ToolbarContext/ToolbarContext";
import { useContext, useEffect } from "react";
import CardStatistic from "../../components/cards/CardStatistic/CardStatistic";
import { StatisticUtils } from "../../Utils/StatisticUtils";
import SearchComponent from "../../components/SearchComponent/SearchComponent"

function HomePage() {
  const { setToolbar } = useContext(ToolbarContext);

  useEffect(() => {
    setToolbar({
      title: "Home",
      username: "Josué",
      avatar: "linkfoto",
    });
  }, []);
  return (
    <>
      <header>
        <ToolbarComponent />
      </header>
      <div style={{ display: "flex" }}>
        <NavbarComponent />
        {StatisticUtils.arrStatistic.map((s) => (
          <CardStatistic
            icon={s.icon}
            title={s.title}
            value={s.value}
            table={s.table}
            key={s.id}
          />
        ))}
        <SearchComponent />
      </div>
      <div>
      </div>
    </>
  );
}

export default HomePage;
