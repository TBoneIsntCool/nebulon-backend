export default {
    async fetch(request) {
        try {
            const apiUrl = "https://astroservercheck.joejoetv.de/api/check?url=147.185.221.16:23237";
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Extract player count
            const playerCount = data.server?.onlinePlayers ?? "Error";

            return new Response(JSON.stringify({ playerCount }), {
                headers: { "Content-Type": "application/json" }
            });

        } catch (error) {
            return new Response(JSON.stringify({ playerCount: "Error" }), {
                headers: { "Content-Type": "application/json" }
            });
        }
    }
};
