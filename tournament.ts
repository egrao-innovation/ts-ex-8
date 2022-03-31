// MP: Matches Played
// W: Matches Won
// D: Matches Drawn (Tied)
// L: Matches Lost
// P: Points

export class Tournament {
  // AllegoricAlaskans = [0, 0, 0, 0, 0]
  // BlitheringBadgers = [0, 0, 0, 0, 0]
  // CourageousCalifornians = [0, 0, 0, 0, 0]
  // DevastatingDonkeys = [0, 0, 0, 0, 0]
  teams: { [key: string]: number[] } = { 'AllegoricAlaskans': [0, 0, 0, 0, 0], 'BlitheringBadgers': [0, 0, 0, 0, 0], 'CourageousCalifornians': [0, 0, 0, 0, 0], 'DevastatingDonkeys': [0, 0, 0, 0, 0] }
  header:string = `Team                           | MP |  W |  D |  L |  P`
  table:string [] = []

  public tally(input: string): string {
    if(input === ''){
      return this.header;
    }
    var inputArray: string[] = input.split('\n');
    var teamsPlaying: string [] = [];
    for (var i = 0; i < inputArray.length; i++) {
      var innerinputArray: string[] = inputArray[i].split(";");
      var x: string = innerinputArray[0];
      var y: string = innerinputArray[1];
      if(!teamsPlaying.includes(x)){teamsPlaying.push(x)}
      if(!teamsPlaying.includes(y)){teamsPlaying.push(y)}
      var dataTeam1 = this.teams[(x.split(' ').join(''))];
      var dataTeam2 = this.teams[(y.split(' ').join(''))];
      dataTeam1[0] += 1;
      dataTeam2[0] += 1;
      if(innerinputArray[2] === 'win'){
        dataTeam1[1] += 1
        dataTeam1[4] +=3
        dataTeam2[3] += 1
      }
      else if(innerinputArray[2] === 'loss'){
        dataTeam1[3] += 1
        dataTeam2[1] += 1
        dataTeam2[4] += 3
      }
      else if(innerinputArray[2] === 'draw'){
        dataTeam1[2] += 1
        dataTeam2[2] += 1
        dataTeam1[4] += 1
        dataTeam2[4] += 1
      }
    }


    var rows =[`Allegoric Alaskans             |  ${this.teams['AllegoricAlaskans'][0] } |  ${this.teams['AllegoricAlaskans'][1] } |  ${this.teams['AllegoricAlaskans'][2] } |  ${this.teams['AllegoricAlaskans'][3] } |  ${this.teams['AllegoricAlaskans'][4] }`,
    `Blithering Badgers             |  ${this.teams['BlitheringBadgers'][0] } |  ${this.teams['BlitheringBadgers'][1] } |  ${this.teams['BlitheringBadgers'][2] } |  ${this.teams['BlitheringBadgers'][3] } |  ${this.teams['BlitheringBadgers'][4] }`,
    `Courageous Californians        |  ${this.teams['CourageousCalifornians'][0] } |  ${this.teams['CourageousCalifornians'][1] } |  ${this.teams['CourageousCalifornians'][2] } |  ${this.teams['CourageousCalifornians'][3] } |  ${this.teams['CourageousCalifornians'][4] }`,
    `Devastating Donkeys            |  ${this.teams['DevastatingDonkeys'][0] } |  ${this.teams['DevastatingDonkeys'][1] } |  ${this.teams['DevastatingDonkeys'][2] } |  ${this.teams['DevastatingDonkeys'][3] } |  ${this.teams['DevastatingDonkeys'][4] }`,]

    for (var i = 0; i < teamsPlaying.length; i++) {
      if(teamsPlaying[i].split(' ').join('') === 'AllegoricAlaskans'){
        this.table.push(rows[0])
      }
      else if(teamsPlaying[i].split(' ').join('') === 'BlitheringBadgers'){
        this.table.push(rows[1])
      }
      else if(teamsPlaying[i].split(' ').join('') === 'CourageousCalifornians'){
        this.table.push(rows[2])
      }
      else if(teamsPlaying[i].split(' ').join('') === 'DevastatingDonkeys') {
        this.table.push(rows[3])
      }
    }

    this.table.sort((n1,n2) => {
      // debugger
        if (parseInt(n1.substring(n1.length-2, n1.length)) > parseInt(n2.substring(n2.length-2, n2.length))) {
            return -1;
        }
        else if (parseInt(n1.substring(n1.length-2, n1.length)) < parseInt(n2.substring(n2.length-2, n2.length))) {
            return 1;
        }
        else{
          if (n1.charAt(0) > n2.charAt(0)) {
            return 1;
        }
          else if (n1.charAt(0) < n2.charAt(0)) {
            return -1;
          }
        }
        return 0;
    });
    for (var i = 0; i < this.table.length; i++) {
      debugger
      var hola =this.table[i].charAt(this.table[i].length-2);
      if(hola === ''){
        console.log("yay")
      }
      else{
        var pepito = this.table[i] = this.table[i].slice(0,-4)+this.table[i].slice(-3)
      }
      // this.table[i] = (!(this.table[i].charAt(this.table[i].length-2) === '')) ? this.table[i].slice(0,-3)+this.table[i].slice(-3) : this.table[i];
    }
    this.table.unshift(this.header)

  return this.table.join('\n')
  }
}
