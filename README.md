Performance Tracking App
==

Description
---

This project is born to help crossfitters like me to keep track of their performance in weightlifting or hero wods over time.

The most important part is it needs to be able to track everything OFFLINE as some gym might have a very bad internet connection - or no connection at all like Grenzganger - but then could be sync online as soon as it retrieves a connection.

MVP (phase 1 for beta testing)
---

The MVP would have the following feature:

1. List of tracked movement (weight lifting)
2. Adding a tracking performance
3. Graph of performance over time for each movement
4. A feedback page for future improvements

Technology
---

Using expo to manag the project and build for iOS. For now the app would be used on iOS for testing purposes and could be in the future built for android.

Start the project
----
use

```
make start
```

It will start the server on the laptop. In order to test it on a iOS phone, please download the app `Expo Go`, and then you can scan the QR code provided in the command line interface, or you could be connected to the same network as the laptop and then it would automatically detect the project and you can then launch the application.

Run unit tests
---

use

```
make test
```

it will run the unit test files from the project. Test file are named the same file name as the one being tested for example: `index.js` would have `index.test.js` to write the tests.

References
---

- Expo documentation: https://docs.expo.dev/
- Feature requests: https://github.com/Weysan/PerfTracking/issues
- Movement documentation: https://www.crossfit.com/