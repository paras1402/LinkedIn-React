import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  articles: [],
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setLoadingBar: (state, action) => {
      state.loading = action.payload;
    },

    setArticles: (state, action) => {
      state.articles = action.payload;
    },
  },
});

export const { setLoadingBar, setArticles } = articleSlice.actions;

export const selectArticleLoading = (state) => state.article.loading;
export const selectArticles = (state) => state.article.articles;

export default articleSlice.reducer;
