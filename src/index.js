import { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from "axios";
import { styles } from "./styles";

const WEATHER_KEY = 'API_KEY';

const skyIcons = [
  require('../assets/sun.png'),
  require('../assets/cloud.png'),
  require('../assets/cloudSun.png'),
  require('../assets/rain.png')
];

export const HomeScreen = () => {
  const [currentForecast, setCurrentForecast] = useState(null);
  const [currentImage, setCurrentImage] = useState(skyIcons[0]);
  const [location, setLocation] = useState(null);

  const handleChange = (value) => {
    if(currentForecast) setCurrentForecast(null);

    setLocation(value);
  } 

  useEffect(() => {
    if(currentForecast && currentForecast?.main) {
      if(currentForecast?.main === 'Rain') setCurrentImage(skyIcons[3]);
      else if(currentForecast?.main === 'Clouds') setCurrentImage(skyIcons[2]);
      else if(currentForecast?.main === 'Mist') setCurrentImage(skyIcons[1]);
      else setCurrentImage(skyIcons[0]);
    }
  }, [currentForecast]);

  const handleGetForecast = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_KEY}`);
      setCurrentForecast(response.data?.weather[0]);
    } catch(error) {
      currentForecast(null);
    }
  }

  return <View style={styles.container}>
    <View style={styles.header}>
      <TextInput
        placeholder="Search by City"
        onChangeText={handleChange}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => handleGetForecast()}>
        <Ionicons
          name="search"
          size={32}
          color='#000'
        />
      </TouchableOpacity>
    </View>
    <View style={styles.content}>
      {
        !currentForecast ? <Text style={styles.notFound}>NOT FOUND</Text>
        : <>
          <Image
            source={currentImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              {location.toUpperCase()}
            </Text>
            <Text style={styles.subtitle}>
              {currentForecast?.description.toUpperCase()}
            </Text>
          </View>
        </>
      }
    </View>
  </View>
} 