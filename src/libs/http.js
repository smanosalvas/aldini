class Http {
    static instance = new Http();

    get =  async (uri) => {
        try {
            let req = await fetch(`http://192.168.100.12:8000/${uri}/`);
            let json = await req.json();
            console.log(json)
            return json;
        } catch (error) {
            console.log('error get method ', error);
            throw Error(error);
        }
    }
}

export default Http;