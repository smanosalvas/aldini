class Http {
    static instance = new Http();

    get =  async () => {
        try {
            let req = await fetch('https://api.coinlore.net/api/tickers/');
            let json = await req.json();
            return json;
        } catch (error) {
            console.log('error get method ', error);
            throw Error(error);
        }
    }
}

export default Http;