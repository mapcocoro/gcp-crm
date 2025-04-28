import express from 'express';
import * as Account from '../models/accountModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const data = await Account.create(req.body);
  res.status(201).json(data);
});

router.get('/', async (_, res) => res.json(await Account.findAll()));

router.get('/:id', async (req, res) => {
  const data = await Account.findById(req.params.id);
  data ? res.json(data) : res.status(404).json({ error: 'Not found' });
});

router.put('/:id', async (req, res) =>
  res.json(await Account.update(req.params.id, req.body))
);

router.delete('/:id', async (req, res) =>
  res.json(await Account.remove(req.params.id))
);

export default router;
