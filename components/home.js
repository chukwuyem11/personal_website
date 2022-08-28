import React from "react";
import { Text, Box, Button, ButtonGroup, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input,  Stack, HStack, VStack, Flex, Spacer, Grid, GridItem, Center, Divider, Image , Container, Wrap, WrapItem, IconButton, Spinner, SimpleGrid, List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react";
  import Link from 'next/link'
  import Nav from "./nav"
  import {  GrGithub, GrTwitter, GrValidate } from "react-icons/gr";


//mobiletvshows
  //IBM plex mono
//#353535
  const Home = () => {
    const Works = [
      {
        id: 1,
        image:"past15",
        name: "mini-web landing page",
        link: "https://min-website-roan.vercel.app/"
        
      },
      {
        id: 2,
        image:"past16",
        name: "note taking app",
        link: "https://nootes.herokuapp.com/"
        
      },
      {
        id: 3,
        image:"past12",
        name: "chaart landing page",
        link: "https://chaaart.vercel.app/"
        
      },
      {
        id: 4,
        image:"past13",
        name: "simple landing page",
        link: "https://landing2-henna.vercel.app/"
        
      },
      {
        id: 5,
        image:"mami",
        name: "social commerce app (mobile)",
        link: "https://mamihq.herokuapp.com"
        
      },
    {
      id: 6,
      image:"crocs",
      name: "e-commerce crocs app",
      link: "https://github.com/chukwuyem11/crocs-commerce"
      
    },
    {id: 7,
      image:"past7",
      name: "personal site",
      link: "https://github.com/chukwuyem11/personal_website"
      
    },
    {id: 8,
      image:"past8",
      name: "simple todo",
      link: "https://github.com/chukwuyem11/simple-todo"
      
    },
    
    ]
    return (
        <Nav>
          <Flex >
            <Center>
           
        <Box ><Text color="#ffffff" fontSize={["25px","30px", "35px" ]} fontWeight="900" lineHeight={["30px", "35px", "40px"]} mt="50px" textAlign={["left","center", "left"]} fontFamily="IBM Plex Mono">Hello,</Text><Text color="#ffffff" fontSize={["25px","30px", "35px" ]} fontWeight="900" lineHeight={["30px", "35px", "40px"]} textAlign={["left","center", "left"]} fontFamily="IBM Plex Mono"> I'm Eboigbodin Chukwuyem</Text>
        <Box w={["","","80%"]}><Text fontSize={["16px","18px", "20px" ]} color="#ffffff" mt="50px" mb="50px" textAlign={["left","center", "left"]} fontFamily="IBM Plex Mono">I build and design beautiful and interactive  experiences for the web for fun.</Text></Box>
       
        <Box display={["block", "none", "block"]}>
          <Text color="#ffffff" fontSize={["25px","30px", "35px" ]} fontWeight="900" lineHeight={["25px", "35px", "40px"]} fontFamily="IBM Plex Mono" textAlign={["left","center", "left"]}>Skilled In</Text>
          <Flex mb="50px" mt="50px" >
          
          <Box mr="20px" fontFamily="IBM Plex Mono" >
            
            <UnorderedList>
    <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">React</ListItem>
    <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">Node js</ListItem>
    <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">Express js</ListItem>
    <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]}color="#ffffff">Javascript</ListItem>
    <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">Mysql</ListItem>
    <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]}color="#ffffff">Postgresql</ListItem>
    
  </UnorderedList>
  </Box>
  <Box fontFamily="IBM Plex Mono">
            <UnorderedList>
            <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]}color="#ffffff">Nest js</ListItem>
    <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">React Native Web</ListItem>
    <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">Next js</ListItem>
    <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">Public Speaking</ListItem>
    <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]}color="#ffffff">Communication skills</ListItem>
    <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]}color="#ffffff">Wordpress</ListItem>
  </UnorderedList>
  </Box>

</Flex>
          </Box>
          
          <Center  display={["none", "block", "none"]}>
        <Box >
          <Text color="#ffffff" fontSize={["25px","30px", "35px" ]} fontWeight="900" lineHeight={["25px", "35px", "40px"]} mb="50px" fontFamily="IBM Plex Mono" textAlign={["left","center", "left"]} >Skilled In</Text>
          <Center>
          <Flex mb="50px" >
          
            <Box mr="20px" fontFamily="IBM Plex Mono" >
            
          <UnorderedList>
  <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">React</ListItem>
  <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">Node js</ListItem>
  <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">Express js</ListItem>
  <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]}color="#ffffff">Javascript</ListItem>
  <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]} color="#ffffff">Mysql</ListItem>
  <ListItem textAlign={["left","center", "left"]} fontSize={["16px","18px", "20px" ]}color="#ffffff">Postgresql</ListItem>
  
</UnorderedList>
</Box>
<Box fontFamily="IBM Plex Mono">
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
       
<Flex w="10%">

</Flex>
<Box >
  <Text mb="50px" color="#ffffff" fontSize={["25px","30px", "35px" ]} fontWeight="900" lineHeight={["25px", "35px", "40px"]} fontFamily="IBM Plex Mono"  textAlign={["left","center", "left"]}>My Works</Text>
</Box>
<Box display={["block", "none", "block"]}>
<Grid   templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)"] }gap={[6, -6,-6]} mb="50px">
{Works.map((work) => (<Box key={work.id} mt={["10px","20px","30px"]} ml={["","-11px","-11px"]} ><Link href={work.link}><Image src={`${work.image}.png`}  w={["80vw", "200","250px"]} h={["auto", "200","250px"]} borderRadius="5%" bg="#353535"    alt="Segun Adebayo"  p="0" /></Link>
<Text mt="10px" color="#fff" fontSize={["16px","20px", "20px" ]} fontWeight="500"  fontFamily="IBM Plex Mono">{work.name}</Text></Box>))}
</Grid>
</Box>

<Center display={["none", "block", "none"]}>
<Grid  templateColumns="repeat(2, 1fr)" gap={[6, 6,-6]} mb="50px">
{Works.map((work) => (<Box key={work.id} mt={["10px","20px","30px"]} ml={["","11px","-11px"]} ><Link href={work.link}><Image src={`${work.image}.png`}  w={["150px", "250px","250px"]} h={["150px", "250px","250px"]} borderRadius="5%" bg="#353535"    alt="Segun Adebayo"  p="0" /></Link>
    <Text color="#fff" fontSize={["25px","30px", "35px" ]} fontWeight="500"  fontFamily="IBM Plex Mono">{work.name}</Text>
</Box>))}
</Grid>
</Center>

        
        </Nav>
    )
  }

  export default Home