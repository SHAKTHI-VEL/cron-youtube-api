# Backend assignment

To make an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from YouTube for a given tag/search query in a paginated response.

## Installation

1. Clone this repository to your local machine using the following command:

   ```
   https://github.com/SHAKTHI-VEL/lineupx-assignment.git
   ```

2. Change your current directory to the project folder:

   ```
   cd lineupx-assignment
   ```

3. Run the following command to fetch the dependencies:

   ```
   npm install
   ```

4. Create the .env file and copy the contents of .env.example into it by typing the following command:
    ```
    cp .env.example .env
    ```

5. Finally start the server by typing the following command:
    ```
    node index.js
    ```

## API ENDPOINT

1. GET VIDEO BY TITLE OR DESCRIPTION Endpoint [METHOD:-GET] :-
    ```
    /video
    ```

    JSON BODY:-
    ```
    {
    "title":"Enter the title of the video",
    "decription":"Enter the description of video"    
    }
    ```
    
2. GET ALL VIDEO IN PAGINATED FORMAT Endpoint [METHOD:-GET] :-
    ```
    /allvideo?page={Page No}&limit={No of Response per page}
    ```

    