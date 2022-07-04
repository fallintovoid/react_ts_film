
const gorequest = () => {
    const request = async (url: string) => {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error("Couldn`t fetch status:" + res.status);
            }
            const data = await res.json()
            
            return data;
        } catch (error) {
            throw error;
        }
    }

    return { request }
}

export default gorequest;