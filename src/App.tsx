import { useState } from "react";
import ErrorContent from "./components/ErrorContent";
import NoDataFound from "./components/NoDataFound";
import SearchInput from "./components/SearchInput";
import UsersList from "./components/UsersList";
import { useFetchUsersQuery } from "./store/users/users-api-slice";
import Box from "@mui/material/Box";
import { Skeleton } from "@mui/material";

export default function App() {
  const [query, setQuery] = useState("");
  const { data: users = [], error, isLoading } = useFetchUsersQuery(query);

  return (
    <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: "20px" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchInput
          onChange={(query) => setQuery(query)}
          placeholder="Search user"
        />
      </Box>
      {error ? (
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ErrorContent />
        </Box>
      ) : users ? (
        <Box>
          {isLoading ? (
            <Skeleton
              variant="rounded"
              width="100%"
              height={400}
              sx={{ bgcolor: "grey.800" }}
            ></Skeleton>
          ) : (
            <UsersList users={users} />
          )}
        </Box>
      ) : (
        <NoDataFound />
      )}
    </Box>
  );
}
