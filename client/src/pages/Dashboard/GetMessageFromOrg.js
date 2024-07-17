import React, { useEffect, useInsertionEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";
const GetMessageFromOrg = () => {
  const [message, setMessage] = useState([]);

  const getMessages = async () => {
    try {
      const { data } = await API.get("/message/get-messagefrom-org");

      if (data?.success) {
        setMessage(data.data);
        console.log(data.data);
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
        <h2>Blood Request from Organisation</h2>
        {message?.map((record, ind) => (
          
          <div
            className=""
            style={{
              backgroundColor: "#2e3200",
              marginBottom: 20,
              borderRadius: 5,
              paddingRight: 10,
              paddingLeft: 10,
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
              <p style={{ color: "white" }}>
                <span style={{ marginRight: 20 }}>
                  Name:- {record.organisationId.organisationName}
                  
                </span>
                <span style={{ marginRight: 20 }}>
                  Address:- {record.organisationId.address}
                </span>
                <span style={{ marginRight: 20 }}>
                  Email:- {record.organisationId.email}
                </span>
                <span style={{ marginRight: 20 }}>
                  Phone.No:- {record.organisationId.phone}
                </span>
                <span style={{ marginRight: 20 }}>
                 RequestedAt:- {moment(record.createdAt).format("h:mm a DD/MM/YYYY")}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default GetMessageFromOrg;
