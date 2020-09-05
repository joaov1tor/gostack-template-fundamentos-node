import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransaction {
  title: string;
  value: number;
  type: "income" | "outcome"
}

interface Response {
  transactions: Transaction[],
  balance: Balance
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Response {
    // TODO
    const balance = this.getBalance();
    const transactions:Response = {
      transactions: this.transactions,
      balance: balance
    };

    return transactions;
  }

  public getBalance(): Balance {
    // TODO 
    const balance: Balance = {
      income: 0,
      outcome: 0,
      total: 0
    };

    this.transactions.find(transection => {
      if (transection.type === "income") {
        balance.income += transection.value;
      } else {
        balance.outcome += transection.value;
      };
    });

    balance.total = balance.income - balance.outcome;
    return balance;
  }

  public create({ title, type, value }: CreateTransaction): Transaction {
    // TODO
    const transection = new Transaction({ title, type, value });

    this.transactions.push(transection);

    return transection;

  }
}

export default TransactionsRepository;
