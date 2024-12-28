# GitHub Activity CLI

## 🚀 Overview
[.](https://roadmap.sh/projects/github-user-activity)
GitHub Activity CLI is a command-line tool to fetch and display GitHub user activity in a visually appealing way. This tool makes it easy to explore the activities of any GitHub user with pagination support.

---

## 🛠️ Features

- Fetch and display GitHub user activity by username.
- Supports pagination (`-p`) and customizable items per page (`--per-page`).
- Stylish and colorful output for better readability.

---

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/github-activity-cli.git
   cd github-activity-cli
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Make the script executable (optional):
   ```bash
   chmod +x app.js
   ```

4. Run the CLI tool:
   ```bash
   node app.js --help
   ```

---

## 📦 Usage

### Basic Usage

Fetch GitHub user activity for a specific username:
```bash
node app.js <username>
```

### Advanced Options

- **Specify Username:**
  ```bash
  node app.js --user <username>
  ```

- **Paginate Results:**
  ```bash
  node app.js --page <page_number>
  ```

- **Customize Items per Page:**
  ```bash
  node app.js --per-page <number_of_items>
  ```

---

## 🌟 Example Outputs

### Fetch Activities
```bash
node app.js patel-aman
```
Output:
```
✨ GitHub Activity Fetcher ✨

🔹 Username: patel-aman
🔹 Pagination: Page 1, 30 items per page

📡 Fetching activity...

🎯 User Activity:

  1  PushEvent
  Pushed 3 commits to repo-name

  2  WatchEvent
  Starred another-repo

✅ Done fetching activity!
```

### Empty Page
```bash
node app.js patel-aman --page 2
```
Output:
```
✨ GitHub Activity Fetcher ✨

🔹 Username: patel-aman
🔹 Pagination: Page 2, 30 items per page

📡 Fetching activity...

⚠️ No activity found on this page. Try a different page or reduce the per-page limit.
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add some feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## 📧 Contact

For issues, questions, or suggestions, please open an issue on the GitHub repository or reach out to the maintainer.

---

## 📜 License

This project is licensed under the [MIT LICENCE](LICENCE).

