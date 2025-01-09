// import axios from "axios";
import { type TGetArticlesParams } from '@/types'

export const getArticles = async (payload?: TGetArticlesParams) => {
  const params: TGetArticlesParams = {
    user: 'universeoutdoord',
    status: '2',
  }
  const res = await fetch(
    'https://emma.pixnet.cc/blog/articles?' +
      new URLSearchParams({ ...params, ...payload }).toString(),
  )
  return res.json()
}
