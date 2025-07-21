import fetch from 'node-fetch';

async function fetchWebPage() {
    const url = 'https://www.google.com';

    try {
        console.log(`Fetching ${url}...`);
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const html = await response.text();
        console.log(`Content:\n${html}`);

        return html;
    } catch (error) {
        console.error('Failed to fetch Data:', error.message);
        throw error;
    }
}

await fetchWebPage();