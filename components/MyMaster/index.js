import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { 
    MyMasterView, 
    Masters, 
    Master, 
    MasterImage, 
    MasterInformation,
    MasterText,
    MasterName,
    MasterProfession,
    MasterStars,
    MasterStarImage,
    MasterPrice,
    MasterLike,
    MasterLikeImage
} from './styles'
import fav from './../../assets/img/fav.png'

const MyMaster = () => {
    return (
        <MyMasterView>
            <ScrollView>
                <Text style={{textAlign: "center"}}> My master</Text>
                <Masters>
                    <CreateMaster name="Shohruzbek Ochilov" job="Electrician" stars={4}/>
                    <CreateMaster name="Aliqulov Azamat" job="Plumber" stars={4}/>
                    <CreateMaster name="Boltayev Abror" job="Cleaner" stars={4}/>
                    <CreateMaster name="Omonov Asilbek" job="Supplier" stars={4}/>
                    <CreateMaster name="John Smith" job="Electrician" stars={4}/>
                    <CreateMaster name="John Smith" job="Electrician" stars={4}/>
                    <CreateMaster name="John Smith" job="Electrician" stars={4}/>
                    <CreateMaster name="John Smith" job="Electrician" stars={4}/>
                    <CreateMaster name="John Smith" job="Electrician" stars={4}/>
                </Masters>
            </ScrollView>
        </MyMasterView>
    )
}

const CreateMaster = ({name, job, stars}) => {
    let starsObj = [];
    for (let i = 0; i < stars; i++) {
        const element = {};
        element.source = require('./../../assets/img/star-gold.png')
        starsObj.push(element);
    }
    for (let i = 0; i < 5-stars; i++) {
        const element = {};
        element.source = require('./../../assets/img/star.png')
        starsObj.push(element);
    }
    return (
        <Master>
            <MasterImage 
                source={require('./../../assets/img/master-img.png')}
            />
            <MasterInformation>
                <MasterText>
                    <MasterName>{name}</MasterName>
                    <MasterProfession>{job}</MasterProfession>
                    <MasterStars>
                        {
                            starsObj.map((elem,index) => {
                                return (
                                    <MasterStarImage
                                        key={index}
                                        source={elem.source}
                                    />
                                )
                            })
                        }
                    </MasterStars>
                </MasterText>
                <MasterPrice>
                    <MasterLike>
                        <MasterLikeImage
                            onPress={()=>{master}}
                        >
                            <Image source={fav} />
                        </MasterLikeImage>
                    </MasterLike>
                    <Text>Electrician</Text>
                </MasterPrice>
            </MasterInformation>
        </Master>
    )
}

export default MyMaster;