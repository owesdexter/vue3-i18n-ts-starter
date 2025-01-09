export type TGetArticlesParams = {
  user: 'universeoutdoord'
  status?: string // 1: 草稿, 2: 公開, 3: 密碼, 4: 隱藏, 5: 好友, 7: 共同作者, 預設是 null(所有文章)
  category_id?: string // 個人分類參數, 預設是 null (所有分類文章), 多個分類 id 以逗號 (,) 分隔, 例如 category_id=1234,5678,90。上限 10 個分類。
  per_page?: string // 每頁幾筆, 預設為100
}
