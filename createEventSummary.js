import chalk from "chalk";

const log = console.log;
const actionColor = chalk.green.bold;
const repoColor = chalk.blue.underline;
const detailColor = chalk.yellow;

const createEventSummary = (event) => {
    const {type, payload, repo} = event;
    switch(type) {
        // commit event
        case 'CommitCommentEvent':
            if(payload.action === 'created')
                log(`- ${actionColor("Created a commit")} ${detailColor(payload.comment)} in ${repoColor(repo.name)}`);
            break;

        // create event
        case 'CreateEvent':
            if(payload.ref_type === 'branch')
                log(`- ${actionColor("Created new branch")} ${detailColor(payload.ref)} in ${repoColor(repo.name)}`);
            else if(payload.ref_type === 'tag')
                log(`- ${actionColor("Created a tag")} ${detailColor(payload.ref)} in ${repoColor(repo.name)}`);
            else if (payload.ref_type === 'repository')
                log(`- ${actionColor("Created a new")} repository ${repoColor(repo.name)}`);
            break;

        // delete event
        case 'DeleteEvent':
            if(payload.ref_type === 'branch')
                log(`- ${actionColor("Deleted branch")} ${detailColor(payload.ref)} in ${repoColor(repo.name)}`);
            else if(payload.ref_type === 'tag')
                log(`- ${actionColor("Deleted tag")} ${detailColor(payload.ref)} in ${repoColor(repo.name)}`);
            break;
        
        // fork event
        case 'ForkEvent':
            log(`- ${actionColor("Forked a repository")} ${detailColor(payload.forkee)} from ${repoColor(repo.name)}`);
            break;

        // gollum event
        case 'GollumEvent':
            log(`- ${actionColor("Changed wiki page in")} ${repoColor(repo.name)}`);
            break;

        // issuecomment event
        case 'IssueCommentEvent':
            if(payload.action === 'created')
                log(`- ${actionColor("Issue")} ${detailColor(payload.issue.title)} created in ${repoColor(repo.name)}`);
            else if (payload.action === 'edited')
                log(`- ${actionColor("Issue")} ${detailColor(payload.issue.title)} edited in ${repoColor(repo.name)}`);
            else if (payload.action === 'deleted')
                log(`- ${actionColor("Issue")} ${detailColor(payload.issue.title)} deleted in ${repoColor(repo.name)}`);
            break;

        // issue event
        case 'IssuesEvent':
            switch(payload.action) {
                case 'opened':
                    log(`- ${actionColor("Opened a new issue")} ${detailColor(payload.issue.title)} in ${repoColor(repo.name)}`);
                    break;
                case 'edited':
                    log(`- ${actionColor("Edited issue")} ${detailColor(payload.issue.title)} in ${repoColor(repo.name)}`);
                    break;
                case 'closed':
                    log(`- ${actionColor("Closed an issue")} ${detailColor(payload.issue.title)} in ${repoColor(repo.name)}`);
                    break;
                case 'reopened':
                    log(`- ${actionColor("Reopened issue")} ${detailColor(payload.issue.title)} in ${repoColor(repo.name)}`);
                    break;
                case 'assigned':
                    log(`- ${actionColor("Assigned Issue")} ${detailColor(payload.issue.title)} in ${repoColor(repo.name)} to ${detailColor(payload.assignee)}`);
                    break;
                case 'unassigned':
                    log(`- ${actionColor("Unassigned Issue")} ${detailColor(payload.issue.title)} in ${repoColor(repo.name)} from ${detailColor(payload.assignee)}`);
                    break;
                case 'labeled':
                    log(`- ${actionColor("Labeled Issue")} ${detailColor(payload.issue.title)} in ${repoColor(repo.name)} as ${detailColor(payload.label)}`);
                    break;
                case 'unlabeled':
                    log(`- ${actionColor("Removed label")} ${detailColor(payload.label)} from Issue ${detailColor(payload.issue.title)} in ${repoColor(repo.name)}`)
                    break;
                default:
                    log(`- ${actionColor("Performed Issue Event")} ${detailColor(payload.issue.title)} in ${repoColor(repo.name)}`);
            }
            break;
        
        // member event
        case 'MemberEvent':
            log(`- ${actionColor("Performed member event")} ${detailColor(payload.action)} action in ${repoColor(repo.name)}`);
            break;
        
        // public event
        case 'PublicEvent':
            log(`- ${actionColor("Made")} ${repoColor(repo.name)} public`);
            break;
        
        // pull event
        case 'PullRequestEvent':
            switch(payload.action) {
                case 'opened':
                    log(`- ${actionColor("Opened a new pull request")} ${detailColor(payload.pull_request.title)} in ${repoColor(repo.name)}`);
                    break;
                case 'edited':
                    log(`- ${actionColor("Edited pull request")} ${detailColor(payload.pull_request.title)} in ${repoColor(repo.name)}`);
                    break;
                case 'closed':
                    if (payload.pull_request.merged) {
                        log(`- ${actionColor("Merged pull request")} ${detailColor(payload.pull_request.title)} in ${repoColor(repo.name)}`);
                    } else {
                        log(`- ${actionColor("Closed pull request")} ${detailColor(payload.pull_request.title)} in ${repoColor(repo.name)}`);
                    }
                    break;
                case 'reopened':
                    log(`- ${actionColor("Reopened pull request")} ${detailColor(payload.pull_request.title)}" in ${repoColor(repo.name)}`);
                    break;
                case 'assigned':
                    log(`- ${actionColor("Assigned pull request")} ${detailColor(payload.pull_request.title)} in ${repoColor(repo.name)} to ${detailColor(payload.assignee.login)}`);
                    break;
                case 'unassigned':
                    log(`- ${actionColor("Unassigned pull request")} ${detailColor(payload.pull_request.title)} in ${repoColor(repo.name)} from ${detailColor(payload.assignee.login)}`);
                    break;
                case 'review_requested':
                    log(`- ${actionColor("Requested review for pull request")} ${detailColor(payload.pull_request.title)} in ${repoColor(repo.name)} from ${detailColor(payload.requested_reviewer.login)}`);
                    break;
                case 'review_request_removed':
                    log(`- ${actionColor("Removed review request for pull request")} ${detailColor(payload.pull_request.title)} in ${repoColor(repo.name)} from ${detailColor(payload.requested_reviewer.login)}`);
                    break;
                case 'labeled':
                    log(`- ${actionColor("Labeled pull request")} ${detailColor(payload.pull_request.title)} in ${repoColor(repo.name)} as ${detailColor(payload.label.name)}`);
                    break;
                case 'unlabeled':
                    log(`- ${actionColor("Removed label")} ${detailColor(payload.label.name)} from pull request ${detailColor(payload.pull_request.title)} in ${repoColor(repo.name)}`);
                    break;
                case 'synchronize':
                    log(`- ${actionColor("Updated the source branch for pull request")} ${detailColor(payload.pull_request.title)} in ${repoColor(repo.name)}`);
                    break;
                default:
                    log(`- ${actionColor("Performed Pull Request Event")} ${detailColor(payload.action)}`);
            }
            break;

        // PullRequestReviewEvent
        case 'PullRequestReviewEvent':
            log(`- ${actionColor("For pull request")} ${detailColor(payload.pull_request.title)} Review action ${detailColor(payload.action)}  was performed in ${repoColor(repo.name)}`);
            break;
        
        // PullRequestReviewCommentEvent
        case 'PullRequestReviewCommentEvent':
            log(`- ${actionColor("For pull request")} ${detailColor(payload.pull_request.title)} Review comment action ${detailColor(payload.action)}  was performed in ${repoColor(repo.name)}`);
            break;

        // PullRequestReviewThreadEvent
        case 'PullRequestReviewThreadEvent':
            if(payload.action === 'resolved')
                log(`- ${actionColor("Pull request")} ${detailColor(payload.pull_request.title)} marked as Resolved in ${repoColor(repo.name)}`);
            else if(payload.action === 'unresolved')
                log(`- ${actionColor("Pull request")} ${detailColor(payload.pull_request.title)} marked as unresolved in ${repoColor(repo.name)}`);
            break;

        // push event
        case 'PushEvent':
            log(`- ${actionColor("Pushed")} ${detailColor(payload.size)} commits to ${repoColor(repo.name)}`);
            break;

        // Release event
        case 'ReleaseEvent':
            log(`- ${actionColor("Release Event")} ${detailColor(payload.action)} performed in ${repoColor(repo.name)}`);
            break;

        // Sponshership Event
        case 'SponsorshipEvent':
            log(`- ${actionColor("Sponsorship Event")} ${detailColor(payload.action)} performed in ${repoColor(repo.name)}`);
            break;

        // starred repository
        case 'WatchEvent':
            log(`- ${actionColor("Starred")} ${repoColor(repo.name)}`);
            break;
    }
}

export default createEventSummary;