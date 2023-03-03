import React from "react";
import { Text ,StyleSheet,Image,View} from "react-native";
import { Card } from "react-native-paper";
import {SvgXml} from "react-native-svg";
import star from "../../assets/star";
import open from "../../assets/open";
import { Favourite } from "../Components/favouriteone";
export const Restaurantinfo=({ restaurant = {} }) => {
    const {
      name = "Some Random  Restaurant",
      icon="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos = [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address = "100 some randomS street",
      isOpenNow = true,
      rating = 4,
      isClosedTemporarily,
    } = restaurant;
    const ratingarray=Array.from(new Array(Math.floor(rating)))
    return (
      <Card elevation={5} style={styles.card}>
        <Favourite restaurant={restaurant}/>
        <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
        <View style={styles.details}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.ratopen}>
                <View style={styles.rating}>
                    {ratingarray.map((item)=>{
                        return <SvgXml xml={star} key={item} width={20} height={20}/>
                    })}
                </View>
                <View style={styles.rightclose} >
                    {isClosedTemporarily && (
                      <Text variant="label" style={{ color: "red" }}>
                        CLOSED TEMPORARILY
                      </Text>
                    )}
                     <View style={{paddingLeft:12}} />
                    {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
                    <View style={{paddingLeft:12}} /> 
                    <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
                </View>
            </View>
            <Text style={styles.address}>{address}</Text>
        </View>
      </Card>
    );
  };
  
  const styles = StyleSheet.create({
    card: { backgroundColor: "white" },
    cover: { padding: 15, backgroundColor: "white" },
    title: { padding: 5,fontSize:14},
    details:{padding:10},
    address:{padding:5,fontSize:12,fontWeight:600},
    ratopen:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},
    rating:{flexDirection:"row",paddingTop:5,paddingBottom:5,paddingLeft:2},
    rightclose:{flexDirection:"row",alignItems:"center"}
  });