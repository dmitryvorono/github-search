export interface GithubRepository {
  id: number;
  name: string;
  description: string;
  owner: { avatar_url: string };
  html_url: string;
  open_issues: number;
}
