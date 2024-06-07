import { extendTheme, withDefaultColorScheme, withDefaultVariant } from "@chakra-ui/react"
import {mode} from "@chakra-ui/theme-tools";
const replaceExisting = {            
    variants:{
    filled:{
        field:{
            _focus:{
                borderColor : "brand.300"
            }
        }
    }
},
sizes:{
    md:{
        field:{
            borderRadius:"none"
        }
    }
}
};
const theme = extendTheme({
    colors:{
        brand:{
            50: "#f5fee5",
            100:"#e1fbb2",
            200:"#cdf781",
            300:"#b8ee56",
            400:"#a2e032",
            500:"#8ac919",
            600:"#71ab09"
        }
    },
    components:{
        Input:{...replaceExisting},
        Select:{...replaceExisting},
        Textarea:{
            variants:{
                filled:{
                        _focus:{
                            borderColor:"brand.300"
                        }
                }
            },
            sizes:{
                md:{
                        borderRadius:"none"
                }
            }
       },
       Checkbox:{
        baseStyle:{
            control:{
                _focus:{
                    ring: 2,
                    ringColor: "brand.300"
                }
                
            }
        }
       },
       Button:{
        variants:{
            primary:(props)=>({
                rounded:"none",
                _focus:{
                    ring:"2",
                    ringColor:"brand.300"
                },
                backgroundColor:mode("brand.600","brand.300")(props),
                color:mode("brand.300","brand.600")(props),
                _hover:{
                    backgroundColor:mode("brand.400","brand.600")(props),
                    color:mode("brand.600","brand.400")(props),    
                }

            })
        }
       }

    }

},
    withDefaultColorScheme({
        colorScheme: "brand"
    }),
    withDefaultVariant({
        variant:"filled",
        components:["Input","Textarea","Select"]
    })
)

export default theme;