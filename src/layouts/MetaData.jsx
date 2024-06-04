import React from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";

const MetaData = ({ title }) => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>{`${title} - Shaguda Labs`}</title>
        </Helmet>
      </HelmetProvider>
    </div>
  );
};

export default MetaData;
