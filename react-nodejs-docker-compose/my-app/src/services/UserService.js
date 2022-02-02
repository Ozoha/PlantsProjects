
export async function getAllSamples() {

    const response = await fetch('/api/samples');
    return await response.json();
}

export async function createSample(data) {
    const response = await fetch(`/api/sample`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}