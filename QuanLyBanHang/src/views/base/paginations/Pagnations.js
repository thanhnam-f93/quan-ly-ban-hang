import React, { useState } from "react";
import { CCard, CCardBody,CPagination } from "@coreui/react";

const Paginations = () => {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <>
      <CCard>
        <CCardBody>
          <CPagination
            align="center"
            addListClass="some-class"
            activePage={currentPage}
            pages={5}
            onActivePageChange={setCurrentPage}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Paginations;
