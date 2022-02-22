import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID AScIV0qzmEDntBjPwG2WKXsnKWGFQDh9h0jxBaZknPE"
    }
});