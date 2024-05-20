$(document).ready(function() {


    let timer; // Variável para armazenar o intervalo
    let inputValue; // Variável para o tempo restante

    $("#startButton").on("click", function(){
        start();
    })

    $("#pauseButton").on("click", function(){

        pause();

    })

    $("#resetButton").on("click", function() {
        reset(); // Reseta o contador regressivo
    });

    // $("")

    function start(){

        if (timer) clearInterval(timer); // Para qualquer contador anterior

        inputValue = parseInt($("#timeInput").val(), 10); // Pega o valor do input e converte para número
            // como se fosse =  let inputValue = $("#timeInput").val();

            if (isNaN(inputValue) || inputValue <= 0) {
                alert("Por favor, insira um tempo válido em segundos.");
                return;
            }
            $("span").text("00:" + String(inputValue).padStart(2, '0')); // Exibe o tempo inicial no formato 00:XX
            $("img").attr("src", "./botao-de-pausa-de-video.png"); // Troca para a imagem de pausa

            startCountdown(inputValue); // Inicia a contagem regressiva com o valor do input

        }


        function startCountdown(time){

            inputValue = time; // Define o tempo restante como o tempo fornecido

            timer = setInterval(function() {
                if (inputValue > 0) {
                    inputValue--;
                    $("span").text("00:" + String(inputValue).padStart(2, '0')); // Atualiza o displa
                } else {
                    clearInterval(timer); // Para o intervalo quando o tempo acabar
                    $("span").text("00:00"); // Exibe 00:00 quando o tempo acabar
                    $("img").attr("src", "./botao-play.png"); // Troca para a imagem de play
                    $("#timeInput").val('');

                }
                }, 1000);
        }

    function pause() {
        clearInterval(timer); // Para o intervalo, pausando o contador
        $("img").attr("src", "./botao-play.png"); // Troca para a imagem de play
        $("#pauseButton").text("Retornar"); // Muda o texto do botão para "Retornar"
        $("#pauseButton").off("click").on("click", resume); // Troca o handler do click para a função "resume"
    }
    

    function resume() {
        $("img").attr("src", "./botao-de-pausa-de-video.png"); // Troca para a imagem de pausa
        $("#pauseButton").text("Pausar"); // Muda o texto do botão de volta para "Pausar"
        $("#pauseButton").off("click").on("click", pause); // Troca o handler do click para a função "pause"
        startCountdown(inputValue);     // Reinicia a contagem regressiva com o tempo restante antes de pausar

        }
    
    function reset() {
        window.location.reload(false);

        // // clearInterval(timer);
        // $("span").text("00:00");
        // $("#timeInput").val('');
        // $("img").attr("src", "./botao-play.png"); // Troca para a imagem de pausa

    };


    

















})