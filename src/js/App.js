import Team from './Team';

const newTeam = new Team();
for (const newTeamElement of newTeam.teams) {
  console.log(newTeamElement);
}
console.log(newTeam);
