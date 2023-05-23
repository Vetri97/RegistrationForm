import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import "./LocationDetails.scss";
import { Grid } from "@mui/material";
import { InputField } from "../UIControls";
import { useFormikContext } from "formik";

/**
 * @author Vetrivel Kumaravel
 * @function LocationDetails
 **/

const LocationDetails = (props) => {
  const {
    formField: { address1, address2, city, state, country, pincode },
  } = props;

  const { setFieldValue } = useFormikContext();
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  const handleSelect = async (selectedAddress) => {
    try {
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
    console.log("getting clicked");
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
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4} lg={4}></Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
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
                    marginBottom: "5%",
                  }}
                />
                <div>
                  {loading ? <div>Loading...</div> : null}

                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#fafafa" : "#fff",
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
        <Grid item xs={12} sm={4} md={4} lg={4}></Grid>
      </Grid>

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
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyr0Q0ORqLN0nL5dRbMeeYb2uDqI5KiEg",
})(LocationDetails);
