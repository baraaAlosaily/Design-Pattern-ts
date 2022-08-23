import Game1 from "./game1";
import Game2 from "./game2";
import Game3 from "./game3";
import LeaderBoard from "./Leaderboard";

const GAME1=new Game1();
GAME1.addWinner(1,'Baraa');

const GAME2=new Game2();
GAME2.addWinner(2,'Mohammad');

const GAME3=new Game3();
GAME3.addWinner(3,'lol');

GAME1.leaderBoard.print();
GAME2.leaderBoard.print();
GAME3.leaderBoard.print();

