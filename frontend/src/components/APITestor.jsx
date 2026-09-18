import { useState } from "react";
import axios from "axios";
import "./APITestor.css";
function APITestor() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("");

  const sendRequest = async () => {
    try {
      let result;

      if (method === "GET") {
        result = await axios.get(url);
      } 
      else if (method === "POST") {
        result = await axios.post(url, JSON.parse(body));
      } 
      else if (method === "PUT") {
        result = await axios.put(url, JSON.parse(body));
      } 
      else if (method === "DELETE") {
        result = await axios.delete(url);
      }

      setStatus(result.status);
      setResponse(JSON.stringify(result.data, null, 2));
    } 
    catch (error) {
      if (error.response) {
        setStatus(error.response.status);
        setResponse(JSON.stringify(error.response.data, null, 2));
      } else {
        setStatus("Error");
        setResponse(error.message);
      }
    }
  };

  return (
    <div>
      <h1>API Tester</h1>

      <select
        value={method}
        onChange={(e) => setMethod(e.target.value)}
      >
        <option>GET</option>
        <option>POST</option>
        <option>PUT</option>
        <option>DELETE</option>
      </select>

      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={sendRequest}>
        Send Request
      </button>

      <h3>Input</h3>

      <textarea
        placeholder='Enter JSON body'
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <h3>Response</h3>

      <pre>{response}</pre>

      <h3>Status</h3>

      <p>{status}</p>
    </div>
  );
}

export default APITestor;