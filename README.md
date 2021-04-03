


# React NeonCat Workshop

##  Available Scripts

In the project directory, you can run:

###  `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

###  `npm run server`

Runs the mock server on *http://localhost:3001*

###  `npm test`

Launches the test runner in the interactive watch mode.


###  `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

## API Spec
Server URL: http://localhost:3001

**Error Response**

    {
      message: string
    }

### Login [POST]
**URL**

    /login

**Request**:

    {
      email: string;
      password: string
    }

**Response**

    {
      token: string;
    }

### List and Search News [GET]
**URL**

    /news

**query params**

    ?search=

**Response**

    [
      {
        id: string;
        title: string;
        trending: boolean;
        source: string;
        imageUrl: string;
      }
    ]

### Show News [GET]
**URL**

    /news/:newsId

**Response**

    {
        id: string;
        title: string;
        trending: boolean;
        source: string;
        text: string;
        imageUrl: string;
        likes: string[];
        comments: [
          {
            id: string;
            comment: string;
            user: string;
            date: string;
          }
        ]
    }

### Comment News [POST]
**URL**

    /news/:newsId/action/comment

**Request**:

    {
      userId: string;
      comment: string;
    }


**Response**

    {
        id: string;
        title: string;
        trending: boolean;
        source: string;
        text: string;
        imageUrl: string;
        likes: string[];
        comments: [
          {
            id: string;
            comment: string;
            user: string;
            date: string;
          }
        ]
    }

### Like News [POST]
**URL**

    /news/:newsId/action/like

**Request**:

    {
      userId: string;
    }


**Response**

    {
        id: string;
        title: string;
        trending: boolean;
        source: string;
        text: string;
        imageUrl: string;
        likes: string[];
        comments: [
          {
            id: string;
            comment: string;
            user: string;
            date: string;
          }
        ]
    }