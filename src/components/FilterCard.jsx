
import React, { useState } from "react";
import { Card, CardContent, Typography, Stack, Checkbox, FormControlLabel, IconButton } from "@mui/material";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

const FilterCard = ({ title, options, selectedOptions, handleOptionClick, filterType, setFilter, handleCompanyFilter }) => {
  const [showOptions, setShowOptions] = useState(true);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <Card style={{ borderRadius: '12px', marginBottom: "16px" }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            {title}
          </Typography>
          {showOptions ? (
            <IconButton onClick={toggleOptions}>
              <ArrowDropUp />
            </IconButton>
          ) : (
            <IconButton onClick={toggleOptions}>
              <ArrowDropDown />
            </IconButton>
          )}
        </Stack>
        {showOptions && (
          <Stack spacing={1}>
            {options.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionClick(option, setFilter, filterType, handleCompanyFilter)}
                    color="primary"
                  />
                }
                label={option}
              />
            ))}
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default FilterCard;
