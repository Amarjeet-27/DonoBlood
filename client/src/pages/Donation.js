import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../components/shared/Layout/Layout";
import API from "../services/API";
import { useSelector } from "react-redux";

const Donation = () => {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  //find donar records
  const getDonars = async () => {
    try {
      const { data } = await API.post("/inventory/get-inventory-hospital", {
        filters: {
          inventoryType: "in",
          donar: user?._id,
        },
      });
      if (data?.success) {
        setData(data?.inventory);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(() => {
    getDonars();
  }, []);

  return (
    <Layout>
      {/* <h2>Blood Taken from Ogranisations </h2> */}
      <div className="container mt-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Quantity(ML)</th>
              <th scope="col">Org Name</th>
              <th scope="col">Org Email</th>
              <th scope="col">Org Address</th>
              <th scope="col">Donated On</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>
                  {record.quantity}
                  {" (ML)"}
                </td>
                <td>{record.organisation.organisationName}</td>
                <td>{record.organisation.email}</td>
                <td>{record.organisation.address}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Donation;
