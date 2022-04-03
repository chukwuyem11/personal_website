import React,  {useState, createRef} from "react";
import { Text, Box, Button, Flex, Spacer, Image,   Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, IconButton, Divider, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Center, } from "@chakra-ui/react";
  import Link from 'next/link'
  import {  GrGithub, GrTwitter, GrLinkedinOption } from "react-icons/gr";
  import axios from "axios"
  
  //C:\Users\USER\Desktop\personal\personal\public
  const Nav = (props) => {


    if (typeof window === "undefined") return <Text textAlign="center" fontSize={["25px","30px", "35px" ]} color="#ffffff" fontWeight="900" fontFamily="IBM Plex Mono" >Loading...</Text>;
    const [scrollPos, setScrollPos] = useState(window.pageYOffset);

    const onScroll = () => {
        setScrollPos(window.pageYOffset);
      };

    React.useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
          window.removeEventListener("scroll", onScroll);
        };
      });
      const options = {
        url: 'public/image.jpg',
        dest: 'C:\Users\USER\Desktop'                // will be saved to /path/to/dest/
      }
      
      
      const downloaded = () =>{
        
        axios({
          url: "/download",
          method:"GET",
          responseType: "blob"
        }).then( (res) => {
          const url = window?.URL.createObjectURL(new Blob([res.data]))
          const link = document?.createElement("a")
          link.href = url
          link.setAttribute('download', "resumepdf.pdf");
          document.body.appendChild(link)
          link.click()
          
        })
        // download.image(options)
        // .then(({ filename }) => {
        //   console.log('Saved to', filename)  // saved to /path/to/dest/image.jpg
        // })
        .catch((err) => console.error(err))
      }
    
      return( 
        <Box>
        
      <Flex  justifyContent="space-between" bg="#353535">
          <Box display={["none", "none", "block"]} pl="150px">

          
           
            <Box w="100%"   fontSize="20px" fontFamily="IBM Plex Mono"  h= "75px" >
              
            </Box>
  <Box >{props.children}</Box>

          </Box >
          <Box display={["none", "none", "block"]}  w="70%" bgPosition="center" bgGradient="url(grade5.png)" ><Center  w="100%" h="800px" alignItems="center" ><Box pos="fixed"   ><Center><Image  src="memoji.png"  w={["200px","300px", "300px" ]} h={["200px","300px", "300px" ]} borderRadius="100%" bg="#353535"    alt="Segun Adebayo"  p="0" /></Center><Text textAlign="center" fontSize={["25px","30px", "35px" ]} color="#ffffff" fontWeight="900" fontFamily="IBM Plex Mono" >Eboigbodin Chukwuyem</Text><Text  textAlign="center" fontSize={["16px","18px", "20px" ]} color="#ffffff" lineHeight="25px" fontFamily="IBM Plex Mono">eboigbodinchukwuyem@gmail.com</Text><Center  > <Flex mt="15px"><Box ><Link href="https://github.com/chukwuyem11">< GrGithub _hover={{ bg: "#353535", color:"#ffffff" }} fontSize="30px"  color="#ffffff" /></Link></Box> <Box ml={5}> <Link href="https://www.linkedin.com/in/chukwuyem-eboigbodin-37b245217/">< GrLinkedinOption _hover={{ bg: "#353535", color:"#ffffff" }} fontSize="30px"  color="#ffffff"/></Link></Box></Flex></Center></Box></Center> </Box>
      </Flex> 
      
      <Flex display={["block", "block", "none"]} flexDirection="column" justifyContent="space-between" bg="#353535" >
          
          <Box mt="-100px"  bgPosition="center" bgGradient="url(grade5.png)" ><Center  w="100%" h="700px"  ><Box   ><Center><Image  src="memoji.png"  w={["200px","250px", "300px" ]} h={["200px","250px", "300px" ]} borderRadius="100%" bg="#353535"    alt="Segun Adebayo"  p="0" /></Center><Text textAlign="center" fontSize={["25px","30px", "35px" ]} color="#ffffff" fontWeight="900" fontFamily="IBM Plex Mono"  >Eboigbodin Chukwuyem</Text><Text  textAlign="center" fontSize={["16px","18px", "20px" ]} color="#ffffff" lineHeight="25px" fontFamily="IBM Plex Mono">eboigbodinchukwuyem@gmail.com</Text> <Center  > <Flex mt="15px"><Box ><Link href="https://github.com/chukwuyem11">< GrGithub _hover={{ bg: "#353535", color:"#ffffff" }} fontSize="30px"  color="#ffffff" /></Link></Box> <Box ml={5}> <Link href="https://www.linkedin.com/in/chukwuyem-eboigbodin-37b245217/">< GrLinkedinOption _hover={{ bg: "#353535", color:"#ffffff" }} fontSize="30px"  color="#ffffff"/></Link></Box></Flex></Center></Box></Center> </Box>
          <Box p="15px" >{props.children}</Box>
      </Flex>
      </Box>)
  }

  export default Nav