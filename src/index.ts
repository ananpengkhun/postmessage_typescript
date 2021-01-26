const handleBackToGGApp = () => {
    // if (typeof (window as WindowWithPrintType).Print === "undefined") {
    //   window.location.href = process.env.REACT_APP_GG_APP_URL as string;
    //   return;
    // }
    window.postMessage({type: 'go_back_to_ggapp', payload: {}},"*");
  };

  