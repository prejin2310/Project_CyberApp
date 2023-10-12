import { StyleSheet } from "react-native";
import Colors from "../Shared/Colors";

const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        marginTop: -20,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,

    },
    welcomeText:{
        fontSize:35,
        textAlign:'center',
        fontWeight:'bold',
        paddingTop:40
    },
    txtLogSign:{
        textAlign: 'center',
        marginTop: 80,
        fontSize: 20,
    },
    button:{
        backgroundColor: Colors.primary,
        padding: 10,
        margin: 30,
        display:"flex",
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
    },
    signGoogleText:{
        color:Colors.white,
    }
})

export default styles;