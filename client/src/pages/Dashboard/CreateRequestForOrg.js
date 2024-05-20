import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";

const CreateRequestForOrg = () => {
  const [message, setMessage] = useState("");
  const [previousPost, setPreviousPost] = useState([]);
  const [bool, setBool] = useState(false);
  const handleClick = async () => {
    try {
      if (message.length === 0) {
        return alert("Please fill the form before submitting");
      }
      const data = await API.post("/message/create-messagefor-org", {
        message,
      });
      if (data?.status === 200) {
        alert(data.data.message);
        setMessage("");
        setBool(!bool);
      } else {
        alert("unable to post");
      }
    } catch (error) {
      console.log(error);
      alert("Error in posting");
    }
  };

  const getPreviousPosts = async () => {
    try {
      const { data } = await API.get("/message/get-previousReqBy-hospital");
      if (data?.success) {
        console.log(data);
        setPreviousPost(data?.data);
      } else {
        alert(data?.message);
      }
    } catch (error) {
      alert("Error in getting messages");
      console.log(error);
    }
  };
  useEffect(() => {
    getPreviousPosts();
  }, [bool]);

  return (
    <Layout>
      <div className="p-5">
        <div className="">
          <h3>Request for Blood from Organisation</h3>
          <div className="" style={{ width: 1000 }}>
            <textarea
              style={{ display: "block", marginBottom: 12 }}
              name=""
              id=""
              cols="160"
              rows="4"
              value={message}
              placeholder="Enter blood details"
              className="form-control "
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary right"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="" style={{ marginTop: 20 }}>
          <h2 className="">Your Previous Requests :</h2>
          {previousPost?.map((post, ind) => (
            <div
              className=""
              style={{
                backgroundColor: "gray",
                marginBottom: 10,
                padding: 10,
                borderRadius: 6,
                fontSize: 15,
              }}
              key={ind}
            >
              {post.message}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CreateRequestForOrg;
