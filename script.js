const form = document.getElementById("cadastro-form");
const statusMessage = document.getElementById("status-message");

const scriptURL =
  "https://script.google.com/macros/s/REPLACE_WITH_SCRIPT_ID/exec";

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  statusMessage.textContent = "Enviando cadastro...";

  const formData = new FormData(form);

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
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
