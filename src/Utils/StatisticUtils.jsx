import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import BiotechIcon from '@mui/icons-material/Biotech';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const arrStatistic = [
  {
    id: 1,
    icon: <PersonAddAltIcon/>,
    title:"Pacientes" ,
    table: "Pacientes",
    value: "12",
  },
  {
    id: 2,
    icon: <BiotechIcon/>,
    title: "Exames",
    table: "Exames",
    value: "4",
  },
  {
    id: 3,
    icon: <CalendarMonthIcon/>,
    title: "Consultas",
    table: "Consultas",
    value: "2",
  },
];

export const StatisticUtils={
  arrStatistic,  
}