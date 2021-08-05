function Login_button(){
    player1 = document.getElementById("P1").value;
   
    player2 = document.getElementById("P2").value;
    localStorage.setItem("Player 1", player1);
    localStorage.setItem("Player 2", player2);
   }

   function next() {
    window.location = "index.html";
}