const form = document.getElementById("cadastro-form");
const statusMessage = document.getElementById("status-message");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwfBMqSvQ5fkyqZ1LR3-_AhWS0MK7fssqqd8p9twxbbyHNJNNf64G166882rZK_FL3V/exec";

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  statusMessage.textContent = "Enviando cadastro...";

  const formData = new FormData(form);

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });

    if (response.type !== "opaque" && !response.ok) {
      throw new Error("Falha ao enviar os dados.");
    }

    form.reset();
    statusMessage.textContent =
      "Cadastro enviado com sucesso! Verifique sua planilha.";
  } catch (error) {
    statusMessage.textContent =
      "Não foi possível enviar. Revise o link do Google Apps Script.";
  }
});