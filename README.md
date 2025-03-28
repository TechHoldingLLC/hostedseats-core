## Setup & Usage

Follow these steps to set up and use Medusa:

1. **Install dependencies:**
   ```sh
   yarn install
   ```

2. **Build the project:**
   ```sh
   yarn build
   ```

3. **Modify the model before creating a migration:**
   First, update the model located at:
   ```sh
   packages/modules/module-name/src/models/model-name
   ```
   Then, navigate to the specific module directory:
   ```sh
   cd packages/modules/module-name
   ```
   Finally, run the migration creation command:
   ```sh
   yarn migration:create
   ```

4. **Rebuild the project so that migrations reflect in `node_modules`:**
   ```sh
   yarn build
   ```

5. **Navigate to your Medusa store directory and apply migrations:**
   ```sh
   cd my-medusa-store
   npx medusa db:migrate
   ```

6. **Start the application:**
   ```sh
   npm run dev
   ```

