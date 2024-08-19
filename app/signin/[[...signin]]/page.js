import { ClerkProvider, SignIn } from "@clerk/nextjs";
import { Typography, AppBar, Toolbar, Button, Box } from '@mui/material';
import Link from 'next/link';
import Image from "next/image";

export default function SignInPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "#CD2A4D", // Black background color for the entire page
        color: "#FFFFFF",
        fontFamily: "Georgia, serif",
        padding: 0, // Remove default padding
        margin: 0, // Ensure no margin on the container
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Banner with background color #84A07E */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#CD2A4D", // Olive green background color for the banner
          height: "150px", // Set the height to match the home page banner height
          display: "flex",
          alignItems: "center", // Center content vertically
        }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#CD2A4D", // Match the banner background color
            boxShadow: "none",
            width: "100vw",
            maxWidth: "100%",
            left: 0,
            right: 0,
            height: "100%", // Ensure AppBar covers the full height of the banner
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", padding: "0 20px", height: "100%" }}>
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography variant="h5" sx={{ color: "#FFFFFF", fontFamily: "Georgia, serif", marginRight: "10px", marginTop: "-50px", '&:hover': { color: '#000000' } }}>
                FlashFlex
              </Typography>
              <Link href="/" passHref>
                <Box
                  sx={{
                    display: "inline-block",
                    '&:hover img': {
                      transform: 'scale(1.1)', // Increase size when hovered
                      transition: 'transform 0.3s ease-in-out', // Smooth transition
                    },
                  }}
                >
                  <Image
                    src="/images/flashflex_pic.png"
                    alt="FlashFlex Emblem"
                    width={100} // Slightly increased width for the top-left image
                    height={100} // Slightly increased height for the top-left image
                    style={{ filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))', marginTop: "-50px" }}
                  />
                </Box>
              </Link>
              {/* Text indicating the image will take the user to the homepage */}
              <Typography variant="caption" sx={{ color: "#FFFFFF", fontFamily: "Georgia, serif", marginLeft: "10px", marginTop: "-50px" }}>
                Click the image to go to the homepage
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Button
                color="inherit"
                href="/signin"
                sx={{
                  color: "#FFFFFF", // White text
                  fontWeight: "bold", // Bold text
                  marginTop: "-50px", // Adjust to lift the text higher
                  '&:hover': {
                    backgroundColor: '#841B35',
                    color: '#000000'
                  },
                  fontFamily: "Georgia, serif",
                }}
              >
                Log in
              </Button>
              <Button
                color="inherit"
                href="/signup"
                sx={{
                  color: "#FFFFFF", // White text
                  fontWeight: "bold", // Bold text
                  marginTop: "-50px", // Adjust to lift the text higher
                  '&:hover': {
                    backgroundColor: '#841B35',
                    color: '#000000'
                  },
                  fontFamily: "Georgia, serif",
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Content starting after the banner */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#14171C", // Ensures consistent background for the sign-in gadget and below
          color: "#FFFFFF",
          marginTop: "-50px", // Move the content slightly up to align with the banner
        }}
      >
        <Typography variant="h4" sx={{ color: "#CD2A4D", fontFamily: "Georgia, serif", marginBottom: "20px", marginTop: "-65px" }}>
          Sign In
        </Typography>
        <ClerkProvider>
          <SignIn />
        </ClerkProvider>
        
      </Box>
    </Box>
  );
}
