// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const tablesValues = [
  {
    id: 1,
    name: 'Loja jeans',
    owner: 'Otto',
    phone: '11 99999-9999',
    city: 'Campinas-SP',
    status: 'ativo',
  },
  {
    id: 2,
    name: 'Tricot lojas',
    owner: 'Lúcia',
    phone: '11 99999-9999',
    city: 'São Paulo-SP',
    status: 'ativo',
  },
  {
    id: 3,
    name: 'Larry',
    owner: 'Regiane',
    phone: '11 99999-9999',
    city: 'Brusque-SC',
    status: 'ativo',
  },
]

export interface Data {
  id: number,
  name: string,
  owner: string,
  phone: string,
  city: string,
  status: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(tablesValues)
}