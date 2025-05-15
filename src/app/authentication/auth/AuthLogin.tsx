import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import { useRouter } from 'next/navigation';
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import { auth } from "@/lib/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}
declare global {
  interface Window {
    recaptchaVerifier: any;
  }
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmation, setConfirmation] = useState<any>(null);
  const [otpSent, setOtpSent] = useState(false);
  const recaptchaContainerRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();
  
  useEffect(() => {
    if (typeof window !== 'undefined' && document.getElementById('recaptcha-container')) {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          'recaptcha-container',
          { size: 'invisible' }
        );
      }
    }
  }, []);

  const sendOTP = async () => {
    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phone,
        window.recaptchaVerifier
      );
      console.log(confirmationResult);
      setConfirmation(confirmationResult);
      setOtpSent(true);
    } catch (error) {
      alert('Something went wrong.')
      console.error('Error sending OTP:', error);
    }
  };

  const verifyOTP = async () => {
    try {
      await confirmation.confirm(otp);
      console.log('done')
      // ✅ Redirect on success
      router.push('/');
      
    } catch (error) {
      console.error('Invalid OTP:', error);
    }
  };
  
  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <Stack my={2}>
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="phone-number"
            mb="5px"
          >
            Phone Number
          </Typography>
          <CustomTextField
            variant="outlined"
            fullWidth
            value={phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
          />
        </Box>
      </Stack>

      { !otpSent &&
       <Box>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            // component={Link}
            // href="/"
            type="submit"
            onClick={sendOTP}
          >
            Sign In
          </Button>
        </Box>
      }
      { confirmation && (
        <>
          <Box mt="25px" mb={2}>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="OTP"
              mb="5px"
            >
              OTP
            </Typography>
            <CustomTextField
              type="password"
              variant="outlined"
              fullWidth
              value={otp}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOtp(e.target.value)}
            />
          </Box>
          
          <Box>
            <Button
              color="primary"
              variant="contained"
              size="large"
              fullWidth
              type="submit"
              onClick={verifyOTP}
            >
              Verify OTP
            </Button>
          </Box>
        </>
      )}

      <div id="recaptcha-container"></div>
    </>
  )
}
export default AuthLogin;
