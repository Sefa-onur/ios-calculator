import React,{Component} from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const {width, height } = Dimensions.get('window');

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      numbers:''
    }
  }
  setNumbers = (number) => {
    this.setState({
      numbers: `${this.state.numbers}${number}` 
    });
  }

  setZero = () => {
    this.setState({numbers:''})
  }

  inverse = () => {
    let number = this.state.numbers*-1
    this.setState({
      numbers:number
    })
  }
  
  render() {
    return(
      <View style = {styles.View} >
         <View style = {styles.resoultscreen} >
           <Text style = {styles.resoultText} > {this.state.numbers} </Text>
         </View>
         <View style = {styles.View1} >
           <TouchableOpacity onPress = {() => this.setZero() } ><View style = {styles.View11} ><Text style = {styles.Texts1} >AC</Text></View></TouchableOpacity>  
           <TouchableOpacity onPress = {() => this.inverse()} ><View style = {styles.View11} ><Text style = {styles.Texts1} >+/-</Text></View></TouchableOpacity>
           <TouchableOpacity><View style = {styles.View11} ><Text style = {styles.Texts1} >%</Text></View></TouchableOpacity>
           <TouchableOpacity><View style = {styles.View14} ><Text style = {styles.Texts} >/</Text></View></TouchableOpacity>
         </View>
         <View style = {styles.View1} >
           <TouchableOpacity onPress = {() => this.setNumbers('7')} ><View style = {styles.View12} ><Text style = {styles.Texts} >7</Text></View></TouchableOpacity>
           <TouchableOpacity onPress = {() => this.setNumbers('8')} ><View style = {styles.View12} ><Text style = {styles.Texts} >8</Text></View></TouchableOpacity>
           <TouchableOpacity onPress = {() => this.setNumbers('9')} ><View style = {styles.View12} ><Text style = {styles.Texts} >9</Text></View></TouchableOpacity>
           <TouchableOpacity onPress = {() => this.setNumbers('*')} ><View style = {styles.View14} ><Text style = {styles.Texts} >x</Text></View></TouchableOpacity>
         </View>
         <View style = {styles.View1} >
           <TouchableOpacity onPress = {() => this.setNumbers('4')} ><View style = {styles.View12} ><Text style = {styles.Texts} >4</Text></View></TouchableOpacity>
           <TouchableOpacity onPress = {() => this.setNumbers('5')} ><View style = {styles.View12} ><Text style = {styles.Texts} >5</Text></View></TouchableOpacity>
           <TouchableOpacity onPress = {() => this.setNumbers('6')} ><View style = {styles.View12} ><Text style = {styles.Texts} >6</Text></View></TouchableOpacity>
           <TouchableOpacity onPress = {() => this.setNumbers('-')} ><View style = {styles.View14} ><Text style = {styles.Texts} >-</Text></View></TouchableOpacity>
         </View>
         <View style = {styles.View1} >
           <TouchableOpacity onPress = {() => this.setNumbers('3')} ><View style = {styles.View12} ><Text style = {styles.Texts} >3</Text></View></TouchableOpacity>
           <TouchableOpacity onPress = {() => this.setNumbers('2')} ><View style = {styles.View12} ><Text style = {styles.Texts} >2</Text></View></TouchableOpacity>
           <TouchableOpacity onPress = {() => this.setNumbers('1')} ><View style = {styles.View12} ><Text style = {styles.Texts} >1</Text></View></TouchableOpacity>
           <TouchableOpacity onPress = {() => this.setNumbers('+')} ><View style = {styles.View14} ><Text style = {styles.Texts} >+</Text></View></TouchableOpacity>
         </View>
         <View style = {styles.View1} >
           <TouchableOpacity onPress = {() => this.setNumbers('0')} ><View style = {styles.Zero} ><Text style = {styles.Texts} >0</Text></View></TouchableOpacity>
           <TouchableOpacity><View style = {styles.View12} ><Text style = {styles.Texts} >,</Text></View></TouchableOpacity>
           <TouchableOpacity><View style = {styles.View14} ><Text style = {styles.Texts} >=</Text></View></TouchableOpacity>
         </View>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  View:{
    backgroundColor:'black',
    flex:1
  },
  View1:{
    flexDirection:'row'
  },
  View11:{
   width: width/4,
   height: width/4,
   justifyContent:'center',
   alignItems:'center',
   borderWidth:8,
   borderRadius:50,
   backgroundColor:'#9c9c9c'
  },
  View12:{
    width: width/4,
    height: width/4,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:8,
    borderRadius:50,
    backgroundColor:'#5f5f5f',
   },
   View14:{
    width: width/4,
    height: width/4,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:8,
    borderRadius:50,
    backgroundColor:'orange'
   },
   Zero:{
     width:width/2,
     backgroundColor:'#696969',
     borderRadius:50,
     justifyContent:'center',
     alignItems:'center',
     borderWidth:10,
     flex:1
   },
   Texts:{
     fontSize:25,
     color:'white'
   },
   resoultscreen:{
     flex:1,
     justifyContent:'flex-end',
     alignItems:'flex-end'
   },
   resoultText:{
     fontSize:40,
     color:'white'
   },
   Texts1:{
    fontSize:25
   }
})