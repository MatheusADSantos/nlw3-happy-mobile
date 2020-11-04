import React, { useEffect } from 'react';

import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import Routes from './src/routes';

import Updates from 'expo-updates';

// console.disableYellowBox = true;

export default function App() {

  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync()

      if (isAvailable) {
        await Updates.fetchUpdateAsync()
        await Updates.reloadAsync()
      }

    }

    updateApp();
  }, []);

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <Routes />
  );
}

  // ------ Observation: ReactJS vs React-Native ------
  // In react-native we don't have style hirarchy ...
  // Example: If I want to change de text color, I'll change directaly in the tag's text
  //The written style css is based in --object javascript-- ... With camelcase
//By default there is no need to insert displaflex