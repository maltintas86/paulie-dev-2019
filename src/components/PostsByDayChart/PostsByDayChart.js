import React from "react";
import { Flex, Box, Text } from "@theme-ui/components";

import { SourceDays } from "@pauliescanlon/gatsby-theme-terminal/src/components/SourceDays";

export const PostsByDayChart = ({ config }) => {
  const { color, year, filter } = config;

  return (
    <SourceDays filter={filter}>
      {(sourceDays) => {
        const currentYear = sourceDays[sourceDays.length - (1 - year)];
        return (
          <Box
            sx={{
              pr: 2,
            }}
          >
            <Text
              sx={{
                color: color,
                mb: 2,
              }}
            >
              {currentYear[0].year}
            </Text>
            <Box>
              {currentYear.map((day, index) => {
                const { name, count, percent } = day;
                return (
                  <Flex
                    key={index}
                    sx={{
                      backgroundColor: "surface",
                      flexDirection: "column",
                      mb: 2,
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: color,
                        height: "100%",
                        position: "absolute",
                        width: `${percent}%`,
                      }}
                    />
                    <Box
                      sx={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text sx={{ textTransform: "capitalize", pl: 2 }}>
                        {name}
                      </Text>
                      <Text sx={{ pr: 2 }}>{`x${count}`}</Text>
                    </Box>
                  </Flex>
                );
              })}
            </Box>
          </Box>
        );
      }}
    </SourceDays>
  );
};