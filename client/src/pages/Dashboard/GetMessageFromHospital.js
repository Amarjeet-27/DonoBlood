import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";
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
            key={ind}
            className=""
            style={{
              backgroundColor: "#2e3200",
              marginBottom: 20,
              borderRadius: 5,
            }}
          >
            <div
              className=""
              style={{
                backgroundColor: "#2e3200",
                color: "white",
                marginBottom: 15,
                marginTop: 15,
                padding: 10,
                fontSize: 15,
                borderRadius: 10,
              }}
              key={ind}
            >
              <span style={{ fontSize: 15, fontWeight: 700 }}>DETAILS</span> :{" "}
              {record.message}
              <hr />
              <p>
                <span style={{ marginRight: 20 }}>
                  Name : {record.hospitalId.hospitalName}
                </span>
                <span style={{ marginRight: 20 }}>
                  Address : {record.hospitalId.address}
                </span>
                <span style={{ marginRight: 20 }}>
                  Phone.No: {record.hospitalId.phone}
                </span>
                <span style={{ marginRight: 20 }}>
                  Phone.No:{" "}
                  {moment(record.createdAt).format("DD/MM/YYYY")}
                </span>
                Email: {record.hospitalId.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default GetMessageFromHospital;
