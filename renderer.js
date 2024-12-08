document.getElementById('request-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const method = document.getElementById('method').value;
    const url = document.getElementById('url').value;
    const headers = document.getElementById('headers').value ? JSON.parse(document.getElementById('headers').value) : {};
    const body = document.getElementById('body').value ? JSON.parse(document.getElementById('body').value) : null;

    const responseOutput = document.getElementById('response-output');
    responseOutput.textContent = 'Loading...';

    try {
        const response = await window.api.makeRequest({ method, url, headers, body });
        responseOutput.textContent = JSON.stringify(response, null, 2);
    } catch (error) {
        responseOutput.textContent = `Error: ${error.message}`;
    }
});
