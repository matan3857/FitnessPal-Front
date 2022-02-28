import React from 'react'
import Loader from "react-loader-spinner";

export  function LoaderSpinner() {
    return (
        <Loader
        type="TailSpin"
        color="#302f2f"
        height={90}
        width={90}
      />
    )
}
