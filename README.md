# news_galway
Blog app using djangorest framework, Reactjs with ecommerce and subscription funcionalities with Stripe.

## Live Demo
The app is deployed running on Heroku: <br/> https://galway-news.herokuapp.com/

## About
The app is directed to people from or interested in whats in currently going on in galway city or just interested in follow <br/>
The staff in what they post. <br/>
The Blog features the last news from Galway city divided in four categories "News" "Gastronomy" "Events" <br/>
and "jobs" it has a Donation subscription page and a eccomerce page with a few products that you can buy from. <br/>
You can also meet our staff, view profile and get in touch sending a e-mail with sugestions or queries. <br/>
to read more about the articles, filter, view profile, access shop or subscribe you'll be requested to authenticate. <br/>

## Technologies
- <a href='https://www.django-rest-framework.org/' target='_blank'>django-rest-framework</a><br/>
- <a href='https://djoser.readthedocs.io/en/latest/getting_started.html' target='_blank'>Djoser</a><br/>
- <a href='https://jwt.io/introduction/' target='_blank'>JWT Authentication</a><br/>
- <a href='https://www.heroku.com/postgres' target='_blank'>Heroku PostgresSQL</a><br/>
- <a href='https://reactjs.org/' target='_blank'>ReactJs</a><br/>
- <a href='https://react-redux.js.org/' target='_blank'>React Redux</a><br/>
- <a href='https://reactrouter.com/web/guides/quick-start' target='_blank'>React router dom</a><br/>
- <a href='https://getbootstrap.com/' target='_blank'>Bootstrap</a><br/>
- <a href='https://stripe.com/docs/stripe-js/react' target='_blank'>React Stripe</a><br/>
- <a href='https://github.com/dennismorello/react-awesome-reveal' target='_blank'>react-awesome-reveal Stripe</a><br/>

## Backend 
- The Api 'news' built with django-rest-framework consists in 5 app: accounts, authors, blog and contacts. <br/>
- accounts: Creates and stores in the database users and superusers and show them in the admin panel. <br/>
- authors: Creates and stores in the database all authors you can add info and a profilo photo in the admin panel only. <br/> 
- blogs: Creates and stores in the database all posts in the app where you can add, edit, delete all data, thumbnail including <br/>
costomize the post using django <a href='https://github.com/summernote/django-summernote' target='_blank'>summernote</a>. <br/>
- contacts: Handle send email funcionalitie and Stores in the database messages sent by users in the contact us section. <br/><br/>
    - Authentication: All the authentication and validation procces is handled by <a href='https://djoser.readthedocs.io/en/latest/getting_started.html'>Djoser</a><br/> It is responsible <br/>
    for handle send account activation, send account update password, Authenticate through JWT tokens and validate <br/>
    in case the password is to easy, email is non valid already, existent, empty, password does not match etc.
    - smtp service: I'm using a smtp service ofered by gmail to handle send email get your password to add in your .env files<br/> following those steps on <a href='https://support.google.com/mail/answer/185833?hl=en-GB'>GOOGLE</a>  or use Mailtrap or whatever service you prefer.

### Structure

<details>
<summary>Click to views the folder structure</summary>

```
server              
   ├── accounts
   ├── authors
   ├     ├── __init__.py
   ├     └── admin.py
   ├     └── apps.py
   ├     └── models.py
   ├     └── serializers.py
   ├     ├── tests.py
   ├     └── urls.py
   ├     └── views.py
   ├── blog
   ├── contacts
   ├── news 
   ├     ├── __init__.py
   ├     └── asgi.py
   ├     └── settings.py
   ├     └── urls.py
   ├     └── wsgi.py
   └── staticfiles
           └── * staicfiles

```
</details>

### Database Model & Mockups.

- <a href='https://drive.google.com/file/d/1DcL5OYMX7CdvsOyOPlMilgYbecAeMfS6/view?usp=sharing'>Click Here</a> to view DB model.

- <a href=''>Click here</a> to see project's mockups. <br/>


## Stripe
  Usuing Stripe React with <a href='https://stripe.com/docs/payments/checkout'>Checkout</a> The backend <br/>
  is handled by Stripe in the dashboard, There you can see the POST requests, create your products, see payments, <br/>
  etc. "To use this you need to enable 'Checkout' in your Stripe Dashboard. <br/>
  `Warning` after you being redirect to success page make sure the payment has been made in Dashboard. malicious users can direct <br/>
  to the success page without pay for the product. <br />
  
  
 ## Test
  - I'm using <a href="https://insomnia.rest/">Insomnia<a/> to do my api requests and test the api routes, the insominia JSON file is <br/> avalibe in the server root folder. feel free to use <a href="https://www.postman.com/">Postman</a> or any other.
  - Test routes:
    - List Authors <br/> 
    Method `'GET': http://127.0.0.1:8000/api/authors/` <br/>
    <details>
    <summary>Click to view</summary>
    
    </details>

    - List Author by pk <br/> 
    Method `'GET': http://127.0.0.1:8000/api/authors/<pk>` <br/>
    <details>
    <summary>Click to view</summary>
    
    </details>
    
    - List Posts <br/> 
    Method `'GET': http://127.0.0.1:8000/api/blog/` <br/>
    <details>
    <summary>Click to view</summary>
    
    </details>
    
    - List Post by slug <br/> 
    Method `'GET': http://127.0.0.1:8000/api/blog/<slug>` <br/>
    <details>
    <summary>Click to view</summary>
    
    </details>
    
    - Find post by category <br/> 
    Method `'POST': http://127.0.0.1:8000/news/category` <br/>
    <details>
    <summary>Click to view</summary>
    
    </details>
    
    - Create new user <br/> 
    Method `'GET': http://127.0.0.1:8000/auth/users/` <br/>
    <details>
    <summary>Click to view</summary>
    
    </details>
    
    - Activate new user <br/> 
    Method `'POST': http://127.0.0.1:8000/auth/users/activation/` <br/>
    <details>
    <summary>Click to view</summary>
    
    </details>
    
    - Create Session <br/> 
    Method `'POST': http://127.0.0.1:8000/auth/jwt/create` <br/>
    <details>
    <summary>Click to view</summary>
    
    </details>

    - Request new password <br/> 
    Method `'POST': http://127.0.0.1:8000/auth/users/reset_password/` <br/>
    <details>
    <summary>Click to view</summary>
    
    </details>

    - Set new password <br/> 
    Method `'POST': http://127.0.0.1:8000/auth/users/reset_password_confirm/` <br/>
    <details>
    <summary>Click to view</summary>
    
    </details>

    - Send Email <br/> 
    Method `'POST': http://127.0.0.1:8000/api/contacts/` <br/>
    <details>
    <summary>Click to view</summary>
    
    </details>
    
    <br/>
    
## Frontend
  





    


