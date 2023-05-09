import { ReactComponent as CustomerEngagementIcon } from "../../assets/svg/customer-engagement.svg";
import { ReactComponent as ActionableInsightsIcon } from "../../assets/svg/actionable-insights.svg";
import { ReactComponent as EmployeesProductivityIcon } from "../../assets/svg/employees-productivity.svg";
import { ReactComponent as OperationsExcellenceIcon } from "../../assets/svg/operations-excellence.svg";

export const cardsData = [
  {
    Icon: <CustomerEngagementIcon />,
    title: "Customer Engagement",
    description: "Get your own mobile app for industry specific",
    backgroundColor: "#0a488f",
    amount: 100,
  },
  {
    Icon: <ActionableInsightsIcon />,
    title: "Actionable Insights",
    description: "Create Dashboards",
    backgroundColor: "#579064",
    amount: 100,
  },
  {
    Icon: <EmployeesProductivityIcon />,
    title: "Employees Productivity",
    description: "KPI Builder , Work Conf,Create Oracle Requests",
    backgroundColor: "#950000",
    amount: 50,
  },
  {
    Icon: <OperationsExcellenceIcon />,
    title: "Operations Excellence",
    description: "Tenant/lessee Managment",
    backgroundColor: "#8F6C0A",
    amount: 100,
  },
];
