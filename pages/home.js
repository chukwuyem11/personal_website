import React from "react";
import styles from "../styles/Home.module.css";
import { Text, Box, Button, ButtonGroup, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input,  Stack, HStack, VStack, Flex, Spacer, Grid, GridItem, Center, Divider, Image , Container, Wrap, WrapItem, IconButton, Spinner, SimpleGrid, List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react";
  import Link from 'next/link'
  import Nav from "./nav"
  import Portfolio from "./portfolio"
  import {  GrGithub, GrTwitter, GrValidate } from "react-icons/gr";

  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
//mobiletvshows
  //IBM plex mono
//#353535
  const Home = () => {
    const Works = [
      {id: 1,
        image:"past1",
        link: "https://deentrepreneur.biz/"
    },
    {id: 2,
    
      image:"past2",
      link: "https://oleafreshmamacare.com/"
     
    },
    {id: 3,
      image:"past3",
      link: "https://pelladeb.com/"
      
    },
    {id: 4,
      image:"past4",
      link: "https://riosmua.com/"
      
    },
    {id: 5,
      image:"past6",
      link: "https://thedoormanlogistics.com/"
      
    },
    {id: 6,
      image:"grade4",
      link: "https://oleafreshmamacare.com/"
      
    },
    ]
    return (
        <Nav>
          <Flex >
            <Center>
           
        <Box ><Text color="#ffffff" fontSize={["25px","30px", "35px" ]} fontWeight="900" lineHeight={["30px", "35px", "40px"]} mt="50px" textAlign={["left","center", "left"]}>Hello,</Text><Text color="#ffffff" fontSize={["25px","30px", "35px" ]} fontWeight="900" lineHeight={["30px", "35px", "40px"]} textAlign={["left","center", "left"]}> I'm Eboigbodin Chukwuyem</Text>
        <Box w={["","","80%"]}><Text fontSize={["16px","18px", "20px" ]} color="#ffffff" mt="50px" mb="50px" textAlign={["left","center", "left"]}>I design platforms and help solve problems with my skills on the web, and yes, I love it, it's fun.</Text></Box>
       
        <Box display={["block", "none", "block"]}>
          <Text color="#ffffff" fontSize={["25px","30px", "35px" ]} fontWeight="900" lineHeight={["25px", "35px", "40px"]}  textAlign={["left","center", "left"]}>Skilled In</Text>
          <Flex mb="50px" mt="50px" >
          
            <Box mr="20px">
            
          <UnorderedList>
  <ListItem fontSize={["16px","18px", "20px" ]} color="#ffffff">React</ListItem>
  <ListItem fontSize={["16px","18px", "20px" ]} color="#ffffff">Node js</ListItem>
  <ListItem fontSize={["16px","18px", "20px" ]} color="#ffffff">Express js</ListItem>
  <ListItem fontSize={["16px","18px", "20px" ]} color="#ffffff">Javascript</ListItem>
  <ListItem fontSize={["16px","18px", "20px" ]} color="#ffffff">Mysql</ListItem>
  <ListItem fontSize={["16px","18px", "20px" ]} color="#ffffff">Postgresql</ListItem>
  
</UnorderedList>
</Box>
<Box>
          <UnorderedList>
          <ListItem fontSize={["16px","18px", "20px" ]} color="#ffffff">Nest js</ListItem>
  <ListItem fontSize={["16px","18px", "20px" ]} color="#ffffff">React Native Web</ListItem>
  <ListItem fontSize={["16px","18px", "20px" ]} color="#ffffff">Next js</ListItem>
  <ListItem fontSize={["16px","18px", "20px" ]} color="#ffffff">Public Speaking</ListItem>
  <ListItem fontSize={["16px","18px", "20px" ]} color="#ffffff">Communication skills</ListItem>
  <ListItem fontSize={["16px","18px", "20px" ]} color="#ffffff">Wordpress</ListItem>
</UnorderedList>
</Box>

</Flex>
          </Box>
          
          <Center  display={["none", "block", "none"]}>
        <Box >
          <Text color="#ffffff" fontSize={["25px","30px", "35px" ]} fontWeight="900" lineHeight={["25px", "35px", "40px"]} mb="50px" textAlign={["left","center", "left"]} >Skilled In</Text>
          <Center>
          <Flex mb="50px" >
          
            <Box mr="20px">
            
          <UnorderedList>
  <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">React</ListItem>
  <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">Node js</ListItem>
  <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">Express js</ListItem>
  <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]}color="#ffffff">Javascript</ListItem>
  <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">Mysql</ListItem>
  <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]}color="#ffffff">Postgresql</ListItem>
  
