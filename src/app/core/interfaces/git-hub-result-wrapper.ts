import { GithubRepository } from "./github-repository";

export interface GitHubResultWrapper {
  total_count: number;
  incomplete_results: boolean;
  items: GithubRepository[];
}
