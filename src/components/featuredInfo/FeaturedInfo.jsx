import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [incomeDay, setIncomeDay] = useState([]);
  const [perc, setPerc] = useState(0);
  const [percDay, setPercDay] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        console.log(res)
        setPerc((res.data[2].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  console.log(income)

  useEffect(() => {
    const getIncomeDay = async () => {
      try {
        const res = await userRequest.get("orders/incomeday");
        setIncomeDay(res.data)
        setPercDay((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncomeDay();
  }, []);
  
  console.log(incomeDay)

  return (
    <div className="featured">
      <div className="featuredItem renavue">
        <span className="featuredTitle">Vendas Mês</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${income[1]?.total}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>


        <span className="featuredSub">Comparação ao mês anterior</span>
      </div>
      <div className="featuredItem sales">
        <span className="featuredTitle">Vendas Dia</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${incomeDay[1]?.total}</span>
          <span className="featuredMoneyRate">
          %{Math.floor(percDay)}{" "}
            {percDay < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}</span>
        </div>
        <span className="featuredSub">Comparação ao dia anterior</span>
      </div>
    </div>
  );
}