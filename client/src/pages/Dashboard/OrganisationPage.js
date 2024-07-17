import React, { useEffect, useState } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import moment from "moment";
import { useSelector } from "react-redux";
import API from "../../services/API";

const OrganisationPage = () => {
  // get current user
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  //find org records
  const getOrg = async () => {
    try {
      if (user?.role === "donar") {
        const { data } = await API.get("/inventory/get-organisation");
        // console.log(data);
        if (data?.success) {
          setData(data?.organisations);
        }
      }
      if (user?.role === "hospital") {
        const { data } = await API.get(
          "/inventory/get-organisations-for-hospital"
        );
        //   console.log(data);
        if (data?.success) {
          setData(data?.organisations);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrg();
  }, [user]);

  return (
    <Layout>
      <h2 style={{marginLeft:18, marginTop:10}}>Lists of all the Organisations</h2>
      <div className="container mt-4">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Org Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((record) => (
              <tr key={record._id}>
                <td>{record.organisationName}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{record.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default OrganisationPage;
