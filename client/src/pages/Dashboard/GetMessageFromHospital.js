import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";

const GetMessageFromHospital = () => {
  const [message, setMessage] = useState([]);

  const getMessages = async () => {
    try {
      const { data } = await API.get("/message/get-messagefrom-hospital");

      if (data?.success) {
        console.log(data.data);
        setMessage(data.data);
      } else {
        alert("Error in getting messages");
      }
    } catch (error) {
      alert("Error in getting messages");
      console.log(error);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <Layout>
      <div className="" style={{ margin: 10 }}>
        <h2>Blood Requests from Hospitals</h2>
        {message?.map((record, ind) => (
          <div
            className=""
            style={{
              backgroundColor: "#A8CD9F",
              marginBottom: 20,
              borderRadius: 5,
            }}
          >
            <div
              className=""
              style={{
                backgroundColor: "#E2F4C5",
                marginBottom: 10,
                padding: 10,
                fontSize: 15,
              }}
              key={ind}
            >
              <span style={{ fontSize: 15, fontWeight: 700 }}>DETAILS</span> :{" "}
              {record.message}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default GetMessageFromHospital;
