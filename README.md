# HeliosX Tech Test

## Setup Instructions
### Prerequisites
- Node.js (v16 or later recommended)
- Yarn package manager

### Steps to Run Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/tochiabara04/heliosX-tech-test.git
   cd heliosX-tech-test
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Start the development server:**
   ```bash
   yarn start
   ```

4. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

## Technologies Used
- **React**: For building the user interface.
- **TypeScript**: For type-safe code.
- **SASS**: For modular and maintainable styling.


## Known Trade-offs
- **API Integration**: The submission only simulates API interaction by logging the collected data to the console. Actual API integration would be straightforward to add in the future.
- **Validation**: Assumes valid user inputs since the exercise does not require extensive validation.

## Example Console Output
Upon completing the consultation, the following format is logged:
```
Question: Do you have a nut allergy?, Answer: Yes
Question: Have you consulted a doctor before?, Answer: No
...
Final Collected Data: {0: true, 1: false, 2: true, 3: false, 4: true}
```


