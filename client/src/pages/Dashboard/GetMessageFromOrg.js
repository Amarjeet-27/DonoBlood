import React, { useEffect, useInsertionEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";

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
              backgroundColor: "#A8CD9F",
              marginBottom: 20,
              borderRadius: 6,
            }}
          >
            <table className="table" style={{ marginBottom: 0 }}>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{record.organisationId.organisationName}</td>
                  <td>{record.organisationId.email}</td>
                  <td>{record.organisationId.phone}</td>
                  <td>{record.organisationId.address}</td>
                </tr>
              </tbody>
            </table>
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

export default GetMessageFromOrg;
