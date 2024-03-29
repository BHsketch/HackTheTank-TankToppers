import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Button, Stack } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Graph from "./Graph";
import { Button, Drawer, Stack } from "@mui/material";
import BasicModal from "./BasicModal";
import { AiOutlineMenuFold } from "react-icons/ai";
import UsersModal from "./UsersModal";
import UsersScholarshipModal from "./UserScholarshipModal";

function Intermediate() {
  const { scholarshipId } = useParams();
  const navigate = useNavigate();
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  //   const handleModalOpen = () => {
  //     setIsModalOpen(true);
  //   };

  //   const handleModalClose = () => {
  //     setIsModalOpen(false);
  //   };

  const [initialStateCount, setInitialStateCount] = useState({
    userCount: 0,
    loginCount: 0,
    failedLoginCount: 0,
    contactCount: 0,
    aboutCount: 0,
    scholarshipListingCount: 0,
    homeCount: 0,
    scholarshipCount: 0,
    bookmarkCount: 0,
    applyCount: 0,
    termsCount: 0,
    ineligibleCount: 0,
    incompleteCount: 0,
    submittedCount: 0,
    failedCount: 0,
    successCount: 0,
  });

  const [initialStateUser, setInitialStateUser] = useState({
    bookmarkUsers: [],
    submittedUsers: [],
    appliedUsers: [],
    termsUsers: [],
    ineligibleUsers: [],
    incompleteUsers: [],
    failedUsers: [],
    successUsers: [],
    allUsers: [],
    userScholarship: [],
  });

  useEffect(() => {
    const fetchUsersCount = async (scholarshipId) => {
      try {
        const p1 = await axios.get("http://localhost:8800/users");
        const response1 = p1.data[0].user_count;
        const p = await axios.get("http://localhost:8800/pages");
        const response = p.data;
        const count = await axios.get(
          `http://localhost:8800/scholarshipCount/${scholarshipId}`
        );
        const ans = count.data.scholarshipCount;
        // console.log(ans);
        const bookmark = await axios.get(
          `http://localhost:8800/${scholarshipId}/bookmark`
        );
        const applied = await axios.get(
          `http://localhost:8800/${scholarshipId}/applied`
        );
        const terms = await axios.get(
          `http://localhost:8800/${scholarshipId}/terms`
        );
        const ineligible = await axios.get(
          `http://localhost:8800/${scholarshipId}/ineligible`
        );
        const incomplete = await axios.get(
          `http://localhost:8800/${scholarshipId}/incomplete`
        );
        const submitted = await axios.get(
          `http://localhost:8800/${scholarshipId}/submitted`
        );
        const failed = await axios.get(
          `http://localhost:8800/${scholarshipId}/failed`
        );
        const success = await axios.get(
          `http://localhost:8800/${scholarshipId}/success`
        );
        const allUsersData = await axios.get(`http://localhost:8800/allUsers`);
        const allUserScholarshipData = await axios.get(
          `http://localhost:8800/user_scholarship_data`
        );
        // console.log(submitted.data.users);
        console.log(allUsersData.data);
        console.log(allUserScholarshipData.data);
        setInitialStateCount({
          ...initialStateCount,
          userCount: response1,
          loginCount: response.p1,
          homeCount: response.p2,
          failedLoginCount: response.p1 - response.p2,
          contactCount: response.p3,
          scholarshipListingCount: response.p4,
          aboutCount: response.p5,
          scholarshipCount: ans,
          bookmarkCount: bookmark.data.userCount,
          applyCount: applied.data.userCount,
          termsCount: terms.data.userCount,
          ineligibleCount: ineligible.data.userCount,
          incompleteCount: incomplete.data.userCount,
          submittedCount: submitted.data.userCount,
          failedCount: failed.data.userCount,
          successCount: success.data.userCount,
        });
        setInitialStateUser({
          bookmarkUsers: bookmark.data.users,
          submittedUsers: submitted.data.users,
          appliedUsers: applied.data.users,
          termsUsers: terms.data.users,
          ineligibleUsers: ineligible.data.users,
          incompleteUsers: incomplete.data.users,
          failedUsers: failed.data.users,
          successUsers: success.data.users,
          allUsers: allUsersData.data,
          userScholarship: allUserScholarshipData.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsersCount(scholarshipId);
  }, []);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const buttonConfigurations = [
    {
      buttonText: "Applied Application",
      modalData: initialStateUser.appliedUsers,
      isOpen: false,
      heading: "Users which applied",
    },
    {
      buttonText: "Bookmarked Application",
      modalData: initialStateUser.bookmarkUsers,
      isOpen: false,
      heading: "Users which bookmarked",
    },
    {
      buttonText: "Terms & Conditions",
      modalData: initialStateUser.termsUsers,
      isOpen: false,
      heading: "Users which observed terms and conditions",
    },
    {
      buttonText: "Ineligible",
      modalData: initialStateUser.ineligibleUsers,
      isOpen: false,
      heading: "Users which were ineligible",
    },
    {
      buttonText: "Submitted Application",
      modalData: initialStateUser.submittedUsers,
      isOpen: false,
      heading: "Users which submitted their application",
    },
    {
      buttonText: "Incomplete Application",
      modalData: initialStateUser.incompleteUsers,
      isOpen: false,
      heading: "Users which left incomplete application",
    },
    {
      buttonText: "Failed Document Verification",
      modalData: initialStateUser.failedUsers,
      isOpen: false,
      heading: "Users which failed document verification",
    },
    {
      buttonText: "Successfully Applied",
      modalData: initialStateUser.successUsers,
      isOpen: false,
      heading: "Users which successfully applied",
    },
  ];

  const [modals, setModals] = useState(() => {
    // Initialize the modals state with the initial configurations
    return buttonConfigurations.map(() => ({ isOpen: false }));
  });

  const handleModalOpen = (index) => {
    const updatedModals = modals.map((modal, i) =>
      i === index ? { ...modal, isOpen: true } : modal
    );
    setModals(updatedModals);
  };

  const handleModalClose = (index) => {
    const updatedModals = [...modals];
    updatedModals[index].isOpen = false;
    setModals(updatedModals);
  };

  const renderButtons = () => {
    return buttonConfigurations.map((config, index) => (
      <Button
        key={index}
        variant="contained"
        color="warning"
        onClick={() => handleModalOpen(index)}
      >
        {config.buttonText}
      </Button>
    ));
  };

  const renderModals = () => {
    return buttonConfigurations.map((config, index) => (
      <BasicModal
        key={index}
        open={modals[index]?.isOpen}
        handleOpen={() => handleModalOpen(index)}
        handleClose={() => handleModalClose(index)}
        data={config.modalData}
        heading={config.heading}
      />
    ));
  };

  const [usersModalOpen, setUsersModalOpen] = useState(false);
  const handleOpenUsersModal = () => setUsersModalOpen(true);
  const handleCloseUsersModal = () => setUsersModalOpen(false);

  const [usersScholarshipModalOpen, setUsersScholarshipModalOpen] =
    useState(false);
  const handleOpenUsersScholarshipModal = () =>
    setUsersScholarshipModalOpen(true);
  const handleCloseUsersScholarshipModal = () =>
    setUsersScholarshipModalOpen(false);

  return (
    <div>
      {initialStateCount.userCount !== 0 ? (
        <Graph data={initialStateCount} />
      ) : (
        <div class="custom-loader">loading</div>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={toggleDrawer}
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          fontSize: "30px",
        }}
      >
        <AiOutlineMenuFold />
      </Button>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <Stack spacing={2}>{renderButtons()}</Stack>
      </Drawer>

      {renderModals()}
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenUsersModal}
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
          fontSize: "15px",
        }}
      >
        Users details
      </Button>
      {setUsersModalOpen && (
        <UsersModal
          open={usersModalOpen}
          handleClose={handleCloseUsersModal}
          data={initialStateUser.allUsers}
        />
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenUsersScholarshipModal}
        style={{
          position: "fixed",
          top: "90px",
          left: "10px",
          fontSize: "15px",
        }}
      >
        Users-Scholarship Details
      </Button>
      {setUsersScholarshipModalOpen && (
        <UsersScholarshipModal
          open={usersScholarshipModalOpen}
          handleClose={handleCloseUsersScholarshipModal}
          data={initialStateUser.userScholarship}
        />
      )}
    </div>
  );
}

export default Intermediate;
