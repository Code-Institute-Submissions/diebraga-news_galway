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

### Database Model.

- <a href='https://drive.google.com/file/d/1DcL5OYMX7CdvsOyOPlMilgYbecAeMfS6/view?usp=sharing'>Click Here</a> to view DB model.


## Stripe
  Usuing Stripe React with <a href='https://stripe.com/docs/payments/checkout'>Checkout</a> The backend <br/>
  is handled by Stripe in the dashboard, There you can see the POST requests, create your products, see payments, <br/>
  etc. "To use this you need to enable 'Checkout' in your Stripe Dashboard. <br/>
  `Warning` after you being redirect to success page make sure the payment has been made in Dashboard. malicious users can direct <br/>
  to the success page without pay for the product. <br />
  
  
 ## Test and Validations
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
    
### Usage

Requirements: <br/>
<a href='https://www.python.org/'>Python</a> and <a href='https://pypi.org/project/pip/'>Pip</a>
   - In your root diredtory: <br/>     
   In your `.env.example` rename the file to > `.env` and change the Env variable.
   - Windows: <p>
    
    ```
        cd server
        python -m venv env
        env/Scripts/activate
        pip install -r requirements.txt
        python manage.py runserver
    ```   
 </p>
   - Linux or mac: <p>
    
    ```
        cd server
        python -m venv env
        source env/bin/activate
        pip install -r requirements.txt
        python manage.py runserver
    ```   
 </p>
 <br/>
    Your api is running in your localhost on port: 8000 Now you're ready to go! 🚀

    
## Frontend
- A React app consisted in a `src` folder where the all the code source is stored. <br/>
- `App.js` is what wrappes the project there I've all routes in the application and makes <br/>
   the store disponible to all children. <br/>
- it's devide in `Pages` folder stores all primary components in the app `Components` folder <br/>
  all secondary or elements that can be used more than once in the app, `Redux` folder that <br/>
  that stores all states and actions in the app, `Styles` folder that stores the global styles <br/>
  and assets to stores static files in the frontend.
- In the app users can see all news, all staff but to read more about the articles, view profiles <br/>
  access shop or donation they will need to authenticate.
- Shop and Donation 
  After you choose your product or donation subscription you'll be redirected to checkout page <br/>
  if the payment is succesfull user is redirected to success page if it fails redirected to cancel page. <br/> 
  
  
### Structure

<details>
<summary>Click to views the folder structure</summary>

```
  src              
   ├── assets
   |    └── *static files
   ├── components
   |    ├── Category.js
   |    ├── Footer.js
   |    ├── Header.js
   |    ├── Layoute.js
   |    ├── PrivateRoute.js
   |    ├── Products.js
   |    ├── Profile.js
   |    ├── Readmore.js
   |    └── Subscriptions.js
   ├── pages
   |    ├── Activate.js
   |    ├── Authors.js
   |    ├── Blog.js
   |    ├── Cancel.js
   |    ├── Home.js
   |    ├── Login.js
   |    ├── Register.js
   |    ├── ResetPassword.js
   |    ├── ResetPasswordComfirm.js
   |    ├── Shop.js
   |    ├── Subscribe.js
   |    └── Success.js
   ├── redux
   |    ├── actions
   |    |       ├── auth.js
   |    |       └── types.js
   |    ├── reducers
   |    |       ├── auth.js
   |    |       └── index.js
   |    └── store.js
   ├── styles
   |    └── globals.js
   ├── app.js
   └── index.js

```

</details>


### Mockups

- <a href=''>Press here<a> to view.
    

## Test and Validations:

#### Functionality Testing. <br/>
   Routes Links in the app are tested you can free navigate in the application.
   
   Links in the app to an external pages are working perfectly with target blank.
  
   Compatibility Testing. <br/>
   I tested the app manually on a variaty of browsers:
   
   Chrome <br/>
   Brave <br/>
   Edge <br/>
   
   and mobile:
   
   Iphone 10 <br/>
   Sansung Galaxy S7
   
   Performance Testing. <br/>
   and different screen sizes using the inspector. <br/>
   criteria: responsivity, fluidity, design, sizes functionality behavior.   
   
Form: <br/>
HTML Validation <br/>
fields required + strong password length and patterns <br/>
Validation through js code. <br/>
if password does not match and send if strict matches. 

Creation user sending emails. ✔ <br/>
Request new password.  ✔ <br/>
Activate account. ✔ <br/>
Resset password. ✔ <br/>
Get in touch sending email and storing in the DB ✔ <br/>
Buttons update and inputs 100% working. ✔ <br/>
Alerts set in case of network connection and authentication problems. ✔ <br/>
Link buttons working directs user to the right place. ✔ <br/>
Link Troggle Buttons working and fluid. ✔ <br/>
Navbar Links working and responsive. ✔ <br/>

ESlint: Tool verify and correct automatcally JS errors, preventing, <br/>
reporting syntax errors, integrated with prettier  <br/>
will ensure a beautifull and good style guid for better reading  <br/>
preventing errors.

#### Stripe
It's running in test mode <br/>

Use `4242424242424242`	to Succeeds and immediately processes the payment. 
<details>
<summary>Click to views details.</summary>

</details>

Use `4000000000003220`	to 3D Secure 2 authentication must be completed for a successful payment. <br/>
Use `4000000000009995`	To fails with a decline code of insufficient_funds.


## Usage 

Requirements: <br/>
<a href='https://nodejs.org/en/'>Nodejs and NPM</a> <br/>
opcional
<a href='https://yarnpkg.com/'> Yarn</a> <br/>

In the root folder. <br/>
`cd client` folder. <br/>
Rename `.env.example` to `.env` and change the env variables. <br/>
`warning` prices_id are required* create yours in stripe dashboard. <br/>

in the terminal run `yarn` or `npm run`<br/>
Than `yarn start` or `npm run start` <br/>

*Remenber: You will need to have your api running too!. <br/>
*Now you're ready to go!. 🚀🚀


## Deployment 

The app is deployed on Heroku. <br/>
Requirements: <br/>
<a href='https://github.com/heroku/django-heroku'>Heroku_django</a>
<a href='http://whitenoise.evans.io/en/stable/'>WhiteNoise</a> for static files. <br/>
`warning` if you're usig the current version of django-simplejwt=6.0.0 for some reason <br/>
is not compatible with heroku use version: 4.4.0

Configure your App and postgres DB on Heroku.

Install the Heroku CLI <br/>
Download and install the Heroku CLI.

Log in to your Heroku account. <br/>
```
$ heroku login 
```
Clone the repository <br/>
Use Git to clone your app code source code to your local machine. <br/>
```
$ heroku git:clone -a galway-news 
$ cd galway-news 
```
Deploy your changes <br/>
Make some changes to the code you just cloned and deploy them to Heroku using Git. <br/>
```
$ git add . 
$ git commit -am "make it better" 
$ git push heroku master 
```
## Acknowledgements

- I received inspiration for this project from:
  
  https://codeinstitute.net/
  https://rocketseat.com.br/
  
## License

- Free Open Source.
  






  

   
  





    


