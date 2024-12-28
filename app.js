#!/home/aman/.nvm/versions/node/v22.12.0/bin/node

// Import necessary modules
import createEventSummary from './createEventSummary.js';
import chalk from 'chalk';
import { Command } from 'commander';

const program = new Command();

// Define CLI information
program
    .name(chalk.blue.bold('GitHub Activity CLI'))
    .description(chalk.green('🚀 Fetch and display GitHub user activity in style!'))
    .version(chalk.yellow.bold('v1.0.0'));

// Define positional arguments and options
program
    .option('-u, --user <username>', chalk.cyan('Specify the GitHub username'))
    .option('-p, --page <number>', chalk.cyan('Specify the page number for pagination'), 1)
    .option('--per-page <number>', chalk.cyan('Number of items per page'), 30)
    .argument('[username]', chalk.cyan('GitHub username to fetch the activity for'))
    .action((username) => {
        try {
            const options = program.opts();
            const finalUsername = options.user || username;

            // Handle missing username
            if (!finalUsername) {
                console.error(chalk.bgRed.white.bold('\n⚠️ Error: Username is required!'));
                process.exit(1);
            }

            // Display CLI inputs
            console.log(chalk.bold('\n✨ GitHub Activity Fetcher ✨\n'));
            console.log(chalk.blueBright('🔹 Username:'), chalk.green.bold(finalUsername));
            console.log(chalk.blueBright('🔹 Pagination:'), chalk.yellow(`Page ${options.page}, ${options.perPage} items per page\n`));

            // GitHub URL for fetching user activity
            const activityUrl = `https://api.github.com/users/${finalUsername}/events?per_page=${options.perPage}&page=${options.page}`;

            const fetchData = async () => {
                console.log(chalk.cyanBright('📡 Fetching activity...'));
                const response = await fetch(activityUrl);

                // Handle HTTP errors
                if (!response.ok) {
                    console.error(chalk.bgRed.white.bold(`\n⚠️ Error: HTTP error ${response.status}`));
                    process.exit(1);
                }

                const data = await response.json();

                if(data.length === 0){
                    throw new Error("No activity available");
                }

                // Display fetched activity
                console.log(chalk.bold('\n🎯 User Activity:'));
                data.forEach((event, index) => {
                    console.log(chalk.bold(`\n${chalk.bgMagenta.white(` ${index + 1} `)} ${chalk.magentaBright(event.type)}`));
                    createEventSummary(event); // Output from your summary function
                });

                console.log(chalk.green.bold('\n✅ Done fetching activity!\n'));
            };

            fetchData().catch(err => {
                console.error(chalk.bgRed.white.bold('\n⚠️ Error fetching data:'), chalk.red(err));
            });

        } catch (err) {
            console.error(chalk.bgRed.white.bold('\n⚠️ Error:'), chalk.red(err.message));
        }
    });

// Parse the command line arguments
program.parse();
