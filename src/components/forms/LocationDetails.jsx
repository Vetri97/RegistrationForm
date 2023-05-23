import React, { useEffect, useRef, useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import "./LocationDetails.scss";
import { Grid } from "@mui/material";
import { InputField } from "../uiControls";
import { useFormikContext } from "formik";
import { useSelector } from "react-redux";

/**
 * @author Vetrivel Kumaravel
 * @function LocationDetails
 **/

function useLocalStorage(key, initialValue, callback) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    let shouldInvokeCallback = true;

    const handleStorageChange = (event) => {
      if (event.key === key && shouldInvokeCallback) {
        callbackRef.current(localStorage.getItem(key));
      }
    };

    const storedValue = localStorage.getItem(key);
    if (storedValue === null) {
      localStorage.setItem(key, initialValue);
      callbackRef.current(initialValue);
    } else {
      callbackRef.current(storedValue);
    }

    window.addEventListener("storage", handleStorageChange);

    return () => {
      shouldInvokeCallback = false;
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, initialValue]);
}

const LocationDetails = (props) => {
  const stateData = useSelector((state) => state);
  console.log(stateData, "State");
  const {
    formField: { address1, address2, city, state, country, pincode },
  } = props;

  const { setFieldValue } = useFormikContext();
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  useLocalStorage("address", "", (address) => {
    setAddress(address);
    handleSelect(localStorage.getItem("selectedAddress"));
  });
  const handleSelect = async (selectedAddress) => {
    try {
      localStorage.setItem("selectedAddress", selectedAddress);
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);

      const addressComponents = results[0].address_components;
      const formattedAddress = results[0].formatted_address;

      const addressDetails = {
        address1: "",
        address2: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
      };

      addressComponents.forEach((component) => {
        const { types, long_name } = component;

        if (types.includes("street_number")) {
          addressDetails.address1 = long_name;
        }

        if (types.includes("route")) {
          addressDetails.address2 = long_name;
        }

        if (types.includes("locality") || types.includes("sublocality")) {
          addressDetails.city = long_name;
        }

        if (types.includes("administrative_area_level_1")) {
          addressDetails.state = long_name;
        }

        if (types.includes("country")) {
          addressDetails.country = long_name;
        }

        if (types.includes("postal_code")) {
          addressDetails.pincode = long_name;
        }
      });
      localStorage.setItem("address", address);
      setAddress(formattedAddress);
      setCoordinates(latLng);
      // Update the form fields with the address details

      setFieldValue(address1.name, addressDetails.address1);
      setFieldValue(address2.name, addressDetails.address2);
      setFieldValue(city.name, addressDetails.city);
      setFieldValue(state.name, addressDetails.state);
      setFieldValue(country.name, addressDetails.country);
      setFieldValue(pincode.name, addressDetails.pincode);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleMapClick = async (mapProps, map, clickEvent) => {
    try {
      const { latLng } = clickEvent;
      const geocodeResults = await geocodeByPlaceId({
        placeId: "your_place_id",
      });
      const address = geocodeResults[0].formatted_address;
      setAddress(address);
      setCoordinates(latLng);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div style={{ marginTop: "2%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4}>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  {...getInputProps({ placeholder: "Enter a location" })}
                  style={{
                    width: "400px",
                    height: "50px",
                  }}
                />
                <div>
                  {loading ? <div>Loading...</div> : null}

                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#fafafa" : "#fff",
                      border: "1px solid black",
                      cursor: "pointer",
                      padding: "10px",
                    };

                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, { style })}
                        key={suggestion.placeId}
                      >
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
      </Grid>
      <div style={{ marginTop: "1.5%" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <InputField name={address1.name} label={address1.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InputField name={address2.name} label={address2.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InputField name={city.name} label={city.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InputField name={state.name} label={state.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InputField name={country.name} label={country.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InputField name={pincode.name} label={pincode.label} fullWidth />
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <div className="locationMapContainer">
            <Map
              google={props.google}
              zoom={16}
              initialCenter={coordinates}
              center={coordinates}
              onClick={handleMapClick}
            >
              {coordinates.lat && coordinates.lng && (
                <Marker position={coordinates} />
              )}
            </Map>
          </div>
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
      </Grid>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyr0Q0ORqLN0nL5dRbMeeYb2uDqI5KiEg",
})(LocationDetails);
