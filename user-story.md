# User Stories for GiftLink Application

## User Story Template

**As a** [type of user],
**I want** [an action],
**So that** [a benefit/a value].

---

## User Stories

### 1. Browse Gifts
**As a** visitor,
**I want** to browse a list of available gifts,
**So that** I can find items I am interested in giving to someone.

**Acceptance Criteria:**
- Display all available gift items on the main page
- Each gift shows name, description, image, and condition
- Gifts are loaded from the database

### 2. Search for Gifts
**As a** user,
**I want** to search for gifts by name or category,
**So that** I can quickly find specific types of gifts.

**Acceptance Criteria:**
- Search bar is available on the main page
- Results update based on search criteria
- Filter by category is supported

### 3. View Gift Details
**As a** user,
**I want** to view detailed information about a specific gift,
**So that** I can decide if it is suitable for my needs.

**Acceptance Criteria:**
- Clicking a gift opens its detail page
- Shows full description, condition, age, and donor info
- Includes date posted

### 4. Register an Account
**As a** new user,
**I want** to register for an account,
**So that** I can access personalized features.

**Acceptance Criteria:**
- Registration form with name, email, and password
- Email validation
- Password strength requirements
- Success message upon registration

### 5. Log In
**As a** registered user,
**I want** to log in to my account,
**So that** I can access my profile and saved preferences.

**Acceptance Criteria:**
- Login form with email and password
- JWT token generated upon successful login
- Error message for invalid credentials

### 6. Add Sentiment/Review
**As a** logged-in user,
**I want** to add a review/sentiment about a gift,
**So that** I can share my opinion with other users.

**Acceptance Criteria:**
- Text input for review comment
- Sentiment analysis performed on the review
- Review saved to database

### 7. View Sentiment Analysis
**As a** user,
**I want** to see sentiment analysis results for gift reviews,
**So that** I can understand the overall opinion about a gift.

**Acceptance Criteria:**
- Display positive, negative, or neutral sentiment
- Show sentiment score
- Aggregate sentiment for each gift

### 8. Deploy Application
**As a** developer,
**I want** the application to be deployed with CI/CD,
**So that** updates are automatically tested and deployed.

**Acceptance Criteria:**
- GitHub Actions workflow configured
- Automated testing on push
- Deployment to production on merge to main