</UnorderedList>
</Box>
<Box>
          <UnorderedList>
          <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]}color="#ffffff">Nest js</ListItem>
  <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">React Native Web</ListItem>
  <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">Next js</ListItem>
  <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">Public Speaking</ListItem>
  <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]}color="#ffffff">Communication skills</ListItem>
  <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]}color="#ffffff">Wordpress</ListItem>
</UnorderedList>
</Box>

</Flex> </Center>

          </Box></Center>
          </Box></Center></Flex>
        <Box display={["block", "none", "block"]}
  as="button"
  height="24px"
  lineHeight="1.2"
  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
  
  pt="10px"
  pl="10px"
  pr="10px"
  pb="30px"
  borderRadius="5px"
  fontSize="17px"
  fontWeight="semibold"
  bg="#ffffff"
  
  mb="50px"
  
  color="#3535350"
  _hover={{ bg: "#353535", color:"#ffffff" }}
  _active={{
    bg: "#dddfe2",
    transform: "scale(0.98)",
    borderColor: "#bec3c9",
  }}
  _focus={{
    boxShadow:
      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
  }}
>
  Explore
</Box>

<Flex display={["none", "block", "none"]}>
  <Center>
<Box
  as="button"
  height="24px"
  lineHeight="1.2"
  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
  
  
  pt="10px"
  pl="10px"
  pr="10px"
  pb="30px"
  borderRadius="5px"
  fontSize="17px"
  fontWeight="semibold"
  bg="#ffffff"
  mt="30px"
  mb="50px"
  
  color="#3535350"
  _hover={{ bg: "#353535", color:"#ffffff" }}
  _active={{
    bg: "#dddfe2",
    transform: "scale(0.98)",
    borderColor: "#bec3c9",
  }}
  _focus={{
    boxShadow:
      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
  }}
>
  Explore
</Box>
</Center>
</Flex>
<Flex w="10%">

</Flex>
<Box >
  <Text mb="50px" color="#ffffff" fontSize={["25px","30px", "35px" ]} fontWeight="900" lineHeight={["25px", "35px", "40px"]}  textAlign={["left","center", "left"]}>My Works</Text>
</Box>
<Box display={["block", "none", "block"]}>
<Grid   templateColumns="repeat(2, 1fr)" gap={[6, -6,-6]} mb="50px">
{Works.map((work) => (<Box key={work.id} mt={["10px","20px","30px"]} ml={["","-11px","-11px"]} ><Link href={work.link}><Image src={`${work.image}.png`}  w={["150px", "200","250px"]} h={["150px", "200","250px"]} borderRadius="5%" bg="#353535"    alt="Segun Adebayo"  p="0" /></Link></Box>))}
</Grid>
</Box>

<Center display={["none", "block", "none"]}>
<Grid  templateColumns="repeat(2, 1fr)" gap={[6, 6,-6]} mb="50px">
{Works.map((work) => (<Box key={work.id} mt={["10px","20px","30px"]} ml={["","11px","-11px"]} ><Link href={work.link}><Image src={`${work.image}.png`}  w={["150px", "250px","250px"]} h={["150px", "250px","250px"]} borderRadius="5%" bg="#353535"    alt="Segun Adebayo"  p="0" /></Link></Box>))}
</Grid>
</Center>

        
        </Nav>
    )
  }

  export default Home