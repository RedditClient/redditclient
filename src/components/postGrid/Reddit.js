
const url = 'https://www.reddit.com/search.json?q=cake%20recipes';

 export const Reddit =  {

    getData() {

       return  fetch(url)
      .then(response => {
         return response.json()
        }
  
      ).then(jsonResponse => {
         if (!jsonResponse.data.children) {
            return [];
        }


        return jsonResponse.data.children.map(post => ({
         id: post.data.id,
         categorie: post.data.subreddit,
         author: post.data.author,
         title: post.data.title,
         img: post.data.thumbnail,
         create: post.data.created,
         follower: post.data.subreddit_subscribers,
         url: post.data.url,
         comments: post.data.num_comments
     
        }));

      }).catch(
         console.error()
         );
  
   }
   }
   

