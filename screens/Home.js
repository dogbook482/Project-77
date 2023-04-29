import * as react from 'react'
import {
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity, 
    Platform, 
    StatusBar, 
    ImageBackground, 
    Image
} from 'react-native';

export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.safeArea}/>
                <ImageBackground style={styles.backgroundImage} source={require("../assets/space.gif")}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Stellar App</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={()=>{
                        this.props.navigation.navigate('Space')
                    }}>
                        <Text style={styles.routeText}>Space Crafts</Text>
                        <Image source={require("../assets/space_crafts.png")} style={{width:80, height:80}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={()=>{
                        this.props.navigation.navigate('StarMap')
                    }}>
                        <Text style={styles.routeText}>Star Map</Text>
                        <Image source={require("../assets/star_map.png")} style={{width:80, height:80}}></Image>                    
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={()=>{
                        this.props.navigation.navigate('DailyPic')
                    }}>
                        <Text style={styles.routeText}>Star Map</Text>
                        <Image source={require("../assets/daily_pictures.png")} style={{width:80, height:80}}></Image>                    
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
    },
    safeArea:{
        marginTop: Platform.OS==='android' ? StatusBar.currentHeight : 0
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "ffffee"
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'ffffee'
    },
})