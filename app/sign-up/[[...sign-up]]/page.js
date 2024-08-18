import { SignUp } from "@clerk/nextjs";
import { Typography, AppBar, Toolbar, Button, Box } from '@mui/material';
import Link from 'next/link';
import Image from "next/image";

export default function SignUpPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "#14171C", // Black background color for the entire page
        color: "#FFFFFF",
        fontFamily: "Georgia, serif",
        padding: 0, // Remove default padding
        margin: 0, // Ensure no margin on the container
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Banner with background color #CD2A4D */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#CD2A4D", // Pink/red background color for the banner
          height: "150px", // Set the height to match the previous banner height
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
            display: "flex",
            justifyContent: "center", // Center content horizontally
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              padding: "0 20px",
              height: "100%",
              display: "flex",
              alignItems: "center", // Center content vertically
              marginTop: "-50px", // Raise the content within the banner
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h5" sx={{ color: "#FFFFFF", fontFamily: "Georgia, serif", marginRight: "10px" }}>
                FlashFlex
              </Typography>
              <Link href="/" passHref>
                <Box
                  sx={{
                    display: "inline-block",
                    '&:hover img': {
                      transform: 'scale(1.1)', // Increase size when hovered
                      transition: 'transform 0.3s ease-in-out', // Smooth transition
                    }
                  }}
                >
                  <Image
                    src="/images/flashflex_pic.png"
                    alt="FlashFlex Emblem"
                    width={100} // Width of the image
                    height={100} // Height of the image
                    style={{ filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))', marginTop: "4px" }}
                  />
                </Box>
              </Link>
              {/* Text indicating the image will take the user to the homepage */}
              <Typography variant="caption" sx={{ color: "#FFFFFF", fontFamily: "Georgia, serif", marginLeft: "10px", }}>
                Click the image to go to the homepage
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                color="inherit"
                sx={{
                  color: "#FFFFFF", // White text
                  fontWeight: "bold", // Bold text
                  textTransform: "none", // Remove text transformation
                  '&:hover': {
                    backgroundColor: '#84A07E',
                    color: '#000000',
                  },
                  fontFamily: "Georgia, serif",
                }}
              >
                <Link href="/sign-in" passHref style={{ color: 'inherit', textDecoration: 'none' }}>
                  LOG IN
                </Link>
              </Button>
              <Button
                color="inherit"
                sx={{
                  color: "#FFFFFF", // White text
                  fontWeight: "bold", // Bold text
                  textTransform: "none", // Remove text transformation
                  '&:hover': {
                    backgroundColor: '#84A07E',
                    color: '#000000',
                  },
                  fontFamily: "Georgia, serif",
                }}
              >
                <Link href="/sign-up" passHref style={{ color: 'inherit', textDecoration: 'none' }}>
                  SIGN UP
                </Link>
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
          backgroundColor: "#14171C", // Ensures consistent background for the sign-up gadget and below
          color: "#FFFFFF",
          marginTop: "-50px", // Move the content slightly up to align with the banner
        }}
      >
        <Typography variant="h4" sx={{ color: "#CD2A4D", fontFamily: "Georgia, serif", marginBottom: "20px", marginTop: "-65px" }}>
          Sign Up
        </Typography>
        <SignUp
          appearance={{
            variables: {
              colorPrimary: "#CD2A4D", // Primary color (pink/red)
              colorBackground: "#CD2A4D", // Background color (pink/red)
              colorText: "#FFFFFF", // Text color (white)
              colorInputBackground: "#FFFFFF", // Input fields background (white)
              colorInputText: "#000000", // Input fields text color (black)
              colorInputBorder: "#84A07E", // Input fields border color (olive green)
              colorButtonText: "#FFFFFF", // Button text color (white)
              colorButtonBackground: "#000000", // Button background color (black)
              colorButtonBackgroundHover: "#84A07E", // Button background color on hover (olive green)
            },
            elements: {
              card: {
                backgroundColor: "#CD2A4D", // Background of the sign-up card (pink/red)
                color: "#FFFFFF", // Text color inside the sign-up card (white)
              },
              headerTitle: {
                color: "#000000", // Header title color (black)
              },
              formButtonPrimary: {
                backgroundColor: "#000000", // Primary button background color (black)
                color: "#FFFFFF", // Primary button text color (white)
                "&:hover": {
                  backgroundColor: "#84A07E", // Hover color for the button (olive green)
                  color: "#FFFFFF", // Hover text color for the button (white)
                },
              },
              socialButtonsBlockButton: {
                backgroundColor: "#FFFFFF", // White background for "Continue with Google"
                color: "#84A07E", // Olive green text color
                borderColor: "#84A07E", // Border color for Google button (olive green)
                "&:hover": {
                  backgroundColor: "#F0F0F0", // Slightly darker white on hover
                },
              },
              formFieldInput: {
                backgroundColor: "#FFFFFF", // White background for input fields
                color: "#000000", // Black text color for input fields
                borderColor: "#84A07E", // Input border color (olive green)
              },
              footerActionLink: {
                color: "#FFFFFF", // White text for "Already have an account? Sign in"
                "&:hover": {
                  color: "#FFFFFF", // Keep white on hover
                },
                textDecoration: "none", // Remove underline
                cursor: "pointer",
              },
            },
          }}
          redirectUrl="/sign-in" // Redirect to the Sign In page
        />
      </Box>
    </Box>
  );
}
