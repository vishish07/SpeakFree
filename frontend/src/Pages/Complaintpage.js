import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

const Complaintpage = () => {
  const [show, setShow] = useState(false);
  //const handleClick = () => setShow(!show);
  const toast = useToast();
  const history = useHistory();

  const [complaint, setComplaint] = useState();
  const [solution, setSolution] = useState();
  const [dept, setDept] = useState();
  const [date, setDate] = useState();
  //const [confirmpassword, setConfirmpassword] = useState();
  //const [password, setPassword] = useState();


  const submitHandler = async () => {
    if (!complaint || !solution || !dept || !date) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
   // console.log(name, email, password/*, pic*/);
   // console.log(name);
    try {
      // console.log(name);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      // console.log(config);
      const { data } = await axios.post(
        "/api/complaint",
        {
         complaint,
         solution,
         dept,
         date,
        },
        config
      );
      console.log(data);
      toast({
        title: "Submition Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      //localStorage.setItem("userInfo", JSON.stringify(data));
      //setPicLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

 

  return (
    <Container maxW="xl" centerContent>
    <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="#F5F5F4"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Post Complaint
        </Text>
      </Box>
      <Box bg="#F5F5F4" w="100%" p={4} borderRadius="lg" borderWidth="1px">
    {/*<VStack spacing="5px">*/}
      <FormControl id="complaint" isRequired>
        <FormLabel>Complaint</FormLabel>
        <Input
          placeholder="Enter Your Complaint"
          onChange={(e) => setComplaint(e.target.value)}
        />
      </FormControl>
      <FormControl id="solution" isRequired>
        <FormLabel>Solution</FormLabel>
        <Input
          placeholder="Enter the solution"
          onChange={(e) => setSolution(e.target.value)}
        />
      </FormControl>
      <FormControl id="dept" isRequired>
        <FormLabel>Department</FormLabel>
        <Input
          placeholder="Enter dept"
          onChange={(e) => setDept(e.target.value)}
        />
      </FormControl>
      <FormControl id="date" isRequired>
        <FormLabel>Date</FormLabel>
        <Input
          placeholder="Enter the solution"
          onChange={(e) => setDate(e.target.value)}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      //  isLoading={picLoading}
      >
        Submit
      </Button>
   {/* </VStack> */}
    </Box>
    </Container>
  );
};

export default Complaintpage;