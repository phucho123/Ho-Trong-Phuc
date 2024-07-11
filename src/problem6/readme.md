# Flow Diagram #
![test-99 drawio](https://github.com/phucho123/Ho-Trong-Phuc/assets/80267079/362d25a8-50eb-4fc0-8c32-678ee39af36b)


# Flow of Execution #
1. User Action: A user performs an action on the website that increases their score.
2. Website: Upon completion of the action, the website dispatches an API call to the application server.
3. API Service Module: The API service module receives the API call and validates the request.
4. Authorization: The module verifies that the user is authorized to update their score.
5. Score Update: If authorized, the module updates the user's score in the database.
6. Live Update: The updated score is immediately reflected on the scoreboard on the website.

# Additional Comments #
1. Consider implementing rate limiting or CAPTCHA mechanisms to prevent abuse of the score update endpoint.
2. Use HTTPS to encrypt communication between the website and the application server to protect sensitive data.
3. Implement proper error handling to provide informative responses to the website in case of failures.
4. Consider implementing authentication and authorization mechanisms such as JWT or OAuth for user authentication and authorization.
