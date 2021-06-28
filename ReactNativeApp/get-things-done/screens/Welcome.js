import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground} from 'react-native'

import {
  Avatar,
  WelcomeImage,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  InnerContainer,
  WelcomeContainer,
  ButtonText,
  Line,
} from './../components/styles';

// Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

const Welcome = ({ navigation }) => {
  // credentials context
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  const { name, email, photoUrl } = storedCredentials;

  const AvatarImg = photoUrl
    ? {
        uri: photoUrl,
      }
    : require('./../assets/img/profile.jpg');

  const clearLogin = () => {
    AsyncStorage.removeItem('flowerCribCredentials')
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <>
      <StatusBar style="light" />
      <ImageBackground 
          source={{uri: 'https://i.pinimg.com/564x/f7/22/21/f7222149a9af8b6f1728a72ff8a78f75.jpg'}}
          style={{ flex: 1,
            width: null,
            height: null,
            }}
        >
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/img/welcome-bg.png')} />

        <WelcomeContainer>
          <PageTitle style={{paddingTop:20, color:"#FFB53A"}} welcome={true}>¡Bienvenido a GTD!</PageTitle>
          <SubTitle welcome={true}>{name || 'GTD'}</SubTitle>
          <SubTitle welcome={true}>{email || 'gtd@gmail.com'}</SubTitle>
          <StyledFormArea>
            <Avatar resizeMode="cover" source={AvatarImg} />
            <Line />
            <StyledButton style={{backgroundColor:"#3D91DE"}} 
            onPress={() => navigation.navigate('Inbox')}>
              <ButtonText >Go to Inbox</ButtonText>
            </StyledButton>
             <StyledButton onPress={clearLogin}>
              <ButtonText>Logout</ButtonText>
            </StyledButton> 
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
      </ImageBackground>
    </>
  );
};

export default Welcome;
