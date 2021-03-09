const initialState = {
  count: 0,
  favColor: 'Blue',
  blogArticles: []
}

function appReducer(state=initialState, action) {
  // console.log('action ==> ', action);

  switch(action.type) {
    case 'incrementCounter':
      return {
        ...state,
        count: state.count + 1
      }

    case 'updateColor':
      return {
        ...state,
        favColor: action.color
      }
    
    // SHOWN AS AN EXAMPLE, NOT YET IMPLEMENTED IN THE COMPONENT
    // ADDS NEW BLOG ARTICLE TO BLOGARTICLES ARRAY IN STATE
    case 'addArticle':
      const newArticle = {
        title: action.title,
        body: action.body
      }
      const updatedBlogArticles = [...state.blogArticles, newArticle];

      return {
        ...state,
        blogArticles: updatedBlogArticles
      }

    default:
      return state;
  }
}

export default appReducer;