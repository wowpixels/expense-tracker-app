import { calcSpentByBudget, formatCurrency, formatPercent } from "../helpers";

const BudgetItem = ({ budget }) => {
  const { id, name, amount, color } = budget;
  const spent = calcSpentByBudget(id);

  return (
    <div className="budget" style={{ "--accent": color }}>
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercent(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount - spent)} remaining</small>
      </div>
    </div>
  );
};

export default BudgetItem;
