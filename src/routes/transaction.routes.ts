import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();


transactionRouter.get('/', (request, response) => {
  try {
      const transections = transactionsRepository.all();
      return response.json(transections); 
    // TODO
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    // TODO
    const { title, value, type } = request.body;

    const createTransactionService = new CreateTransactionService(transactionsRepository);

    const transectionService = createTransactionService.execute({ title, value, type });

    return response.json(transectionService);

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
