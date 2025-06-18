import "./Dashboard.css";
import { FaTags, FaRegThumbsUp } from "react-icons/fa";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { PiUsersBold } from "react-icons/pi";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  CartesianGrid,
} from "recharts";

const dataCards = [
  {
    title: "Total Revenues",
    value: "$2,129,430",
    icon: <MdOutlineMonetizationOn />,
    bg: "#DDEFE0",
  },
  {
    title: "Total Transactions",
    value: "1,520",
    icon: <FaTags />,
    bg: "#F4ECDD",
  },
  {
    title: "Total Likes",
    value: "9,721",
    icon: <FaRegThumbsUp />,
    bg: "#EFDADA",
  },
  { title: "Total Users", value: "892", icon: <PiUsersBold />, bg: "#DEE0EF" },
];

const activityData = [
  { name: "Start", guest: 200, user: 100 },
  { name: "Week 1", guest: 370, user: 410 },
  { name: "Week 2", guest: 200, user: 150 },
  { name: "Week 3", guest: 300, user: 450 },
  { name: "Week 4", guest: 230, user: 180 },
];

const pieData = [
  { name: "Basic Tees", value: 55, color: "#98D89E" },
  { name: "Custom Short Pants", value: 31, color: "#F6DC7D" },
  { name: "Super Hoodies", value: 14, color: "#EE8484" },
];

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="card-row">
        {dataCards.map((card, index) => (
          <div
            className="data-card"
            style={{ backgroundColor: card.bg }}
            key={index}
          >
            <div className="card-icon">{card.icon}</div>
            <p className="card-title">{card.title}</p>
            <h3 className="card-value">{card.value}</h3>
          </div>
        ))}
      </div>

      <div className="activities-section">
        <div className="section-header">
          <h3>Activities</h3>
          <span>
            May - June 2021<span>&#711;</span>
          </span>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={activityData}
            margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 20, right: 20 }} />
            <YAxis domain={[0, 500]} ticks={[0, 100, 200, 300, 400, 500]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="guest"
              stroke="#E9A0A0"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="user"
              stroke="#9BDD7C"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bottom-row">
        <div className="top-products-card">
          <div className="section-header">
            <h3>Top products</h3>
            <span>
              May - June 2021<span>&#711;</span>
            </span>
          </div>
          <PieChart width={500} height={250} className="pie-chart">
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>

        <div className="schedule-card">
          <div className="section-header">
            <h3>Today’s schedule</h3>
            <span className="see-all">See All &gt;</span>
          </div>
          <div className="schedule-item">
            <div className="indicator green"></div>
            <div>
              <p>
                <strong>Meeting with suppliers from Kuta Bali</strong>
              </p>
              <p>14.00-15.00</p>
              <p>at Sunset Road, Kuta, Bali</p>
            </div>
          </div>
          <div className="schedule-item">
            <div className="indicator purple"></div>
            <div>
              <p>
                <strong>Check operation at Giga Factory 1</strong>
              </p>
              <p>18.00-20.00</p>
              <p>at Central Jakarta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
