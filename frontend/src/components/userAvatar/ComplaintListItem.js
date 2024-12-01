import { Box, Text } from "@chakra-ui/layout";

const ComplaintListItem = ({ user }) => {
  //const { user } = ChatState();

  return (
    <Box
    //  onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      display="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      {/*<Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.pic}
      />*/}
      <Box>
        <Text>Complaint: {user.complaint}</Text>
        <Text>Solution: {user.solution}</Text>
        <Text>Dept: {user.dept}</Text>
        <Text>Date: {user.date}</Text>
      </Box>
    </Box>
  );
};

export default ComplaintListItem;