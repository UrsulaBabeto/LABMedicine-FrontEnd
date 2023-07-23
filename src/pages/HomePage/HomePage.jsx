import ToolbarComponent from "../../components/ToolbarComponent/ToolbarComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import { ToolbarContext } from "../../contexts/ToolbarContext/ToolbarContext";
import { useContext, useEffect } from "react";


function HomePage() {
  const { setToolbar } = useContext(ToolbarContext);
  
  useEffect(() => {
    setToolbar({
      title: "Home",
      username: "Josué",
    avatar: "linkfoto"
    });
  }, []);
    return (
          <>
          <header>
            <ToolbarComponent/>
            <NavbarComponent/>
          </header>
    </>);
}

export default HomePage; 
